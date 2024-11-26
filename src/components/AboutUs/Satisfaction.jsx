import React from "react";
import quality_icon from "../../images/about/satisfaction/quality_support.png"
import bg_img from "../../images/about/satisfaction/satis_bg.png"

export default function Satisfaction() {
    const cardData = [
        {
            id:1,
            img:quality_icon,
            heading:`Quality Support`,
            desc:`At Autofiix auto services, we believe that all cars these days require specialized services.`
        },
        {
            id:2,
            img:quality_icon,
            heading:`Quality Support`,
            desc:`At Autofiix auto services, we believe that all cars these days require specialized services.`
        },
        {
            id:3,
            img:quality_icon,
            heading:`Quality Support`,
            desc:`At Autofiix auto services, we believe that all cars these days require specialized services.`
        },
    ]
  return (
    <>
      <div className=" bg-gray-100 py-5 bg-no-repeat md:px-20 bg-cover" style={{backgroundImage:`url(${bg_img})`}}>
        <div className="w-full mx-auto  px-5 pt-10 pb-16 text-white   " >
          <div className=" mx-auto md:flex">
            <div className="md:w-1/4 md:flex items-center">
              <div className="md:text-left text-center w-full flex-grow md:pr-5">
                <h1 className="text-5xl font-bold  text-[#EE3131]">100%</h1>
                <h3 className="text-3xl font-semibold mb-5 mt-3">
                  Satisfaction  Guarantee
                </h3>
              </div>
            </div>
            <div className="md:w-3/4">
              <div className=" mx-auto md:flex">
                {/* card starts here  */}
            
               {cardData.map((card,index)=>(
                   <div key={index} className={`relative mt-6 flex md:border-r md:border-b-0 border-b border-opacity-30 border-white  flex-col   bg-clip-border text-white `}>
                   <div className="p-6">
                    <img src={card.img} alt="" />
                     <h5 className="mb-2 block my-4 font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                       {card.heading}
                     </h5>
                     <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                     {card.desc}
                     </p>
                   </div>
               
                 </div>
               ))}
              

                {/* card ends here  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
