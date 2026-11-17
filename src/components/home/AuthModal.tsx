"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function AuthModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-md overflow-hidden bg-card rounded-2xl shadow-2xl border border-border"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-8">
            <h2 className="text-3xl font-bold font-heading mb-2">
              {isLogin ? "Welcome Back" : "Join VoyageX"}
            </h2>
            <p className="text-muted-foreground mb-8">
              {isLogin
                ? "Login to access your personalized travel plans."
                : "Create an account to start planning your next adventure."}
            </p>

            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              {!isLogin && (
                <div>
                  <label className="text-sm font-medium mb-1 block">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              )}
              <div>
                <label className="text-sm font-medium mb-1 block">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary/90 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-primary hover:underline"
              >
                {isLogin
                  ? "Don't have an account? Sign up"
                  : "Already have an account? Login"}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
