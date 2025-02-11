'use client';

import { Player } from '@lottiefiles/react-lottie-player';

const Singularity = () => {
  return (
    <div className="relative w-screen h-fit flex flex-col items-center ">
      <div className="gradient-purple-white font-medium border rounded-full border-[#4D2F8C] p-2 md:p-2.5 text-xs lg:text-base mt-4">
        Singularity
      </div>

      <div className="flex flex-col mt-6 gap-4 text-center px-1">
        <span className="gradient-text-white leading-none text-[45px] font-inter font-[500] lg:text-[70px]">
          Meet our LLM <br />
          Model that can do beyond your vision
        </span>
        <p className="text-[#EFEDFDB2] text-[16px] font-[400]">
          AnyVoice is the future of AI-driven communication. Built on our multilingual engine
        </p>
      </div>

      {/* Flex container for Lottie and divs */}
      <div className="flex justify-center items-center gap-6 w-full relative md:-mt-[160px] -mt-[7px] py-20 md:py-0 overflow-hidden">
        {/* Lottie Player (centered) */}
        <div className="flex justify-center items-center w-full relative">
          {/* Large screen Lottie */}
          <Player
            autoplay
            loop
            src="https://lottie.host/7289a720-3146-406c-b8fa-a198814cf53c/4V8V6btReo.json"
            style={{ width: '80%', height: '80%' }}
            className="hidden lg:block"
          />

          {/* Mobile screen Lottie */}
          <Player
            autoplay
            loop
            src="https://lottie.host/c31d521e-d91d-4282-8a86-c282ac00f39c/TciUoVbstA.json"
            style={{ width: '100%', height: '100%' }}
            className="block lg:hidden scale-[1.2] transform-origin-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Singularity;
