// src/components/mobile/mobile-footer.tsx
"use client";

import { ArrowUp, Heart } from "lucide-react";

export default function MobileFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="mobile-footer">
      <button onClick={scrollToTop} className="mobile-back-to-top">
        <ArrowUp size={16} />
        Back to Top
      </button>

      <div className="mobile-footer-content">
        <p>© {currentYear} Istofi Yusuf</p>
        <p className="mobile-footer-made">
          Made with <Heart size={10} /> in Indonesia
        </p>
      </div>
    </footer>
  );
}
