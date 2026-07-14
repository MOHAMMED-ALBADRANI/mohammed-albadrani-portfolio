"use client";

import { motion } from "framer-motion";
import {
  Siren,
  ShieldAlert,
  Cctv,
  Building,
  FileSearch,
  Users,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, React.ReactNode> = {
  Siren: <Siren size={24} />,
  ShieldAlert: <ShieldAlert size={24} />,
  Cctv: <Cctv size={24} />,
  Building: <Building size={24} />,
  FileSearch: <FileSearch size={24} />,
  Users: <Users size={24} />,
};

export default function Expertise() {
  const { expertise } = portfolioData;

  return (
    <section id="expertise" className="relative z-10 py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          title="Core Expertise"
          subtitle="Comprehensive capabilities spanning emergency operations, physical security, and smart city management."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: 0.08 * index }}
              whileHover={{ y: -4 }}
              className="card card-hover group"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[hsl(var(--accent-muted))] text-[hsl(var(--accent))] mb-4 group-hover:scale-105 transition-transform">
                {iconMap[category.icon]}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[hsl(var(--primary-text))] mb-2">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[hsl(var(--secondary-text))] mb-4 leading-relaxed">
                {category.description}
              </p>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex px-2.5 py-1 rounded-md text-xs font-medium bg-[hsl(var(--muted-bg))] text-[hsl(var(--secondary-text))] border border-[hsl(var(--border))]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
