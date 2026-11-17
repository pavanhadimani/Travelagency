"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is included in your luxury tour packages?",
    answer: "Our luxury tour packages typically include 5-star or premium boutique accommodations, private airport transfers, curated local experiences with expert guides, some exclusive dining reservations, and 24/7 concierge support during your trip. International flights are generally quoted separately unless specified.",
  },
  {
    question: "Can I customize a featured tour package?",
    answer: "Absolutely. Our featured packages serve as inspiration. Our expert travel designers will work closely with you to tailor every aspect of the itinerary—from the pace of travel to specific activities and hotel preferences—to ensure it perfectly matches your desires.",
  },
  {
    question: "What level of support do I have while traveling?",
    answer: "You will have 24/7 access to our dedicated concierge team via phone, email, and WhatsApp. Whether you need a last-minute restaurant reservation, face a flight delay, or require medical assistance, we are always available to help ensure your trip remains flawless.",
  },
  {
    question: "Do you offer travel insurance?",
    answer: "Yes, we highly recommend travel insurance for all our clients. We partner with top-tier insurance providers to offer comprehensive coverage that includes trip cancellation, medical emergencies, and lost baggage. Our team will present you with the best options during the booking process.",
  },
  {
    question: "How far in advance should I book my trip?",
    answer: "For peak seasons (like European summers, African safaris, or holidays), we recommend booking 6 to 9 months in advance to secure the best accommodations and exclusive experiences. However, we can often accommodate last-minute requests depending on availability.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Everything you need to know about traveling with VoyageX. Can't find the answer you're looking for?
            </p>
            <div className="mb-6 space-y-2 text-foreground font-medium">
              <p>Support Contact:</p>
              <p className="text-muted-foreground">Name: pavan.s.h</p>
              <p className="text-muted-foreground">Phone: 636364668</p>
              <p className="text-muted-foreground">Email: hadimanipavan802@gmail.com</p>
            </div>
            <a 
              href="/contact" 
              className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-button font-medium px-8 py-3 rounded-full transition-colors"
            >
              Contact Support
            </a>
          </motion.div>

          <div className="lg:w-2/3">
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border border-border bg-card rounded-2xl overflow-hidden shadow-sm"
                  >
                    <button
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="font-heading font-semibold text-lg text-foreground pr-8">
                        {faq.question}
                      </span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-muted text-foreground'}`}>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-2 text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
