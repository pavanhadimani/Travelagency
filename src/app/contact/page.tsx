"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-[100px] -z-10 hidden lg:block" />

      <div className="container mx-auto px-6 md:px-12">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-foreground mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              We'd love to hear from you. Send us a message and our team will get back to you as soon as possible.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/3 w-full space-y-8"
          >
            <h2 className="text-3xl font-bold font-heading text-foreground mb-6">
              Get in Touch
            </h2>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-lg text-foreground mb-1">Our Location</h4>
                <p className="text-muted-foreground">BMTC Complex, Old Madiwala, Kuvempu Nagar, Stage 2, BTM Layout, Bengaluru, Karnataka 560068</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-lg text-foreground mb-1">Phone Number</h4>
                <p className="text-muted-foreground">6363646883</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-lg text-foreground mb-1">Email Address</h4>
                <p className="text-muted-foreground">hadimanipavan802@gmail.com</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-2/3 w-full bg-card p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-border"
          >
            <h3 className="text-2xl font-bold font-heading text-foreground mb-8">Send us a message</h3>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 0000000000"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Your Message</label>
                <textarea
                  rows={6}
                  placeholder="How can we help you..."
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-button font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg group mt-4"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
