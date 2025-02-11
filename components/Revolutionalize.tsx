'use client';

import Image from 'next/image';
import revolutionBG from '@/public/neurify/revolution_bg.svg';
import NRevolLogo from '@/public/neurify/NRevolLogo.svg';

const Revoluntionalize = () => {
  return (
    <div className=" w-full ] py-10" style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="w-full h-auto grid gap-8 sm:gap-0 px-[3rem] sm:px-[7rem] md:px-[2rem] lg:px-[5rem] xl:px-[10rem] py-10">
        {/* Main Section */}
        <div className="grid p-2 h-auto w-full border shadow-custom-inset border-b-[#14244C] border-[#2f4a90] border-t-[#047CFC] overflow-hidden md:grid-cols-[1.5fr_0.5fr] rounded-3xl md:grid-rows-[auto] gap-8 sm:gap-0 bg-gradient-to-b from-[#20294C] to-[#040810]">
          {/* Left Section */}
          <div className="p-[1px] md:p-0 bg-gradient-to-b md:bg-none rounded-[30px] md:rounded-none">
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-4 lg:gap-3 xl:gap-5 2xl:gap-6 3xl:gap-8 justify-between md:justify-evenly rounded-[30px] md:rounded-none md:py-0 py-8">
              {/* Title */}
              <div className="xl:w-[80%] 2xl:w-[90%] 3xl:w-[70%] px-[1rem] sm:px-[2rem] md:pl-[2rem] 2xl:pl-[3rem] 3xl:pl-[5rem] md:pt-5 pt-2">
                <p className="font-inter font-[700] text-[30px] sm:text-[33px] text-center md:text-left md:text-[30px] lg:text-[40px] xl:text-[45px] 2xl:text-[55px] text-[#FFFFFF] leading-tight">
                  Ready to{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#047CFC] to-[#20294C]">
                    Revolutionize
                  </span>{' '}
                  <br />
                  Your Operations?
                </p>
              </div>

              {/* Subtitle */}
              <div className="xl:w-[80%] 2xl:w-[70%] px-[1rem] sm:px-[2rem] md:pl-[2rem] 2xl:pl-[3rem] 3xl:pl-[5rem]">
                <p className="font-inter font-[500] text-[14px] sm:text-[14px] text-center md:text-left md:text-[14px] xl:text-[16px] 2xl:text-[18px] text-[#FFFFFF] leading-tight">
                  Let Neurify bring the future of automation to your business. Partner with us to achieve unparalleled
                  efficiency and innovation.
                </p>
              </div>

              {/* Button */}
              <div className="flex-grow md:pl-[2rem] 2xl:pl-[3rem] 3xl:pl-[5rem] flex justify-center items-center md:justify-start md:items-start md:pt-0 py-10">
                <button
                  className="relative px-2 py-2 md:px-3 md:py-3 2xl:px-4 2xl:py-4 rounded border border-[#047CFC] bg-gradient-to-b from-[#20294C] to-[#040810] text-white text-sm md:text-sm 2xl:text-base mt-auto"
                  style={{
                    boxShadow: '0 0 6px rgba(4, 124, 252, 0.5), 0 0 10px rgba(4, 124, 252, 0.3)',
                  }}
                >
                  <span className="absolute inset-0 rounded border border-[#047CFC] opacity-20 blur-md"></span>
                  <span className="relative">Build your AI agent</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Section (Images) */}
          <div className="relative hidden md:block">
            {/* Background Image */}
            <Image src={revolutionBG} alt="Background" fill className="object-cover rounded-3xl" />
            {/* Overlay Logo */}
            <div className="absolute inset-0 flex justify-center items-center">
              <Image
                src={NRevolLogo}
                alt="Overlay Logo"
                width={150}
                height={150}
                className="w-[150px] h-[150px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revoluntionalize;
