import React from "react";
import auto_repairsImg from "../../images/about/auto_repairs.png";
import quality_icon from "../../images/about/auto-repairs/quality_parts.png";
import technican_icon from "../../images/about/auto-repairs/best_technician.png";
import profinished_icon from "../../images/about/auto-repairs/projects_finished.png";
import customer_icon from "../../images/about/auto-repairs/customer_satisfaction.png";

export default function CarCare() {
  const data = [
    {
      id: 1,
      img: quality_icon,
      number: "35+",
      heading: `Quality Parts`,
    },
    {
      id: 2,
      img: technican_icon,
      number: "55+",
      heading: `Best Technician`,
    },
    {
      id: 1,
      img: profinished_icon,
      number: "1K",
      heading: `Projects Finished`,
    },
    {
      id: 1,
      img: customer_icon,
      number: "100%",
      heading: `Customer Satisfaction`,
    },
  ];

  return (
    <div className="flex flex-col bg-white lg:flex-row items-center lg:items-start justify-center gap-10 p-10 md:px-20 px-0">
      <div className="flex-1 lg:w-1/2 w-full ">
        <div className="relative md:mx-8 mx-4">
          {/* Testimonial Card */}
          <div className="  pb-8  transition-all bg-white relative ">
            <div className="w-full flex items-center justify-start bg-white">
              {/* Heading */}
              <h1 className=" text-2xl md:text-3xl font-bold md:leading-10 leading-3  text-left font-nunito">
                <span className="text-[#223142]">The Ultimate </span>
                <span className="text-[#EE3131]">Car Care</span>
                <span className="text-[#223142]"> Solution: </span> 
                <span className="text-[#EE3131]">Steam Car Wash</span>
              </h1>
            </div>
            <p className="mt-5 text-gray-600 leading-8 ">
              The Steam wash can actually clean off the most stubborn mud,
              grease and grime off the different surfaces of the car. Steam wash
              done on interiors decontaminates the panels, dashboard , club
              compartment, seat cover, upholstery and so on. This brings in a
              natural shne to the interiors. As a natural disinfectant,
              Bacteria, Fungus and germs will be instantly killed by the steam
              car wash. Even tough stains and hard to reove odour can also be
              removes with the agic of steam wash.
            </p>

            <button className="bg-[#ee3131] text-white px-8 py-2 mt-4">
              View Price
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex justify-center ">
        <div className="grid grid-cols-2 gap-2">
          <img
            src={auto_repairsImg}
            alt="FAQ illustration"
            className="rounded-lg"
          />
          <img
            src={auto_repairsImg}
            alt="FAQ illustration"
            className="rounded-lg"
          />
          <img
            src={auto_repairsImg}
            alt="FAQ illustration"
            className="rounded-lg"
          />
          <img
            src={auto_repairsImg}
            alt="FAQ illustration"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
