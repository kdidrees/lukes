import React from "react";
import testimonialImage from "../images/testomonial_img.png";
import { GrPrevious, GrNext } from "react-icons/gr";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style.css";

const testimonialData = [
  {
    name: "Adam Smith",
    position: "Web Designer at Airtable",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum. There are many variations of passages of Lorem Ipsum typesetting industry.",
    star: 4,
  },
];

export default function Testimo() {
  return (
    <div className="md:mx-20">
      {testimonialData.map((test, index) => (
        <div
          key={index}
          className="flex flex-col bg-white lg:flex-row items-center lg:items-start justify-center gap-10 p-10 md:px-52"
        >
          {/* Testimonial Image */}
          <div className="md:w-[25%] w-full">
            <img
              src={testimonialImage}
              alt="Testimonial illustration"
              className="rounded-lg md:block hidden"
            />
          </div>

          {/* Testimonial Content */}
          <div className="flex-1 md:w-1/2 w-full">
            <div className="space-y-10">
              <div className="relative">
                {/* Testimonial Card */}
                <div className="border rounded-lg p-6 transition-all bg-gray-100 relative">
                  <div className="flex justify-between items-center">
                    {/* Testimonial Header */}
                    <div>
                      <div className="font-bold text-xl flex flex-col">
                        Over 100+ People Trust Us
                      </div>
                      <div className="flex items-center mt-2">
                        {Array.from({ length: test.star }).map(
                          (_, starIndex) => (
                            <svg
                              key={starIndex}
                              className="w-5 h-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          )
                        )}
                      </div>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-4">
                      <button className="custom-prev bg-white border rounded-full p-2 shadow-md">
                        <GrPrevious />
                      </button>
                      <button className="custom-next bg-white border rounded-full p-2 mx-4 shadow-md">
                        <GrNext />
                      </button>
                    </div>
                  </div>

                  {/* Testimonial Body */}
                  <p className="mt-3 text-gray-600 leading-8">{test.desc}</p>
                  <div className="font-semibold mt-2">{test.name}</div>
                  <p className="text-gray-600">{test.position}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
