"use client";

import { useState } from "react";
import { faqData } from "@/data/faq";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            よくある質問
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            グループホーム朝日に関するよくある質問と回答をご紹介します。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg border border-warm-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-warm-50 transition-colors"
                  aria-expanded={openIndex === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openIndex === faq.id ? (
                    <FiChevronUp className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  ) : (
                    <FiChevronDown className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  )}
                </button>
                {openIndex === faq.id && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-6 py-4 border-t border-gray-200"
                  >
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
