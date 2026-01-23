"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code, Layers, Shield } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Free Fire Mod Panel & KeyAuth Integration",
      description: "A comprehensive panel featuring secure authentication, including login and registration systems, developed as part of a technical tutorial series.",
      tech: ["C++", "Unity", "KeyAuth API"],
      icon: Shield,
    },
    {
      title: "Game Reverse Engineering Tools",
      description: "A repository of scripts and tools focused on analyzing and modifying game binaries, demonstrating core concepts in software security and modding.",
      tech: ["Python", "Assembly"],
      icon: Code,
    },
    {
      title: "Scrims Management System",
      description: "An automated point-tracking and rule-management system designed for hosting Free Fire esports tournaments (Scrims).",
      tech: ["JavaScript", "Node.js"],
      icon: Layers,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-primary/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-primary text-xs font-bold tracking-[0.3em] mb-4">DEPLOYED_WORKS // V2.4</div>
            <h2 className="text-4xl font-bold tracking-tighter">FEATURED_PROJECTS</h2>
          </div>
          <p className="text-foreground/40 text-sm max-w-xs font-mono">
            [TOTAL_REPOS: 03] [STATUS: ACTIVE]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-card border border-primary/10 hover:border-primary/40 transition-all p-8 flex flex-col h-full"
            >
              <div className="mb-6">
                <project.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold tracking-widest text-primary/60 border border-primary/20 px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <button className="text-xs font-bold tracking-widest flex items-center gap-2 text-foreground/40 hover:text-primary transition-colors">
                    <Github className="w-4 h-4" /> REPO
                  </button>
                  <button className="text-xs font-bold tracking-widest flex items-center gap-2 text-foreground/40 hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" /> DEMO
                  </button>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/20 group-hover:border-primary/60 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
