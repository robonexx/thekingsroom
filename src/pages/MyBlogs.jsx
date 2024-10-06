import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import Card from "../components/Card";
import CardSkeleton from "../components/skeleton/CardSkeleton";

const MyBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [userBlog, setUserBlog] = useState([]);
  const [user, setUser] = useState(null);

  // Authentication listener
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        // User is not logged in
        setLoading(false);
        toast.error("You need to be logged in to view your blogs.");
      }
    });
    return () => unsubscribe();
  }, []);

  // Fetch user's blogs
  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) return;

      try {
        const blogRef = collection(db, "blogs");
        const q = query(
          blogRef,
          where("author.id", "==", user.uid),
          orderBy("timestamp", "desc")
        );
        const docSnap = await getDocs(q);
        const blogs = docSnap.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setUserBlog(blogs);
      } catch (error) {
        console.log("Error fetching blogs:", error);
        toast.error("Error loading your articles.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  const delHandler = async (id) => {
    const showConfirmation = () => {
      return Swal.fire({
        title: "Confirm Delete?",
        text: "Are you sure you want to delete this post?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it",
        cancelButtonText: "Cancel",
      });
    };

    const result = await showConfirmation();
    if (user && result.isConfirmed) {
      try {
        const ref = doc(db, "blogs", id);
        await deleteDoc(ref);
        setUserBlog(userBlog.filter((blog) => blog.id !== id));
        toast.success("Post deleted");
      } catch (error) {
        console.log("Error deleting post:", error);
        toast.error("Post not deleted");
      }
    }
  };

  return (
    <div className='mx-auto max-w-7xl px-20'>
      <h1 className='pt-40 pb-12 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text py-5 text-center text-5xl font-extrabold text-transparent'>
        My Writings on the wall
      </h1>

      <div className='mx-auto mt-12 grid w-[80%] grid-cols-1 gap-5 md:w-[95%] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))
        ) : userBlog.length > 0 ? (
          userBlog.map((blog, index) => (
            <Card
              key={index}
              id={blog.id}
              blog={blog.data}
              delHandler={delHandler}
            />
          ))
        ) : (
          <p className='mt-24 text-center text-4xl font-extrabold'>
            You have not posted any articles yet!
          </p>
        )}
      </div>
    </div>
  );
};

export default MyBlogs;
