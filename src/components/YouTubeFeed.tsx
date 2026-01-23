"use client";

import { motion } from "framer-motion";
import { Youtube, Play, ExternalLink, Radio } from "lucide-react";

const videos = [
  {
    title: "How to Integrate KeyAuth in C++ Mod Menu",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    views: "12K",
    date: "2 days ago",
    link: "https://www.youtube.com/@esca.bytes07",
    category: "TUTORIAL",
  },
  {
    title: "Reverse Engineering Free Fire: Part 1",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800",
    views: "8.5K",
    date: "1 week ago",
    link: "https://www.youtube.com/@esca.bytes07",
    category: "RESEARCH",
  },
  {
    title: "Building a Scrims Management Bot with Node.js",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800",
    views: "5.2K",
    date: "2 weeks ago",
    link: "https://www.youtube.com/@esca.bytes07",
    category: "DEVELOPMENT",
  },
];

export function YouTubeFeed() {
  return (
    <section id="transmissions" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-right from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 text-primary text-xs font-bold tracking-[0.3em] mb-4">
              <Radio className="w-4 h-4 animate-pulse" /> LIVE_TRANSMISSIONS // YT.CHANNEL
            </div>
            <h2 className="text-4xl font-bold tracking-tighter">TECHNICAL_INSIGHTS</h2>
          </div>
          <a 
            href="https://www.youtube.com/@esca.bytes07" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-xs font-bold tracking-widest text-primary hover:text-primary/80 transition-colors bg-primary/5 border border-primary/20 px-4 py-2"
          >
            <Youtube className="w-4 h-4" /> SUBSCRIBE_TO_CHANNEL
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-card/50 border border-primary/10 hover:border-primary/40 transition-all overflow-hidden"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-full text-background shadow-lg shadow-primary/20">
                    <Play className="w-6 h-6 fill-current" />
                  </div>
                </div>
                <div className="absolute top-2 left-2 px-2 py-1 bg-background/80 backdrop-blur-sm text-[10px] font-bold text-primary border border-primary/20">
                  {video.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                
                <div className="flex items-center justify-between text-foreground/40 text-[10px] font-mono uppercase tracking-widest">
                  <span>{video.views} VIEWS</span>
                  <span>{video.date}</span>
                </div>

                <div className="mt-6 pt-6 border-t border-primary/5 flex items-center justify-between">
                  <a 
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-bold text-primary/60 hover:text-primary transition-colors"
                  >
                    WATCH_NOW <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-[10px] font-mono text-foreground/20">ESCABYTE_SRC</span>
                </div>
              </div>

              {/* Scanline effect on card hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-5 transition-opacity bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
