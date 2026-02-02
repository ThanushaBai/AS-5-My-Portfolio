"use client";

import { Pixelify_Sans } from "next/font/google";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black z-50 px-10 py-4 flex justify-between items-center border-b border-gray-700">
      <h1 className={`text-orange-500 font-bold text-xl ${pixelify.className}`}>
        thanusha.
      </h1>

      <div className="flex gap-6 text-sm">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#activities">Activities</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
