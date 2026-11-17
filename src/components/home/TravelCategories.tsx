"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Trees, Mountain, Anchor, Heart, Tent, Sun, Camera, Users, Palmtree } from "lucide-react";

const categories = [
  { name: "Luxury", icon: Heart, count: 120 },
  { name: "Adventure", icon: Mountain, count: 85 },
  { name: "Family", icon: Users, count: 150 },
  { name: "Beach", icon: Palmtree, count: 90 },
  { name: "Wildlife", icon: Camera, count: 45 },
  { name: "Cruise", icon: Anchor, count: 30 },
  { name: "Solo", icon: Tent, count: 65 },
  { name: "Honeymoon", icon: Sun, count: 55 },
  { name: "Mountain", icon: Trees, count: 70 },
];

export default function TravelCategories() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-4">
              Explore by <span className="text-primary">Category</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Find the perfect journey based on your preferred travel style.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:justify-center">
          {categories.map((category, index) => {
            const Icon = category.icon;
            // The 9th item spans two columns on md/lg or centers itself
            const isLast = index === categories.length - 1;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={isLast ? "col-span-2 md:col-span-1 md:col-start-2 lg:col-auto" : ""}
              >
                <Link
                  href={`/category/${category.name.toLowerCase()}`}
                  className="flex flex-col items-center justify-center bg-card border border-border rounded-3xl p-8 hover:bg-primary hover:border-primary group transition-all duration-300 shadow-sm hover:shadow-lg h-full"
                >
                  <Icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300 mb-4" />
                  <h3 className="font-heading font-semibold text-foreground group-hover:text-white transition-colors text-lg mb-1">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm group-hover:text-white/80 transition-colors">
                    {category.count} Tours
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
