/*
 * Design: Warm Futurism — Human-Centred Technology
 * Services: Three service cards with generated images, alternating layout.
 * Cards have depth (layered shadows, slight lift on hover). Staggered entrance.
 * Amber and teal accents. Conversational alternating left-right pattern.
 */
import { motion } from "framer-motion";
import { Globe, Bot, Wrench, ArrowRight } from "lucide-react";

const SERVICE_WEBSITES = "https://d2xsxph8kpxj0f.cloudfront.net/310419663026739184/g2KhUzpjQSpYo2KDcsUD7g/service-websites-KsD42M6bY6Axqv6VuXszH2.webp";
const SERVICE_AI = "https://d2xsxph8kpxj0f.cloudfront.net/310419663026739184/g2KhUzpjQSpYo2KDcsUD7g/service-ai-WjXGynE5JwLDQUF768uNPc.webp";
const SERVICE_BESPOKE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663026739184/g2KhUzpjQSpYo2KDcsUD7g/service-bespoke-G6g78bT8kAkGoS5RNkUH6k.webp";

const services = [
  {
    icon: Globe,
    title: "Rapid Website Builds",
    tagline: "Your online presence, launched fast.",
    description:
      "We design and build professional, conversion-focused websites that get your business online quickly. No months of waiting — just a sleek, modern site that works hard for you from day one. Whether you need a landing page, a full business site, or an e-commerce store, we deliver quality at speed.",
    features: ["Mobile-responsive design", "SEO-optimised from the start", "Fast turnaround times", "Ongoing support available"],
    image: SERVICE_WEBSITES,
    color: "teal" as const,
  },
  {
    icon: Bot,
    title: "AI Automation",
    tagline: "Let AI handle the repetitive stuff.",
    description:
      "Stop wasting hours on tasks that could run themselves. We help small businesses implement smart AI automation — from customer enquiries and email workflows to data processing and scheduling. You focus on growing your business while AI handles the rest.",
    features: ["Automated customer responses", "Smart email & scheduling workflows", "Data entry & processing", "Custom AI chatbots"],
    image: SERVICE_AI,
    color: "amber" as const,
  },
  {
    icon: Wrench,
    title: "Bespoke Solutions",
    tagline: "Custom tools built around your needs.",
    description:
      "Every business is different. When off-the-shelf software doesn't cut it, we build bespoke digital solutions tailored to your exact workflow. From internal dashboards and CRM integrations to custom calculators and booking systems — if it saves you time, we can build it.",
    features: ["Custom dashboards & tools", "System integrations", "Workflow automation", "Tailored to your business"],
    image: SERVICE_BESPOKE,
    color: "teal" as const,
  },
];

const colorMap = {
  teal: {
    iconBg: "bg-teal/10",
    iconText: "text-teal",
    tagBg: "bg-teal/8",
    tagText: "text-teal-dark",
    dot: "bg-teal",
  },
  amber: {
    iconBg: "bg-amber/10",
    iconText: "text-amber-dark",
    tagBg: "bg-amber/10",
    tagText: "text-amber-dark",
    dot: "bg-amber",
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-cream">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16 md:mb-20"
        >
          <span className="inline-block text-sm font-semibold text-amber-dark tracking-wide uppercase mb-3">
            What We Do
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-5">
            Three ways we help your business{" "}
            <span className="text-gradient-teal">grow</span>
          </h2>
          <p className="text-lg text-charcoal-light/70 leading-relaxed">
            We keep things simple. Pick what you need, or combine all three for a
            complete digital transformation.
          </p>
        </motion.div>

        {/* Service blocks — alternating layout */}
        <div className="flex flex-col gap-20 md:gap-28">
          {services.map((service, index) => {
            const isReversed = index % 2 !== 0;
            const colors = colorMap[service.color];
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`flex flex-col ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-10 lg:gap-16 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-amber/10 to-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                    <div className="relative overflow-hidden rounded-2xl shadow-lg shadow-charcoal/5 group-hover:shadow-xl group-hover:shadow-charcoal/10 transition-all duration-500">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.tagBg} mb-5`}>
                    <Icon size={16} className={colors.iconText} />
                    <span className={`text-xs font-semibold ${colors.tagText} uppercase tracking-wide`}>
                      {service.tagline}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-charcoal mb-4 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-base md:text-lg text-charcoal-light/75 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} shrink-0`} />
                        <span className="text-sm text-charcoal-light/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-dark transition-colors duration-300 group/link"
                  >
                    Let's talk about this
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
