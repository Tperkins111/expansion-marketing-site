/*
 * Design: Warm Futurism — Human-Centred Technology
 * Hero: Full-viewport with generated abstract background, warm overlays.
 * Large Outfit headline, DM Sans subtitle. Spring-based entrance animations.
 * Amber CTA button, teal secondary. Floating organic blob accents.
 */
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663026739184/g2KhUzpjQSpYo2KDcsUD7g/hero-bg-HUUwRrjYeC3D379ZDH7TCN.webp";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with warm overlay */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cream/85 via-cream/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-[15%] right-[10%] w-72 h-72 rounded-full bg-amber/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-[20%] left-[5%] w-96 h-96 rounded-full bg-teal/8 blur-3xl" />

      {/* Content */}
      <div className="container relative z-10 pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 border border-teal/20 mb-8"
          >
            <Sparkles size={16} className="text-teal" />
            <span className="text-sm font-medium text-teal-dark">
              Helping small businesses grow smarter
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal leading-[1.08] tracking-tight mb-6"
          >
            We Build, Automate
            <br />
            <span className="text-gradient-amber">&amp; Solve</span>{" "}
            <span className="text-charcoal-light">for Your</span>
            <br />
            Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-charcoal-light/80 leading-relaxed max-w-xl mb-10"
          >
            From rapid website builds to AI-powered automation and bespoke digital
            solutions — we help small businesses save time and scale faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-amber text-charcoal font-display font-semibold text-base hover:bg-amber-dark transition-all duration-300 hover:shadow-xl hover:shadow-amber/25 hover:-translate-y-0.5 group"
            >
              Get a Free Consultation
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-teal/30 text-teal-dark font-display font-semibold text-base hover:bg-teal/5 hover:border-teal/50 transition-all duration-300"
            >
              See What We Do
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 40C240 70 480 10 720 40C960 70 1200 10 1440 40V80H0V40Z"
            className="fill-cream"
          />
        </svg>
      </div>
    </section>
  );
}
