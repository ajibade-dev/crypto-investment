import React from "react";
import { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import loginmotion from '../assets/login.json'
import FadeInMotion from "../sections/FadeinMotion";
import {useDispatch, useSelector} from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import {toast} from 'react-toastify'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import Loader from "@/sections/Loader";
export default function Login() {
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [password, setPassword] = useState('')

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [login, { isLoading }] = useLoginMutation();

  const {userInfo} = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
       navigate('/dashboard')
    }
  }, [navigate, userInfo])

  // const submitHandler = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const res = await login({email, password}).unwrap();
  //     dispatch(setCredentials({...res}))
  //     navigate('/dashboard')
  //     toast.success('Login Successful')
  //   } catch (err) {
  //     toast.error(err?.data?.message || err.error);
  //   }
  // }

  const submitHandler = async (e) => {
  e.preventDefault();
  try {
    const res = await login({ email, password }).unwrap();

    // ✅ Save token into Redux
    dispatch(setCredentials({ ...res }));

    // ✅ Save token into localStorage
    if (res.token) {
      localStorage.setItem("token", res.token);
    }

    navigate("/dashboard");
    toast.success("Login Successful");
  } catch (err) {
    toast.error(err?.data?.message || err.error);
  }
};



  return (
    <FadeInMotion>
    <section className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="grid max-w-6xl w-full grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Lottie Animation (Hidden on mobile) */}
        <div className="hidden md:flex items-center justify-center bg-gray-100">
                 <Player
              autoplay
              loop
              src={loginmotion}
              className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]"
            />
          
        </div>

        {/* Login Form */}
        <div className="flex items-center justify-center p-8 md:p-12">
          <form className="w-full max-w-md grid gap-6" onSubmit={submitHandler}>
            <h2 className="text-2xl font-bold text-[#222ad6] text-center mb-4 font-heading">
              Welcome Back
            </h2>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#222ad6] focus:border-[#222ad6]"
              />
            </div>

            {/* Password */}
            {/* Password */}
<div className="relative">
  <label
    htmlFor="password"
    className="block mb-2 text-sm font-medium text-gray-900"
  >
    Password <span className="text-red-500">*</span>
  </label>
  <input
    id="password"
    name="password"
    type={showPassword ? "text" : "password"}
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
    placeholder="Enter Password"
    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#222ad6] focus:border-[#222ad6] pr-10"
  />
  <span
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-10 cursor-pointer text-gray-500"
  >
    {showPassword ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
  </span>
</div>


            {/* Submit */}
            {/* {isLoading && <Loader />} */}
            <button
              type="submit"
              className="w-full rounded-lg px-6 py-3 text-white bg-[#222ad6] hover:bg-blue-700 transition"
            >
              Login
            </button>

            {/* Extra Links */}
            <p className="text-sm text-center text-gray-600">
              Don’t have an account?{" "}
              <Link to='/register'>
              <a href="/register" className="text-[#222ad6] hover:underline">
                Register
              </a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
    </FadeInMotion>
  );
}
