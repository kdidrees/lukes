import React, { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style.css";
import { useMediaQuery } from "react-responsive";

const testimonialData = [
  {
    name: "Adam Smith",
    position: "Web Designer at Airtable",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
    star: "4",
  },
  {
    name: "Emily Johnson",
    position: "Frontend Developer at Shopify",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    star: "5",
  },
  {
    name: "Michael Brown",
    position: "UI/UX Designer at Google",
    desc: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator.",
    star: "3",
  },
  {
    name: "Tyson",
    position: "UI/UX Designer at Google",
    desc: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator.",
    star: "4",
  },
];

export default function Testimo() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: "768px" });

  const handleSelect = (index) => {
    setSelectedTestimonial(index);
  };

  const testimonialCount = testimonialData.length;

  // Get three testimonials around the selected one
  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [testimonialData[selectedTestimonial]]; // Show only one card in mobile view
    }
    return [
      testimonialData[selectedTestimonial],
      testimonialData[(selectedTestimonial + 1) % testimonialCount],
      testimonialData[(selectedTestimonial + 2) % testimonialCount],
    ];
  };

  return (
    <div className="lg:mx-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center md:gap-10 p-10">
        {/* Testimonial Content */}
        <div className="grid h-full lg:w-[70%] w-full order-1 lg:order-2">
          <div className="space-y-10">
            <div className="relative">
              {/* Main Testimonial Card */}
              <div className="border  rounded-lg lg:p-6 p-4 transition-all bg-white md:shadow-none  shadow-md relative">
                <div className="flex justify-between items-center">
                  <div className="lg:block hidden">
                    <div className="font-bold text-xl flex flex-col">
                      Over 100+ People Trust Us
                    </div>
                    <div className="flex items-center mt-2 ">
                      <div className="flex">
                        {Array.from({
                          length: testimonialData[selectedTestimonial].star,
                        }).map((_, starIndex) => (
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
                      <div className="mx-4">
                        {testimonialData[selectedTestimonial].star}
                      </div>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex gap-4">
                    <button
                      onClick={() =>
                        handleSelect(
                          (selectedTestimonial - 1 + testimonialCount) %
                            testimonialCount
                        )
                      }
                      className={`${
                        isMobile ? " custom-prev-mobile" : "custom-prev"
                      } bg-white border rounded-full p-2 shadow-md md:mx-4 -mx-7 hover:bg-red-200`}
                    >
                      <GrPrevious />
                    </button>
                    <button
                      onClick={() =>
                        handleSelect(
                          (selectedTestimonial + 1) % testimonialCount
                        )
                      }
                      className={`${
                        isMobile ? "custom-next-mobile" : "custom-next"
                      }   bg-white border rounded-full p-2 md:mx-4 -mx-7 shadow-md hover:bg-red-200`}
                    >
                      <GrNext />
                    </button>
                  </div>
                </div>

                <p className="lg:mt-3 text-gray-600 leading-8 lg:py-6 py-6">
                  {testimonialData[selectedTestimonial].desc}
                </p>
                <div className="flex items-center md:justify-start justify-center gap-4 lg:py-0 py-2 border-t">
                  <img
                    src={`https://picsum.photos/50`}
                    alt="User"
                    className="w-12 h-12 lg:hidden block rounded-full"
                  />
                  <div>
                    <div className="font-bold">
                      {testimonialData[selectedTestimonial].name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonialData[selectedTestimonial].position}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* User Cards */}
        <div className="lg:flex  hidden flex-col items-center lg:gap-6 order-2  lg:order-1 md:shadow-none  shadow-md lg:w-max w-full">
          {getVisibleTestimonials().map((test, index) => (
            <div
              key={index}
              className={`cursor-pointer w-full border rounded-lg p-4 transition-all ${
                selectedTestimonial ===
                (selectedTestimonial + index) % testimonialCount
                  ? "md:bg-red-100 bg-white md:border-red-500 border-t-gray-100"
                  : "bg-white"
              }`}
              onClick={() =>
                handleSelect((selectedTestimonial + index) % testimonialCount)
              }
            >
              <div className="flex items-center gap-4">
                <img
                  src={`https://picsum.photos/id/${
                    ((selectedTestimonial + index) % testimonialCount) + 100
                  }/50`}
                  alt="User"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-bold">{test.name}</div>
                  <div className="text-sm text-gray-500">{test.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
