import React, { useState } from "react";
import Leader_img from "../../images/about/leader.png";
import Leader_mobile from "../../images/about/leaderMobile.png";
import start_btn from "../../images/about/start_button.png";
import { useMediaQuery } from "react-responsive";

export default function Leader() {
  const isMobile = useMediaQuery({ maxWidth: "768px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="relative w-full bg-cover bg-no-repeat bg-center flex items-center justify-center xl:h-[60vh] h-[40vh]"
        style={{
          backgroundImage: `url(${
            isMobile ? `${Leader_mobile}` : `${Leader_img}`
          })`,
        }}
      >
        <div className="flex justify-end w-[90%]">
          <div className="text-left bg-black md:bg-opacity-50 bg-opacity-0 p-4 sm:p-6">
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4">
              <span>We are leaders</span>{" "}
              <span className="block">in Car Mechanical Work</span>
            </h1>
            <div
              className="flex items-center cursor-pointer"
              onClick={openModal}
            >
              <img src={start_btn} width={isMobile ? 50 : 60} alt="" />
              <p className="text-white text-sm mx-3 sm:text-base md:text-lg">
                Watch intro video about us
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-[90%] max-w-2xl bg-black p-4 rounded-lg">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-lg"
            >
              ✕
            </button>

            {/* YouTube Video */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="660"
                height="415"
                src="https://www.youtube.com/embed/MuNyfqxAO6Y?si=wOYk7dGBM7JLI3qp"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
