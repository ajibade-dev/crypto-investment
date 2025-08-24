// src/pages/Home.jsx
import React from "react";
import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import CryptoTicker from "../sections/CryptoTicker";
import About from "../sections/About";
import Services from "../sections/Services";
import Counter from "../sections/Counter";
import Questions from "../sections/Questions";
import Testimonials from "../sections/Testimonial";
import Footer from "../sections/Footer";
import ContactForm from "../sections/Contact";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1600px]">
      <Navbar />
      <Hero />
      <CryptoTicker />
      <About />
      <Services />
      <Counter />
      <Questions />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
