"use client";

import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Notify from "@/utils/Notify";
import { formDataType } from "@/types/component.types";
import { Toaster } from "react-hot-toast";

const BASEURL: string | undefined = process.env.NEXT_PUBLIC_BACKEND_BASEURL;

const Footer = () => {
  const [form, setForm] = useState<formDataType>({
    fullName: "",
    company: "",
    email: "",
    query: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!BASEURL) {
      console.error("Environmental variables are missing!");
      Notify("Environment set-up error!", "error");
      return;
    } else if (
      form.email === "" ||
      form.company === "" ||
      form.fullName === "" ||
      form.query === ""
    ) {
      console.log("first");
      Notify("Please provide all the form details!", "error");
      return;
    }

    try {
      const res = await axios.post(`${BASEURL}/neurify/miscellaneous/mail`, {
        fullName: form.fullName,
        company: form.company,
        to: form.email,
        query: form.query,
      });
      if (res.status === 201) {
        Notify("Email sent successfully!", "success");
      }
    } catch (error: unknown) {
      Notify(error + "" || "Something went wrong!", "error");
    }

    setForm({
      fullName: "",
      company: "",
      email: "",
      query: "",
    });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className=" bg-[#040810]/75">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col gap-4 md:flex-row px-2 py-10 bg-[url('/neurify/bg_shape_color_footer.png')]">
          {/* Form Section */}
          <form
            onSubmit={handleSubmit}
            className="flex mx-auto flex-col px-4 py-8 text-white border border-[#282D45] w-[90%] sm:w-[80%] bg-[#0E1330] md:w-1/3 gap-4 rounded-xl"
          >
            <h1 className="py-2 text-lg text-white">Let&apos;s get in touch</h1>
            <input
              type="text"
              name="fullName"
              placeholder="Your Name"
              value={form.fullName}
              onChange={handleChange}
              className="px-2 py-2 border outline-none rounded-3xl border-[#282D45] bg-[#0E1330] placeholder:text-[#47507A]"
            />
            <input
              type="text"
              name="company"
              placeholder="Your company Name"
              value={form.company}
              onChange={handleChange}
              className="px-2 py-2 border outline-none rounded-3xl border-[#282D45] bg-[#0E1330] placeholder:text-[#47507A]"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="px-2 py-2 border outline-none rounded-3xl border-[#282D45] bg-[#0E1330] placeholder:text-[#47507A]"
            />
            <textarea
              name="query"
              placeholder="Enter your query"
              value={form.query}
              onChange={handleChange}
              className="px-2 py-2 border outline-none rounded-3xl border-[#282D45] bg-[#0E1330] min-h-36 placeholder:text-[#47507A]"
            />
            <input
              type="submit"
              value="Shake hands"
              className="px-3 py-3 text-white bg-primary-blue rounded-3xl cursor-pointer"
            />
          </form>

          {/* Links Section */}

          <div className="w-[90%] sm:w-[80%] mx-auto hidden md:block bg-[url('/Bg shape color.png')]">
            <div className="flex w-full gap-6 sm:flex-row text-base justify-evenly text-[#8F9BB7]">
              <div className="flex flex-col gap-2 w-1/2 md:w-auto">
                <h1 className="py-2 text-lg">Pages</h1>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact-us">Contact</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/careers">Careers</Link>
              </div>

              <div className="flex flex-col gap-2 w-1/2 md:w-auto">
                <h1 className="py-2 text-lg">Services</h1>
                <Link href="#">AI Product Development</Link>
                <Link href="#">Large Language Models</Link>
                <Link href="#">Automation Tools</Link>
                <Link href="#">Data Pipelines</Link>
              </div>
              <div className="flex flex-col gap-2 w-1/2 md:w-auto">
                <h1 className="py-2 text-lg">Business Features</h1>
                <Link href="#">Neurify Features One</Link>
                <Link href="#">Model Fine-Tuning</Link>
                <Link href="#">Sales & Customer Service Smart Agents</Link>
              </div>
            </div>
            <div className="px-2 py-2 mt-4 hidden md:block ">
              <Image
                src="/neurify/neurify_logo_footer.png"
                alt="Neurify Logo"
                width={400}
                height={200}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full ">
        <div className=" md:hidden relative bg-transparent">
          <div className=" relative overflow-hidden w-[90%] sm:w-[80%] ml-9">
            {/* First Row: Pages and Services */}
            <div className="flex w-full gap-6 flex-wrap sm:flex-nowrap text-base justify-start text-[#8F9BB7] bg-[url('/Bg shape color.png')]">
              {/* Pages Section */}
              <div className="flex flex-col gap-2 relative z-10">
                <h1 className="py-2 text-lg text-white">Pages</h1>
                <Link
                  href="/"
                  className="transition-all duration-300 hover:text-white hover:underline"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="transition-all duration-300 hover:text-white hover:underline"
                >
                  About
                </Link>
                <Link
                  href="/contact-us"
                  className="transition-all duration-300 hover:text-white hover:underline"
                >
                  Contact
                </Link>
                <Link
                  href="/careers"
                  className="transition-all duration-300 hover:text-white hover:underline"
                >
                  Careers
                </Link>
                <Link
                  href="/blog"
                  className="transition-all duration-300 hover:text-white hover:underline"
                >
                  Blog
                </Link>
              </div>
              <div className="absolute top-10 left-10 w-[242px] h-[242px] z-0 bg-[#0c1f33] blur-[1500px] animate-pulse opacity-70"></div>
              {/* Services Section */}
              <div className="flex flex-col gap-2 ml-5 relative z-10">
                <h1 className="py-2 text-lg text-white">Services</h1>
                <Link
                  href="#"
                  className="transition-all duration-300 hover:text-white hover:underline"
                >
                  AI Product Development
                </Link>
                <Link
                  href="#"
                  className="transition-all duration-300 hover:text-white hover:underline"
                >
                  Large Language Models
                </Link>
                <Link
                  href="#"
                  className="transition-all duration-300 hover:text-white hover:underline"
                >
                  Automation Tools
                </Link>
                <Link
                  href="#"
                  className="transition-all duration-300 hover:text-white hover:underline"
                >
                  Data Pipelines
                </Link>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-[242px] h-[242px]  bg-[#0c1f33] blur-[1500px] animate-pulse opacity-70"></div>

            {/* Second Row: Business Features */}
            <div className="flex flex-col gap-2 mb-4 w-full md:w-auto mt-6 text-base justify-center text-[#8F9BB7] relative z-10">
              <h1 className="py-2 text-lg text-white">Business Features</h1>
              <Link
                href="#"
                className="transition-all duration-300 hover:text-white hover:underline"
              >
                Neurify Features One
              </Link>
              <Link
                href="#"
                className="transition-all duration-300 hover:text-white hover:underline"
              >
                Model Fine-Tuning
              </Link>
              <Link
                href="#"
                className="transition-all duration-300 hover:text-white hover:underline"
              >
                Sales & Customer Service Smart Agents
              </Link>
            </div>

            {/* Footer Logo Section */}
            <div className="px-2 py-2 mt-4 hidden md:block relative z-10">
              <Image
                src="/neurify/neurify_logo_footer.png"
                alt="Neurify Logo"
                width={400}
                height={200}
                className="mx-auto hover:opacity-80 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Footer Copyright Section */}
      <div className="w-full border border-[#282D45]"></div>
      <div className="flex flex-col md:flex-row bg-black items-center justify-around gap-6 py-6">
        {/* Logo Section */}
        <div>
          <Image
            src="/NeurifyIcon.svg"
            alt="Neurify Icon"
            width={150}
            height={80}
          />
        </div>

        {/* Text Section */}
        <div className="text-md text-center text-white sm:text-sm max-w-[347px] md:max-w-full">
          Copyright © {new Date().getFullYear()} | Reserved by Neurify
          Technologies
        </div>

        {/* Socials Section */}
        <div className="flex justify-center gap-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/neurify.ai/"
          >
            <Image
              src="/neurify/icons/fb.svg"
              alt="Facebook"
              width={34}
              height={34}
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/neurifytech"
          >
            <Image
              src="/neurify/icons/x.svg"
              alt="Twitter"
              width={34}
              height={34}
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/neurify-technologies-private-limited"
          >
            <Image
              src="/neurify/icons/linkedin.svg"
              alt="LinkedIn"
              width={34}
              height={34}
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/neurify.ai/"
          >
            <Image
              src="/neurify/icons/insta.svg"
              alt="Instagram"
              width={34}
              height={34}
            />
          </a>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Footer;
