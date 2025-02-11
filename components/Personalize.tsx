'use client';

import Image from 'next/image';

const Personalize = () => {
  return (
    <div className="bg-center bg-no-repeat " id="personalize">
      <div className="bg-[url('/neurify/tech/galaxy-bg.png')]/20 bg-fit bg-center bg-no-repeat relative z-1">
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center gap-12 mx-auto text-center w-[90%] md:w-[80%] font-inter py-10">
          <div className="text-5xl font-medium sm:text-6xl">
            <h1 className="gradient-text-white inline-block">Personalize at scale</h1>
            <br />
            <h1 className="gradient-text-white inline-block">in</h1>

            <span className="font-bold text-primary-blue"> Seconds</span>
          </div>
          <p className="px-2 text-lg break-words text-primary-grey-A9 w-full">
            At Neurify, we envision a robust architecture capable of scaling to serve industries worldwide. From our
            custom Singularityv1.0 engine to the seamless integration of AnyVoice, our tech stack is designed for
            efficiency and adaptability.
          </p>
        </div>

        {/* Card Section */}
        <div className=" relative mt-0 pb-[10%] ">
          <div className="w-[100%] md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[58%] grid grid-cols-1 md:grid-cols-2 mx-auto gap-10 px-6 sm:px-12 relative z-10">
            {/* Singularity Card */}
            <div
              className="size-auto p-6 flex flex-col rounded-[24px] items-center justify-between bg-gradient-to-br from-[#14244C] to-[#040810]"
              style={{
                border: '1px solid',
                borderImageSource: 'linear-gradient(138.05deg, #040810 2.1%, #401484 100%)',
              }}
            >
              {/* Image Section */}
              <div className="w-full h-[220px] relative flex items-center justify-center">
                <Image
                  src="/neurify/tech/singularity.svg"
                  alt="Singularity"
                  width={377}
                  height={220}
                  className="object-cover rounded-[12px]"
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col">
                <p className="font-inter font-[600] text-[25px] text-[#D3B7FF] leading-tight py-5">Singularity</p>
                <p className="font-inter font-[400] text-[16px] text-[#DBF1ED] leading-tight">
                  Singularity, has been designed with a deeper contextual understanding, allowing it to converse
                  naturally in multiple languages.
                </p>
              </div>

              {/* Button Section */}
              <div className="flex justify-center w-full pt-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://anyvoice.neurifytech.ai"
                  className="bg-[linear-gradient(180deg, #0F0C15 0%, #0F0C15 100%)] rounded-[8px] p-2 border border-[#7124EA] font-inter font-[400] text-[16px] text-[#D8FEE5]"
                >
                  Learn more
                </a>
              </div>
            </div>

            {/* AnyVoice Card */}
            <div
              className="size-auto p-6 flex flex-col rounded-[24px] items-center justify-between bg-gradient-to-br from-[#14244C] to-[#040810]"
              style={{
                border: '1px solid',
                borderImageSource: 'linear-gradient(138.05deg, #040810 2.1%, #401484 100%)',
              }}
            >
              {/* Image Section */}
              <div className="w-full h-[220px] relative flex items-center justify-center">
                <Image
                  src="/neurify/tech/avoi-img.svg"
                  alt="AnyVoice"
                  width={377}
                  height={220}
                  className="object-cover rounded-[12px]"
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col">
                <p className="font-inter font-[600] text-[25px] text-[#D3B7FF] leading-tight py-5">AnyVoice</p>
                <p className="font-inter font-[400] text-[16px] text-[#DBF1ED] leading-tight">
                  AnyVoice is the future of AI-driven communication. Built on our multilingual engine Singularityv1.0,
                  AnyVoice can handle over 1000+ calls simultaneously.
                </p>
              </div>

              {/* Button Section */}
              <div className="flex justify-center w-full pt-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://anyvoice.neurifytech.ai"
                  className="bg-[linear-gradient(180deg, #0F0C15 0%, #0F0C15 100%)] rounded-[8px] p-2 border border-[#7124EA] font-inter font-[400] text-[16px] text-[#D8FEE5]"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personalize;
