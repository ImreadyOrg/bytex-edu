"use client";

import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const handleOpenDeviceModal = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-device-modal"));
  };

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
      <button className="nav-cta" onClick={handleOpenDeviceModal}>
        Explore Devices →
      </button>
    </nav>
  );
}

