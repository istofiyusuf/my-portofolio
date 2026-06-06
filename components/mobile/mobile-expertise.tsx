"use client";

import { expertiseData } from "@/data/expertise";

export default function MobileExpertise() {
  return (
    <section id="expertise" className="mobile-expertise">
      <div className="mobile-expertise-container">
        <div className="mobile-expertise-header">
          <p className="mobile-expertise-badge">What I Do</p>
          <h2 className="mobile-expertise-title">My Expertise</h2>
          <p className="mobile-expertise-subtitle">
            Specializing in modern web technologies
          </p>
        </div>

        <div className="mobile-expertise-list">
          {expertiseData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="mobile-expertise-card"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div
                  className="mobile-card-icon"
                  style={{ background: item.gradient }}
                >
                  <IconComponent size={22} strokeWidth={1.5} color="white" />
                </div>

                <div className="mobile-card-content">
                  <h3 className="mobile-card-title">{item.title}</h3>
                  <p className="mobile-card-description">{item.description}</p>
                  <div className="mobile-card-techs">
                    {item.techs.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="mobile-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
