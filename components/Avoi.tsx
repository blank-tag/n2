"use client";

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => (
  <div className="relative  text-white rounded-md p-4 w-[310px] h-[210px] flex flex-col text-left transition-all duration-500 hover:bg-gradient-to-b from-[#14244C] to-[#047CFC] hover:shadow-lg hover:border hover:border-[#047CFC] hover:cursor-pointer">
    <Image
      src={icon}
      width={40}
      height={40}
      className="mb-2"
      alt={`${title} icon`}
    />
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm mt-2">{description}</p>
  </div>
);

const Singularity = () => {
  return (
    <div className="relative w-screen h-fit flex flex-col items-center ">
      <div className="gradient-purple-white font-medium border rounded-full border-[#4D2F8C] p-2 md:p-2.5 text-xs lg:text-base mt-3">
        Our LLM Model
      </div>

      <div className="flex flex-col mt-10 gap-4">
        <span className="gradient-text-white text-center leading-none mt-1 text-5xl font-medium sm:text-6xl font-inter">
          Industries we serve
        </span>
        <p className="text-[#EFEDFDB2] text-center text-xs md:px-0 px-10 lg:text-base">
          Improve your writing, organize your thoughts, and act as your
          intellectual thought partner.
        </p>
      </div>

      {/* Centered Lottie Player */}
      <div className="relative flex flex-col items-center justify-center -mt-[125px]">
        {/* Large Screens - Centered Lottie Player */}
        <div className="hidden md:flex items-center justify-center w-full relative">
          <Player
            autoplay
            loop
            src="https://lottie.host/251998c5-6b33-4180-9875-8fcc4f4bf903/EBktv7FRum.json"
            style={{ width: "80%", height: "80%" }}
          />
        </div>

        {/* Cards around the Lottie Player */}
        {/* First Row (Left and Right Ends) */}
        <div className="hidden md:flex justify-between w-full px-8 mt-[-700px]">
          <Card
            icon="/metaverse.svg"
            title="Metaverse Solutions"
            description="Innovative virtual spaces designed for collaboration and creativity."
          />
          <Card
            icon="/arvr.svg"
            title="AR/VR Development"
            description="Immersive experiences powered by advanced AR/VR technologies."
          />
        </div>
        {/* Second Row (Left and Right Ends) */}
        <div className="hidden md:flex justify-between w-full px-8 mt-28">
          <Card
            icon="/stats.svg"
            title="Analysis & Stats"
            description="Real-time data insights and analytics for smarter decision-making."
          />
          <Card
            icon="/dl.svg"
            title="Deep Learning"
            description="Advanced neural networks for complex problem-solving and AI training."
          />
        </div>
        {/* Third Row (Evenly Centered) */}
        <div className="hidden md:flex justify-center gap-8 w-full mt-8">
          <Card
            icon="/geospatial.svg"
            title="Geospatial"
            description="Geospatial analysis tools for mapping and location intelligence."
          />
          <Card
            icon="/ai.svg"
            title="Artificial Intelligence"
            description="Cutting-edge AI models for automation and enhanced decision-making."
          />
        </div>
        <div className="md:hidden flex flex-col items-center w-full px-8  py-20 mt-20">
          {/* Mobile View Cards in Column */}
          <Card
            icon="/metaverse.svg"
            title="Metaverse Solutions"
            description="Innovative virtual spaces designed for collaboration and creativity."
          />
          <Card
            icon="/arvr.svg"
            title="AR/VR Development"
            description="Immersive experiences powered by advanced AR/VR technologies."
          />
          <Card
            icon="/stats.svg"
            title="Analysis & Stats"
            description="Real-time data insights and analytics for smarter decision-making."
          />
          <Card
            icon="/dl.svg"
            title="Deep Learning"
            description="Advanced neural networks for complex problem-solving and AI training."
          />
          <Card
            icon="/geospatial.svg"
            title="Geospatial"
            description="Geospatial analysis tools for mapping and location intelligence."
          />
          <Card
            icon="/ai.svg"
            title="Artificial Intelligence"
            description="Cutting-edge AI models for automation and enhanced decision-making."
          />
        </div>
      </div>
    </div>
  );
};

export default Singularity;
