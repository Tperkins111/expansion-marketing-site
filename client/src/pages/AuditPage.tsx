import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function AuditPage() {
  usePageMeta({
    title: "Free Automation Audit | Expansion Marketing",
    description: "Get a free 20-minute review of your business operations. Identify automation opportunities that could save your team hours every week.",
    canonical: "https://expansionmarketing.co.uk/audit",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    challenge: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/audit-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      const data = await response.json();
      setSubmitted(true);
      setFormData({ name: "", email: "", company: "", challenge: "" });
      toast.success(data.message);
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-cream-dark to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-teal/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-amber/5 blur-3xl" />

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl"
            >
              <span className="inline-block text-sm font-semibold text-teal tracking-wide uppercase mb-3">
                Free Automation Audit
              </span>
              <h1 className="font-display font-bold text-4xl md:text-5xl text-charcoal leading-tight mb-5">
                How much time could you actually save?
              </h1>
              <p className="text-lg text-charcoal-light/70 leading-relaxed mb-8">
                We'll do a quick review of your operations — 20 minutes, no commitment. 
                Just honest observations about where automation could cut your admin overhead 
                and free up your team to do what actually moves the needle.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-charcoal-light/80">
                  <CheckCircle2 size={20} className="text-teal shrink-0" />
                  <span>20-minute process review</span>
                </div>
                <div className="flex items-center gap-3 text-charcoal-light/80">
                  <CheckCircle2 size={20} className="text-teal shrink-0" />
                  <span>Specific recommendations tailored to your business</span>
                </div>
                <div className="flex items-center gap-3 text-charcoal-light/80">
                  <CheckCircle2 size={20} className="text-teal shrink-0" />
                  <span>No obligation — genuinely</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {submitted ? (
                <div className="bg-teal/10 border border-teal/30 rounded-xl p-8 md:p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-teal/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} className="text-teal" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-charcoal mb-2">
                    Got it!
                  </h3>
                  <p className="text-charcoal-light/70 mb-6">
                    We'll review your submission and get back to you within 24 hours with some 
                    initial thoughts. If we think there's a genuine fit, we'll suggest a brief call to dig deeper.
                  </p>
                  <p className="text-sm text-charcoal-light/60">
                    Cheers,<br />
                    The Expansion Marketing team
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-charcoal-light/20 rounded-lg bg-white focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all text-charcoal placeholder-charcoal-light/40"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-charcoal-light/20 rounded-lg bg-white focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all text-charcoal placeholder-charcoal-light/40"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-2">
                      Company / business name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-charcoal-light/20 rounded-lg bg-white focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all text-charcoal placeholder-charcoal-light/40"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="challenge" className="block text-sm font-medium text-charcoal mb-2">
                      What's your main operational challenge right now?
                    </label>
                    <textarea
                      id="challenge"
                      name="challenge"
                      value={formData.challenge}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-charcoal-light/20 rounded-lg bg-white focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all text-charcoal placeholder-charcoal-light/40 resize-none"
                      placeholder="E.g. 'We spend hours each week on quote follow-ups and admin' or 'Our team is drowning in manual data entry'"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-3 bg-teal text-white font-semibold rounded-lg hover:bg-teal/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 group"
                  >
                    {loading ? "Submitting..." : "Request Free Audit"}
                    {!loading && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                  </button>

                  <p className="text-xs text-charcoal-light/50 text-center">
                    We respect your privacy. Your data is safe with us.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-charcoal to-charcoal/90 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-teal blur-3xl" />
          </div>

          <div className="container relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
                Not sure if automation is right for you?
              </h2>
              <p className="text-lg text-white/70 max-w-xl mx-auto">
                That's exactly what the free audit is for. We'll tell you honestly whether 
                it makes sense for your business. No pressure either way.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
