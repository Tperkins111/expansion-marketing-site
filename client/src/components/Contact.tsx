/*
 * Design: Warm Futurism — Human-Centred Technology
 * Contact: Split layout — copy on left, form on right.
 * Warm cream card for form, teal/amber accents.
 * Form fields with subtle focus states. Friendly, inviting copy.
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate form submission
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! We'll be in touch soon.");
      setFormData({ name: "", email: "", service: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-cream-dark relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-teal/3 blur-3xl" />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-5/12 lg:pt-8"
          >
            <span className="inline-block text-sm font-semibold text-amber-dark tracking-wide uppercase mb-3">
              Get In Touch
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal leading-tight mb-5">
              Ready to get{" "}
              <span className="text-gradient-amber">started?</span>
            </h2>
            <p className="text-base md:text-lg text-charcoal-light/70 leading-relaxed mb-10">
              Tell us a bit about your business and what you're looking for. We'll
              get back to you within 24 hours with some initial thoughts — no
              obligation, no hard sell.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-teal" />
                </div>
                <div>
                  <div className="text-xs text-charcoal-light/50 mb-0.5">Email us</div>
                  <a
                    href="mailto:hello@expansionmarketing.co.uk"
                    className="text-sm font-medium text-charcoal hover:text-teal transition-colors"
                  >
                    hello@expansionmarketing.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-teal" />
                </div>
                <div>
                  <div className="text-xs text-charcoal-light/50 mb-0.5">Based in</div>
                  <span className="text-sm font-medium text-charcoal">
                    United Kingdom
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-teal" />
                </div>
                <div>
                  <div className="text-xs text-charcoal-light/50 mb-0.5">Prefer a call?</div>
                  <span className="text-sm font-medium text-charcoal">
                    Book via the form &rarr;
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full lg:w-7/12"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-2xl bg-white shadow-lg shadow-charcoal/[0.04] border border-border"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-charcoal mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-cream border border-border text-charcoal text-sm placeholder:text-charcoal-light/40 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal/40 transition-all duration-300"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-charcoal mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-cream border border-border text-charcoal text-sm placeholder:text-charcoal-light/40 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal/40 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-charcoal mb-1.5"
                >
                  What are you interested in?
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-cream border border-border text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal/40 transition-all duration-300 appearance-none"
                >
                  <option value="">Select a service...</option>
                  <option value="website">Rapid Website Build</option>
                  <option value="automation">AI Automation</option>
                  <option value="bespoke">Bespoke Solution</option>
                  <option value="multiple">Multiple / Not Sure</option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-charcoal mb-1.5"
                >
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-cream border border-border text-charcoal text-sm placeholder:text-charcoal-light/40 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal/40 transition-all duration-300 resize-none"
                  placeholder="Give us a brief overview of what you're looking for..."
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber text-charcoal font-display font-semibold text-base hover:bg-amber-dark transition-all duration-300 hover:shadow-lg hover:shadow-amber/20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>

              <p className="text-xs text-charcoal-light/40 text-center mt-4">
                We'll respond within 24 hours. Your information is never shared.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
