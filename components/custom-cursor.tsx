"use client";

import type React from "react";
import { useEffect, useState } from "react";

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // إخفاء المؤشر الافتراضي عند تحميل المكون
    document.documentElement.style.cursor = "none";

    return () => {
      // إعادة المؤشر الافتراضي عند إزالة المكون
      document.documentElement.style.cursor = "default";
    };
  }, []);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorStyle = () => {
      const target = document.elementFromPoint(position.x, position.y);
      if (target instanceof Element) {
        setIsPointer(window.getComputedStyle(target).cursor === "pointer");
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("mousemove", updateCursorStyle);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("mousemove", updateCursorStyle);
    };
  }, [position.x, position.y]);

  return (
    <>
      <div
        className="pointer-events-none fixed left-0 top-0 z-50 h-4 w-4 rounded-full bg-[#FF6B00] transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px) scale(${isPointer ? 1.5 : 1})`,
        }}
      />
      <div
        className="pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 rounded-full border border-[#FF6B00] transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isPointer ? 1.5 : 1})`,
        }}
      />
    </>
  );
};
