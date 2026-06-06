"use client";

import { useRef, useEffect } from "react";
import { expertiseData } from "@/data/expertise";

export default function DesktopExpertise() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = document.querySelectorAll(".expertise-card");
    cards.forEach((card, index) => {
      (card as HTMLElement).style.opacity = "0";
      (card as HTMLElement).style.transform = "translateY(30px)";

      setTimeout(() => {
        (card as HTMLElement).style.transition =
          "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
        (card as HTMLElement).style.opacity = "1";
        (card as HTMLElement).style.transform = "translateY(0)";
      }, index * 100);
    });
  }, []);

  return (
    <section id="expertise" ref={sectionRef} className="desktop-expertise">
      <div className="expertise-bg-blur"></div>

      <div className="expertise-container">
        <div className="expertise-header">
          <p className="expertise-badge">What I Do</p>
          <h2 className="expertise-title">
            My Expertise
            <span className="title-dot">.</span>
          </h2>
          <p className="expertise-subtitle">
            Specializing in modern web technologies and AI solutions
          </p>
        </div>

        <div className="expertise-grid">
          {expertiseData.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="expertise-card">
                <div
                  className="card-icon"
                  style={{ background: item.gradient }}
                >
                  <IconComponent
                    size={item.iconSize || 28}
                    strokeWidth={1.5}
                    color="white"
                  />
                </div>

                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>

                <div className="card-techs">
                  {item.techs.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="card-hover-effect"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
