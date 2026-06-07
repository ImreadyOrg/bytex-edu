import HeroSection from "@/components/sections/HeroSection";
import AudienceSection from "@/components/sections/AudienceSection";
import BundledFeaturesSection from "@/components/sections/BundledFeaturesSection";
import StatsBar from "@/components/sections/StatsBar";
import ProjectsSection from "@/components/sections/ProjectsSection";
import WhyBytexSection from "@/components/sections/WhyBytexSection";
import CtaSection from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AudienceSection />
      <BundledFeaturesSection />
      <StatsBar />
      <ProjectsSection />
      <WhyBytexSection />
      <CtaSection />
    </>
  );
}
