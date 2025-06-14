"use client";

// import BackgroundAuth from "@/components/AuthPage/Background";
// import TextField from "@/components/Form/textField";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { IoMail, IoKey, IoClose } from "react-icons/io5";
import Link from "next/link";
// import { login, reset } from "@/store/slices/authSlice";
// import { useDispatch, useSelector } from "react-redux";

import NavBar from "@/components/Navbar/navbarDesktop";
import Footer from "@/components/Footer";

// const CustomButton = ({ onClick, className, children }) => {
//   return (
//     <button
//       onClick={onClick}
//       className={`${className} w-full py-2 rounded-lg font-medium hover:opacity-90`}
//     >
//       {children}
//     </button>
//   );
// };

const LoginPage = () => {
  const router = useRouter();
//   const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
//   const { isLoading, isError, message } = useSelector((state) => state.auth);

//   useEffect(() => {
//     return () => {
//       dispatch(reset());
//     };
//   }, [dispatch]);

//   const handleLogin = async () => {
//     if (!email || !password) {
//       setError("Please fill all fields");
//       return;
//     }
//     setError("");
//     dispatch(login({ email, password }))
//       .unwrap()
//       .then(() => router.push("/"))
//       .catch(() => {});
//   };

  return (
    // <BackgroundAuth>
    <div className="bg-magnolia">
      {/* Close Button */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-6 right-6 text-black hover:text-gray-400 z-10"
      >
        <IoClose className="h-6 w-6" />
      </button>
      <NavBar/>

      {/* Content */}
      <div className="relative bg-magnolia flex justify-center items-center min-h-screen text-black">
        <div className="transparent rounded-xl p-8 w-full max-w-lg relative z-20">
          <h1 className="text-center text-h3 font-PulsarOriginal pb-2">
            LOG IN
          </h1>
          <p className="text-center text-lg mb-8 font-PulsarOriginal">
            Log in with your data that you entered during your registration
          </p>

          <div className="space-y-4">
            {/* <TextField
              label="E-MAIL"
              icon={<IoMail />}
              font="font-PulsarOriginal"
              value={email}
              placeholder="johndoe@gmail.com"
              labelColor="white"
              disableResize={true}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label="PASSWORD"
              icon={<IoKey />}
              font="font-PulsarOriginal"
              placeholder="at least 8 characters"
              isPassword={true}
              type="password"
              value={password}
              labelColor="white"
              disableResize={true}
              onChange={(e) => setPassword(e.target.value)}
            /> */}

            {error && (
              <p className="text-red-500 text-sm text-center mt-2">{error}</p>
            )}

            {/* <CustomButton
              onClick={handleLogin}
              className="bg-[#f275a1] text-black"
            >
              Log In
            </CustomButton> */}

            {/* <CustomButton className="bg-white border text-black flex items-center justify-center gap-2 mt-4">
              <FcGoogle /> Log in with Google
            </CustomButton> */}

            <p className="text-sm text-center mt-4">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-munsellRed hover:underline"
              >
                Sign Up
              </Link>
            </p>
            <p className="text-sm text-center mt-4">
              Forgot Password?{" "}
              <Link
                href="/auth/reset-password"
                className="text-munsellRed hover:underline"
              >
                Reset Password
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    // </BackgroundAuth>
  );
};

export default LoginPage;