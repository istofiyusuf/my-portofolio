"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function MobileHero() {
  useEffect(() => {
    const elements = document.querySelectorAll(".mobile-animate");
    elements.forEach((el, index) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translateY(0)";
      }, index * 80);
    });
  }, []);

  return (
    <section id="home" className="mobile-hero">
      <div className="mobile-bg-glow"></div>

      <div className="mobile-hero-container">
        {/* Photo Profile */}
        <div className="mobile-hero-photo-wrapper mobile-animate">
          <div className="mobile-photo-ring"></div>
          <div className="mobile-photo-container">
            <Image
              src="/profile.png"
              alt="Istofi Yusuf"
              width={200}
              height={200}
              className="mobile-photo"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="mobile-hero-content">
          <div className="mobile-badge-wrapper mobile-animate">
            <p className="mobile-hero-badge">
              <span className="mobile-badge-dot"></span>
              Available for Work
            </p>
          </div>

          <h1 className="mobile-hero-title mobile-animate">Istofi Yusuf</h1>

          <p className="mobile-hero-subtitle mobile-animate">
            Full Stack Developer <br />& AI Specialist
          </p>

          <p className="mobile-hero-description mobile-animate">
            Creating modern web experiences and AI solutions that drive business
            growth.
          </p>

          <div className="mobile-hero-buttons mobile-animate">
            <button className="mobile-btn-primary">
              Let's Work Together
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
            <button className="mobile-btn-secondary">View Projects</button>
          </div>

          <div className="mobile-hero-stats mobile-animate">
            <div className="mobile-stat">
              <span className="mobile-stat-number">
                5<span className="stat-plus">+</span>
              </span>
              <span className="mobile-stat-label">Years</span>
            </div>
            <div className="mobile-stat-divider"></div>
            <div className="mobile-stat">
              <span className="mobile-stat-number">
                50<span className="stat-plus">+</span>
              </span>
              <span className="mobile-stat-label">Projects</span>
            </div>
            <div className="mobile-stat-divider"></div>
            <div className="mobile-stat">
              <span className="mobile-stat-number">
                20<span className="stat-plus">+</span>
              </span>
              <span className="mobile-stat-label">Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
