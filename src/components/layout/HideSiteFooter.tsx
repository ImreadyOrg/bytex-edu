"use client";

import { useEffect } from "react";

export default function HideSiteFooter() {
  useEffect(() => {
    const footer = document.querySelector<HTMLElement>("footer");
    const footerBottom = document.querySelector<HTMLElement>(".footer-bottom");
    const prevFooter = footer?.style.display ?? "";
    const prevBottom = footerBottom?.style.display ?? "";

    if (footer) footer.style.display = "none";
    if (footerBottom) footerBottom.style.display = "none";

    return () => {
      if (footer) footer.style.display = prevFooter;
      if (footerBottom) footerBottom.style.display = prevBottom;
    };
  }, []);

  return null;
}
