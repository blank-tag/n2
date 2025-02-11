'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import NeurifyLogo from '@/public/NeurifyIcon.svg';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const switchPage = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/contact-us');
  };

  return (
    <nav className="w-full start-0 border-b-[1px] border-[#ffffff27] border-opacity-12 fixed top-0 left-0 right-0 z-50 h-[72px] bg-[#040810]/50">
      <div className="relative max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
        {/* Logo Section */}
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => {
              window.location.href = '/';
            }, 300);
          }}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={NeurifyLogo} className="h-6 md:block hidden" alt="Neurify Logo" width={150} height={25} />
          <Image src={NeurifyLogo} className="h-6 md:hidden" alt="Neurify Logo" width={77} height={19} />
        </Link>

        {/* Navigation Links - Centered with Compact Background */}
        <div className="flex-1 flex justify-center">
          <div
            className={`${
              isMenuOpen
                ? 'flex flex-col justify-center items-center  bg-[#040810] absolute w-screen h-screen top-0 left-0 z-30 border-white border-1'
                : 'hidden md:inline-flex rounded-full bg-[#FFFFFF14] px-3'
            }`}
            id="navbar-sticky"
          >
            <div className="flex md:flex-row flex-col items-center justify-center text-center gap-4">
              <button className="text-white px-3 py-2 hover:bg-white/10 rounded-full transition-colors ">
                Product
              </button>
              <button
                className="text-white px-3 py-2 hover:bg-white/10 rounded-full transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/blogs');
                }}
              >
                Blog
              </button>
              <button
                className="text-white px-3 py-2 hover:bg-white/10 rounded-full transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/careers');
                }}
              >
                Careers
              </button>
              <button
                className="text-white px-3 py-2 hover:bg-white/10 rounded-full transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/about-us');
                }}
              >
                About
              </button>
            </div>

            {/* Mobile Menu Trial Button */}
            {isMenuOpen && (
              <button
                type="button"
                onClick={switchPage}
                className="text-white font-inter font-medium text-[14px] focus:outline-none rounded-[8px] text-sm px-4 py-2 text-center bg-[linear-gradient(0deg,rgba(4,124,252,0.12),rgba(4,124,252,0.12)),linear-gradient(180deg,rgba(4,124,252,0)_0%,rgba(4,124,252,0.32)_100%)] absolute bottom-10 flex items-center gap-2.5"
              >
                Get in touch
              </button>
            )}
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="flex md:order-2 z-40 space-x-3 md:space-x-0 rtl:space-x-reverse items-center gap-2 sm:gap-5">
          <button
            type="button"
            onClick={switchPage}
            className="text-white font-inter font-[500] text-[14px] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-[8px] text-sm px-6 py-3 text-center bg-[linear-gradient(0deg,rgba(4,124,252,0.12),rgba(4,124,252,0.12)),linear-gradient(180deg,rgba(4,124,252,0)_0%,rgba(4,124,252,0.32)_100%)] hidden md:flex items-center gap-2.5"
          >
            Get in touch
          </button>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open main menu'}</span>
            {isMenuOpen ? (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
