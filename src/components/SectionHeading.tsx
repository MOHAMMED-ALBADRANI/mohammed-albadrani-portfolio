"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : ""}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--primary-text))]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[hsl(var(--secondary-text))] text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-[hsl(var(--accent))] ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
