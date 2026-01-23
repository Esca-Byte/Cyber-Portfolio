import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Esca Byte | Security Researcher & IT Student",
  description: "Portfolio of Esca Byte, a B.Sc. IT student and developer specializing in game reverse engineering and security research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-mono`}
      >
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="scanline" />
        </div>
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
