"use client";

import Link from "next/link";

import { ChevronRight, Home } from "lucide-react";
import { useRouter } from "next/navigation";
import { COLLEGE_LABS } from "@/lib/constants";
import styles from "./page.module.css";
import CollegeLabModal from "@/components/sections/CollegeLabModal";

export default function LabsPage() {
  const router = useRouter();

  const labToTier: { [k: string]: string } = {
    budget: "starter",
    mainstream: "pro",
    research: "power",
  };

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
            <span>Set Up Your Lab</span>
          </span>
        </nav>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>COLLEGE LAB CONFIGURATIONS</span>
          <h1 className={styles.title}>Set up the lab your students deserve.</h1>
          <p className={styles.subtitle}>
            Budget labs, AI labs, and high-class research facilities — request architecture and pricing for your institution.
          </p>
        </div>

        <div className={styles.grid}>
          {COLLEGE_LABS.map((lab) => (
            <div
              key={lab.key}
              className={styles.card}
              role="button"
              onClick={() => router.push(`/compare?keys=${labToTier[lab.key] || ""}&from=labs`)}
              style={{ cursor: "pointer" }}
            >
              <div className={styles.imgWrapper}>
                <img
                  src={
                    lab.key === "budget"
                      ? "/lab/Budget lab.png"
                      : lab.key === "mainstream"
                      ? "/lab/AI lab.png"
                      : "/lab/ResearchAI lab.png"
                  }
                  alt={lab.name}
                />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.nameRow}>
                  <span className={styles.name}>{lab.name}</span>
                </div>
                <div className={styles.desc}>{lab.desc}</div>
                <div className={styles.divider} />
                <ul className={styles.benefitsList}>
                  {lab.includes.map((inc, idx) => (
                    <li key={idx}>
                      <span className={styles.bLabel}>{inc}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.cardAction}>
                  <div className={styles.bottomDivider} />
                  <div className={styles.actionBtnContinue}>
                    <span>Choose this tier</span>
                    <span className={styles.actionArrowContinue}>
                      <ChevronRight size={18} strokeWidth={2.5} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>



        {/* Keep modal available in case other flows dispatch the event */}
        <CollegeLabModal />
      </div>
    </div>
  );
}
