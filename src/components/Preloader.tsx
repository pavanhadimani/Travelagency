"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the majestic intro
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Reduced from 2500 to 500

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }} // Reduced duration
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
        >
          <div className="relative flex flex-col items-center justify-center text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }} // Removed delay, faster
              className="text-4xl md:text-6xl font-bold font-heading tracking-[0.2em] mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent to-white"
            >
              VOYAGEX
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
              className="text-sm md:text-base font-light tracking-[0.3em] uppercase text-gray-400"
            >
              Beyond Imagination
            </motion.div>
            
            <motion.div 
              className="mt-8 w-48 h-[1px] bg-white/10 relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="absolute inset-y-0 left-0 bg-accent"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-black to-black opacity-50"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
