import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  // Margin offset so animations start slightly before the element is fully centered
  const isInView = useInView(ref, { once: false, margin: "-10% 0px -10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={isInView 
        ? { opacity: 1, scale: 1, y: 0 } 
        : { opacity: 0, scale: 0.95, y: 30 }
      }
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1], // Apple-like ease-out curve
        delay: delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};