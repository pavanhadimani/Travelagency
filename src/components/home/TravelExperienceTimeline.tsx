"use client";

import { motion } from "framer-motion";
import { MousePointerClick, CalendarDays, PlaneTakeoff, Compass, Camera } from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    title: "1. Booking",
    description: "Browse our exclusive collections and securely book your dream vacation in just a few clicks.",
  },
  {
    icon: CalendarDays,
    title: "2. Planning",
    description: "Our luxury concierges will curate a personalized itinerary tailored to your exact preferences.",
  },
  {
    icon: PlaneTakeoff,
    title: "3. Travel",
    description: "Enjoy a seamless, premium travel experience with VIP access and private transfers.",
  },
  {
    icon: Compass,
    title: "4. Explore",
    description: "Discover the world's most breathtaking destinations with our expert local guides.",
  },
  {
    icon: Camera,
    title: "5. Memories",
    description: "Return home with unforgettable memories and stories that will last a lifetime.",
  },
];

export default function TravelExperienceTimeline() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-4">
              Your <span className="text-primary">Journey</span> With Us
            </h2>
            <p className="text-muted-foreground text-lg">
              We ensure every step of your travel experience is effortless, luxurious, and completely unforgettable.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-border z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex flex-col items-center text-center relative"
                >
                  {/* Timeline Dot/Icon */}
                  <div className="w-20 h-20 bg-background border-4 border-border rounded-full flex items-center justify-center mb-6 group hover:border-primary transition-colors duration-300 shadow-md">
                    <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
