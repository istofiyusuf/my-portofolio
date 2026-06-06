"use client";

import { useState, useEffect, Suspense } from "react";
import DesktopHeader from "@/components/desktop/desktop-header";
import MobileHeader from "@/components/mobile/mobile-header";
import DesktopHero from "@/components/desktop/desktop-hero";
import MobileHero from "@/components/mobile/mobile-hero";
import DesktopExpertise from "@/components/desktop/desktop-expertise";
import MobileExpertise from "@/components/mobile/mobile-expertise";
import DesktopProjects from "@/components/desktop/desktop-projects";
import MobileProjects from "@/components/mobile/mobile-projects";
import DesktopContact from "@/components/desktop/desktop-contact";
import MobileContact from "@/components/mobile/mobile-contact";
import DesktopFooter from "@/components/desktop/desktop-footer";
import {
  SkeletonHero,
  SkeletonExpertise,
  SkeletonProjects,
  SkeletonContact,
} from "@/components/shared/skeleton-loader";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main>
      {/* Header - tanpa skeleton karena kecil */}
      {isMobile ? <MobileHeader /> : <DesktopHeader />}

      {/* Hero Section */}
      <Suspense fallback={<SkeletonHero />}>
        {isMobile ? <MobileHero /> : <DesktopHero />}
      </Suspense>

      {/* Expertise Section */}
      <Suspense fallback={<SkeletonExpertise />}>
        {isMobile ? <MobileExpertise /> : <DesktopExpertise />}
      </Suspense>

      {/* Projects Section */}
      <Suspense fallback={<SkeletonProjects />}>
        {isMobile ? <MobileProjects /> : <DesktopProjects />}
      </Suspense>

      {/* Contact Section */}
      <Suspense fallback={<SkeletonContact />}>
        {isMobile ? <MobileContact /> : <DesktopContact />}
      </Suspense>

      {/* Footer - Desktop only */}
      {!isMobile && <DesktopFooter />}
    </main>
  );
}
