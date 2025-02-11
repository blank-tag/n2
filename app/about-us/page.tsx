"use client";

import Image from "next/image";
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BlogSub from "@/components/BlogsSub";
import { useRouter } from "next/navigation";

const People = [
  {
    name: "Nauman Chohan",
    imageURI: "/neurify/nauman-frame.png",
    designation: "CEO",
    linkedin: "",
    x: "",
  },
  {
    name: "Parth Kolgiri",
    imageURI: "/neurify/parth-frame.png",
    designation: "CTO",
    linkedin: "https://www.linkedin.com/in/parthkolgiri/",
    x: "https://www.linkedin.com/in/parthkolgiri/",
  },
  {
    name: "Vivin Silva",
    imageURI: "/neurify/vivin-f.png",
    designation: "CMO",
    linkedin: "https://www.linkedin.com/in/vivin-silva/",
    x: "https://x.com/vivinsilvas?s=11&t=6V9R4tF6eByxVVHiFrhUiQ/",
  },
  {
    name: "Sanjay Kumar",
    imageURI: "/neurify/sanjay.png",
    designation: "COO",
    linkedin: "https://www.linkedin.com/in/tsanjaykumar/",
    x: "",
  },
];

const AboutPage = () => {
  const router = useRouter();
  const handleNavigation = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    router.push("/");

    if (typeof document !== "undefined") {
      setTimeout(() => {
        const section = document.getElementById("personalize");
        if (section) {
          section.scrollIntoView({ behavior: "instant" });
        }
      }, 500);
    }
  };
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full    relative flex flex-col items-center justify-center text-center">
        {/* About Us Section */}
        <div className="text-white flex flex-col items-center justify-center px-4 md:px-0 py-12">
          <div className="relative flex items-center justify-center w-full h-[300px] md:h-[400px]">
            {/* Ellipse Background */}
            <Image
              src="/neurify/about.svg"
              alt="Background Blur"
              width={600}
              height={600}
              className="absolute z-0 max-w-full"
            />

            {/* Round Glow */}
            <Image
              src="/neurify/round.png"
              alt="Round Glow"
              width={500}
              height={500}
              className="absolute z-1 max-w-full"
            />

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-white relative z-10">
              About Us
            </h1>
          </div>
          <p className="text-base md:text-lg max-w-full md:max-w-[75%] leading-relaxed mt-6">
            Our vision is to shape the future by climbing the ladder towards
            Artificial General Intelligence (AGI). With a firm foundation in
            cutting-edge AI research, we have developed an in-house multilingual
            Large Language Model (LLM) that caters to multiple Indic languages,
            setting a new benchmark in language technology. Built on this
            foundation of our in-house LLM, we introduced AnyVoice, a
            revolutionary AI phone caller that automates thousands of inbound
            and outbound calls.
          </p>
        </div>

        {/* Business Section */}
        <div className="text-white flex flex-col items-center justify-center px-4 md:px-0 py-12">
          <h2 className="font-inter text-4xl md:text-6xl font-bold leading-relaxed">
            Automate your{" "}
            <span className="relative inline-block text-[#047CFC] font-[900]">
              Business{" "}
              <span
                className="absolute inset-0 blur-[200px] bg-[#047CFC] rounded-full opacity-50 pointer-events-none"
                aria-hidden="true"
              ></span>
            </span>{" "}
            With Us
          </h2>
          <p className="text-base md:text-lg max-w-full md:max-w-[75%] leading-relaxed mt-12">
            With AnyVoice, businesses can automate their operations by employing
            an intelligent Agent that is capable of handling inbound/outbound
            calls with human-like natural sounding voice quality that can
            support multiple dialects and accents in different languages. Backed
            by our custom LLM, businesses can use AnyVoice at a very effective
            and efficient cost to automate thousands of calls that can be
            tailored to their specific domain.
          </p>
          <button
            className="bg-gradient-to-br mt-12 from-[#047CFC] to-[#14244C] rounded-[7px] flex flex-row items-center justify-center gap-2 py-[10px] sm:py-[14px] px-[27px]"
            onClick={handleNavigation}
          >
            Get Demo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.75L21 12m0 0-3.75 3.25M21 12H3"
              />
            </svg>
          </button>
        </div>

        {/* Team Section */}
        <div className="text-white flex flex-col items-center justify-center px-4 md:px-0 py-12">
          <h2 className="gradient-text-white leading-none text-[45px] font-inter font-[500] lg:text-[70px]">
            Our Team Members
          </h2>
          <p className="text-base md:text-lg max-w-full md:max-w-[75%] leading-relaxed mt-12">
            Neurify`s core team comprises skilled individuals having expertise
            in their specific domain. Their vision combined with their expertise
            is helping Neurify in realizing it’s vision.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center my-20 gap-6">
            {/* Team Cards */}
            {People.map((i, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-b from-[#14244C]/25 to-[#040810]/25 text-white rounded-[25px] p-14 w-full flex flex-col items-center justify-center text-center cursor-pointer border-2 border-transparent shadow-lg backdrop-blur-xl"
              >
                {/* Profile Image */}
                <div className="w-[150px] h-[150px] rounded-full overflow-hidden mb-4 flex items-center justify-center">
                  <Image
                    src={i.imageURI}
                    alt="Profile Picture"
                    width={150}
                    height={150}
                    className="object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold">{i.name}</h3>

                {/* Role */}
                <p className="text-sm mt-2 border border-[#333333] text-white px-2.5 py-1 rounded-full">
                  Co-Founder & {i.designation}
                </p>

                {/* Social Buttons */}
                <div className="flex mt-4 space-x-3">
                  {/* LinkedIn Button */}
                  <a
                    href={i.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:opacity-90 transition duration-300"
                  >
                    <Image
                      src="/Button-linkedin.png"
                      alt="LinkedIn"
                      width={40}
                      height={40}
                    />
                  </a>

                  {/* Twitter Button */}
                  <a
                    href={i.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:opacity-90 transition duration-300"
                  >
                    <Image
                      src="/Button-twitter.png"
                      alt="Twitter"
                      width={40}
                      height={40}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <BlogSub />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
