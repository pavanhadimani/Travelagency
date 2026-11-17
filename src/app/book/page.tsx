"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Users, Hotel, DollarSign, Send } from "lucide-react";

export default function BookPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1920&auto=format&fit=crop"
          alt="Luxury Resort"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-4">
            Book Your <span className="text-accent">Dream Vacation</span>
          </h1>
          <p className="text-gray-200 text-lg">
            Tell us about your ideal journey, and our luxury concierges will craft a personalized itinerary just for you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-card rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-border relative overflow-hidden"
        >
          {isSubmitted ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold font-heading text-foreground mb-4">Request Received!</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Thank you for choosing VoyageX. One of our luxury travel experts will contact you within 24 hours to discuss your itinerary.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="bg-primary text-white px-8 py-3 rounded-full font-button hover:bg-primary/90 transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Trip Details Section */}
              <div>
                <h3 className="text-xl font-bold font-heading text-foreground mb-6 flex items-center gap-2 border-b border-border pb-2">
                  <MapPin className="w-5 h-5 text-primary" /> Trip Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Destination</label>
                    <input required type="text" placeholder="e.g. Maldives, Swiss Alps..." className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Hotel Type</label>
                    <div className="relative">
                      <Hotel className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <select className="w-full bg-background border border-border rounded-xl pl-12 pr-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none">
                        <option>5-Star Luxury Resort</option>
                        <option>Boutique Hotel</option>
                        <option>Overwater Bungalow</option>
                        <option>Luxury Safari Lodge</option>
                        <option>Private Villa</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Travel Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input required type="date" className="w-full bg-background border border-border rounded-xl pl-12 pr-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Return Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input required type="date" className="w-full bg-background border border-border rounded-xl pl-12 pr-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Guests Section */}
              <div>
                <h3 className="text-xl font-bold font-heading text-foreground mb-6 flex items-center gap-2 border-b border-border pb-2">
                  <Users className="w-5 h-5 text-primary" /> Guests
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Total Guests</label>
                    <input required type="number" min="1" placeholder="2" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Adults</label>
                    <input required type="number" min="1" placeholder="2" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Children (under 12)</label>
                    <input type="number" min="0" placeholder="0" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                  </div>
                </div>
              </div>

              {/* Preferences Section */}
              <div>
                <h3 className="text-xl font-bold font-heading text-foreground mb-6 flex items-center gap-2 border-b border-border pb-2">
                  <DollarSign className="w-5 h-5 text-primary" /> Preferences
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Estimated Budget (per person)</label>
                    <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none">
                      <option>₹50,000 - ₹1,00,000</option>
                      <option>₹1,00,000 - ₹2,00,000</option>
                      <option>₹2,00,000 - ₹5,00,000</option>
                      <option>₹5,00,000+</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Special Requests</label>
                    <textarea 
                      rows={1}
                      placeholder="Dietary requirements, celebrations, accessibility..." 
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" 
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-button font-bold text-lg py-5 rounded-2xl flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(11,79,108,0.5)] group"
                >
                  <span>Book Now</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-xs text-muted-foreground mt-4">
                  By clicking Book Now, you agree to our Terms of Service and Privacy Policy. No payment is required at this stage.
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
