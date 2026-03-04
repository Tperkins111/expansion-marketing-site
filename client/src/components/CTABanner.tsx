/*
 * Design: Warm Futurism — Human-Centred Technology
 * CTA Banner: Full-width teal gradient with amber CTA.
 * Positioned between About and Contact for conversion push.
 * Organic blob decorations, bold headline.
 */
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-teal-dark via-teal to-teal-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-amber/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-3xl" />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-5">
            Stop spending time on things
            <br />
            <span className="text-amber-light">AI can do for you</span>
          </h2>
          <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-lg mx-auto">
            Whether it's a new website, smarter workflows, or a custom tool — the
            first step is always a conversation.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber text-charcoal font-display font-semibold text-base hover:bg-amber-light transition-all duration-300 hover:shadow-xl hover:shadow-amber/30 hover:-translate-y-0.5 group"
          >
            Book Your Free Consultation
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
