import Image from 'next/image';

const Technologies = () => {
  return (
    <div className="pt-10 text-white">
      {/* Vision Section */}
      <div className="flex flex-col items-center justify-center gap-12 mx-auto text-center w-[90%] md:w-[80%] font-inter">
        <div className="text-5xl font-medium sm:text-6xl">
          <h1 className="gradient-text-white inline-block">Our Vision</h1>
          <br />
          <span className="font-bold text-primary-blue">LAM & AGI</span>
        </div>
        <p className="px-2 text-lg break-words text-primary-grey-A9 w-full">
          At Neurify, we&apos;re pioneering the development of Large Action Models (LAM) and advancing towards
          Artificial General Intelligence (AGI). Our LAMs are designed to not just understand and process information,
          but to take meaningful actions based on complex inputs. By combining advanced neural architectures with
          innovative training approaches, we&apos;re working to create AI systems that can demonstrate general
          problem-solving capabilities across diverse domains, moving us closer to true artificial general intelligence.
        </p>
      </div>

      {/* Ocilla LAM Section */}
      <div className="text-center mt-10">
        <div className="flex mx-auto my-4 justify-center items-center gap-6 px-6 py-2 bg-[#FFFFFF14] border border-[#FFFFFF14] rounded-full w-fit">
          <Image src="/neurify/icons/sun.svg" alt="sun" width={20} height={20} />
          <p className="text-xs font-semibold font-inter">Ocilla LAM</p>
        </div>
        <div className="text-xs text-center text-primary-grey-A9 font-inter">Coming soon</div>
      </div>

      {/* Technologies Section */}
      <div className="pt-10">
        <div className="w-[90%] mx-auto mb-20">
          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-1 gap-8">
            {/* Row 1 */}
            <div className="col-span-1 hover:cursor-pointer">
              <Image
                src="/neurify/tech/row1PC.svg"
                alt="Row 1: Healthcare Sector"
                width={1920}
                height={400}
                className="rounded-3xl w-full h-auto"
              />
            </div>
            {/* Row 2 */}
            <div className="col-span-1  hover:cursor-pointer">
              <Image
                src="/neurify/tech/row2PC.svg"
                alt="Row 2: Insurance Sector"
                width={1920}
                height={430}
                className="rounded-3xl w-full h-auto"
              />
            </div>
            <div className="col-span-1  hover:cursor-pointer">
              <Image
                src="/neurify/tech/avoi.svg"
                alt="Row 2: Insurance Sector"
                width={1920}
                height={430}
                className="rounded-3xl w-full h-auto"
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex flex-col md:hidden gap-8">
            <Image
              src="/neurify/tech/micMOB.svg"
              alt="Healthcare Sector Mobile"
              width={400}
              height={400}
              className="rounded-3xl w-full h-auto"
            />
            <Image
              src="/neurify/tech/uniMOB.svg"
              alt="Education Sector Mobile"
              width={400}
              height={400}
              className="rounded-3xl w-full h-auto"
            />
            <Image
              src="/neurify/tech/idMOB.svg"
              alt="Insurance Sector Mobile"
              width={400}
              height={430}
              className="rounded-3xl w-full h-auto"
            />
            <Image
              src="/neurify/tech/chatMOB.svg"
              alt="Speak with AI Mobile"
              width={400}
              height={430}
              className="rounded-3xl w-full h-auto"
            />
            <Image
              src="/neurify/tech/personalisedMOB.svg"
              alt="Personalized Agent Mobile"
              width={400}
              height={430}
              className="rounded-3xl w-full h-auto"
            />
            <Image
              src="/neurify/tech/avoiMOB.png"
              alt="Personalized Agent Mobile"
              width={400}
              height={430}
              className="rounded-3xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
