/*
 * Design: Warm Futurism — Human-Centred Technology
 * Testimonials: Auto-rotating carousel with manual navigation.
 * Cream background, warm card styling, quote marks as decorative element.
 * Staggered entrance animations. Star ratings in amber.
 */
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Bloom Interiors",
    text: "Expansion Marketing built our website in under two weeks and it looks incredible. We went from having no online presence to getting enquiries within days of launching. They made the whole process painless.",
    service: "Rapid Website Build",
    rating: 5,
  },
  {
    name: "James Thornton",
    role: "Director, Thornton Logistics",
    text: "We were drowning in manual data entry and email follow-ups. The AI automation they set up has saved us roughly 15 hours a week. It's like having an extra team member that never sleeps.",
    service: "AI Automation",
    rating: 5,
  },
  {
    name: "Priya Kapoor",
    role: "Owner, The Wellness Collective",
    text: "We needed a custom booking system that integrated with our existing tools. Off-the-shelf solutions didn't fit, but Expansion built something bespoke that works exactly how we need it to. Brilliant.",
    service: "Bespoke Solution",
    rating: 5,
  },
  {
    name: "Tom Brennan",
    role: "Managing Director, Brennan & Co",
    text: "What I appreciated most was the honesty. They told us what we actually needed rather than trying to upsell us. The website they delivered has genuinely improved our conversion rate.",
    service: "Rapid Website Build",
    rating: 5,
  },
  {
    name: "Lucy Chen",
    role: "Operations Manager, GreenLeaf Supplies",
    text: "The automation workflows they built for our order processing have been transformative. What used to take half a day now happens automatically. I wish we'd done this sooner.",
    service: "AI Automation",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const testimonial = testimonials[current];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 md:py-28 bg-warm-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-teal/4 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-amber/5 blur-3xl" />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block text-sm font-semibold text-amber-dark tracking-wide uppercase mb-3">
            Testimonials
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight">
            What our clients{" "}
            <span className="text-gradient-teal">say about us</span>
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[320px] md:min-h-[280px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="relative p-8 md:p-10 rounded-2xl bg-white shadow-lg shadow-charcoal/[0.04] border border-border">
                  {/* Decorative quote mark */}
                  <Quote
                    size={48}
                    className="absolute top-6 right-8 text-amber/15 rotate-180"
                    strokeWidth={1.5}
                  />

                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="text-amber fill-amber"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-base md:text-lg text-charcoal-light/80 leading-relaxed mb-8 relative z-10">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Avatar placeholder with initials */}
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-teal to-teal-light flex items-center justify-center shrink-0">
                        <span className="text-white font-display font-semibold text-sm">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <div className="font-display font-semibold text-charcoal text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-charcoal-light/60">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>

                    {/* Service badge */}
                    <span className="hidden sm:inline-block text-xs font-medium px-3 py-1.5 rounded-full bg-amber/10 text-amber-dark">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-charcoal-light/60 hover:text-teal hover:border-teal/30 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-teal"
                      : "w-2 bg-charcoal-light/20 hover:bg-charcoal-light/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-charcoal-light/60 hover:text-teal hover:border-teal/30 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
