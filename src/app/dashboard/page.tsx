"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Plane, Heart, CreditCard, Settings, LogOut, MapPin, Calendar, Clock, DollarSign } from "lucide-react";

const bookings = [
  {
    id: "BKG-8892",
    destination: "Swiss Alps Grand Tour",
    date: "Sep 15, 2026",
    status: "Confirmed",
    amount: "$3,200",
    image: "https://images.unsplash.com/photo-1527668752968-14ce70a6c761?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "BKG-4451",
    destination: "Maldives Overwater Villa",
    date: "Jan 10, 2026",
    status: "Completed",
    amount: "$5,400",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=400&auto=format&fit=crop"
  }
];

const wishlist = [
  {
    id: "japan-blossom",
    title: "Japan Cherry Blossom Route",
    price: "$4,100",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "safari-kenya",
    title: "Masai Mara Safari Experience",
    price: "$2,800",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=400&auto=format&fit=crop"
  }
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("bookings");

  return (
    <div className="min-h-screen bg-muted pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/4"
          >
            <div className="bg-card border border-border rounded-3xl p-6 shadow-sm sticky top-28">
              <div className="flex flex-col items-center mb-8">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-muted mb-4">
                  <Image 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" 
                    alt="Profile" 
                    width={96} 
                    height={96} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground">John Doe</h3>
                <p className="text-muted-foreground text-sm">john.doe@example.com</p>
              </div>

              <nav className="space-y-2">
                <button 
                  onClick={() => setActiveTab("bookings")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${activeTab === "bookings" ? "bg-primary text-white" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
                >
                  <Plane className="w-5 h-5" /> My Bookings
                </button>
                <button 
                  onClick={() => setActiveTab("wishlist")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${activeTab === "wishlist" ? "bg-primary text-white" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
                >
                  <Heart className="w-5 h-5" /> Wishlist
                </button>
                <button 
                  onClick={() => setActiveTab("invoices")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${activeTab === "invoices" ? "bg-primary text-white" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
                >
                  <CreditCard className="w-5 h-5" /> Invoices
                </button>
                <button 
                  onClick={() => setActiveTab("settings")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${activeTab === "settings" ? "bg-primary text-white" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
                >
                  <Settings className="w-5 h-5" /> Settings
                </button>
                <div className="pt-4 mt-4 border-t border-border">
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-destructive/10 transition-colors font-medium">
                    <LogOut className="w-5 h-5" /> Sign Out
                  </button>
                </div>
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-3/4"
          >
            {activeTab === "bookings" && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-heading text-foreground mb-6">My Bookings</h2>
                {bookings.map((booking) => (
                  <div key={booking.id} className="bg-card border border-border rounded-2xl p-4 md:p-6 shadow-sm flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
                    <div className="relative w-full md:w-48 h-48 md:h-auto rounded-xl overflow-hidden shrink-0">
                      <Image src={booking.image} alt={booking.destination} fill sizes="(max-width: 768px) 100vw, 192px" className="object-cover" />
                    </div>
                    <div className="flex-grow flex flex-col justify-center">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold font-heading text-foreground">{booking.destination}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${booking.status === "Confirmed" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"}`}>
                          {booking.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">Booking ID: {booking.id}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-sm text-foreground font-medium">
                          <Calendar className="w-4 h-4 text-primary" /> {booking.date}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-foreground font-medium">
                          <DollarSign className="w-4 h-4 text-primary" /> {booking.amount}
                        </div>
                      </div>
                      
                      <div className="flex gap-3 mt-auto">
                        <button className="px-4 py-2 bg-primary text-white font-medium rounded-lg text-sm hover:bg-primary/90 transition-colors">View Details</button>
                        <button className="px-4 py-2 border border-border text-foreground font-medium rounded-lg text-sm hover:bg-muted transition-colors">Download Invoice</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "wishlist" && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-heading text-foreground mb-6">My Wishlist</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {wishlist.map((item) => (
                    <div key={item.id} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                      <div className="relative h-48 w-full">
                        <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md text-red-500 hover:bg-red-50 transition-colors">
                          <Heart className="w-4 h-4 fill-current" />
                        </button>
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold font-heading text-foreground text-lg mb-2">{item.title}</h3>
                        <p className="text-primary font-semibold mb-4">{item.price}</p>
                        <button className="w-full py-2 border border-primary text-primary font-medium rounded-xl hover:bg-primary hover:text-white transition-colors text-sm">
                          Book Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Additional tabs can go here */}
            {(activeTab === "invoices" || activeTab === "settings") && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <Clock className="w-16 h-16 text-muted-foreground mb-4 opacity-20" />
                <h2 className="text-2xl font-bold font-heading text-foreground mb-2">Coming Soon</h2>
                <p className="text-muted-foreground max-w-md">This section is currently under development. Check back later for updates.</p>
              </div>
            )}

          </motion.div>
        </div>
      </div>
    </div>
  );
}
