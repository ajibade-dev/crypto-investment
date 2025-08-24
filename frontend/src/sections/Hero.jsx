import React from 'react'
import { Player } from "@lottiefiles/react-lottie-player";
import finance from '../assets/finance.json'
import FadeInMotion from './FadeinMotion';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <FadeInMotion>
     <header className="bg-white relative dark:bg-gray-900 max-w-[1500px]" id='home'>
      <div className="container py-6 px-4 lg:px-0 mx-auto">
        <div className="items-center lg:flex">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <div className="">
              <h1 className="text-4xl text-center lg:text-start font-semibold text-black dark:text-white lg:text-6xl font-heading">
                Trading for Anyone. <span className='text-[#222ad6]'>Anywhere.</span> Anytime
              </h1>

              <p className="mt-5 lg:mt-8 text-gray-600 dark:text-gray-400 lg:max-w-lg font-sans text-sm text-center lg:text-start">
                We bring together cutting-edge insights, real-time data, and beginner-friendly tools to help you invest smarter — in both crypto and stocks. Start your journey today with the platform built for growth
              </p>

            <Link to='/register'>
              <div className='text-center lg:text-start'><button className=" px-5 py-3 mt-5 lg:mt-8 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#222ad6] rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500 font-sans">
                Get Started For Free
              </button></div>
              </Link>
            </div>
          </div>

          {/* Right Animation */}
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
             <Player
    autoplay
    loop
    src={finance}
    className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]"
  />
          </div>
        </div>
      </div>
    </header>
    </FadeInMotion>
  )
}

export default Hero