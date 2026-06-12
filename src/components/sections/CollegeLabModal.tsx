"use client";

import { useEffect, useState, useRef } from "react";
import { COLLEGE_LABS } from "@/lib/constants";

export default function CollegeLabModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedLabName, setSelectedLabName] = useState<string | null>(null);
  const [mode, setMode] = useState<"default" | "formOnly">("default");
  const enquiryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpen = () => {
      setMode("default");
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    };

    const handleOpenEnquiryForm = (e: any) => {
      setMode("formOnly");
      setSelectedLabName(e.detail?.labName || null);
      setIsEnquiryOpen(true);
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    };

    window.addEventListener("open-college-modal", handleOpen);
    window.addEventListener("open-college-enquiry", handleOpenEnquiryForm);
    return () => {
      window.removeEventListener("open-college-modal", handleOpen);
      window.removeEventListener("open-college-enquiry", handleOpenEnquiryForm);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setIsEnquiryOpen(false);
    setSelectedLabName(null);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleOpenEnquiry = (labName: string) => {
    setSelectedLabName(labName);
    setIsEnquiryOpen(true);
    setTimeout(() => {
      enquiryRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 100);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay open" onClick={handleOverlayClick}>
      <div 
        className="modal-box" 
        style={mode === "formOnly" ? { background: "var(--navy)", padding: "36px", maxWidth: "700px" } : {}}
      >
        <button className="modal-close" onClick={handleClose}>
          ✕
        </button>
        {mode === "default" && (
          <>
            <div className="modal-eyebrow">For colleges &amp; institutions</div>
            <h2 className="modal-h2">Set up the lab your students deserve.</h2>
            <p className="modal-sub">
              Three lab configurations designed for engineering and management
              colleges — from a budget-conscious computer lab to a high-class AI
              research facility. Request architecture and pricing for your
              institution.
            </p>

            <div className="labs-grid">
              {COLLEGE_LABS.map((lab) => (
                <div
                  className={`lab-card ${lab.flagship ? "flagship" : ""}`}
                  key={lab.key}
                >
                  <div className="lab-header-img" style={{ background: lab.badgeBg }}>
                    {lab.icon}
                  </div>
                  <div className="lab-body">
                    <div
                      className="lab-badge"
                      style={{
                        backgroundColor: lab.badgeBg,
                        color: lab.badgeColor,
                      }}
                    >
                      {lab.badgeText}
                    </div>
                    <div className="lab-name">{lab.name}</div>
                    <div className="lab-desc">{lab.desc}</div>
                    <ul className="lab-includes">
                      {lab.includes.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    <button
                      className="lab-reveal-btn"
                      onClick={() => handleOpenEnquiry(lab.name)}
                    >
                      Request Architecture &amp; Pricing →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <div
          ref={enquiryRef}
          className={`lab-enquiry ${isEnquiryOpen ? "open" : ""}`}
          id="labEnquiry"
          style={mode === "formOnly" ? { border: "none", background: "transparent", margin: 0, padding: 0 } : {}}
        >
          <h3 id="labEnquiryTitle">
            Request Lab Architecture &amp; Pricing
            {selectedLabName ? ` — ${selectedLabName}` : ""}
          </h3>
          <p>
            Tell us about your institution and we&apos;ll prepare a detailed
            architecture document and pricing proposal for your specific
            requirements — within 48 hours.
          </p>
          <form
            className="signup-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert(`Lab enquiry request submitted for ${selectedLabName || "selected"} tier!`);
              handleClose();
            }}
          >
            <div className="form-row">
              <input
                type="text"
                className="form-input"
                placeholder="Your name"
                style={{ flex: 1 }}
                required
              />
              <input
                type="text"
                className="form-input"
                placeholder="Designation"
                style={{ flex: 1 }}
                required
              />
            </div>
            <input
              type="text"
              className="form-input"
              placeholder="Institution name &amp; city"
              required
            />
            <div className="form-row">
              <input
                type="email"
                className="form-input"
                placeholder="Official email"
                style={{ flex: 1 }}
                required
              />
              <input
                type="tel"
                className="form-input"
                placeholder="Mobile number"
                style={{ flex: 1 }}
                required
              />
            </div>
            <input
              type="text"
              className="form-input"
              placeholder="Estimated number of workstations / seats"
              required
            />
            <button
              type="submit"
              className="form-submit"
              style={{ background: "var(--teal)" }}
            >
              Request Architecture &amp; Pricing →
            </button>
            <div className="signup-note" style={{ color: "rgba(255,255,255,0.4)" }}>
              We respond within 48 hours with a detailed document. No commitment
              required.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
