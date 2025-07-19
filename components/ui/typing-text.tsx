"use client"
import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number; // milliseconds per character
  className?: string;
  style?: React.CSSProperties;
}

export const TypingText = ({ text, speed = 80, className = "", style }: TypingTextProps) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!text) {
      setDisplayed("");
      return;
    }
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed((prev) => prev + text[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className} style={style} dir="rtl">{displayed}</span>
  );
}; 