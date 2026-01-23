"use client";

import { motion } from "framer-motion";
import { Shield, ShieldAlert, Cpu, Terminal as TerminalIcon } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-[0.2em] mb-8"
        >
          <Shield className="w-4 h-4" />
          SYSTEM STATUS: ONLINE
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-black tracking-tighter mb-6"
        >
          ESCA <span className="text-primary glow-text">BYTE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-2xl text-foreground/60 max-w-2xl mx-auto mb-10 font-medium"
        >
          B.Sc. IT Student & <span className="text-primary/80">Security Researcher</span> specializing in reverse engineering and custom modding.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-primary text-primary-foreground font-bold tracking-widest hover:bg-primary/90 transition-all flex items-center gap-2"
          >
            <TerminalIcon className="w-5 h-5" />
            VIEW_REPO
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-primary/20 hover:border-primary/50 text-primary font-bold tracking-widest transition-all flex items-center gap-2"
          >
            <Cpu className="w-5 h-5" />
            INITIALIZE_CONTACT
          </a>
        </motion.div>

        {/* Status Indicators */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { label: "REVERSE_ENG", value: "ACTIVE", icon: ShieldAlert },
            { label: "VULN_RESEARCH", value: "ENABLED", icon: Cpu },
            { label: "SYSTEM_MOD", value: "STABLE", icon: TerminalIcon },
            { label: "GAME_SEC", value: "CRITICAL", icon: Shield },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="p-4 border border-primary/10 bg-primary/5"
            >
              <stat.icon className="w-5 h-5 text-primary/40 mb-2 mx-auto" />
              <div className="text-[10px] text-foreground/40 font-bold tracking-widest mb-1">{stat.label}</div>
              <div className="text-xs text-primary font-bold tracking-[0.2em]">{stat.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
