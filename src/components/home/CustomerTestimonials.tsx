"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    quote: "VoyageX arranged the most spectacular honeymoon for us in the Maldives. Every detail was meticulously planned, from the seaplane transfer to the private dining experiences.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    country: "Singapore",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote: "Our family trip to Japan was flawless. The local guides were incredibly knowledgeable and the luxury ryokan they selected for us in Kyoto was simply out of this world.",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    quote: "I've used many luxury travel agencies, but VoyageX stands above the rest. Their attention to detail and 24/7 concierge service during our Swiss Alps tour was unmatched.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Smith",
    country: "United States",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    quote: "An unforgettable safari in Kenya! The exclusive lodges they booked for us provided the perfect balance of luxury and authentic wilderness experience.",
    rating: 5,
  },
];

export default function CustomerTestimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with dark overlay for glassmorphism pop */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?q=80&w=1920&auto=format&fit=crop"
          alt="Beach Sunset"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
              What Our <span className="text-accent">Travellers</span> Say
            </h2>
            <p className="text-gray-300 text-lg">
              Read the stories of those who have experienced the VoyageX difference.
            </p>
          </motion.div>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="min-w-[85vw] md:min-w-[400px] snap-center bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-xl relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-white/10" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              
              <p className="text-white/90 leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent shrink-0">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    width={56} 
                    height={56} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="text-white font-heading font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
