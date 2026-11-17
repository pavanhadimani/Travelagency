"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, Star, MapPin, CheckCircle2 } from "lucide-react";

const packages = [

  {
    id: "maldives",
    title: "Maldives Luxury Resort",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop", // Maldives
    duration: "5 Days",
    price: "₹85,000",
    rating: 5.0,
    difficulty: "Easy",
    highlights: ["Overwater Villas", "Scuba Diving", "Sunset Cruise"],
  },
  {
    id: "kerala",
    title: "Kerala Backwaters Serenity",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop", // Kerala
    duration: "4 Days",
    price: "₹15,200",
    rating: 4.9,
    difficulty: "Easy",
    highlights: ["Houseboat Stay", "Ayurvedic Spa", "Munnar Tea Gardens"],
  },
  {
    id: "goa",
    title: "Goa Beach & Heritage",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop", // Goa
    duration: "5 Days",
    price: "₹12,800",
    rating: 4.7,
    difficulty: "Easy",
    highlights: ["Baga Beach", "Basilica of Bom Jesus", "Dudhsagar Falls"],
  }
];

export default function FeaturedTourPackages() {
  return (
    <section id="packages" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-4">
              Featured <span className="text-primary">Tour Packages</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Carefully crafted itineraries for those who seek the extraordinary.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-md">
                  <span className="font-bold text-primary text-lg">{pkg.price}</span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-secondary" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span>{pkg.difficulty}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span>{pkg.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold font-heading text-foreground mb-4 group-hover:text-primary transition-colors">
                  {pkg.title}
                </h3>
                
                <div className="space-y-2 mb-8">
                  {pkg.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto flex gap-4 pt-4 border-t border-border/50">
                  <Link
                    href={`/tours/${pkg.id}`}
                    className="flex-1 py-3 text-center border-2 border-primary text-primary font-button font-semibold rounded-xl hover:bg-primary hover:text-white transition-colors"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/book"
                    className="flex-1 py-3 text-center bg-primary text-white font-button font-semibold rounded-xl hover:bg-primary/90 hover:shadow-lg transition-all"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
