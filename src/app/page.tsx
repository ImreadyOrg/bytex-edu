import HeroSection from "@/components/sections/HeroSection";
import AudienceSection from "@/components/sections/AudienceSection";
import BundledFeaturesSection from "@/components/sections/BundledFeaturesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import DualCtaSection from "@/components/sections/DualCtaSection";
import DeviceModal from "@/components/sections/DeviceModal";
import CollegeLabModal from "@/components/sections/CollegeLabModal";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AudienceSection />
      <BundledFeaturesSection />
      <ProjectsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <DualCtaSection />
      <DeviceModal />
      <CollegeLabModal />
    </>
  );
}

