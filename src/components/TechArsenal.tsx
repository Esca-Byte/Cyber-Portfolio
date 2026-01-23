"use client";

import { motion } from "framer-motion";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Cpu, Zap, ShieldAlert, Crosshair } from "lucide-react";

const radarData = [
  { skill: "REVERSE_ENG", value: 95 },
  { skill: "ASSEMBLY", value: 85 },
  { skill: "C++", value: 90 },
  { skill: "GAME_MODDING", value: 92 },
  { skill: "SECURITY_RES", value: 80 },
  { skill: "PYTHON", value: 75 },
];

const powerLevels = [
  { name: "MEMORY_FORENSICS", level: 88, icon: Cpu },
  { name: "EXPLOIT_DEV", level: 82, icon: Zap },
  { name: "BINARY_ANALYSIS", level: 94, icon: ShieldAlert },
  { name: "HOOKING_METHODS", level: 90, icon: Crosshair },
];

export function TechArsenal() {
  return (
    <section id="arsenal" className="py-24 bg-primary/5 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-primary text-xs font-bold tracking-[0.3em] mb-4">CAPABILITIES_MANIFEST // AUTH_LEVEL_4</div>
          <h2 className="text-4xl font-bold tracking-tighter">THE_TECH_ARSENAL</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Radar Chart */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card/30 border border-primary/10 p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-full cyber-grid opacity-10" />
            
            <div className="relative h-[400px] w-full">
              <ChartContainer 
                config={{
                  value: {
                    label: "Power Level",
                    color: "oklch(0.7 0.2 145)",
                  }
                }}
                className="h-full w-full"
              >
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="oklch(0.7 0.2 145 / 0.2)" />
                  <PolarAngleAxis 
                    dataKey="skill" 
                    tick={{ fill: "oklch(0.7 0.2 145 / 0.6)", fontSize: 10, fontWeight: "bold" }} 
                  />
                  <Radar
                    name="Skills"
                    dataKey="value"
                    stroke="oklch(0.7 0.2 145)"
                    fill="oklch(0.7 0.2 145)"
                    fillOpacity={0.3}
                  />
                  <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                </RadarChart>
              </ChartContainer>
            </div>
            
            <div className="absolute bottom-4 right-4 text-[10px] font-mono text-primary/40">
              CORE_METRICS_VISUALIZATION
            </div>
          </motion.div>

          {/* Power Levels */}
          <div className="space-y-8">
            {powerLevels.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between text-xs font-bold tracking-widest uppercase">
                  <div className="flex items-center gap-3">
                    <skill.icon className="w-4 h-4 text-primary" />
                    <span>{skill.name}</span>
                  </div>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                
                <div className="h-2 bg-primary/10 border border-primary/20 relative overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    className="h-full bg-primary relative"
                  >
                    {/* Pulsing effect on the bar */}
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </motion.div>
                </div>
                
                <div className="flex justify-between text-[8px] font-mono text-foreground/30 uppercase tracking-tighter">
                  <span>INIT_PROTOCOL</span>
                  <span>SYS_STABLE</span>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="mt-12 p-6 bg-primary/5 border border-dashed border-primary/20 rounded-sm"
            >
              <p className="text-xs font-mono text-foreground/50 leading-relaxed">
                <span className="text-primary font-bold mr-2">[!]</span>
                Subject demonstrates exceptional proficiency in low-level architecture and binary manipulation. Recommended for high-stakes security research and custom framework development.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
