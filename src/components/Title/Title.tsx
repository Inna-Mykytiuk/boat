"use client";
import { motion } from "framer-motion";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function Title({ children, className = "" }: TitleProps) {
  return (
    <motion.h1
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      className={`title relative gradient-text font-bold text-[70px]  font-comforta text-center tracking-tighter leading-tight uppercase ${className}`}
    >
      {children}
    </motion.h1>
  );
}
