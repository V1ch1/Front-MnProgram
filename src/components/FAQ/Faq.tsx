import React, { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

interface FAQsProps {
  faqs: FAQ[];
}

const FAQs: React.FC<FAQsProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="container mx-auto p-4 space-y-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Preguntas Frecuentes
      </h2>
      {faqs.map((faq, index) => (
        <div key={index}>
          <div className="border border-gray-300 rounded-t-lg overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-4 text-left text-gray-800 font-medium focus:outline-none focus:ring focus:ring-gray-300 transition"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg">{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 text-gray-500 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <div className="px-4 pt-8 pb-4 text-black text-md rounded-b-lg">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
