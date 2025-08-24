import { useState } from "react";
import FadeInMotion from "./FadeinMotion";

const faq1 = [
  {
    question: "How can I start trading on CoinflowAnalysis",
    answer:
      "To start trading, simply create an account, verify your identity, fund your wallet, and access the trading dashboard. Our platform is designed for both beginners and experienced traders.",
  },
  {
    question: "How much money do I need to start?",
    answer:
      "You can start with as little as $100. However, we recommend starting with an amount you are comfortable with and that allows you to diversify your trades.",
  },
  {
    question: "Can I lose more than I invest?",
    answer:
      "No, you cannot lose more than your account balance. Our platform uses negative balance protection to ensure you never owe more than you deposit.",
  },
  {
    question: "How do I deposit and withdraw funds?",
    answer:
      "Deposits and withdrawals can be made via bank transfer, credit/debit card, or supported cryptocurrencies. Withdrawals are processed to the same account used for deposits for security reasons.",
  },
   {
    question: "Do I need to verify my identity?",
    answer:
      "Yes, all users must complete a quick KYC (Know Your Customer) verification to comply with regulations and ensure platform security.",
  },
   {
    question: "Is my personal information safe?",
    answer:
      "Absolutely. We use advanced encryption and strong data protection policies to keep your information secure at all times.",
  },
];

const faq2 = [
  {
    question: "Can I trade from any country?",
    answer:
      "Our platform is accessible globally, except in jurisdictions where trading is restricted by law. Please check our terms for details..",
  },
  {
    question: "How do I set up two-factor authentication (2FA)?",
    answer:
      "Enable 2FA in your account settings for an extra layer of security. We recommend using Google Authenticator or Authy.",
  },
];

const faq3 = [
  {
    question: "What markets can I trade on?",
    answer:
      "You can trade Forex, Crypto CFDs, Share CFDs, Commodities, and more—all from a single account.",
  },
  {
    question: "How fast are deposits and withdrawals?",
    answer:
      "Deposits are usually instant. Withdrawals are processed within 24 hours on business days, depending on your payment method.",
  },
  {
    question: "Are there any fees?",
    answer:
      "We offer zero deposit fees and competitive spreads. Withdrawal fees may apply depending on your method. See our fees page for details.",
  },
];
const faq4 = [
  {
    question: "Which payment methods are accepted?",
    answer:
      "We accept bank transfers, credit/debit cards, and a wide range of cryptocurrencies for deposits and withdrawals.",
  },
  {
    question: "Can I cancel a withdrawal request?",
    answer:
      "Yes, as long as the withdrawal has not yet been processed, you may cancel it from your dashboard.",
  },
 
];
const faq5 = [
  {
    question: "Where can I find your terms and policies?",
    answer:
      "All legal documents, including Terms & Conditions and Privacy Policy, are available at the bottom of every page.",
  },
  {
    question: "What should I do if I spot a bug or issue?",
    answer:
      "Please report any bugs to our support team. We take all feedback seriously and aim to resolve issues quickly.",
  },
 
];

export default function Questions() {
  const [openIndexes, setOpenIndexes] = useState({
  faq1: null,
  faq2: null,
  faq3: null,
  faq4: null,
  faq5: null,
});


  const toggleFAQ = (section, index) => {
  setOpenIndexes((prev) => ({
    ...prev,
    [section]: prev[section] === index ? null : index,
  }));
};


  return (
    <FadeInMotion>
    <div className="bg-white py-6 sm:py-8 lg:py-12 font-sans" id="faq">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* Title */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-black font-heading md:mb-6 lg:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mx-auto max-w-screen-md text-center font-sans text-gray-500 md:text-lg">
            Here are answers to common questions about how our platform works.
          </p>
        </div>

        {/* FAQ1 */}
        <div className="mx-auto flex max-w-screen-sm flex-col">
            <h2 className="mb-3 md:mb-5 font-semibold text-xl md:text-3xl text-[#222ad6]">Getting Started</h2>
        </div>
        <div className="mx-auto flex max-w-screen-sm flex-col border-t divide-y divide-gray-200">
          {faq1.map((item1, index) => {
            const isOpen = openIndexes.faq1 === index;
            return (
              <div key={index} className="py-4 cursor-pointer" onClick={() => toggleFAQ("faq1",index)}>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-black text-base md:text-lg hover:text-[#222ad6]">
                    {item1.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-[#222ad6] transform transition-transform duration-300 ${
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
                  <p className="pt-2">{item1.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* FAQ2 */}
         <div className="mx-auto flex max-w-screen-sm flex-col">
            <h2 className="my-3 md:my-5 font-semibold text-xl md:text-3xl text-[#222ad6]">Account & Security</h2>
        </div>
        <div className="mx-auto flex max-w-screen-sm flex-col border-t divide-y divide-gray-200">
          {faq2.map((item2, index) => {
            const isOpen = openIndexes.faq2 === index;
            return (
              <div key={index} className="py-4 cursor-pointer" onClick={() => toggleFAQ("faq2",index)}>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-black text-base md:text-lg hover:text-[#222ad6]">
                    {item2.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-[#222ad6] transform transition-transform duration-300 ${
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
                  <p className="pt-2">{item2.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* FAQ3 */}
        <div className="mx-auto flex max-w-screen-sm flex-col">
            <h2 className="my-3 md:my-5 font-semibold text-xl md:text-3xl text-[#222ad6]">Trading & Markets</h2>
        </div>
        <div className="mx-auto flex max-w-screen-sm flex-col border-t divide-y divide-gray-200">
          {faq3.map((item3, index) => {
            const isOpen = openIndexes.faq3 === index;
            return (
              <div key={index} className="py-4 cursor-pointer" onClick={() => toggleFAQ("faq3", index)}>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-black text-base md:text-lg hover:text-[#222ad6]">
                    {item3.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-[#222ad6] transform transition-transform duration-300 ${
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
                  <p className="pt-2">{item3.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
          {/* FAQ4 */}
        <div className="mx-auto flex max-w-screen-sm flex-col">
            <h2 className="my-3 md:my-5 font-semibold text-xl md:text-3xl text-[#222ad6]">Payments & Withdrawals</h2>
        </div>
        <div className="mx-auto flex max-w-screen-sm flex-col border-t divide-y divide-gray-200">
          {faq4.map((item4, index) => {
            const isOpen = openIndexes.faq4 === index;
            return (
              <div key={index} className="py-4 cursor-pointer" onClick={() => toggleFAQ("faq4", index)}>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-black text-base md:text-lg hover:text-[#222ad6]">
                    {item4.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-[#222ad6] transform transition-transform duration-300 ${
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
                  <p className="pt-2">{item4.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* FAQ5 */}
        <div className="mx-auto flex max-w-screen-sm flex-col">
            <h2 className="my-3 md:my-5 font-semibold text-xl md:text-3xl text-[#222ad6]">Support & Legal</h2>
        </div>
        <div className="mx-auto flex max-w-screen-sm flex-col border-t divide-y divide-gray-200">
          {faq4.map((item5, index) => {
            const isOpen = openIndexes.faq5 === index;
            return (
              <div key={index} className="py-4 cursor-pointer" onClick={() => toggleFAQ("faq5", index)}>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-black text-base md:text-lg hover:text-[#222ad6]">
                    {item5.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-[#222ad6] transform transition-transform duration-300 ${
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
                  <p className="pt-2">{item5.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </FadeInMotion>
  );
}
