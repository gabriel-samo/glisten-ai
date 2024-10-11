import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Glisten AI",
  description: "Demo project for linear-like styled website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="bg-[#070815] text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
