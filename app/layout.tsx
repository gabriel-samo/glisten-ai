import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glisten AI",
  description: "Demo project for linear-like styled website"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
