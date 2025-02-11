import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const ContactFooter = () => {
  return (
    <div className="flex flex-col items-center   bg-center  text-center pb-20">
      <div className="mt-14 text-white">
        <h1 className="text-2xl">Join Us on Social Media</h1>
        <p className="text-[#808080] text-muted mt-4 max-w-lg">
          Stay updated with our latest projects, industry insights, and company news by following us on social media.
        </p>
      </div>
      <div className="bg-[rgba(20,36,76,0.1)] border-[1.13585px] border-[#262626] rounded-[9.08679px] w-[90%]  flex flex-col items-center justify-center mt-12 pb-8">
        <div className="flex space-x-6 mt-8">
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white rounded-full text-2xl hover:text-gray-400 bg-[#047CFC] w-20 h-20 flex items-center justify-center"
          >
            <FaXTwitter size={40} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white rounded-full text-2xl hover:text-gray-400 bg-[#047CFC] w-20 h-20 flex items-center justify-center"
          >
            <FaInstagram size={40} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white rounded-full text-2xl hover:text-gray-400 bg-[#047CFC] w-20 h-20 flex items-center justify-center"
          >
            <FaFacebookF size={40} />
          </a>
        </div>
        <div className="text-white mt-8 text-center">
          <h2 className="text-3xl font-semibold">Thank You!</h2>
          <p className="text-[#808080] mt-2 max-w-lg">
            For considering Nuerify for your digital needs. We look forward to connecting with you and being part of
            your digital success!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
