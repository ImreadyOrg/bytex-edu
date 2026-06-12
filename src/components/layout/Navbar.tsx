"use client";

import { NAV_LINKS } from "@/lib/constants";
import { AppIcon } from "@/lib/icons";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="landing-nav">
      <a href="#" className="nav-logo">
        <div className="nav-logo-icon">bE</div>
        <span className="nav-logo-text">
          bytex <span>edu</span>
        </span>
      </a>
      <div className="nav-links">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.isExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {link.label}
          </a>
        ))}
      </div>
      <Link href="/bundles" className="nav-cta">
        Explore Devices
        <AppIcon name="chevron-right" size="xs" className="inline-block ml-1" />
      </Link>
    </nav>
  );
}

