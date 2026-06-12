"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { DEVICE_TIERS } from "@/lib/constants";
import { AppIcon } from "@/lib/icons";

export default function DeviceModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [mode, setMode] = useState<"default" | "formOnly">("default");
  const signupRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleOpen = () => {
      setMode("default");
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    };

    const handleOpenSignup = (e: any) => {
      setMode("formOnly");
      setSelectedTier(e.detail?.tier || null);
      setIsSignupOpen(true);
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    };

    window.addEventListener("open-device-modal", handleOpen);
    window.addEventListener("open-device-signup", handleOpenSignup);
    return () => {
      window.removeEventListener("open-device-modal", handleOpen);
      window.removeEventListener("open-device-signup", handleOpenSignup);
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
      <div 
        className="modal-box" 
        style={mode === "formOnly" ? { background: "var(--light)", padding: "36px", maxWidth: "600px" } : {}}
      >
        <button className="modal-close" onClick={handleClose} aria-label="Close">
          <AppIcon name="x" size="sm" />
        </button>
        {mode === "default" && (
          <>
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
                  onClick={() => {
                    handleClose();
                    router.push(`/compare?keys=${tier.key}`);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {tier.popText && (
                    <div className="tier-pop">
                      <AppIcon name="star" size="xs" className="inline-block mr-1 -mt-0.5" />
                      {tier.popText}
                    </div>
                  )}
                  <div className="tier-header">
                    <span className="tier-icon">
                      <AppIcon name={tier.icon} size={32} />
                    </span>
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
                      <AppIcon name="unlock" size="xs" className="inline-block mr-1 -mt-0.5" />
                      Projects &amp; benefits unlocked
                    </div>
                    {tier.benefits.map((benefit, bIdx) => (
                      <div className="project-benefit" key={bIdx}>
                        <div className="pb-icon">
                          <AppIcon name={benefit.icon} size="sm" className="text-[var(--navy)]" />
                        </div>
                        <div>
                          <div className="pb-title">{benefit.title}</div>
                          <div className="pb-sub">{benefit.sub}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    className={`tier-unlock-btn ${tier.featured ? "filled" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleUnlockDiscount(tier.key);
                    }}
                  >
                    Unlock Student Discount →
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        <div
          ref={signupRef}
          className={`signup-prompt ${isSignupOpen ? "open" : ""}`}
          id="signupPrompt"
          style={mode === "formOnly" ? { border: "none", background: "transparent", margin: 0, padding: 0 } : {}}
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
              hours.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
