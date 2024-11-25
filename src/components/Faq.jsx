import React, { useState } from "react";
import faqImage from "../images/faqImage.png";

const faqData = [
  {
    question: "What is a SAAS platform?",
    answer:
      "SAAS platform is a cloud-based software service that allows users to access and use a variety of tools and functionality.",
  },
  {
    question: "How does billing work?",
    answer:
      "We offer a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.",
  },
  {
    question: "Can I get a refund for my subscription?",
    answer:
      "We offer a 30-day money-back guarantee for most of our subscription plans. If you are not satisfied with your subscription within the first 30 days, you can request a full refund. Refunds for subscriptions active longer than 30 days may be considered on a case-by-case basis.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "To cancel your subscription, log in to your account and navigate to the subscription management page. From there, you can cancel your subscription and stop future billing.",
  },
  {
    question: "Can I try this platform for free?",
    answer:
      "We offer a free trial of our platform for a limited time. During the trial period, you will have access to a limited set of features and functionality, but you will not be charged.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col bg-gray-100 lg:flex-row items-center lg:items-start justify-center gap-10 p-10 md:px-20">
      <div className="md:w-[30%] w-full">
        <h2 className="text-3xl md:max-w-80  font-bold md:leading-10  mb-4 text-center lg:text-left">
          Frequently Asked Questions
        </h2>
        <img
          src={faqImage}
          alt="FAQ illustration"
          className="rounded-lg shadow-lg md:block hidden "
        />
      </div>

      <div className="flex-1 md:w-[70%] w-full">
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-lg p-4 transition-all bg-white
               
              `}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full font-medium text-lg text-left"
              >
                <span className="font-semibold">{faq.question}</span>
                <svg
                  className={`transition-transform ${
                    activeIndex === index ? "-rotate-0" : "-rotate-90"
                  }`}
                  fill="none"
                  height={24}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {activeIndex === index && (
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
