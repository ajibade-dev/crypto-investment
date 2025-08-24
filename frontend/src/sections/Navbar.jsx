import { useState } from "react";
import coinflow from '../assets/coinflow.png'
import {Link} from 'react-router-dom'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "FAQ", id: "faq" },
    { name: "Testimonial", id: "testimonial" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow font-heading">
      <div className="mx-auto max-w-[1500px] lg:p-3">
        <div className="flex h-16 items-center justify-between p-3 md:p-4">
          {/* Logo */}
          <div className="md:flex md:items-center md:gap-12">
            <a className="block h-28 w-28 lg:w-[150px] lg:h-[150px] " href="/">
              <img src={coinflow} alt="coinflow"  />
            </a>
          </div>

          {/* Desktop Nav */}
          {/* <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {["Home", "About", "Services", "FAQ", "Testimonial", "Contact", ].map((item) => (
                  <li key={item}>
                    <a className="text-gray-500 transition hover:text-[#222ad6]" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div> */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      className="text-gray-500 transition hover:text-[#222ad6]"
                      href={`#${link.id}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="sm:gap-4 hidden md:flex">
              <Link to='/login'>
                 <p
                className="rounded-md bg-[#222ad6] px-5 py-2.5 text-sm font-medium text-white shadow-sm"
              >
                Login
              </p>
              </Link>

              <Link to='/register'>
                 <p
                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#222ad6]"
              >
                Register
              </p>
              </Link>
              
             
            </div>

            {/* Mobile Menu Toggle */}
            <div className="block md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-[#222ad6]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Links */}
   {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white z-50 shadow-md md:hidden">
            <nav>
              <ul className="flex flex-col gap-4 text-sm px-4 py-6">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      className="block text-gray-500 hover:text-[#222ad6]"
                      href={`#${link.id}`}
                      onClick={() => setIsMobileMenuOpen(false)} // close menu when clicked
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                {/* login */}
                  
                  <li onClick={() => setIsMobileMenuOpen(false)}>
                    <Link to='/login'>
                  <a
                    className="block rounded-md bg-[#222ad6] px-4 py-2 text-sm text-white"
                   
                  >
                    Login
                  </a>
                  </Link>
                </li>
                  
                
                {/* register */}
                
                <li onClick={() => setIsMobileMenuOpen(false)}>

                  <Link to='/register'>
                  <a
                    className="block rounded-md bg-gray-100 px-4 py-2 text-sm text-[#222ad6]"
                  >
                    Register
                  </a></Link>
                  
                </li>
                
                
              </ul>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}
