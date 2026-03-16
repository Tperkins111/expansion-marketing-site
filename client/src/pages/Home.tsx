import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Home() {
  usePageMeta({
    title: "Expansion Marketing | AI Automation & Digital Marketing Agency London",
    description: "Save your team hours every week with AI automation. London-based digital marketing agency offering automation, SEO, PPC, and web development.",
    canonical: "https://expansionmarketing.co.uk",
  });

  // Add Service Schema for SEO
  useEffect(() => {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI Automation & Digital Marketing Services",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Expansion Marketing"
      },
      "serviceType": [
        "AI Automation",
        "Business Process Automation",
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) Advertising",
        "Web Development",
        "Digital Marketing Strategy"
      ],
      "areaServed": {
        "@type": "Place",
        "name": "London, UK"
      }
    };

    let script = document.querySelector('script[type="application/ld+json"][data-service-schema]');
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-service-schema", "true");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(serviceSchema);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
