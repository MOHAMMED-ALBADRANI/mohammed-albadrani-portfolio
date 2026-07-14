"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Expertise", href: "#expertise" },
  { label: "Recognition", href: "#recognition" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Close menu on viewport resize above mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", href);
    } else {
      window.location.hash = href;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[hsl(var(--background)/0.85)] backdrop-blur-lg border-b border-[hsl(var(--border))] shadow-sm"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="section-container flex items-center justify-between h-16 md:h-18">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2 font-bold text-lg text-[hsl(var(--primary-text))] hover:text-[hsl(var(--accent))] transition-colors"
        >
          <Shield size={22} className="text-[hsl(var(--accent))]" />
          <span className="hidden sm:inline">M. Albadrani</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors relative ${
                activeSection === link.href.replace("#", "")
                  ? "text-[hsl(var(--accent))]"
                  : "text-[hsl(var(--secondary-text))] hover:text-[hsl(var(--primary-text))] hover:bg-[hsl(var(--surface-elevated))]"
              }`}
            >
              {link.label}
              {activeSection === link.href.replace("#", "") && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-[hsl(var(--accent))] rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Desktop Contact Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden lg:inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold bg-[hsl(var(--accent))] text-white hover:bg-[hsl(var(--accent-hover))] transition-colors"
          >
            Contact Me
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--surface))] flex items-center justify-center hover:bg-[hsl(var(--surface-elevated))]"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-16 md:top-18 z-40 bg-black backdrop-blur-sm lg:hidden pointer-events-auto"
            />
            {/* Menu Panel */}
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 z-50 overflow-hidden bg-[hsl(var(--surface))] border-b border-[hsl(var(--border))] shadow-lg lg:hidden pointer-events-auto"
            >
              <div className="section-container py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === link.href.replace("#", "")
                        ? "text-[hsl(var(--accent))] bg-[hsl(var(--accent-muted))]"
                        : "text-[hsl(var(--secondary-text))] hover:text-[hsl(var(--primary-text))] hover:bg-[hsl(var(--surface-elevated))]"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="mt-2 px-4 py-3 rounded-lg text-sm font-semibold bg-[hsl(var(--accent))] text-white text-center hover:bg-[hsl(var(--accent-hover))] transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
