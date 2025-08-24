import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import FadeInMotion from "@/sections/FadeinMotion";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { setCredentials } from "@/slices/authSlice";
import { useUpdateUserMutation } from "@/slices/usersApiSlice";

export default function Settings() {
 
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [name, setName] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const {userInfo} = useSelector((state) => state.auth);
    const [updateProfile] = useUpdateUserMutation()
        useEffect(() => {
         setName(userInfo.name);
         setEmail(userInfo.email)
        }, [userInfo.setName, userInfo.setEmail])
  
    const submitHandler = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword){
        toast.error('Passwords do not match')
      }else{
        try {
          const res = await updateProfile({
            _id: userInfo._id,
            name,
            email,
            password
          }).unwrap();
                dispatch(setCredentials({...res}))
                navigate('/dashboard')
                toast.success('Profile Update Succesful')
        } catch (err) {
          toast.error(err?.data?.message || err.error);
        }
        // console.log('Submit')
      }
    }
  
      
  return (
    <FadeInMotion>
    <section className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <form className="grid gap-6" onSubmit={submitHandler}>
          <h2 className="text-2xl font-bold text-[#222ad6] text-center mb-4 font-heading">
            Update Your Profile
          </h2>

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#222ad6] focus:border-[#222ad6]"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#222ad6] focus:border-[#222ad6]"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              New Password
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#222ad6] focus:border-[#222ad6] pr-10"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 cursor-pointer text-gray-500"
            >
              {showPassword ? (
                <AiOutlineEye size={20} />
              ) : (
                <AiOutlineEyeInvisible size={20} />
              )}
            </span>
          </div>

           {/* Confirm Password */}
                       <div className="relative">
                         <label
                           htmlFor="password"
                           className="block mb-2 text-sm font-medium text-gray-900"
                         >
                           Password
                         </label>
                         <input
                           id="confirmPassword"
                           name="password"
                           type={showPassword ? "text" : "password"}
                           value={confirmPassword}
                           onChange={(e) => setConfirmPassword(e.target.value)}
                           
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

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg px-6 py-3 text-white bg-[#222ad6] hover:bg-blue-700 transition"
          >
            Update Profile
          </button>
        </form>
      </div>
    </section>
    </FadeInMotion>
  );
}
