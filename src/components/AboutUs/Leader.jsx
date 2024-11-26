import React from "react";
import Leader_img from "../../images/about/leader.png";
import Leader_mobile from "../../images/about/leaderMobile.png";
import start_btn from "../../images/about/start_button.png";
import { useMediaQuery } from "react-responsive";

export default function Leader() {
  const isMobile = useMediaQuery({ maxWidth: "768px" });
  return (
    <div
      className="relative w-full bg-cover bg-no-repeat bg-center flex items-center justify-center xl:h-[60vh] h-[40vh]"
      style={{
        backgroundImage: `url(${
          isMobile ? `${Leader_mobile}` : `${Leader_img}`
        })`,
      }}
    >
      <div className="flex justify-end w-[90%]">
        <div className="text-left bg-black bg-opacity-50 p-4 sm:p-6">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4">
            <span>We are leaders</span>{" "}
            <span className="block">in Car Mechanical Work</span>
          </h1>
          <div className="flex items-center">
            <img src={start_btn} alt="" />
            <p className="text-white text-sm mx-3 sm:text-base md:text-lg">
              Watch intro video about us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
