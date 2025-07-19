"use client";
import { useEffect, useState } from "react";

interface CounterProps {
  to: number;
  decimals?: number;
  duration?: number; // milliseconds
  className?: string;
  suffix?: string;
}

export default function Counter({ to, decimals = 0, duration = 1200, className = "", suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = to / (duration / 16);
    let raf: number;

    function animate() {
      start += increment;
      if (start < to) {
        setCount(Number(start.toFixed(decimals)));
        raf = requestAnimationFrame(animate);
      } else {
        setCount(Number(to.toFixed(decimals)));
      }
    }
    animate();
    return () => cancelAnimationFrame(raf);
  }, [to, decimals, duration]);

  return <span className={className}>{count}{suffix}</span>;
} 