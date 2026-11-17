"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-[100px] -z-10 hidden lg:block" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Contact Info / Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 w-full"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-6">
              Start Your <span className="text-primary">Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md">
              Ready to plan the trip of a lifetime? Get in touch with our travel experts to start crafting your bespoke itinerary today.
            </p>
            
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-lg border border-border group">
              {/* Fake Google Map Placeholder */}
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <span className="text-gray-400 dark:text-gray-500 font-medium">Interactive Map</span>
              </div>
              
              {/* Map overlay content */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-black/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
                <h4 className="font-heading font-bold text-foreground text-lg mb-1">PAVAN.S..HADIMANI</h4>
                <p className="text-primary text-sm font-bold mb-1">📞 +91 636364683</p>
                <p className="text-muted-foreground text-sm mt-2">BMTC Complex, Old Madiwala, Kuvempu Nagar, Stage 2, BTM Layout, Bengaluru, Karnataka 560068</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Action */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 w-full bg-card p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-border flex flex-col items-center justify-center text-center h-full min-h-[400px]"
          >
            <h3 className="text-3xl font-bold font-heading text-foreground mb-6">Need to reach out?</h3>
            <p className="text-muted-foreground mb-10 max-w-sm">
              Whether you have a question about our packages, need help with booking, or just want to say hello, we are here for you.
            </p>
            <Link 
              href="/contact" 
              className="w-full max-w-sm bg-primary hover:bg-primary/90 text-white font-button font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg group"
            >
              <span>Send us a message</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
