"use client";

import { motion } from "framer-motion";
import { Terminal, Github, Youtube, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-40 border-b border-primary/20 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-primary animate-pulse" />
            <span className="text-xl font-bold tracking-tighter text-primary">
              ESCA_BYTE<span className="animate-blink">_</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium tracking-widest"
                >
                  [{link.name}]
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-primary/20 pb-4 px-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-foreground/70 hover:text-primary text-sm font-medium tracking-widest"
            >
              [{link.name}]
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
