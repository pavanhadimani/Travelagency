"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, MapPin, Calendar, Compass } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const popularSearches = [
    { name: "Manali", type: "Destination", icon: MapPin },
    { name: "Maldives", type: "Package", icon: Compass },
    { name: "Kerala Backwaters", type: "Destination", icon: MapPin },
    { name: "Goa Beaches", type: "Package", icon: Compass },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex flex-col pt-20 px-4 md:px-12"
        >
          <div className="absolute top-6 right-6 md:top-10 md:right-12">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-3 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="container mx-auto max-w-4xl mt-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 text-accent" />
              <input
                type="text"
                placeholder="Search destinations, packages, or keywords..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-full py-6 pl-20 pr-8 text-xl md:text-2xl text-white placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors"
                autoFocus
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-12"
            >
              <h3 className="text-gray-400 font-medium tracking-widest uppercase text-sm mb-6">
                Popular Searches
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {popularSearches.map((item, index) => (
                  <Link
                    key={index}
                    href={`/search?q=${item.name.toLowerCase()}`}
                    onClick={onClose}
                    className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 p-4 rounded-2xl transition-all group"
                  >
                    <div className="bg-white/10 p-3 rounded-xl group-hover:bg-accent group-hover:text-white transition-colors text-gray-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-lg">{item.name}</h4>
                      <p className="text-gray-400 text-sm">{item.type}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
