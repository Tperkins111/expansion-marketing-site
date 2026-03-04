/*
 * Design: Warm Futurism — Human-Centred Technology
 * Process: 4-step horizontal timeline on desktop, vertical on mobile.
 * Dark section for contrast. Teal connecting lines, amber step numbers.
 * Staggered entrance animations.
 */
import { motion } from "framer-motion";
import { MessageSquare, Search, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery Call",
    description:
      "We start with a free, no-pressure chat about your business. What are your goals? What's eating up your time? We listen first.",
  },
  {
    icon: Search,
    number: "02",
    title: "Strategy & Plan",
    description:
      "We map out exactly what you need — whether that's a new website, an automation workflow, or a custom tool. Clear scope, clear timeline.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Build & Deliver",
    description:
      "We get to work. You'll see progress throughout, not just at the end. We iterate based on your feedback until it's exactly right.",
  },
  {
    icon: HeartHandshake,
    number: "04",
    title: "Ongoing Support",
    description:
      "We don't disappear after launch. Whether you need tweaks, training, or new features down the line, we're here for you.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-dark-section relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-amber/5 blur-3xl" />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <span className="inline-block text-sm font-semibold text-amber-light tracking-wide uppercase mb-3">
            How It Works
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-5">
            Simple process,{" "}
            <span className="text-gradient-amber">real results</span>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">
            No jargon, no endless meetings. Just a straightforward path from where
            you are to where you want to be.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="relative group"
              >
                {/* Connecting line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] h-px bg-gradient-to-r from-teal/30 to-transparent" />
                )}

                <div className="relative p-6 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.07] hover:border-white/[0.12] transition-all duration-500 group-hover:-translate-y-1">
                  {/* Step number */}
                  <span className="font-display font-bold text-5xl text-amber/15 absolute top-4 right-5 select-none">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-teal/15 flex items-center justify-center mb-5 group-hover:bg-teal/25 transition-colors duration-300">
                    <Icon size={22} className="text-teal-light" />
                  </div>

                  <h3 className="font-display font-semibold text-xl text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
