/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { Balancer } from "react-wrap-balancer";
import Dropdown from "../components/Dropdown";

const EditArticle = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const { articleId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState(null);
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    category: "",
    imageUrl: "",
  });
  const [category, setCategory] = useState("");

  // To get category
  const selectCategory = (option) => {
    setCategory(option);
    setBlogData({
      ...blogData,
      category: option,
    });
  };

  // Fetch blog data to edit
  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      try {
        const blogRef = doc(db, "blogs", articleId);
        const docSnap = await getDoc(blogRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setBlog(data);
          setBlogData({ ...data.blogData });
          setCategory(data.blogData.category || "");
        } else {
          toast.error("Blog post not found.");
          navigate("/");
        }
      } catch (error) {
        console.log("Error fetching blog:", error);
        toast.error("An error occurred while fetching the blog.");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, [articleId, navigate]);

  // Check if the current user is authorized to edit the blog
  useEffect(() => {
    if (blog && auth.currentUser) {
      if (blog.author.id !== auth.currentUser.uid) {
        toast.error("You cannot edit this blog!");
        navigate("/");
      }
    }
  }, [blog, auth.currentUser, navigate]);

  // Handle input changes
  const onChangeHandler = (e) => {
    setBlogData({
      ...blogData,
      [e.target.id]: e.target.value,
    });
  };

  // Update blog in Firestore
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { title, content, category } = blogData;

    if (title && content && category) {
      try {
        const blogRef = doc(db, "blogs", articleId);
        await updateDoc(blogRef, {
          blogData: {
            ...blogData,
          },
          updatedAt: serverTimestamp(),
        });
        toast.success("Blog post updated successfully!");
        navigate(`/myBlogs/${auth.currentUser.uid}`);
      } catch (error) {
        console.error("Error updating blog:", error);
        toast.error("Unable to update the blog post.");
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Please fill in all fields.");
      setLoading(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='h-full bg-gray-200 pb-20'>
      <h1 className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text py-4 pt-14 text-center font-raleway text-4xl font-extrabold text-transparent md:text-5xl'>
        <Balancer>Edit Blog Post</Balancer>
      </h1>
      <form
        onSubmit={onSubmitHandler}
        className='mx-auto mt-[60px] w-[90%] max-w-3xl md:w-full lg:max-w-4xl'
      >
        {/* Categories */}
        <Dropdown
          toggleMenu={toggleMenu}
          category={category}
          selectCategory={selectCategory}
          isOpen={isOpen}
        />
        <input
          value={blogData.title}
          onChange={onChangeHandler}
          type='text'
          className='mt-5 h-12 w-full rounded-md border-zinc-800 pl-3 text-zinc-700'
          id='title'
          placeholder='Enter title here...'
        />
        {/* Content Textarea */}
        <textarea
          value={blogData.content}
          onChange={onChangeHandler}
          id='content'
          className='mt-5 h-48 w-full rounded-md border-zinc-800 pl-3 text-black'
          placeholder='Enter blog content'
        ></textarea>
        {/* Image URL Input (Optional) */}
        {/* Uncomment this section if you want to allow updating the image URL */}
        {/* <input
          value={blogData.imageUrl}
          onChange={onChangeHandler}
          type='text'
          className='mt-5 h-12 w-full rounded-md border-zinc-800 pl-3 text-zinc-700'
          id='imageUrl'
          placeholder='Enter image URL'
        /> */}
        <div className='mx-auto my-8 mt-20 w-full max-w-[50%] md:mt-0 lg:max-w-[40%] '>
          <button
            type='submit'
            className='mt-8 w-full cursor-pointer rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 py-3 font-semibold text-white transition duration-200 ease-in-out active:scale-90'
          >
            Update Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditArticle;
