
import Image from "next/image";
import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactHero = () => {
  return (
    <>
      <div className="w-full   bg-center  h-screen relative hidden md:flex items-center justify-center text-center">
        <Image
          src="/contact/left.svg"
          alt="left icon svg image"
          width={400}
          height={400}
          className="absolute md:left-[-1%] md:block hidden"
        />
        <div className="text-white z-10 flex flex-col items-center justify-center gap-4">
          <h1 className="text-6xl font-bold mb-4">Get in touch with us!</h1>
          <p className="text-lg max-w-[45%] leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s.
          </p>
          <div className="flex justify-center gap-6 mt-5">
            <a
              href="mailto:info@neurifytech.ai"
              className="flex items-center px-6 py-4 bg-[rgba(255,255,255,0.1)] rounded-lg text-white"
            >
              <FaEnvelope className="w-8 h-8 text-[#047CFC]" />
              <span className="ml-3">info@neurifytech.ai</span>
            </a>
            {/* <button className="flex items-center px-6 py-4 bg-[rgba(255,255,255,0.1)] rounded-lg text-white">
              <FaPhoneAlt className="w-8 h-8 text-[#047CFC]" />
              <span className="ml-3">+91 79049 80546</span>
            </button>
            <button className="flex items-center px-6 py-4 bg-[rgba(255,255,255,0.1)] rounded-lg text-white">
              <FaMapMarkerAlt className="w-8 h-8 text-[#047CFC]" />
              <span className="ml-3">Get Location</span>
            </button> */}
          </div>
        </div>
        <Image
          src="/contact/right.svg"
          alt="right icon svg image"
          width={400}
          height={400}
          className="absolute md:right-[-1%] md:block hidden"
        />
      </div>

      {/* MOBILE */}
      <div className="w-full md:hidden   bg-center  h-[500px] pt-7 relative flex items-center justify-center text-center px-4 md:px-0">
        <Image
          src="/contact/left.svg"
          alt="left icon svg image"
          width={400}
          height={400}
          className="absolute left-0 md:left-[3%] hidden md:block"
        />
        <div className="text-white z-10 flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Get in touch with us!
          </h1>
          <p className="text-base md:text-lg max-w-full md:max-w-[45%] leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industries standard dummy text
            ever since the 1500s.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mt-5 w-full">
            <button className="flex items-center px-4 py-3 md:px-6 md:py-4 bg-[rgba(255,255,255,0.1)] rounded-lg text-white w-full md:w-auto">
              <FaEnvelope className="w-6 h-6 md:w-8 md:h-8 text-[#047CFC]" />
              <span className="ml-3 text-sm md:text-base">
                cloud1ai@gmail.com
              </span>
            </button>
            <button className="flex items-center px-4 py-3 md:px-6 md:py-4 bg-[rgba(255,255,255,0.1)] rounded-lg text-white w-full md:w-auto">
              <FaPhoneAlt className="w-6 h-6 md:w-8 md:h-8 text-[#047CFC]" />
              <span className="ml-3 text-sm md:text-base">+91 79049 80546</span>
            </button>
            <button className="flex items-center px-4 py-3 md:px-6 md:py-4 bg-[rgba(255,255,255,0.1)] rounded-lg text-white w-full md:w-auto">
              <FaMapMarkerAlt className="w-6 h-6 md:w-8 md:h-8 text-[#047CFC]" />
              <span className="ml-3 text-sm md:text-base">Get Location</span>
            </button>
          </div>
        </div>
        <Image
          src="/contact/right.svg"
          alt="right icon svg image"
          width={400}
          height={400}
          className="absolute right-0 md:right-[3%] hidden md:block"
        />
      </div>
    </>
  );
};

export default ContactHero;
