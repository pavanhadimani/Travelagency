"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Search, User, Menu, X } from "lucide-react";
import SearchModal from "./SearchModal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const router = useRouter();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Destinations", href: "#destinations" },
    { name: "Packages", href: "#packages" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      
      if (pathname !== "/") {
        router.push("/" + href);
        return;
      }
      
      const element = document.getElementById(targetId);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 dark:bg-darkBackground/90 backdrop-blur-md border-b border-border shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group z-50">
            <div className="relative w-24 h-24 overflow-hidden">
              <Image src="/pt.png" alt="Logo" fill className="object-contain" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isScrolled ? "text-foreground" : "text-white/90"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className={`transition-colors hover:text-accent ${isScrolled ? "text-foreground" : "text-white"}`}
            >
              <Search className="w-5 h-5" />
            </button>
            <button className={`transition-colors hover:text-accent ${isScrolled ? "text-foreground" : "text-white"}`}>
              <User className="w-5 h-5" />
            </button>
            <Link
              href="/book"
              className="bg-primary hover:bg-primary/90 text-white font-button px-6 py-2.5 rounded-full transition-all hover:shadow-lg"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled || isMobileMenuOpen ? "text-foreground" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-foreground" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100vh", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="fixed inset-0 bg-background z-40 lg:hidden overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-2xl font-heading font-medium text-foreground hover:text-primary transition-colors"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsSearchOpen(true);
                  }}
                  className="text-2xl font-heading font-medium text-foreground hover:text-primary transition-colors"
                >
                  Search
                </button>
                <Link
                  href="/book"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-primary text-white font-button px-8 py-3 rounded-full mt-4"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
