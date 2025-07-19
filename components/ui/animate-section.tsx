"use client"

import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

interface AnimateSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  from?: 'left' | 'right' | 'bottom';
}

export function AnimateSection({ children, className = "", delay = 0, from = 'bottom' }: AnimateSectionProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            x: from === 'left' ? 0 : from === 'right' ? 0 : undefined,
            y: from === 'bottom' ? 0 : undefined,
            transition: { duration: 0.7, delay },
          });
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls, delay, from]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: from === 'left' ? -40 : from === 'right' ? 40 : 0, y: from === 'bottom' ? 40 : 0 }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
} 