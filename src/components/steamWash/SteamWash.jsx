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
    <div className="grid lg:grid-cols-3  grid-cols-1 items-stretch bg-yellow-300 gap-4">
      {/* Left image */}
      <div className="col-span-1 h-full bg-red-600">
        <img
          src={carwash_img}
          alt="FAQ illustration"
          className="rounded-lg h-full w-full object-cover"
        />
      </div>

      {/* List items */}

    
      <div className="col-span-2 h-full grid lg:grid-cols-2 items-center gap-2 ">
        {/* Left list */}

        <ul>
          {leftList.map((item, index) => (
            <ListItem key={item.id} text={item.text} />
          ))}
        </ul>

        {/* Right list */}
        <ul>
          {rightList.map((item, index) => (
            <ListItem key={item.id} text={item.text} />
          ))}
        </ul>


      </div>
    </div>
  );
}

function ListItem({ text }) {
  return (
    <li className="text-body-color dark:text-dark-6 flex text-base mb-2">
      <span className="bg-primary mr-2.5 flex h-[26px] w-[26px] items-center justify-center rounded-full text-base text-white">
        <img src={point_img} alt="Point" />
      </span>
      {text}
    </li>
  );
}
