"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import React from "react";

const destinations = [
  {
    id: "karnataka",
    country: "Karnataka, India",
    image: "https://images.unsplash.com/photo-1616606484004-5ef3cc46e39d?q=80&w=1000&auto=format&fit=crop",
    description: "Ancient temples, lush coffee plantations, and the vibrant city of Bengaluru.",
    rating: 4.8,
    price: "$600",
  },
  {
    id: "rajasthan",
    country: "Rajasthan, India",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1000&auto=format&fit=crop",
    description: "Majestic forts, opulent palaces, and the colorful culture of the desert.",
    rating: 4.9,
    price: "$700",
  },
  {
    id: "kerala",
    country: "Kerala, India",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1000&auto=format&fit=crop",
    description: "Tranquil backwaters, palm-lined beaches, and lush green hills.",
    rating: 4.9,
    price: "$650",
  },
  {
    id: "goa",
    country: "Goa, India",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop",
    description: "Pristine beaches, vibrant nightlife, and Portuguese heritage architecture.",
    rating: 4.7,
    price: "$500",
  }
];

function DestinationCard({ dest, index }: { dest: typeof destinations[0], index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(11,79,108,0.4)] hover:-translate-y-2 transition-all duration-300 cursor-pointer"
    >
      <div className="relative h-64 w-full overflow-hidden" style={{ transform: "translateZ(30px)" }}>
        <Image
          src={dest.image}
          alt={dest.country}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07121B]/90 via-[#07121B]/20 to-transparent pointer-events-none" />
        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-md border border-white/20">
          <Star className="w-4 h-4 text-[#FFD166] fill-[#FFD166]" />
          <span className="text-sm font-bold text-white">{dest.rating}</span>
        </div>
      </div>
      
      <div className="p-6" style={{ transform: "translateZ(40px)" }}>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-heading font-bold text-white group-hover:text-[#00A8E8] transition-colors drop-shadow-md">
            {dest.country}
          </h3>
          <p className="text-sm font-semibold text-[#FFD166] drop-shadow-md">From {dest.price}</p>
        </div>
        <p className="text-gray-300 text-sm line-clamp-2 mb-6">
          {dest.description}
        </p>
        
        <Link
          href={`/destinations/${dest.id}`}
          className="w-full py-3 rounded-xl bg-white/5 border border-white/20 text-white font-button font-medium flex items-center justify-center gap-2 group-hover:bg-[#0B4F6C] group-hover:border-[#0B4F6C] hover:shadow-[0_0_15px_rgba(0,168,232,0.5)] transition-all duration-300"
        >
          Explore <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function PopularDestinations() {
  return (
    <section id="destinations" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-4">
              Popular <span className="text-primary">Destinations</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore our highly curated selection of the most beautiful and sought-after locations around the globe.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              href="/destinations" 
              className="flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors group"
            >
              View all destinations 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 perspective-[1000px]">
          {destinations.map((dest, index) => (
            <DestinationCard key={dest.id} dest={dest} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
