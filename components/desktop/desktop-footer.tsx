"use client";

import { socialLinks } from "@/data/socials";
import { ArrowUp, Heart } from "lucide-react";

export default function DesktopFooter() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="desktop-footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Left Column - Brand */}
          <div className="footer-brand">
            <h3 className="footer-logo">Istofi Yusuf</h3>
            <p className="footer-tagline">
              Full Stack Developer & AI Specialist
              <br />
              Creating modern web experiences.
            </p>
            <div className="footer-social">
              {socialLinks.slice(0, 4).map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label={social.name}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="footer-links">
            <h4 className="footer-links-title">Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#expertise">Expertise</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Middle Column - Resources */}
          <div className="footer-links">
            <h4 className="footer-links-title">Resources</h4>
            <ul>
              <li>
                <a href="https://github.com/istofiyusuf" target="blank">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/yusufistofi" target="blank">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://x.com/yusufiscr" target="blank">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://yusufistofi.blogspot.com" target="blank">
                  Blog (Soon)
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column - Contact */}
          <div className="footer-contact">
            <h4 className="footer-contact-title">Get in Touch</h4>
            <p className="footer-contact-email">
              <a href="mailto:yusufistofi@gmail.com">yusufistofi@gmail.com</a>
            </p>
            <p className="footer-contact-status">
              <span className="status-dot"></span>
              Available for work
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Istofi Yusuf. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with <Heart size={16} className="footer-heart" /> in Indonesia
          </p>
          <button
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
            <span>Back to Top</span>
          </button>
        </div>
      </div>

      {/* Background gradient */}
      <div className="footer-bg-blur"></div>
    </footer>
  );
}
