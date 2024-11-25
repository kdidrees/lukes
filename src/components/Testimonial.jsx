import React from "react";
import testimonialImage from "../images/testomonial_img.png";

const testimonialData = [
  {
    name: "Adam Smith",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum. There are many variations of passages of Lorem Ipsum typesetting industry.",
    star: 4,
  },
];

export default function Testimonial() {
  return (
    <div className="flex flex-col bg-white lg:flex-row items-center lg:items-start justify-center gap-10 p-10 md:px-52">
      <div className="md:w-[25%] w-full">
        <img
          src={testimonialImage}
          alt="FAQ illustration"
          className="rounded-lg md:block hidden"
        />
      </div>

      <div className="flex-1 md:w-1/2 w-full">
        <div className="space-y-10">
          {testimonialData.map((test, index) => (
            <div key={index} className="relative">
              {/* Testimonial Card */}
              <div className="border rounded-lg p-6 transition-all bg-gray-100 relative">
                <p className="mt-3 text-gray-600 leading-10">{test.desc}</p>
              </div>

              <div
                className="absolute  -left-5 -mt-6 w-10 h-10 bg-gray-100 rotate-[135deg]"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 0 100%)",
                }}
              ></div>

              <div className="font-semibold p-2 ml-6">{test.name}</div>
              <div className="flex items-center ml-7">
                {Array.from({ length: test.star }).map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
