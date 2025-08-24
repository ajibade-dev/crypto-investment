import React, { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import registerMotion from '../assets/register.json'
import FadeInMotion from "../sections/FadeinMotion";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { setCredentials } from "@/slices/authSlice";
import { useRegisterMutation } from "@/slices/usersApiSlice";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


export default function Register() {
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword){
      toast.error('Passwords do not match')
    }else{
      try {
        const res = await register({name, email, password}).unwrap();
              dispatch(setCredentials({...res}))
              navigate('/dashboard')
              toast.success('Registeration Successful')
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  }

  const [register, { isLoading }] = useRegisterMutation();
    const {userInfo} = useSelector((state) => state.auth);

      useEffect(() => {
        if (userInfo) {
           navigate('/dashboard')
        }
      }, [navigate, userInfo])

  return (
    <FadeInMotion>
    <section className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="grid max-w-6xl w-full grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Lottie Animation (Hidden on mobile) */}
        <div className="hidden md:flex items-center justify-center bg-gray-100">
                 <Player
              autoplay
              loop
              src={registerMotion}
              className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]"
            />
          
        </div>

        {/* SignUp Form */}
        <div className="flex items-center justify-center p-8 md:p-12">
          <form className="w-full max-w-md grid gap-6" onSubmit={submitHandler}>
            <h2 className="text-2xl font-bold text-[#222ad6] text-center mb-4 font-heading">
              Let's get you set up!
            </h2>

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Enter Your Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your preferred name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#222ad6] focus:border-[#222ad6]"
              />
            </div>

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
             {/* <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                 value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter Password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#222ad6] focus:border-[#222ad6]"
              />
            </div> */}

             {/* Confirm Password */}
              {/* Password */}
             <div className="relative">
               <label
                 htmlFor="password"
                 className="block mb-2 text-sm font-medium text-gray-900"
               >
                 Password <span className="text-red-500">*</span>
               </label>
               <input
                 id="confirmPassword"
                 name="password"
                 type={showPassword ? "text" : "password"}
                 value={confirmPassword}
                 onChange={(e) => setConfirmPassword(e.target.value)}
                 required
                 placeholder="Confirm your Password"
                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#222ad6] focus:border-[#222ad6] pr-10"
               />
               <span
                 onClick={() => setShowPassword(!showPassword)}
                 className="absolute right-3 top-10 cursor-pointer text-gray-500"
               >
                 {showPassword ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
               </span>
             </div>
             {/* <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                id="confirmPassword"
                name="password"
                type="password"
                 value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm your Password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#222ad6] focus:border-[#222ad6]"
              />
            </div> */}

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg px-6 py-3 text-white bg-[#222ad6] hover:bg-blue-700 transition"
            >
              Register
            </button>

            {/* Extra Links */}
            <p className="text-sm text-center text-gray-600">
              Already have an account?{" "}
              <Link to='/login'>
              <a  className="text-[#222ad6] hover:underline">
                Login
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
