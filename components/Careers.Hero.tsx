import React from 'react';

const CareersHero = () => {
  return (
    <div className="w-full  h-screen flex items-center justify-center text-center px-4">
      <div className="text-white z-10 flex flex-col items-center gap-6 max-w-[80%]">
        <h1 className="text-4xl md:text-[74px] leading-none font-bold font-inter mb-4">
          Unlock Your Potential <br /> with{' '}
          <span className="relative inline-block text-[#047CFC] font-inter font-[900]">
            Neurify
            <span
              className="absolute inset-0 blur-[200px] bg-[#047CFC] rounded-full opacity-50 pointer-events-none"
              aria-hidden="true"
            ></span>
          </span>
        </h1>
        <p className="text-base md:text-lg leading-relaxed">
          Join Neurify, where innovation meets impact. As a deep-tech company, we push boundaries in AI, machine
          learning, and cutting-edge technologies. Be part of a team that&apos;s shaping the future—one breakthrough at
          a time.
        </p>
      </div>
    </div>
  );
};

export default CareersHero;
