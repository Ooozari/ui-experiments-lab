"use client";
import { useState } from "react";

export function SlickHoverEffect({ text = "INSTAGRAM" }) {
  const [active, setActive] = useState(false);

  return (
    <div className="bg-[#111112] flex items-center justify-center p-6 rounded-xl border border-gray-200 shadow-sm">
    <div
      className="relative bg-[#d2ff00] inline-block cursor-pointer select-none overflow-hidden"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => setActive((p) => !p)} // mobile support
    >
      {text.split("").map((char, i) => (
        <span key={i} className="inline-block text-[#282c20] relative overflow-hidden">
          {/* Top Letter */}
          <span
            className="absolute left-0 top-0 inline-block"
            style={{
              transform: `translateY(${active ? "-100%" : "0%"})`,
              transition: `transform 0.3s ease-in-out`,
              transitionDelay: `${i * 0.03}s`,
            }}
          >
            {char}
          </span>

          {/* Bottom Letter */}
          <span
            className="inline-block"
            style={{
              transform: `translateY(${active ? "-100%" : "0%"})`,
              transition: `transform 0.3s ease-in-out`,
              transitionDelay: `${i * 0.03}s`,
            }}
          >
            {char}
          </span>
        </span>
      ))}
    </div>
    </div>
  );
}
