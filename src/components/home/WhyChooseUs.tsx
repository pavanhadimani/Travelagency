"use client";

import { motion } from "framer-motion";
import { DollarSign, Building, Compass, Headset, Briefcase, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Best Prices",
    description: "We guarantee the most competitive rates for luxury accommodations and premium flights."
  },
  {
    icon: Building,
    title: "Luxury Hotels",
    description: "Exclusive access to the world's most prestigious and highly-rated 5-star properties."
  },
  {
    icon: Compass,
    title: "Expert Guides",
    description: "Explore with knowledgeable local guides who reveal the hidden gems of every destination."
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description: "Our dedicated concierge team is available around the clock to assist you anywhere, anytime."
  },
  {
    icon: Briefcase,
    title: "Custom Packages",
    description: "Tailor-made itineraries designed specifically to match your unique preferences and desires."
  },
  {
    icon: ShieldCheck,
    title: "Safe Travel",
    description: "Comprehensive travel insurance and rigorous safety standards for complete peace of mind."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-4">
              Why <span className="text-primary">Choose Us</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We redefine luxury travel by offering unparalleled service, exclusive access, and meticulously crafted experiences.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
