import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ibrahim Ahsan Suryajati — Software Engineer & UI/UX Designer",
  description:
    "Portfolio of Ibrahim Ahsan Suryajati, Software Engineering student at Politeknik Negeri Lampung focusing on Front-end Development, Software Architecture, and UI/UX Design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${caveat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-[#bef264] selection:text-indigo-950 font-sans">
        <div className="relative z-10 flex min-h-full flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
