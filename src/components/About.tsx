"use client";

import { motion } from "framer-motion";
import { Clock, Award, Building2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, React.ReactNode> = {
  Clock: <Clock size={24} />,
  Award: <Award size={24} />,
  Building2: <Building2 size={24} />,
};

export default function About() {
  const { personal, stats } = portfolioData;

  return (
    <section id="about" className="relative z-10 py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          title="About"
          subtitle="A dedicated professional committed to operational excellence in public safety and emergency management."
        />

        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[hsl(var(--secondary-text))] text-base md:text-lg leading-relaxed text-center"
          >
            {personal.aboutSummary}
          </motion.p>
        </div>

        {/* Stat Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: 0.15 * index }}
              className="card card-hover text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[hsl(var(--accent-muted))] text-[hsl(var(--accent))] mb-3 mx-auto group-hover:scale-105 transition-transform">
                {iconMap[stat.icon]}
              </div>
              <div className="text-2xl font-bold text-[hsl(var(--primary-text))]">
                {stat.value}
              </div>
              <div className="text-sm text-[hsl(var(--secondary-text))] mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
