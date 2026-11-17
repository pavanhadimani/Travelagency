"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import EarthScene from "@/components/3d/EarthScene";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !contentRef.current) return;

    gsap.to(contentRef.current, {
      y: 150,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#07121B]">
      {/* Background 3D Earth */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <EarthScene />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07121B]/40 via-transparent to-[#07121B]/90 pointer-events-none" />
      </div>

      <div ref={contentRef} className="container relative z-10 mx-auto px-6 md:px-12 pt-20 flex flex-col items-center text-center pointer-events-none">
        {/* Main Headings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-tight mb-6 drop-shadow-lg">
            Explore the World <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
              Beyond Your Imagination
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 font-light drop-shadow-md">
            Discover unforgettable journeys curated by travel experts.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <Link
            href="/tours"
            className="bg-primary hover:bg-primary/90 text-white font-button px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(11,79,108,0.5)] flex items-center justify-center"
          >
            Explore Tours
          </Link>
          <Link
            href="/book"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-button px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105 flex items-center justify-center"
          >
            Book Your Trip
          </Link>
        </motion.div>

        {/* Animated Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="w-full max-w-5xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 md:p-6 shadow-2xl"
        >
          <form action="/search" className="flex flex-col md:flex-row items-center gap-4">
            {/* Destination */}
            <div className="flex-1 w-full bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3 hover:bg-white/10 transition-colors">
              <MapPin className="w-6 h-6 text-accent shrink-0" />
              <div className="flex flex-col text-left w-full">
                <label className="text-xs text-gray-300 font-medium uppercase tracking-wider">Destination</label>
                <select 
                  name="destination"
                  className="bg-transparent border-none text-white focus:outline-none w-full font-medium appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled className="text-black">Where are you going?</option>
                  <option value="manali" className="text-black">Manali, India</option>
                  <option value="maldives" className="text-black">Maldives</option>
                  <option value="kerala" className="text-black">Kerala, India</option>
                  <option value="goa" className="text-black">Goa, India</option>
                  <option value="dubai" className="text-black">Dubai, UAE</option>
                  <option value="paris" className="text-black">Paris, France</option>
                </select>
              </div>
            </div>

            {/* Travel Date */}
            <div className="flex-1 w-full bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3 hover:bg-white/10 transition-colors">
              <Calendar className="w-6 h-6 text-accent shrink-0" />
              <div className="flex flex-col text-left w-full">
                <label className="text-xs text-gray-300 font-medium uppercase tracking-wider">Travel Date</label>
                <input 
                  type="date" 
                  name="date"
                  className="bg-transparent border-none text-white placeholder:text-gray-400 focus:outline-none w-full font-medium cursor-pointer [color-scheme:dark]"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="flex-1 w-full bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3 hover:bg-white/10 transition-colors">
              <Users className="w-6 h-6 text-accent shrink-0" />
              <div className="flex flex-col text-left w-full">
                <label className="text-xs text-gray-300 font-medium uppercase tracking-wider">Guests</label>
                <input 
                  type="number" 
                  name="guests"
                  min="1"
                  max="20"
                  placeholder="How many?" 
                  className="bg-transparent border-none text-white placeholder:text-gray-400 focus:outline-none w-full font-medium"
                />
              </div>
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="w-full md:w-auto h-full min-h-[72px] bg-primary hover:bg-primary/90 text-white rounded-2xl px-8 flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(11,79,108,0.5)] group"
            >
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-button font-medium">Search</span>
            </button>
          </form>
        </motion.div>
      </div>

      {/* Floating Travel Cards - Make them pointer events auto so they can be hovered */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:flex absolute top-1/4 right-10 z-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl items-center gap-4 shadow-xl pointer-events-auto"
      >
        <Image src="https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=200&auto=format&fit=crop" alt="Dubai Safari" width={60} height={60} className="rounded-xl object-cover h-[60px] w-[60px]" />
        <div>
          <h4 className="text-white font-heading font-semibold text-sm">Dubai Safari</h4>
          <p className="text-accent text-xs">⭐ 4.9 (2.4k reviews)</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden lg:flex absolute bottom-1/4 left-10 z-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl items-center gap-4 shadow-xl pointer-events-auto"
      >
        <Image src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=200&auto=format&fit=crop" alt="Paris Getaway" width={60} height={60} className="rounded-xl object-cover h-[60px] w-[60px]" />
        <div>
          <h4 className="text-white font-heading font-semibold text-sm">Paris Getaway</h4>
          <p className="text-accent text-xs">⭐ 4.8 (1.8k reviews)</p>
        </div>
      </motion.div>
    </section>
  );
}
