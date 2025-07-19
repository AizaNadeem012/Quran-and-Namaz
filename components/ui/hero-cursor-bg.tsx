"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export function HeroCursorBg() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };
    const node = ref.current;
    if (node) node.addEventListener("mousemove", handleMouseMove);
    return () => { if (node) node.removeEventListener("mousemove", handleMouseMove); };
  }, [mouseX, mouseY]);

  const bgX = useTransform(springX, (v) => `calc(${v}px - 100px)`);
  const bgY = useTransform(springY, (v) => `calc(${v}px - 100px)`);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none z-0">
      <motion.div
        style={{
          position: "absolute",
          left: bgX,
          top: bgY,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "radial-gradient(circle at center, rgba(59,130,246,0.15) 0%, transparent 80%)",
          zIndex: 1,
        }}
      />
    </div>
  );
} 