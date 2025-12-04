import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Trendy UI Components",
  description: "A space where I build and showcase the latest modern, trending UI components and micro‑interaction modules inspired by today's design community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
