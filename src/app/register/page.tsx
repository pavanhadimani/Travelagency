"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Lock, User, ArrowRight, Code } from "lucide-react";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-24 px-6">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-accent/5 rounded-r-[100px] -z-10 hidden md:block" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-primary/5 rounded-tl-[100px] -z-10 hidden md:block" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="bg-card border border-border rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden">
          <div className="text-center mb-10 relative z-10">
            <h1 className="text-3xl font-bold font-heading text-foreground mb-2">Create Account</h1>
            <p className="text-muted-foreground text-sm">Join VoyageX for exclusive luxury travel deals.</p>
          </div>

          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-background border border-border rounded-xl pl-12 pr-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full bg-background border border-border rounded-xl pl-12 pr-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-background border border-border rounded-xl pl-12 pr-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required 
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-white font-button font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg group"
            >
              <span>Create Account</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 relative z-10">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground tracking-wider">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <button className="flex items-center justify-center gap-2 bg-background border border-border hover:bg-muted py-3 rounded-xl transition-colors text-sm font-medium">
                <Image src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width={20} height={20} />
                Google
              </button>
              <button className="flex items-center justify-center gap-2 bg-background border border-border hover:bg-muted py-3 rounded-xl transition-colors text-sm font-medium">
                <Code className="w-5 h-5" />
                GitHub
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-primary hover:text-secondary transition-colors">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
