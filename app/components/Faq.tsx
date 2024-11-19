"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { faqs } from "@/app/lib/faqData";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-zinc-900 text-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-zinc-700 rounded-lg shadow-lg">
              <button
                className="flex items-center justify-between w-full px-6 py-4 text-left text-gray-300 hover:text-white focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-md font-medium">{faq.question}</span>
                {activeIndex === index ? (
                  <FaChevronUp className="text-gray-400" size={18} />
                ) : (
                  <FaChevronDown className="text-gray-400" size={18} />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4 text-md text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
