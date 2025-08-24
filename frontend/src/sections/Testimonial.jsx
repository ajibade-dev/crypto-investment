'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { motion } from 'framer-motion';
import FadeInMotion from './FadeinMotion';

const testimonials = [
  {
    quote: "This platform changed the way I invest in crypto and stocks. It's reliable and user-friendly.",
    name: "John McCulling",
    role: "CEO / Datadrift",
    img: "https://images.unsplash.com/photo-1567515004624-219c11d31f2e?auto=format&q=75&fit=crop&w=112",
  },
  {
    quote: "The AI insights and low fees give me an edge in today's market. Highly recommend!",
    name: "Kate Berg",
    role: "CFO / Dashdash",
    img: "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112",
  },
  {
    quote: "Their platform is sleek, fast, and powerful. I finally feel in control of my portfolio.",
    name: "Luis Chang",
    role: "Trader / FXLoop",
    img: "https://images.unsplash.com/photo-1603415526960-f8f76aa8241e?auto=format&q=75&fit=crop&w=112",
  },
  {
    quote: "From copy trading to real-time analysis, everything is top-notch. Five stars!",
    name: "Amara Yusuf",
    role: "Investor / CoinPulse",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&q=75&fit=crop&w=112",
  },
];

export default function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <FadeInMotion>
      <section className="bg-gray-50 py-14 px-4">
        <motion.div
          className="mx-auto max-w-screen-xl relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="mb-10 text-center text-3xl font-bold text-black font-heading">
            What Others Say About Us
          </h2>

          {/* Custom Nav Buttons */}
          {/* <button
            ref={prevRef}
            className="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-white text-indigo-600 p-3 rounded-full shadow hover:scale-110 transition hidden md:block"
          >
            ‹
          </button>
          <button
            ref={nextRef}
            className="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-white text-indigo-600 p-3 rounded-full shadow hover:scale-110 transition hidden md:block"
          >
            ›
          </button> */}

          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            loop={true}
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                <motion.div
                  className="flex flex-col h-full items-center gap-4 bg-white p-6 shadow-md rounded-xl border border-gray-200 hover:shadow-lg transition font-sans mb-10" id='testimonial'
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-center text-gray-700 text-sm md:text-base leading-relaxed">
                    “{item.quote}”
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-indigo-500">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>
    </FadeInMotion>
  );
}
