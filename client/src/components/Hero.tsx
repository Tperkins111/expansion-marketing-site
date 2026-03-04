/*
 * Design: Warm Futurism — Human-Centred Technology
 * Hero: Full-viewport with animated flowing SVG waves in warm tones.
 * Multiple layered wave paths animate independently with different speeds.
 * Large Outfit headline, DM Sans subtitle. Spring-based entrance animations.
 * Amber CTA button, teal secondary. Floating organic blob accents.
 */
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

function AnimatedWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base warm gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-dark/60 to-cream" />

      {/* Animated wave layers — each moves at a different speed for depth */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Wave 1 — deep teal, slow, back layer */}
        <motion.path
          d="M-100,600 C200,500 400,700 700,550 C1000,400 1200,650 1540,500 L1540,900 L-100,900 Z"
          fill="oklch(0.48 0.1 195 / 0.06)"
          animate={{
            d: [
              "M-100,600 C200,500 400,700 700,550 C1000,400 1200,650 1540,500 L1540,900 L-100,900 Z",
              "M-100,550 C200,650 400,500 700,600 C1000,500 1200,550 1540,600 L1540,900 L-100,900 Z",
              "M-100,620 C200,480 400,680 700,520 C1000,450 1200,620 1540,530 L1540,900 L-100,900 Z",
              "M-100,600 C200,500 400,700 700,550 C1000,400 1200,650 1540,500 L1540,900 L-100,900 Z",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Wave 2 — amber glow, medium speed */}
        <motion.path
          d="M-100,650 C150,550 350,750 650,600 C950,450 1150,700 1540,580 L1540,900 L-100,900 Z"
          fill="oklch(0.78 0.15 75 / 0.07)"
          animate={{
            d: [
              "M-100,650 C150,550 350,750 650,600 C950,450 1150,700 1540,580 L1540,900 L-100,900 Z",
              "M-100,680 C150,720 350,560 650,680 C950,550 1150,600 1540,650 L1540,900 L-100,900 Z",
              "M-100,620 C150,580 350,720 650,560 C950,500 1150,680 1540,600 L1540,900 L-100,900 Z",
              "M-100,650 C150,550 350,750 650,600 C950,450 1150,700 1540,580 L1540,900 L-100,900 Z",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Wave 3 — teal highlight, faster, mid layer */}
        <motion.path
          d="M-100,700 C200,620 450,780 720,660 C990,540 1200,720 1540,640 L1540,900 L-100,900 Z"
          fill="oklch(0.58 0.08 195 / 0.08)"
          animate={{
            d: [
              "M-100,700 C200,620 450,780 720,660 C990,540 1200,720 1540,640 L1540,900 L-100,900 Z",
              "M-100,720 C200,760 450,640 720,730 C990,620 1200,660 1540,710 L1540,900 L-100,900 Z",
              "M-100,680 C200,640 450,760 720,640 C990,570 1200,740 1540,660 L1540,900 L-100,900 Z",
              "M-100,700 C200,620 450,780 720,660 C990,540 1200,720 1540,640 L1540,900 L-100,900 Z",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Wave 4 — warm amber, front layer */}
        <motion.path
          d="M-100,750 C180,680 400,800 680,720 C960,640 1180,780 1540,700 L1540,900 L-100,900 Z"
          fill="oklch(0.78 0.15 75 / 0.05)"
          animate={{
            d: [
              "M-100,750 C180,680 400,800 680,720 C960,640 1180,780 1540,700 L1540,900 L-100,900 Z",
              "M-100,770 C180,800 400,700 680,770 C960,700 1180,720 1540,760 L1540,900 L-100,900 Z",
              "M-100,740 C180,700 400,790 680,700 C960,660 1180,770 1540,720 L1540,900 L-100,900 Z",
              "M-100,750 C180,680 400,800 680,720 C960,640 1180,780 1540,700 L1540,900 L-100,900 Z",
            ],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Wave 5 — subtle cream/white, very front */}
        <motion.path
          d="M-100,800 C250,740 500,830 750,770 C1000,710 1250,800 1540,760 L1540,900 L-100,900 Z"
          fill="oklch(0.97 0.01 90 / 0.6)"
          animate={{
            d: [
              "M-100,800 C250,740 500,830 750,770 C1000,710 1250,800 1540,760 L1540,900 L-100,900 Z",
              "M-100,810 C250,830 500,760 750,810 C1000,760 1250,770 1540,800 L1540,900 L-100,900 Z",
              "M-100,790 C250,760 500,820 750,760 C1000,730 1250,810 1540,770 L1540,900 L-100,900 Z",
              "M-100,800 C250,740 500,830 750,770 C1000,710 1250,800 1540,760 L1540,900 L-100,900 Z",
            ],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Floating orbs for extra depth */}
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-amber/8 blur-3xl"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "10%", right: "5%" }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-teal/6 blur-3xl"
        animate={{
          x: [0, -30, 25, 0],
          y: [0, 20, -25, 0],
          scale: [1, 0.95, 1.08, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "15%", left: "0%" }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-amber/5 blur-3xl"
        animate={{
          x: [0, 20, -15, 0],
          y: [0, -20, 15, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "40%", left: "30%" }}
      />

      {/* Subtle particle dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-teal/20"
          animate={{
            y: [0, -60 - i * 10, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 6 + i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
          style={{
            left: `${15 + i * 14}%`,
            top: `${50 + (i % 3) * 12}%`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated wave background */}
      <AnimatedWaves />

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
    </section>
  );
}
