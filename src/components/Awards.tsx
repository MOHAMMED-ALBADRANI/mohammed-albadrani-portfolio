"use client";

import { motion } from "framer-motion";
import { Trophy, Star } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Awards() {
  const { awards } = portfolioData;

  return (
    <section id="recognition" className="relative z-10 py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          title="Awards & Recognition"
          subtitle="International recognition for excellence in emergency services and public service delivery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              whileHover={{ y: -3 }}
              className="card award-card group"
            >
              {/* Top row */}
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-[hsl(var(--gold)/0.15)] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Trophy
                    size={26}
                    className="text-[hsl(var(--gold))]"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[hsl(var(--primary-text))]">
                    {award.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Star
                      size={14}
                      className="text-[hsl(var(--gold))] fill-current"
                    />
                    <span className="text-xs font-semibold text-[hsl(var(--gold))]">
                      {award.year}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-[hsl(var(--secondary-text))] leading-relaxed">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
