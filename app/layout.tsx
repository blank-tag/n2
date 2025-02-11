import type { Metadata } from "next";
import "./globals.css";
import { SparklesCore } from "@/components/SparklesCore";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Neurify - AI Innovations | Singularity & AnyVoice",
  description:
    "Neurify Technologies is an AI-driven company developing cutting-edge products like Singularity (our in-house LLM) and AnyVoice (an AI-powered phone caller).",
  keywords: [
    "Neurify",
    "Neurify Technologies",
    "Neurify Technologies Pvt Ltd",
    "Neurify Technologies Private Limited",
    "AI company",
    "LLM",
    "Singularity AI",
    "Singularity",
    "AnyVoice AI",
    "Anyvoice",
    "AI voice assistant",
    "AI phone caller",
    "Neurify AI",
  ].join(", "),
  icons: {
    icon: "/company_icon.svg",
  },
  // openGraph: {
  //   title: "Neurify - AI Innovations | Singularity & AnyVoice",
  //   description:
  //     "Discover Neurify Technologies' AI-powered solutions: Singularity (an in-house LLM) and AnyVoice (an AI-powered phone assistant).",
  //   url: "https://neurifytech.ai",
  //   siteName: "Neurify",
  //   images: [
  //     {
  //       url: "/neurify/neurifyLogo_s.svg",
  //       width: 1200,
  //       height: 630,
  //       alt: "Neurify",
  //     },
  //   ],
  //   type: "website",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-custom antialiased">
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Neurify Technologies Pvt. Ltd.",
            url: "https://neurifytech.ai",
            logo: "https://neurifytech.ai/neurifyLogo_s.svg",
            description:
              "Neurify Technologies is an AI-driven company developing Singularity (our in-house LLM) and AnyVoice (an AI-powered phone caller).",
            contactPoint: {
              "@type": "ContactPoint",
              email: "info@neurifytech.ai",
              contactType: "customer service",
            },
          })}
        </Script>
        <div className="relative w-full min-h-screen bg-slate-950 overflow-hidden">
          {/* Particle effect in the background */}
          <div className="fixed inset-0 w-full h-screen md:block hidden">
            {/* Particles for larger screens (tablet and desktop) */}
            <SparklesCore
              id="tsparticlesdesktop"
              background="transparent"
              minSize={1}
              maxSize={2}
              particleDensity={40}
              className="w-full h-full"
              particleColor="#FFFFFF"
              speed={0.75}
            />
          </div>
          {/* Main content */}
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
