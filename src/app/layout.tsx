'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import TopLeftImgCard from "@/globalComponents/cards/TopLeftImgCard";
import Navbar from "@/globalComponents/navbar/Navbar";
import Header from "@/globalComponents/navbar/Header";
import { AnimatePresence, motion } from 'framer-motion';
import Transition from "@/globalComponents/cards/Transition";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`inter.className  min-h-screen text-white bg-customGradient bg-cover `}>
        <AnimatePresence mode="wait">
          <motion.div className="h-full">
            <Transition />
            {/* <TopLeftImgCard /> */}
            <Navbar />
            <Header />
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}