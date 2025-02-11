"use client";

import CareersHero from "@/components/Careers.Hero";
import JobAccordion from "@/components/JobAccordion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Careers = () => {
  return (
    <div className="w-full">
      <Navbar />
      <CareersHero />
      <JobAccordion />
      <Footer />
    </div>
  );
};

export default Careers;
