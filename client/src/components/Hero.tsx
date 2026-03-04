/*
 * Design: Warm Futurism — Human-Centred Technology
 * Hero: Full-viewport with original generated abstract background image.
 * The image has a slow, breathing scale + pan animation for a living feel.
 * Floating gradient overlays drift independently for layered depth.
 * Large Outfit headline, DM Sans subtitle. Spring-based entrance animations.
 * Amber CTA button, teal secondary.
 */
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663026739184/g2KhUzpjQSpYo2KDcsUD7g/hero-bg-HUUwRrjYeC3D379ZDH7TCN.webp";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background image — slow zoom & drift */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.08, 1.04, 1.1, 1],
          x: [0, -15, 10, -5, 0],
          y: [0, -10, 5, -8, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover scale-110"
          loading="eager"
        />
      </motion.div>

      {/* Warm overlay gradients — these stay fixed so text is always readable */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream/85 via-cream/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />

      {/* Floating colour blobs that drift independently */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-amber/8 blur-3xl"
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "5%", right: "0%" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-teal/6 blur-3xl"
        animate={{
          x: [0, -40, 35, 0],
          y: [0, 25, -30, 0],
          scale: [1, 0.92, 1.1, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "10%", left: "-5%" }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-amber/5 blur-3xl"
        animate={{
          x: [0, 25, -20, 0],
          y: [0, -20, 18, 0],
          opacity: [0.5, 0.8, 0.4, 0.5],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "35%", left: "25%" }}
      />

      {/* Subtle particle dots floating upward */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-teal/15"
          animate={{
            y: [0, -50 - i * 15, 0],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: 7 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.2,
          }}
          style={{
            left: `${20 + i * 15}%`,
            top: `${45 + (i % 3) * 10}%`,
          }}
        />
      ))}

      {/* Content */}
      <div className="container relative z-10 pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 border border-teal/20 mb-8 backdrop-blur-sm"
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
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-teal/30 text-teal-dark font-display font-semibold text-base hover:bg-teal/5 hover:border-teal/50 transition-all duration-300 backdrop-blur-sm"
            >
              See What We Do
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 40C240 70 480 10 720 40C960 70 1200 10 1440 40V80H0V40Z"
            className="fill-cream"
          />
        </svg>
      </div>
    </section>
  );
}
