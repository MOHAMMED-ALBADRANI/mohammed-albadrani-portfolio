"use client";

import { motion } from "framer-motion";
import { Radio, PhoneCall, Shield, BarChart3 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, React.ReactNode> = {
  Radio: <Radio size={28} />,
  PhoneCall: <PhoneCall size={28} />,
  Shield: <Shield size={28} />,
  BarChart3: <BarChart3 size={28} />,
};

export default function FocusAreas() {
  const { focusAreas } = portfolioData;

  return (
    <section id="focus-areas" className="relative z-10 py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          title="Key Operational Focus Areas"
          subtitle="Strategic capability areas driving emergency readiness, security operations, and continuous improvement."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ y: -3 }}
              className="card card-hover group"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[hsl(var(--accent-muted))] text-[hsl(var(--accent))] mb-4 group-hover:scale-105 transition-transform">
                {iconMap[area.icon]}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[hsl(var(--primary-text))] mb-3">
                {area.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[hsl(var(--secondary-text))] mb-4 leading-relaxed">
                {area.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1.5">
                {area.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-[hsl(var(--secondary-text))]"
                  >
                    <span className="w-1 h-1 rounded-full bg-[hsl(var(--accent))] shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
