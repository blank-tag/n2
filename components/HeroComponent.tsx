
"use client";

import Image from "next/image";
import rightArrowIcon from "@/public/neurify/rightArrow.svg";

const HeroComponent = () => {
  return (
    <div className="w-full h-full md:h-screen relative mt-0 pb-[10%] pt-[5%] overflow-hidden">
      {/* Orbit Section */}
      <div className="orbit-wrapper sm:block hidden">
        <div className="orbit-container">
          <img
            src="/neurify/tech/circle-orbit.png"
            alt="Rotating Orbit"
            className="orbit-image"
          />
        </div>
        <div className="orbit-inner">
          <img
            src="/neurify/tech/inner-circle.png"
            alt="Inner Rotating Orbit"
            className="orbit-inner-image"
          />
        </div>
      </div>

      <div className="relative top-[5%] flex flex-col items-center gap-12 mt-32 md:mt-16">
        {/* Mic Section */}
        <div className="min-w-[200px] bg-[#001123] rounded-[46px] border-4 border-[#047CFC40]/25 py-2 px-6 flex items-center space-x-3">
          <p className="text-white text-[10px] sm:text-[16px]">
            Custom in-house built LLM singularity
          </p>
        </div>

        {/* Main Headline */}
        <div className="text-center z-10">
          <p className="font-inter font-medium text-white leading-none text-center">
            <span className="block text-[55px] md:text-[70px] lg:text-[101px] -tracking-[3px]">
              Revolutionizing <br />
              Automation with <br />
              <span className="relative inline-block font-black text-transparent bg-clip-text bg-[#047CFC]">
                Neurify
                <span
                  className="absolute inset-0 blur-[150px] md:blur-[200px] bg-[#047CFC] rounded-full opacity-50 pointer-events-none"
                  aria-hidden="true"
                ></span>
              </span>
            </span>
          </p>
        </div>

        {/* Call to Action */}
        <button
          className="w-auto sm:w-auto bg-gradient-to-br from-[#047CFC] to-[#14244C] rounded-[7px] py-[10px] sm:py-[14px] px-[27px] flex items-center gap-2 text-white"
          onClick={(e) => {
            e.preventDefault();
            if (typeof document !== "undefined") {
              const section = document.getElementById("personalize");
              if (section) {
                section.scrollIntoView({ behavior: "instant" });
              }
            }
          }}
        >
          Explore Our Innovation
          <Image src={rightArrowIcon} alt="Arrow Icon" width={22} height={22} />
        </button>
      </div>
    </div>
  );
};

export default HeroComponent;
