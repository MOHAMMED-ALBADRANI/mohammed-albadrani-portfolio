"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="relative z-10 py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          title="Education"
          subtitle="Academic foundation in information technology and industrial control systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: 0.15 * index }}
              whileHover={{ y: -3 }}
              className="card card-hover group"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[hsl(var(--accent-muted))] text-[hsl(var(--accent))] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[hsl(var(--primary-text))]">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-[hsl(var(--accent))] font-medium mt-0.5">
                    {edu.field}
                  </p>
                  <p className="text-sm text-[hsl(var(--secondary-text))] mt-1">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-1.5 mt-2 text-xs text-[hsl(var(--secondary-text))]">
                    <Calendar size={12} />
                    Graduated {edu.graduationYear}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
