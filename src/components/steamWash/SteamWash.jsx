import React from "react";
import carwash_img from "../../images/carwash/carwash.png";
import point_img from "../../images/carwash/point_img.png";

export default function SteamWash() {
  const listData = [
    { id: 1, text: `Engine Degreasing with Steam Wash.` },
    { id: 2, text: `Engine Degreasing with Steam Wash.` },
    { id: 3, text: `Engine Degreasing with Steam Wash.` },
    { id: 4, text: `Engine Degreasing with Steam Wash.` },
    { id: 5, text: `Engine Degreasing with Steam Wash.` },
    { id: 6, text: `Engine Degreasing with Steam Wash.` },
    { id: 7, text: `Engine Degreasing with Steam Wash.` },
    { id: 8, text: `Engine Degreasing with Steam Wash.` },
    { id: 9, text: `Engine Degreasing with Steam Wash.` },
    { id: 10, text: `Engine Degreasing with Steam Wash.` },
    { id: 11, text: `Engine Degreasing with Steam Wash.` },
    { id: 12, text: `Engine Degreasing with Steam Wash.` },
    { id: 13, text: `Engine Degreasing with Steam Wash.` },
    { id: 14, text: `Engine Degreasing with Steam Wash.` },
  ];

  // Split the list into two parts
  const leftList = listData.slice(0, 7);
  const rightList = listData.slice(7);

  return (
    
    <div className="grid lg:grid-cols-3 lg:px-20 px-4 grid-cols-1 items-stretch gap-4 py-10">
      {/* Left image */}
      <div className="col-span-1 h-full bg-red-600">
        <img
          src={carwash_img}
          alt="FAQ illustration"
          className="rounded-lg h-full w-full object-cover"
        />
      </div>

      {/* List items */}
      <div className="lg:col-span-2 h-full grid lg:grid-cols-2 grid-cols-1 items-center ">
        {/* Heading */}
        <div className="col-span-3">
          <h2 className="text-xl font-bold text-primary  lg:text-left text-center">
            FEATURES
          </h2>
        </div>

        {/* Unified list for smaller screens */}
        <ul className="col-span-2 lg:grid lg:grid-cols-2 grid-cols-1 ">
          {listData.map((item, index) => (
            <ListItem key={item.id} text={item.text} isFirst={index === 0} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function ListItem({ text, isFirst }) {
  return (
    <li
      className={`text-body-color dark:text-dark-6 flex lg:justify-start justify-center  text-base mt-2 mb-2 `}
    >
      <span className="bg-primary mr-2.5 flex h-[26px] lg:w-[26px] items-center justify-center rounded-full text-base text-white">
        <img src={point_img} alt="Point" />
      </span>
      {text}
    </li>
  );
}
