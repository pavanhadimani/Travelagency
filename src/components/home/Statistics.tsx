"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

function Counter({ from, to, duration = 2, suffix = "", decimals = 0 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate: (value) => {
          setValue(value);
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  const stats = [
    { label: "Happy Travellers", value: 10000, suffix: "+", decimals: 0 },
    { label: "Destinations", value: 250, suffix: "+", decimals: 0 },
    { label: "Countries", value: 50, suffix: "+", decimals: 0 },
    { label: "Customer Rating", value: 4.9, suffix: "★", decimals: 1 },
  ];

  return (
    <section className="py-20 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-border/50">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-bold font-heading text-primary mb-2">
                <Counter from={0} to={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <p className="text-gray-500 font-medium text-sm md:text-base uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
