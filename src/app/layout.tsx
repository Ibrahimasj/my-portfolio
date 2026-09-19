import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio — Software Engineering Student",
  description:
    "Personal portfolio of a Software Engineering student focused on Fullstack/Backend Development & Software Architecture.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#050811] text-slate-100 selection:bg-sky-500/25 selection:text-sky-200 relative overflow-x-hidden">
        {/* Ambient Global Glow Effects */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-48 left-1/2 -translate-x-1/2 h-[600px] w-[1100px] rounded-full bg-gradient-to-b from-blue-900/20 via-sky-950/15 to-transparent blur-[140px]" />
          <div className="absolute top-[40%] -left-64 h-[700px] w-[700px] rounded-full bg-blue-950/15 blur-[150px]" />
          <div className="absolute top-[75%] -right-64 h-[700px] w-[700px] rounded-full bg-indigo-950/20 blur-[160px]" />
        </div>
        <div className="relative z-10 flex min-h-full flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
