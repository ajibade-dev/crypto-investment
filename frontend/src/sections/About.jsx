import React from 'react'
import FAQ from './FAQ'
import { Player } from "@lottiefiles/react-lottie-player";
import about from '../assets/about.json'
import FadeInMotion from './FadeinMotion';
const Hero = () => {
  return (
    <FadeInMotion>
     <header className="bg-white relative dark:bg-gray-900 max-w-[1500px]" id='about'>
        <h1 className='font-heading text-3xl md:text-3xl lg:text-6xl font-bold pt-5 md:py-8 lg:py-10 text-black text-center'>About Us</h1>
      <div className="container px-4 lg:px-0 mx-auto">
        <div className="items-center lg:flex">
          {/* Left Content */}
          <FAQ />
          {/* Right Animation */}
          <div className="flex items-center justify-center w-full mt-2 lg:mt-0 lg:w-1/2">
                       <Player
              autoplay
              loop
              src={about}
              className="w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]"
            />
                    </div>
        </div>
      </div>
    </header>
    </FadeInMotion>
  )
}

export default Hero