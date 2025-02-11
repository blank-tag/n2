'use client';

import CareersHero from '@/components/Careers.Hero';
import JobAccordion from '@/components/JobAccordion';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const ContactPage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <CareersHero />
      <JobAccordion />
      <Footer />
    </div>
  );
};

export default ContactPage;
