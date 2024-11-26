import React from "react";
import auto_repairsImg from "../../images/about/auto_repairs.png";
import quality_icon from "../../images/about/auto-repairs/quality_parts.png";
import technican_icon from "../../images/about/auto-repairs/best_technician.png";
import profinished_icon from "../../images/about/auto-repairs/projects_finished.png";
import customer_icon from "../../images/about/auto-repairs/customer_satisfaction.png";

export default function AutoRepair() {
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
      <div className="md:w-[35%] w-full">
        <div className="w-full lg:flex items-center justify-center py-4 ">
          <div className="w-full flex items-center justify-center bg-white">
            {/* Heading */}
            <h1 className=" text-2xl md:text-3xl font-bold md:leading-10 leading-3 lg:mx-4 text-left font-nunito">
              <span className="text-[#223142]">Get </span>
              <span className="text-[#EE3131]">auto repairs</span>
              <span className="text-[#223142]"> you can </span>
              <span className="text-[#EE3131]">trust</span>
              {/* Right Lines */}
            </h1>
            <div className="lg:flex flex-col gap-1 items-end justify-end hidden">
              <div className="w-8 border-t-2 border-[#223142]"></div>
              <div className="w-16 border-t-2 border-[#EE3131]"></div>
            </div>
          </div>
        </div>

        <img
          src={auto_repairsImg}
          alt="FAQ illustration"
          className="rounded-lg md:block hidden"
        />
      </div>

      <div className="flex-1 md:w-1/2 w-full">
        <div className="relative md:mx-8 mx-4">
          {/* Testimonial Card */}
          <div className="  pb-8 border-b-4 border-red-600 transition-all bg-white relative ">
            <p className="md:mt-3 text-gray-600 leading-10 md:text-2xl font-normal">
              At Autofiix auto services, we believe that all cars these days
              require specialized services.
            </p>
            <p className="mt-3 text-gray-600 leading-8">
              Vestibulum eu quam nec neque pellentesque efficitur id eget nisl.
              Proin porta est convallis lacus blandit pretium sed non enim.
              Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum
              ultricies laoreet, augue eros luctus sapien, ut euismod leo tortor
              ac enim. In hac habitasse platea dictumst. Sed cursus venenatis
              tellus. Vestibulum eu quam nec neque pellentesque efficitur.
            </p>
          </div>

          {/* here is icons man */}

          <div className="min-w-[375px] md:min-w-[700px] xl:max-w-[600px] mt-3 grid  gap-5  grid-cols-2">
            {data.map((ele, index) => (
              <div className="relative flex flex-grow !flex-row  items-center rounded-[10px]  bg-white bg-clip-border  dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                <div className=" flex h-[90px] w-auto flex-row items-center">
                  <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                    <span className="flex items-center text-brand-500 dark:text-white">
                      <img src={ele.img} alt="" />
                    </span>
                  </div>
                </div>
                <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                  <h4 className="text-2xl text-[#EE3131] font-bold text-navy-700 dark:text-white">
                    {ele.number}
                  </h4>
                  <p className="font-dm  text-sm font-semibold text-gray-600">
                    {ele.heading}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* here is icons end */}
        </div>
      </div>
    </div>
  );
}
