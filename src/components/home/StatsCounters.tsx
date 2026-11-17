"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Users, Map, Globe, Award } from "lucide-react";

const stats = [
  { id: 1, name: "Happy Travelers", value: 25000, suffix: "+", icon: Users },
  { id: 2, name: "Destinations", value: 150, suffix: "+", icon: Map },
  { id: 3, name: "Countries", value: 50, suffix: "+", icon: Globe },
  { id: 4, name: "Years Experience", value: 15, suffix: "+", icon: Award },
];

export default function StatsCounters() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 relative overflow-hidden bg-[#07121B] border-y border-white/10">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B4F6C]/20 via-transparent to-[#0B4F6C]/20 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(11,79,108,0.3)]">
                <stat.icon className="w-8 h-8 text-[#FFD166]" />
              </div>
              
              <div className="text-4xl md:text-5xl font-bold font-heading text-white mb-2 tracking-tight">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} separator="," />
                ) : (
                  "0"
                )}
                <span className="text-[#00A8E8]">{stat.suffix}</span>
              </div>
              
              <div className="text-sm md:text-base font-medium text-gray-400 uppercase tracking-widest">
                {stat.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
