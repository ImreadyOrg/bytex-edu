import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { DEVICE_TIERS } from "@/lib/constants";
import { ChevronRight, Home } from "lucide-react";

const VISIBLE_BENEFITS = 3;

export default function BundlesPage() {
  return (
    <div className={styles.page}>
      <div className="w-full bg-white">
        <nav
          aria-label="Breadcrumb"
          className="flex w-full flex-wrap items-center gap-x-1.5 gap-y-1 border-b border-[#e5e7eb] bg-[#f3f4f6] px-3 py-2.5 text-[13px] font-medium leading-snug sm:px-4 sm:text-sm"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[#5b6880] transition-colors hover:text-[#1d2f57]"
          >
            <Home className="h-3.5 w-3.5 shrink-0" strokeWidth={1.85} aria-hidden />
            <span>Home</span>
          </Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#8590a3]" strokeWidth={2} aria-hidden />
          <span className="inline-flex items-center gap-1.5 text-[#5b6880]">
            <span>Explore Devices</span>
          </span>
        </nav>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>DEVICES &amp; PROJECT BUNDLES</span>
          <h1 className={styles.title}>Choose your tier. Unlock your projects.</h1>
          <p className={styles.subtitle}>
            Each tier unlocks a different set of industry projects, mentorship access, and career
            tools. Market prices shown — sign up to reveal your student discount.
          </p>
        </div>

        <div className={styles.grid}>
          {DEVICE_TIERS.map((tier) => {
            const visibleBenefits = tier.benefits.slice(0, VISIBLE_BENEFITS);
            const moreCount = tier.benefits.length - VISIBLE_BENEFITS;

            return (
              <Link
                key={tier.key}
                href={`/compare?keys=${tier.key}`}
                className={tier.featured ? styles.cardPopular : styles.card}
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                {tier.popText ? <div className={styles.popularTag}>{tier.popText}</div> : null}

                <div className={styles.imgWrapper}>
                  <Image
                    src={`/Education/${tier.name}.png`}
                    alt={`${tier.name} Laptop`}
                    width={800}
                    height={450}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </div>

                <div className={styles.nameRow}>
                  <span className={styles.icon}>{tier.icon}</span>
                  <span className={styles.name}>{tier.name}</span>
                </div>
                <div className={styles.desc}>{tier.who}</div>

                <div className={styles.priceBox}>
                  <span className={styles.priceLabel}>
                    Market price
                    <br />
                    from
                  </span>
                  <span className={styles.price}>{tier.price}</span>
                </div>

                <div className={styles.discount}>
                  <span className={styles.lockIcon}>🔒</span>
                  Student discount revealed on sign-up
                </div>

                <div className={styles.divider} />

                <div className={styles.benefitsTitle}>
                  <span>🔓</span> PROJECTS &amp; BENEFITS UNLOCKED
                </div>
                <ul className={styles.benefitsList}>
                  {visibleBenefits.map((b) => (
                    <li key={b.title}>
                      <span className={styles.bIcon}>{b.icon}</span>
                      <span className={styles.bLabel}>{b.title}</span>
                      <span className={styles.bArrow}>›</span>
                    </li>
                  ))}
                </ul>

                {moreCount > 0 ? (
                  <span className={styles.moreBenefits}>+ {moreCount} more benefits</span>
                ) : null}

                <div className={styles.cardAction}>
                  <div className={styles.bottomDivider} />
                  <div
                    className={styles.actionBtnContinue}
                  >
                    <span>Choose this tier</span>
                    <span className={styles.actionArrowContinue}>
                      <ChevronRight size={18} strokeWidth={2.5} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className={styles.bundlesTrust}>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🛡️</span>
            Official warranty &amp; on-site support
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🚚</span>
            Safe &amp; secure delivery
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🏷️</span>
            Student discounts on all tiers
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🎧</span>
            24x7 expert support
          </div>
        </div>
      </div>
    </div>
  );
}
