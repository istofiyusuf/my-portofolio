"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "../shared/theme-toggle";
import Image from "next/image";

export default function DesktopHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Tentukan logo berdasarkan mode
  const logoSrc = isDark ? "/logodark.png" : "/logolight.png";

  return (
    <header className={`desktop-header ${scrolled ? "scrolled" : ""}`}>
      <div className="desktop-header-inner">
        <a href="#" className="desktop-logo">
          <Image
            src={logoSrc}
            alt="Istofi Yusuf Logo"
            width={120}
            height={32}
            className="desktop-logo-img"
            style={{ width: "auto", height: "32px" }} // ← KUNCI: tambahkan ini
            priority
          />
        </a>

        <nav className="desktop-nav">
          <a href="#home" className="desktop-nav-link">
            Home
          </a>
          <a href="#expertise" className="desktop-nav-link">
            Expertise
          </a>
          <a href="#projects" className="desktop-nav-link">
            Projects
          </a>
          <a href="#contact" className="desktop-nav-link">
            Contact
          </a>
        </nav>

        <div className="desktop-actions">
          <div className="desktop-status">
            <span className="status-dot"></span>
            <span className="status-text">Available</span>
          </div>
          <ThemeToggle />
          <button className="desktop-hire-btn">Hire Me</button>
        </div>
      </div>
    </header>
  );
}
