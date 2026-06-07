"use client";

import { useEffect, useState, useRef } from "react";
import { DEVICE_TIERS } from "@/lib/constants";

export default function DeviceModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const signupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    };

    window.addEventListener("open-device-modal", handleOpen);
    return () => {
      window.removeEventListener("open-device-modal", handleOpen);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setIsSignupOpen(false);
    setSelectedTier(null);
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

  const handleUnlockDiscount = (tierKey: string) => {
    setSelectedTier(tierKey);
    setIsSignupOpen(true);
    setTimeout(() => {
      signupRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
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
      <div className="modal-box">
        <button className="modal-close" onClick={handleClose}>
          ✕
        </button>
        <div className="modal-eyebrow">Devices &amp; Project bundles</div>
        <h2 className="modal-h2">Choose your tier. Unlock your projects.</h2>
        <p className="modal-sub">
          Each tier unlocks a different set of industry projects, mentorship
          access, and career tools. Market prices shown — sign up to reveal
          your student discount.
        </p>

        <div className="tiers-grid">
          {DEVICE_TIERS.map((tier) => (
            <div
              className={`tier-card ${tier.featured ? "featured-tier" : ""}`}
              key={tier.key}
            >
              {tier.popText && <div className="tier-pop">{tier.popText}</div>}
              <div className="tier-header">
                <span className="tier-icon">{tier.icon}</span>
                <div className="tier-name">{tier.name}</div>
                <div className="tier-who">{tier.who}</div>
                <div className="tier-price-block">
                  <span className="tier-price-label">Market price from</span>
                  <span className="tier-price">{tier.price}</span>
                </div>
                <div
                  className="tier-price-note"
                  style={{
                    fontSize: "12px",
                    color: "var(--gray)",
                    fontWeight: 600,
                    marginTop: "6px",
                    marginBottom: "20px",
                  }}
                >
                  Student discount revealed on sign-up
                </div>
              </div>
              <div className="tier-divider"></div>
              <div className="tier-body">
                <div className="tier-unlock-label">
                  🔓 Projects &amp; benefits unlocked
                </div>
                {tier.benefits.map((benefit, bIdx) => (
                  <div className="project-benefit" key={bIdx}>
                    <div className="pb-icon">{benefit.icon}</div>
                    <div>
                      <div className="pb-title">{benefit.title}</div>
                      <div className="pb-sub">{benefit.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className={`tier-unlock-btn ${tier.featured ? "filled" : ""}`}
                onClick={() => handleUnlockDiscount(tier.key)}
              >
                Unlock Student Discount →
              </button>
            </div>
          ))}
        </div>

        <div
          ref={signupRef}
          className={`signup-prompt ${isSignupOpen ? "open" : ""}`}
          id="signupPrompt"
        >
          <h3>Create your free profile to unlock pricing</h3>
          <p>
            Your student discount and project access activate the moment you
            sign up. Takes 60 seconds.
          </p>
          <form
            className="signup-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert(`Discount request submitted for ${selectedTier || "selected"} tier!`);
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
                type="tel"
                className="form-input"
                placeholder="Mobile number"
                style={{ flex: 1 }}
                required
              />
            </div>
            <input
              type="email"
              className="form-input"
              placeholder="College email address"
              required
            />
            <input
              type="text"
              className="form-input"
              placeholder="College name &amp; stream (e.g. MIT Pune — CS)"
              required
            />
            <button type="submit" className="form-submit">
              Unlock My Discount &amp; Projects →
            </button>
            <div className="signup-note">
              No spam. Your advisor will WhatsApp you with pricing within 2
              hours. 🙌
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
