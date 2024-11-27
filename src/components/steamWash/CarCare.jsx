import React from "react";
import auto_repairsImg from "../../images/about/auto_repairs.png";

export default function CarCare() {

  return (
    <div className="flex flex-col h-full bg-white lg:flex-row items-stretch justify-center gap-10 p-10 lg:px-20 px-4">
      {/* Left Box */}
      <div className="flex-1 lg:w-1/2 w-full flex flex-col justify-between">
        <div className="relative h-full">
          {/* Testimonial Card */}
          <div className="pb-8 transition-all bg-white relative h-full">
            <div className="w-full flex items-center justify-start bg-white">
              {/* Heading */}
              <h1 className="text-2xl md:text-3xl font-bold md:leading-10 leading-3 text-left font-nunito">
                <span className="text-[#223142]">The Ultimate </span>
                <span className="text-[#EE3131]">Car Care</span>
                <span className="text-[#223142]"> Solution: </span>
                <span className="text-[#EE3131]">Steam Car Wash</span>
              </h1>
            </div>
            <p className="mt-5 text-gray-600 leading-8 overflow-y-auto">
              The Steam wash can actually clean off the most stubborn mud,
              grease and grime off the different surfaces of the car. Steam wash
              done on interiors decontaminates the panels, dashboard , club
              compartment, seat cover, upholstery and so on. This brings in a
              natural shine to the interiors. As a natural disinfectant,
              Bacteria, Fungus and germs will be instantly killed by the steam
              car wash. Even tough stains and hard to remove odour can also be
              removed with the magic of steam wash.
            </p>

            <button className="bg-[#ee3131] text-white px-8 py-2 mt-12">
              View Price
            </button>
          </div>
        </div>
      </div>

      {/* Right Box */}
      <div className="lg:w-1/2 w-full flex justify-center">
        <div className="grid grid-cols-2 gap-2 h-full w-full lg:w-[80%]">
          <img
            src={auto_repairsImg}
            alt="FAQ illustration"
            className="rounded-lg h-full w-full object-cover"
          />
          <img
            src={auto_repairsImg}
            alt="FAQ illustration"
            className="rounded-lg h-full w-full object-cover"
          />
          <img
            src={auto_repairsImg}
            alt="FAQ illustration"
            className="rounded-lg h-full w-full object-cover"
          />
          <img
            src={auto_repairsImg}
            alt="FAQ illustration"
            className="rounded-lg h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
