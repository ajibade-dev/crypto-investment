import { useState } from "react";

const faqs = [
  {
    question: "Who we are?",
    answer:
      "CoinflowAnalysis is your gateway to smart investing in cryptocurrencies and stocks. Built for beginners and experienced investors alike, we combine real-time insights, trend analysis, and educational tools to help you build wealth confidently, one investment at a time. Whether you're exploring Bitcoin or betting on the next big tech stock, Coinflow empowers you to invest with clarity and purpose.",
  },
  {
    question: "What we do?",
    answer:
      "We offer a smart investment platform for crypto and stocks, with AI-driven insights, copy trading, and intuitive tools — all designed to help you invest confidently and grow your portfolio faster.",

  },
  {
    question: "How it works?",
    answer:
      "Create your account, deposit funds through multiple payment methods, and start trading instantly. Our intuitive platform offers one-click trading, automated strategies, and portfolio management tools. Access real-time market data, technical analysis tools, and educational resources to make informed decisions across multiple asset classes.",
  },
  {
    question: "Is support available?",
    answer:
      "Yes, we offer 24/7 support through live chat, email, and our help center.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 font-sans">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* Title */}
        <div className="mb-10 md:mb-16 font-heading">
          <h2 className=" text-xl md:text-2xl font-bold text-center lg:text-start text-black md:mb-6 lg:text-4xl">
            Your Gateway to <span className="text-[#222ad6]">Global</span> financial markets
          </h2>
        </div>

        {/* FAQs */}
        <div className="mx-auto flex max-w-screen-sm flex-col border-t divide-y divide-gray-200 font-sans">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-4 cursor-pointer" onClick={() => toggleFAQ(index)}>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-black text-base md:text-lg">
                    {item.question}
                  </span>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {/* Answer */}
                <div
                  className={`mt-2 text-gray-500 text-sm transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pt-2 text-gray-700">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
