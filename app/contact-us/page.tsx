"use client";

import ContactHero from "@/components/Contact.Hero";
import ContactFooter from "@/components/ContactFooter";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const ContactPage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <ContactFooter />
      <Footer />
    </div>
  );
};

export default ContactPage;
