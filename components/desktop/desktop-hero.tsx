"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function DesktopHero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Smooth reveal animation on mount
    const elements = document.querySelectorAll(".animate-on-load");
    elements.forEach((el, index) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translateY(0)";
      }, index * 100);
    });
  }, []);

  return (
    <section ref={containerRef} id="home" className="desktop-hero">
      {/* Background gradient blur */}
      <div className="hero-bg-gradient"></div>
      <div className="hero-bg-blur blur-1"></div>
      <div className="hero-bg-blur blur-2"></div>

      <div className="desktop-hero-container">
        {/* LEFT COLUMN */}
        <div className="desktop-hero-left">
          <div className="desktop-hero-content">
            {/* Badge with shimmer effect */}
            <div className="hero-badge-wrapper animate-on-load">
              <div className="hero-badge-glow"></div>
              <p className="desktop-hero-badge">
                <span className="badge-dot"></span>
                Available for Work
              </p>
            </div>

            {/* Main Title with gradient */}
            <h1 className="desktop-hero-title animate-on-load">
              Istofi Yusuf
              <span className="hero-title-period">.</span>
            </h1>

            {/* Subtitle with elegant styling */}
            <p className="desktop-hero-subtitle animate-on-load">
              Full Stack Developer <span className="subtitle-amp">&</span> AI
              Specialist
            </p>

            {/* Description with better line height */}
            <p className="desktop-hero-description animate-on-load">
              Creating modern web experiences and AI solutions that drive
              business growth.{" "}
              <span className="description-highlight">Based in Indonesia,</span>
              <br />
              working with clients worldwide.
            </p>

            {/* Buttons with hover effects */}
            <div className="desktop-hero-buttons animate-on-load">
              <button className="hero-btn-primary">
                <span>Let's Work Together</span>
                <svg
                  className="btn-arrow"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              <button className="hero-btn-secondary">View Projects</button>
            </div>

            {/* Stats with premium styling */}
            <div className="desktop-hero-stats animate-on-load">
              <div className="stat-card">
                <span className="stat-number">
                  5<span className="stat-plus">+</span>
                </span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-card">
                <span className="stat-number">
                  50<span className="stat-plus">+</span>
                </span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-card">
                <span className="stat-number">
                  20<span className="stat-plus">+</span>
                </span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Premium Photo with effects */}
        <div className="desktop-hero-right animate-on-load">
          <div className="hero-photo-premium">
            <div className="photo-ring ring-1"></div>
            <div className="photo-ring ring-2"></div>
            <div className="photo-ring ring-3"></div>

            <div className="hero-photo-container">
              <Image
                src="/profile.png"
                alt="Istofi Yusuf"
                width={420}
                height={420}
                className="hero-photo"
                priority
              />
            </div>

            {/* Floating tech icons */}
            <div className="floating-icon icon-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <div className="floating-icon icon-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <polygon points="12 2 22 7 22 17 12 22 2 17 2 7 12 2" />
                <line x1="12" y1="22" x2="12" y2="12" />
                <line x1="22" y1="7" x2="12" y2="12" />
                <line x1="2" y1="7" x2="12" y2="12" />
              </svg>
            </div>
            <div className="floating-icon icon-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H5.78a1.65 1.65 0 0 0-1.51 1 1.65 1.65 0 0 0 .33 1.82l.06.06A10 10 0 0 0 12 17.66a10 10 0 0 0 6.28-2.66l.06-.06z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
