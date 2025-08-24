import React from "react";
import { Link } from "react-router-dom";
import coinflow from "../assets/coinflow.png";
import bit from "../assets/bit.png";
import eth from "../assets/eth.png";
import teth from "../assets/teth.png";
import usdt from "../assets/usdt.png";

export default function Footer() {
  const companyLinks = [
    { name: "Who we are", id: "about" },
    { name: "Contact Us", id: "contact" },
  ];

  const supportLinks = [
    { label: "Terms And Conditions", path: "/support/terms-and-conditions" },
    { label: "Privacy Policy", path: "/support/privacy-policy" },
    { label: "Regulations", path: "/support/regulations" },
    { label: "Risk Disclaimer", path: "/support/risk-disclaimer" },
  ];

  const serviceLinks = [
    { label: "Forex", path: "/services/forex" },
    { label: "Crypto CFDs", path: "/services/crypto-cfds" },
    { label: "Share CFDs", path: "/services/share-cfds" },
    { label: "Commodities", path: "/services/commodities" },
    { label: "Copytrading", path: "/services/copytrading" },
  ];

  return (
    <footer className="bg-white">
      <div className="pb-16 pt-4 sm:pt-10 lg:pt-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
            
            {/* Logo */}
            <div className="col-span-full lg:col-span-2">
              <div className="lg:-mt-10">
                <Link className="flex items-start justify-start h-[150px] w-[150px]" to="/">
                  <img src={coinflow} alt="coinflow" />
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-black sm:pr-8 font-bold font-heading">
                  We Accept:
                </p>
                <div className="flex items-center gap-3">
                  {[bit, eth, usdt, teth].map((coin, idx) => (
                    <span key={idx} className="h-[30px] w-[30px]">
                      <img src={coin} alt="crypto" />
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Company */}
            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                Company
              </div>
              <nav className="flex flex-col gap-4">
                {companyLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    
                    className="text-gray-500 transition duration-100 hover:text-[#222ad6] active:text-[#222ad6]"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Support */}
            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                Support
              </div>
              <nav className="flex flex-col gap-4">
                {supportLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    to={link.path}
                    className="text-gray-500 transition duration-100 hover:text-[#222ad6] active:text-[#222ad6]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                Services
              </div>
              <nav className="flex flex-col gap-4">
                {serviceLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    to={link.path}
                    className="text-gray-500 transition duration-100 hover:text-[#222ad6] active:text-[#222ad6]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex items-center justify-between gap-4 py-8">
            <span className="text-sm text-gray-400">
              © 2025 - Present CoinflowAnalysis. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
