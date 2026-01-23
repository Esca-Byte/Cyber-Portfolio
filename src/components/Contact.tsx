"use client";

import { motion } from "framer-motion";
import { Mail, Youtube, Github, Linkedin, Send, MessageSquare } from "lucide-react";

export function Contact() {
  const socials = [
    { name: "YouTube", icon: Youtube, link: "#", handle: "Esca Byte" },
    { name: "GitHub", icon: Github, link: "#", handle: "esca-byte" },
    { name: "Discord", icon: MessageSquare, link: "#", handle: "Esca#0001" },
    { name: "LinkedIn", icon: Linkedin, link: "#", handle: "Esca Byte" },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-primary text-xs font-bold tracking-[0.3em] mb-4">ESTABLISH_CONNECTION // V3.0</div>
          <h2 className="text-4xl font-bold tracking-tighter">GET_IN_TOUCH</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6">Connect with me on social platforms or send a direct message.</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  className="p-6 border border-primary/10 bg-card hover:border-primary/40 transition-all flex items-center gap-4 group"
                >
                  <social.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-[10px] font-bold tracking-widest text-foreground/40">{social.name}</div>
                    <div className="text-sm font-bold">{social.handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 border border-primary/10 bg-card/50 space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-widest text-primary">SENDER_NAME</label>
              <input
                type="text"
                className="w-full bg-background border border-primary/20 p-3 text-sm focus:border-primary outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-widest text-primary">SENDER_EMAIL</label>
              <input
                type="email"
                className="w-full bg-background border border-primary/20 p-3 text-sm focus:border-primary outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-widest text-primary">MESSAGE_PAYLOAD</label>
              <textarea
                rows={4}
                className="w-full bg-background border border-primary/20 p-3 text-sm focus:border-primary outline-none transition-colors resize-none"
                placeholder="Type your message here..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-primary text-primary-foreground font-bold tracking-widest hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              TRANSMIT_DATA
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xs font-mono text-foreground/40 tracking-widest">
          © {new Date().getFullYear()} ESCA_BYTE. ALL_RIGHTS_RESERVED.
        </div>
        <div className="flex items-center gap-8 text-[10px] font-bold tracking-widest text-foreground/40">
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            SECURE_CONNECTION
          </span>
          <span>LATENCY: 24ms</span>
          <span>ENCRYPTION: AES-256</span>
        </div>
      </div>
    </footer>
  );
}
