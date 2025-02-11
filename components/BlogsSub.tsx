'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const BlogSub = () => {
  const router = useRouter(); // Use the useRouter hook for navigation

  return (
    <>
      <div className="w-full px-4 md:px-20 py-12">
        {/* Title and Button Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          <h1 className="font-inter text-[32px] md:text-[45px] mb-4 md:mb-0">Neurify Blogs</h1>
          <button
            className="hidden md:flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#0A2B52] to-[#012039] text-white text-[16px] md:text-[20px] font-inter rounded-full shadow-lg hover:opacity-90 transition duration-300"
            onClick={(e) => {
              e.preventDefault();
              router.push('/blogs'); // Navigate to the /blogs page
            }}
          >
            <span>Read all</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.75L21 12m0 0-3.75 3.25M21 12H3" />
            </svg>
          </button>
        </div>

        {/* Blog Card Section */}
        <div className="flex items-start w-full">
          <div className="mt-8">
            <div className=" rounded-xl shadow-lg p-6 max-w-full md:max-w-lg mx-auto text-left">
              {/* Image Section */}
              <div className="w-full rounded-lg overflow-hidden">
                <Image
                  src="/neurify/blog-banner.png"
                  alt="Generative AI Blog Banner"
                  className="w-full h-48 object-cover"
                  width={500}
                  height={300}
                />
              </div>

              {/* Text Content */}
              <div className="mt-4 text-white">
                <h2 className="text-xl md:text-2xl font-bold leading-tight">
                  Generative AI: Thrive or Drown in the Saturation Trap?
                </h2>
                <p className="text-sm text-gray-400 mt-1">Ai Politics</p>
                <p className="text-sm md:text-base mt-3 leading-relaxed">
                  Unveiling the future of AI—why originality and foundational skills are the key to standing out in a
                  crowded market.
                </p>
              </div>

              {/* Button Section */}
              <div className="mt-6">
                <button
                  className="flex items-center justify-center space-x-2 px-6 py-3 w-full bg-gradient-to-r from-[#0A2B52]/25 to-[#012039]/25 text-white text-base font-medium rounded-[10px] shadow-md hover:opacity-90 transition duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/blogs'); // Navigate to the /blogs page
                  }}
                >
                  <span>Read Full Blog</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.75L21 12m0 0-3.75 3.25M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSub;
