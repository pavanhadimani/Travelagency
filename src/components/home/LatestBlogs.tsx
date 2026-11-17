"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight, User } from "lucide-react";

const blogs = [
  {
    id: "essential-packing",
    title: "The Ultimate Luxury Safari Packing List",
    excerpt: "Everything you need to know about packing for a high-end African safari without compromising on style or comfort.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop",
    author: "Emma Thompson",
    readTime: "5 min read",
    date: "Aug 12, 2026",
  },
  {
    id: "maldives-resorts",
    title: "Top 5 Overwater Villas in the Maldives",
    excerpt: "We review the most exclusive and luxurious overwater bungalows that offer unparalleled privacy and ocean views.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop",
    author: "James Carter",
    readTime: "8 min read",
    date: "Jul 28, 2026",
  },
  {
    id: "kyoto-autumn",
    title: "A Guide to Kyoto in Autumn",
    excerpt: "Experience the breathtaking beauty of Japan's ancient capital during the mesmerizing momiji (red maple) season.",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=800&auto=format&fit=crop",
    author: "Akiko Sato",
    readTime: "6 min read",
    date: "Jul 15, 2026",
  },
];

export default function LatestBlogs() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-4">
              Latest <span className="text-primary">Travel Stories</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Read tips, guides, and stories from our expert travel writers.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              href="/blog" 
              className="flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors group"
            >
              View all articles 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <Link href={`/blog/${blog.id}`} className="block relative h-60 w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </Link>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 font-medium uppercase tracking-wider">
                  <span>{blog.date}</span>
                  <div className="w-1 h-1 rounded-full bg-border" />
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                
                <Link href={`/blog/${blog.id}`}>
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                </Link>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 line-clamp-3">
                  {blog.excerpt}
                </p>
                
                <div className="mt-auto flex items-center justify-between border-t border-border/50 pt-6">
                  <div className="flex items-center gap-2 text-sm text-foreground font-medium">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <span>{blog.author}</span>
                  </div>
                  <Link 
                    href={`/blog/${blog.id}`} 
                    className="text-primary hover:text-secondary font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
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
