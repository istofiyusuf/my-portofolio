"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "../shared/theme-toggle";
import Image from "next/image";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Fungsi untuk cek dark mode
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setIsDark(isDarkMode);
    };

    // Cek awal
    checkDarkMode();

    // Gunakan MutationObserver untuk mendeteksi perubahan class 'dark'
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          checkDarkMode();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  // Tentukan logo berdasarkan mode
  const logoSrc = isDark ? "/logodark.png" : "/logolight.png";

  return (
    <>
      <header className="mobile-header">
        <div className="mobile-header-inner">
          <a href="#" className="mobile-logo">
            <Image
              src={logoSrc}
              alt="Istofi Yusuf Logo"
              width={100}
              height={28}
              className="mobile-logo-img"
              priority
            />
          </a>

          <div className="mobile-actions">
            <div className="mobile-status">
              <span className="status-dot"></span>
            </div>
            <ThemeToggle />
            <button
              className={`mobile-menu-btn ${isOpen ? "active" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu-overlay ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      <div className={`mobile-menu-drawer ${isOpen ? "open" : ""}`}>
        {/* Logo di drawer mobile */}
        <div className="mobile-drawer-logo">
          <Image
            src={logoSrc}
            alt="Istofi Yusuf Logo"
            width={100}
            height={28}
            className="mobile-logo-img"
            style={{ width: "auto", height: "28px" }} // ← KUNCI: tambahkan ini
            priority
          />
        </div>

        <nav className="mobile-nav-menu">
          <a href="#home" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#expertise" onClick={() => setIsOpen(false)}>
            Expertise
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </nav>
        <button className="mobile-hire-btn">Hire Me</button>
        <div className="mobile-status-large">
          <span className="status-dot-large"></span>
          <span>Available for work</span>
        </div>
      </div>
    </>
  );
}
