import { useState } from "react";
import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { db } from "../config/firebase";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { v4 as uuidv4 } from "uuid";
import Dropdown from "../components/Dropdown";

const WriteBlog = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isBlog, setIsBlog] = useState(true); // Toggle between blog and SoundCloud post

  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    category: "",
    image: null,
  });
  const [category, setCategory] = useState("");
  const [soundCloudData, setSoundCloudData] = useState({
    title: "",
    trackId: "",
  });

  // To get category
  const selectCategory = (option) => {
    setCategory(option);
    setBlogData({
      ...blogData,
      category: option,
    });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onBlogChangeHandler = (e) => {
    if (e.target.files) {
      setBlogData({ ...blogData, image: e.target.files[0] });
    } else {
      setBlogData({ ...blogData, [e.target.id]: e.target.value });
    }
  };

  const onSoundCloudChangeHandler = (e) => {
    setSoundCloudData({ ...soundCloudData, [e.target.id]: e.target.value });
  };

  const onBlogSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { title, content, category, image } = blogData;

    if (title && content && category) {
      try {
        let imageUrl = null;

        if (image) {
          const storage = getStorage();
          const filename = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
          const storageRef = ref(storage, "images/" + filename);

          const uploadTask = uploadBytesResumable(storageRef, image);

          await new Promise((resolve, reject) => {
            uploadTask.on(
              "state_changed",
              () => {},
              (error) => {
                console.error(error);
                toast.error("Unable to upload image");
                reject(error);
              },
              () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  imageUrl = downloadURL;
                  resolve();
                });
              }
            );
          });
        }

        await addDoc(collection(db, "blogs"), {
          blogData: {
            title,
            content,
            category,
            imageUrl: imageUrl || null,
          },
          timestamp: serverTimestamp(),
          author: {
            name: auth.currentUser.displayName,
            id: auth.currentUser.uid,
          },
        });

        navigate(`/myBlogs/${auth.currentUser.uid}`);
        toast.success("Blog post published");
      } catch (error) {
        console.error(error);
        toast.error("Unable to publish blog post");
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Please fill in all blog fields");
      setLoading(false);
    }
  };

  const onSoundCloudSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { title, trackId } = soundCloudData;

    if (title && trackId) {
      try {
        await addDoc(collection(db, "soundcloudPosts"), {
          ...soundCloudData,
          timestamp: serverTimestamp(),
          author: {
            name: auth.currentUser.displayName,
            id: auth.currentUser.uid,
          },
        });
        navigate("/");
        toast.success("SoundCloud post published");
      } catch (error) {
        console.error(error);
        toast.error("Unable to publish SoundCloud post");
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Please fill in all SoundCloud fields");
      setLoading(false);
    }
  };

  return (
    <div className='h-full bg-gray-200 pb-20'>
      {loading && <Loader />}
      <h1 className='mt-20 bg-gradient-to-r from-black to-[#888] bg-clip-text py-4 pt-14 text-center font-raleway text-4xl font-extrabold text-transparent md:text-5xl'>
        {isBlog ? "Create a new Blog Post" : "Add a new SoundCloud Post"}
      </h1>

      <div className='mx-auto mt-[60px] w-[90%] max-w-3xl md:w-full lg:max-w-4xl'>
        {/* Toggle between blog and SoundCloud post */}
        <div className='flex justify-center space-x-4'>
          <button
            onClick={() => setIsBlog(true)}
            className={`${
              isBlog ? "bg-gray-700" : "bg-gray-400"
            } rounded px-4 py-2 text-white`}
          >
            Write Blog
          </button>
          <button
            onClick={() => setIsBlog(false)}
            className={`${
              !isBlog ? "bg-gray-700" : "bg-gray-400"
            } rounded px-4 py-2 text-white`}
          >
            Add SoundCloud
          </button>
        </div>

        {/* Blog Form */}
        {isBlog && (
          <form onSubmit={onBlogSubmitHandler} className='mt-6'>
            {/* Categories */}
            <Dropdown
              toggleMenu={toggleMenu}
              category={category}
              selectCategory={selectCategory}
              isOpen={isOpen}
            />

            <input
              onChange={onBlogChangeHandler}
              type='text'
              className='mt-5 h-12 w-full rounded-md border-zinc-800 pl-3 text-black font-normal'
              value={blogData.title}
              id='title'
              placeholder='Enter title here...'
            />

            <textarea
              onChange={onBlogChangeHandler}
              id='content'
              className='mt-5 h-48 w-full rounded-md border-zinc-800 pl-3 text-black'
              placeholder='Enter blog content'
              value={blogData.content}
            ></textarea>

            {/* Image Upload */}
            <input
              onChange={onBlogChangeHandler}
              type='file'
              id='image'
              accept='image/*'
              className='mt-5 w-full rounded-md border-zinc-800 pl-3 text-black'
            />

            <button
              type='submit'
              className='mt-6 w-full bg-gradient-to-r from-black to-[#888] py-3 text-white'
            >
              Publish Blog Post
            </button>
          </form>
        )}

        {/* SoundCloud Form */}
        {!isBlog && (
          <form onSubmit={onSoundCloudSubmitHandler} className='mt-6'>
            <input
              onChange={onSoundCloudChangeHandler}
              type='text'
              id='title'
              className='mt-5 h-12 w-full rounded-md border-zinc-800 pl-3'
              placeholder='Enter track title'
            />
            <input
              onChange={onSoundCloudChangeHandler}
              type='text'
              id='trackId'
              className='mt-5 h-12 w-full rounded-md border-zinc-800 pl-3'
              placeholder='Enter SoundCloud track ID'
            />
            <button
              type='submit'
              className='mt-6 w-full bg-gradient-to-r from-black to-[#888] py-3 text-white'
            >
              Publish SoundCloud Post
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default WriteBlog;
