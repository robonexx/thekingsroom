import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { db } from "../config/firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import Loader from "../components/Loader";
import { v4 as uuidv4 } from "uuid";
import { FcAddImage } from "react-icons/fc";
/* import OAuth from "../components/OAuth"; */
import IMG from '../assets/images/tkr-bg.png'

const defaultAvatarUrl = "../assets/images/default-avatar.png"; // Default avatar

const Register = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });
  const [imagePreview, setImagePreview] = useState(null); // For image preview
  const [progressState, setProgressState] = useState();
  const { name, email, password, image } = formData;
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFormData({
        ...formData,
        image: file,
      });
      // Preview the image
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };

  // Store image in Firebase Storage or return default if no image
  const storeImage = async () => {
    if (!image) {
      return defaultAvatarUrl; // Return default avatar if no image uploaded
    }

    return new Promise((resolve, reject) => {
      const file = image;
      const fileName = `${auth.currentUser.uid}-${file.name}-${uuidv4()}`;
      const storage = getStorage();
      const storageRef = ref(storage, `Avatar/${fileName}`);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgressState(progress);
        },
        (error) => {
          console.log(error);
          toast.error("Unable to upload file");
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => resolve(downloadURL))
            .catch((error) => reject(error));
        }
      );
    });
  };

  // Register user and save to Firestore with admin=false by default
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;

      // Store image or get default avatar URL
      const avatarUrl = await storeImage();

      // Add display name and avatar URL to the user's profile
      await updateProfile(user, {
        displayName: name,
        photoURL: avatarUrl, // This is the correct way to set avatar in Firebase Auth
      });

      // Save user to Firestore with admin=false
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: user.email,
        photoURL: avatarUrl, // Save the avatar URL to Firestore as well
        admin: false, // Add admin=false for regular users
        timestamp: serverTimestamp(),
      });

      navigate("/");
      toast.success("User registered successfully, Welcome!!");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1 className='mb-10 mt-36 text-white text-center font-raleway text-5xl font-bold text-transparent'>
       Create an account
      </h1>
      <section className='mx-auto max-w-7xl'>
        <div className='h-full'>
          <div className='g-6 flex h-full flex-wrap items-center justify-center lg:justify-between'>
            <div className='shrink-1 mb-12 grow-0 basis-auto rounded-md bg-[#003f5c] md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12'>
              <img
                src={IMG}
                className='w-full '
                alt='Sample image'
              />
            </div>

            <div className='mx-auto mb-12 mt-8 md:mb-0 md:w-8/12 lg:mt-0 lg:w-5/12 xl:w-5/12'>
              <form onSubmit={submitHandler} type='submit'>
                <div className='form__group field relative mx-auto w-full max-w-[90%] py-4'>
                  <input
                    type='text'
                    id='name'
                    onChange={onChangeHandler}
                    value={name}
                    className='form__field bg-[#272727]'
                    placeholder='Name'
                    minLength={4}
                    required
                  />
                  <label htmlFor='name' className='form__label'>
                    Full Name
                  </label>
                </div>

                <div className='form__group field relative mx-auto w-full max-w-[90%] py-4'>
                  <input
                    type='email'
                    id='email'
                    onChange={onChangeHandler}
                    value={email}
                    className='form__field bg-[#272727]'
                    placeholder='Email address'
                    required
                  />
                  <label htmlFor='email' className='form__label'>
                    Email address
                  </label>
                </div>

                <div className='form__group field relative mx-auto w-full max-w-[90%] py-4'>
                  <input
                    type='password'
                    id='password'
                    onChange={onChangeHandler}
                    value={password}
                    className='form__field'
                    placeholder='Password'
                    minLength={6}
                    required
                  />
                  <label htmlFor='password' className='form__label'>
                    Password
                  </label>
                </div>

                <div className='mx-auto w-full max-w-[90%] py-4'>
                  <input
                    onChange={onChangeHandler}
                    type='file'
                    id='file'
                    style={{ display: "none" }}
                    maxLength={1}
                    accept='.jpg,.png,.jpeg'
                  />
                  <label
                    htmlFor='file'
                    className='flex cursor-pointer items-center pl-3 text-left text-blue-50'
                  >
                    Add an avatar <FcAddImage size={24} className='ml-3 ' />
                  </label>

                  {/* Image preview */}
                  <h3>Image preview:</h3>
                  {imagePreview && (
                    <div className='mt-4'>
                      <img
                        src={imagePreview}
                        alt='Avatar Preview'
                        className='h-20 w-20 rounded-full object-cover'
                      />
                    </div>
                  )}
                </div>

                <div className='mx-auto flex w-full max-w-[90%] items-center justify-between'>
                  <p
                    onClick={() => navigate("/sign-in")}
                    className='pt-3 text-gray-400'
                  >
                    You have an account?{" "}
                    <span className='cursor-pointer bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent'>
                      Login now
                    </span>{" "}
                  </p>
                  <p
                    onClick={() => navigate("/forgot-password")}
                    className='inline cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text pt-3 text-transparent hover:shadow-xl'
                  >
                    Forgot password?
                  </p>
                </div>

                <div className='mx-auto  my-8 w-full max-w-[70%] '>
                  <button
                    type='submit'
                    className='w-full cursor-pointer rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 py-3 font-semibold text-white transition duration-200 ease-in-out active:scale-90'
                  >
                    Register
                  </button>
                </div>

                {/*  <div className='mx-auto my-4 mt-5 flex w-full max-w-[90%] items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-500 after:mt-0.5 after:flex-1 after:border-t after:border-gray-500'>
                  <p className='mx-4 mb-0 text-center font-semibold dark:text-white'>
                    OR
                  </p>
                </div> */}
              </form>
              {/*    <OAuth /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
