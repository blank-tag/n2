/* eslint-disable @next/next/no-img-element */
'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Blogs = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className=" text-white">
        {/* Adjust padding-top to account for Navbar height */}
        <div
          className="relative h-[250px] md:h-[300px] flex items-end justify-center pt-16 md:pt-20"
          style={{
            backgroundImage: `url('https://www.csoonline.com/wp-content/uploads/2023/07/Blog-5_AI_Article-Image.jpg?resize=2048%2C1068&quality=50&strip=all')`,
            backgroundRepeat: 'no-repeat', // Prevents repeating
            backgroundSize: 'cover', // Ensures the image covers the entire div
            backgroundPosition: 'center', // Centers the image
          }}
        >
          <div className="text-bottom">
            <h1 className="text-3xl md:text-5xl font-bold">Tech Giants Unveil Cutting-Edge AI Innovations</h1>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="px-6 md:px-20 py-8 md:py-12">
          <div className="text-lg">
            <h2 className="font-semibold text-2xl md:text-3xl mb-4">Introduction</h2>
            <p className="leading-relaxed">
              Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping
              patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in
              healthcare, from revolutionizing diagnostic accuracy to enhancing patient outcomes.
            </p>
            <hr className="border-t border-gray-700 my-8" />
          </div>
        </div>

        {/* Blog Content Section */}
        <div className="px-6 md:px-20 py-8 md:py-12">
          {/* Article 1 */}
          <div>
            <h2 className="font-semibold text-2xl md:text-3xl mb-4">Artificial Intelligence (AI)</h2>
            <p className="leading-relaxed mb-6">
              Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no
              exception. The integration of AI in healthcare is ushering in a new era of medical practice, where
              machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes
              and the efficiency of the healthcare system. In this blog post, we will delve into the diverse
              applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the
              ethical considerations surrounding this revolutionary technology.
            </p>

            {/* Blog Image */}
            <div className="w-full rounded-lg overflow-hidden mb-8">
              <img src="/neurify/blog-banner.png" alt="AI Innovations" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Article 2 */}
          <div>
            <h2 className="font-semibold text-2xl md:text-3xl mb-4">Predictive Analytics and Disease Prevention</h2>
            <p className="leading-relaxed">
              One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have
              demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans.
              They can identify anomalies and deviations that might be overlooked by the human eye. This is particularly
              valuable in early disease detection. For instance, AI can aid radiologists in detecting minute
              irregularities in mammograms or identifying critical findings in chest X-rays, potentially indicative of
              life-threatening conditions.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
