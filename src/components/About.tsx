"use client";

import { motion } from "framer-motion";
import { Code2, Binary, ShieldCheck, Zap } from "lucide-react";

export function About() {
  const skills = [
    { name: "REVERSE ENGINEERING", level: 85, icon: Binary },
    { name: "C++ / ASSEMBLY", level: 80, icon: Code2 },
    { name: "SECURITY ANALYSIS", level: 75, icon: ShieldCheck },
    { name: "MODDING SOLUTIONS", level: 90, icon: Zap },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-primary text-xs font-bold tracking-[0.3em] mb-4">IDENT_BIO // V1.0</div>
            <h2 className="text-4xl font-bold tracking-tighter mb-8">
              A first-year B.Sc. IT student and developer specializing in <span className="text-primary">game reverse engineering</span>.
            </h2>
            <p className="text-foreground/60 leading-relaxed mb-8">
              I focus on creating secure systems and sharing technical insights through my YouTube channel, Esca Byte. My passion lies in understanding how software works at its lowest levels and developing custom solutions for complex technical challenges.
            </p>
            <div className="p-6 border-l-2 border-primary bg-primary/5">
              <p className="italic text-foreground/80">
                "Reverse engineering is not just about taking things apart; it's about understanding the core logic to build something better and more secure."
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 border border-primary/10 bg-card/50 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <skill.icon className="w-5 h-5 text-primary" />
                    <span className="text-xs font-bold tracking-widest">{skill.name}</span>
                  </div>
                  <span className="text-primary text-xs font-mono">{skill.level}%</span>
                </div>
                <div className="h-1 bg-primary/10 w-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-primary"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
