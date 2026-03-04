/*
 * Design: Warm Futurism — Human-Centred Technology
 * About: Warm, conversational section that builds trust.
 * Asymmetric layout with stats/social proof. Cream background.
 * Organic shapes, warm tones. Trust-building copy.
 */
import { motion } from "framer-motion";
import { Zap, Clock, Users, Shield } from "lucide-react";

const stats = [
  { icon: Zap, value: "Fast", label: "Turnaround on every project" },
  { icon: Clock, value: "24/7", label: "Your automations never sleep" },
  { icon: Users, value: "SME", label: "Focused — we know small business" },
  { icon: Shield, value: "Honest", label: "Blunt advice that saves you money" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-96 h-96 rounded-full bg-amber/5 blur-3xl" />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-center">
          {/* Left — Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-5/12"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-5 rounded-2xl bg-white shadow-sm shadow-charcoal/[0.03] border border-border hover:shadow-md hover:shadow-charcoal/[0.06] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-3">
                      <Icon size={20} className="text-teal" />
                    </div>
                    <div className="font-display font-bold text-2xl text-charcoal mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-charcoal-light/60 leading-snug">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full lg:w-7/12"
          >
            <span className="inline-block text-sm font-semibold text-amber-dark tracking-wide uppercase mb-3">
              About Us
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal leading-tight mb-6">
              We only succeed{" "}
              <span className="text-gradient-teal">when you do</span>
            </h2>

            <div className="space-y-4 text-base md:text-lg text-charcoal-light/75 leading-relaxed">
              <p>
                Expansion Marketing was built on a simple idea: small businesses
                deserve the same quality digital tools as the big players — without
                the big price tag or the six-month timeline.
              </p>
              <p>
                We're selective about who we work with, and that's a good thing. It
                means when we take on your project, we're fully committed to making
                it work. We don't do cookie-cutter solutions or vanity metrics. If
                something isn't going to move the needle for your business, we'll
                tell you straight.
              </p>
              <p>
                Whether you need a website that actually converts, AI automation
                that frees up your day, or a custom tool that solves a problem
                nobody else has cracked — we've got the expertise and the drive to
                make it happen.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-amber text-charcoal font-display font-semibold text-sm hover:bg-amber-dark transition-all duration-300 hover:shadow-lg hover:shadow-amber/20"
              >
                Let's Have a Chat
              </a>
              <span className="text-sm text-charcoal-light/50">
                No commitment, no hard sell.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
