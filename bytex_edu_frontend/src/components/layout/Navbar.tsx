"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border-light">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group" aria-label={`${SITE_CONFIG.name} home`}>
            <div className="w-9 h-9 rounded-lg bg-brand-orange flex items-center justify-center shadow-md shadow-brand-orange/20 group-hover:shadow-brand-orange/40 transition-shadow duration-300">
              <span className="text-white font-bold text-sm">bE</span>
            </div>
            <span className="text-text-primary font-bold text-lg tracking-tight">
              bytex <span className="text-brand-orange">edu</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-text-secondary text-sm font-medium hover:text-text-primary transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-orange after:transition-all after:duration-300 hover:after:w-full"
                  {...(link.isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label}
                  {link.isExternal && (
                    <span className="inline-block ml-0.5 text-xs" aria-hidden="true">
                      ↗
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm" href="#explore">
              Explore Devices →
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-surface-warm transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-text-primary transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-text-primary transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-text-primary transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMobileMenuOpen ? "max-h-80 pb-4" : "max-h-0"
          }`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1 pt-2" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block px-3 py-2.5 text-text-secondary text-sm font-medium hover:text-text-primary hover:bg-surface-warm rounded-lg transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button variant="primary" size="sm" href="#explore" className="w-full">
                Explore Devices →
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
