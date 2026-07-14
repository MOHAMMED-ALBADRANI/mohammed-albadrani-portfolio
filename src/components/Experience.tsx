"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="relative z-10 py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          title="Professional Experience"
          subtitle="A career built on operational leadership, emergency readiness, and government service excellence."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line - visible on md+ */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[hsl(var(--accent)/0.4)] via-[hsl(var(--accent)/0.15)] to-[hsl(var(--border))]" />

          <div className="flex flex-col gap-8 md:gap-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-[22px] top-6 timeline-dot" />

                {/* Card */}
                <div className="card card-hover">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase
                          size={16}
                          className="text-[hsl(var(--accent))] shrink-0"
                        />
                        <h3 className="text-lg font-semibold text-[hsl(var(--primary-text))]">
                          {exp.title}
                        </h3>
                      </div>
                      <p className="text-sm font-medium text-[hsl(var(--accent))]">
                        {exp.organization}
                        {exp.department && (
                          <span className="text-[hsl(var(--secondary-text))] font-normal">
                            {" "}
                            — {exp.department}
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-[hsl(var(--secondary-text))] shrink-0">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[hsl(var(--muted-bg))] border border-[hsl(var(--border))] text-xs font-medium">
                        {exp.period}
                      </span>
                      {exp.location && (
                        <span className="inline-flex items-center gap-1 text-xs">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-[hsl(var(--secondary-text))] leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent)/0.5)] shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
