'use client';

import Avoi from '@/components/Avoi';
import Footer from '@/components/Footer';
import HeroComponent from '@/components/HeroComponent';
import Navbar from '@/components/Navbar';
import Personalize from '@/components/Personalize';
import Revoluntionalize from '@/components/Revolutionalize';
import Singularity from '@/components/Singularity';
import Technologies from '@/components/Technologies';

export default function Home() {
  return (
    <div className="flex flex-col w-screen min-h-screen">
      <Navbar />
      <HeroComponent />
      <Singularity />
      <Technologies />
      <Avoi />
      <Revoluntionalize />
      <Personalize />
      <Footer />
    </div>
  );
}
