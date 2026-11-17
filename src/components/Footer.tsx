import Link from "next/link";
import Image from "next/image";
import { Globe, Camera, MessageCircle, Video, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-darkBackground text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-24 h-24 overflow-hidden">
                <Image src="/pt.png" alt="Logo" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the world beyond your imagination. We curate ultra-premium, luxury travel experiences for the most discerning travelers.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Camera className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Video className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/destinations" className="hover:text-accent transition-colors">Destinations</Link></li>
              <li><Link href="/packages" className="hover:text-accent transition-colors">Tour Packages</Link></li>
              <li><Link href="/gallery" className="hover:text-accent transition-colors">Travel Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">Latest Blogs</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-white">Contact Info</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>BMTC Complex, Old Madiwala, Kuvempu Nagar,<br/>Stage 2, BTM Layout, Bengaluru, Karnataka 560068</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>636364683</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hadimanipavan802@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-white">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-white font-button py-3 rounded-lg transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} PT Worldwide. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
