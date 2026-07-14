"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="relative z-10 py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          title="Certifications & Professional Training"
          subtitle="Continuous professional development in crisis management, security operations, and quality standards."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: 0.08 * index }}
              whileHover={{ y: -3 }}
              className="card card-hover group"
            >
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[hsl(var(--accent-muted))] text-[hsl(var(--accent))] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <BadgeCheck size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-[hsl(var(--primary-text))] leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[hsl(var(--secondary-text))] mt-1">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center gap-1.5 mt-2 text-xs text-[hsl(var(--secondary-text))]">
                    <Calendar size={12} />
                    {cert.date}
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
