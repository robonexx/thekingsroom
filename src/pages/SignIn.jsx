import security from "../assets/undraw_exams_re_4ios.svg";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
/* import OAuth from "../components/OAuth"; */
import { useState } from "react";
import { toast } from "react-hot-toast";
import Loader from "../components/Loader";
import IMG from "../assets/images/tkr-bg.png";

const SignIn = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const submitDetails = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const auth = getAuth();
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredentials?.user) {
        navigate("/");
        toast.success("Welcome Back, have a great day");
      }
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
    <div className='min-h-screen'>
      <h1 className='mb-10 mt-40 bg-gradient-to-r from-[#C0C0C0] to-[#888] bg-clip-text text-center font-raleway text-5xl font-extrabold text-transparent'>
        Login to your account
      </h1>
      <section className='mx-auto max-w-7xl'>
        <div className='h-full'>
          {/* <!-- Left column container with background--> */}
          <div className='g-6 flex h-full flex-wrap items-center justify-center lg:justify-between'>
            <div className='shrink-1 mb-12 grow-0 basis-auto rounded-md bg-transparent md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12'>
              <img src={IMG} className='lg:w-full w-64 ' alt='Sample image' />
            </div>

            {/* <!-- Right column container --> */}
            <div className='mx-auto mb-12 mt-8 md:mb-0 md:w-8/12 lg:mt-0 lg:w-5/12 xl:w-5/12'>
              <form onSubmit={submitDetails} type='submit'>
                {/* <!-- Email input --> */}
                <div className='form__group field relative mx-auto w-full max-w-[90%] py-4'>
                  <input
                    type='email'
                    id='email'
                    onChange={onChangeHandler}
                    value={email}
                    className='form__field bg-[#272727]'
                    placeholder='Name'
                    required
                  />
                  <label htmlFor='name' className='form__label'>
                    Email address
                  </label>
                </div>

                {/* <!-- Password input --> */}
                <div className='form__group field relative mx-auto w-full max-w-[90%]  py-4'>
                  <input
                    type='password'
                    id='password'
                    onChange={onChangeHandler}
                    value={password}
                    className='form__field'
                    placeholder='Name'
                    minLength={6}
                    required
                  />
                  <label htmlFor='name' className='form__label'>
                    Password
                  </label>
                </div>

                <div className='mx-auto flex w-full max-w-[90%] items-center justify-between'>
                  <p className='text- pt-3 text-gray-500'>
                    Dont have an account?{" "}
                    <span
                      onClick={() => navigate("/sign-up")}
                      className='cursor-pointer text-white'
                    >
                      Register
                    </span>{" "}
                  </p>
                  <p
                    onClick={() => navigate("/forgot-password")}
                    className='inline cursor-pointer bg-gradient-to-r from-gray-300 to-gray-300 bg-clip-text pt-3 text-transparent hover:shadow-xl'
                  >
                    Forgot password?
                  </p>
                </div>

                {/* Login button */}
                <div className='mx-auto  my-8 w-full max-w-[70%] '>
                  <button
                    type='submit'
                    className='w-full cursor-pointer rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 py-3 font-semibold text-white transition duration-200 ease-in-out active:scale-90'
                  >
                    Login
                  </button>
                </div>

                {/*    <div className='mx-auto my-4 mt-5 flex w-full max-w-[90%] items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-500 after:mt-0.5 after:flex-1 after:border-t after:border-gray-500'>
                  <p className='mx-4 mb-0 text-center font-semibold dark:text-white'>
                    OR
                  </p>
                </div> */}
              </form>
              {/* Google authentication */}
              {/*   <OAuth /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
