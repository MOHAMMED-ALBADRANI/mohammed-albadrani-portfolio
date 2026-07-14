"use client";

import { Shield, ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-[hsl(var(--border))] bg-[hsl(var(--surface))]">
      <div className="section-container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-2 text-sm text-[hsl(var(--secondary-text))]">
            <Shield size={16} className="text-[hsl(var(--accent))]" />
            <span>
              © {currentYear} {personal.fullName}. All rights reserved.
            </span>
          </div>

          {/* Center tagline */}
          <p className="text-xs text-[hsl(var(--secondary-text))] text-center">
            Emergency Operations • Security Systems • Public Safety
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-sm text-[hsl(var(--secondary-text))] hover:text-[hsl(var(--accent))] transition-colors"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
