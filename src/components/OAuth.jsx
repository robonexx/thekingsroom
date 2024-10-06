import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { db } from "../config/firebase";

const OAuth = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const userCredentials = await signInWithPopup(auth, provider);
      const user = userCredentials.user;
      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        timestamp: serverTimestamp(),
      });
      if (user) {
        toast.success("Successfully signed in!!");
        console.log(user);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to sign in with Google. Please try again.");
    }
  };
  return (
    <div className='mx-auto  my-8 w-full max-w-[70%] '>
      <button
        onClick={signInWithGoogle}
        className='google__btn__shadow md:text-2xl text-xl flex w-full cursor-pointer items-center justify-center rounded-md bg-gradient-to-r from-zinc-800 to-zinc-900 py-3 font-semibold text-white transition duration-200 ease-in-out active:scale-95'
      >
        <FcGoogle className='mr-2 rounded-full' />
        Sign in with google
      </button>
    </div>
  );
};

export default OAuth;
