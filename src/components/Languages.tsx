"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Languages() {
  const { languages } = portfolioData;

  return (
    <section id="languages" className="relative z-10 py-20 md:py-28">
      <div className="section-container">
        <SectionHeading title="Languages" />

        <div className="flex flex-wrap justify-center gap-6 max-w-md mx-auto">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="card card-hover flex items-center gap-3 px-6 py-4"
            >
              <Globe
                size={20}
                className="text-[hsl(var(--accent))] shrink-0"
              />
              <div>
                <span className="font-semibold text-[hsl(var(--primary-text))]">
                  {lang.name}
                </span>
                <span className="mx-2 text-[hsl(var(--border))]">·</span>
                <span className="text-sm text-[hsl(var(--secondary-text))]">
                  {lang.level}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
