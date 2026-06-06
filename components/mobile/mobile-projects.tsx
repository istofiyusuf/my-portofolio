"use client";

import { useState } from "react";
import Image from "next/image";
import { projectsData, Project } from "@/data/projects";
import { ExternalLink, CheckCircle, Clock, Wrench } from "lucide-react";

export default function MobileProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const getStatusInfo = (status: Project["status"]) => {
    switch (status) {
      case "live":
        return { icon: CheckCircle, text: "Live", color: "#34C759" };
      case "coming-soon":
        return { icon: Clock, text: "Coming Soon", color: "#FF9F0A" };
      case "maintenance":
        return { icon: Wrench, text: "Maintenance", color: "#FF3B30" };
    }
  };

  const handleImageError = (projectId: string) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }));
  };

  return (
    <>
      <section id="projects" className="mobile-projects">
        <div className="mobile-projects-container">
          <div className="mobile-projects-header">
            <p className="mobile-projects-badge">My Work</p>
            <h2 className="mobile-projects-title">Projects</h2>
          </div>

          <div className="mobile-projects-list">
            {projectsData.map((project, index) => {
              const IconComponent = project.icon;
              const StatusIcon = getStatusInfo(project.status).icon;
              const hasError = imageErrors[project.id];

              return (
                <div
                  key={project.id}
                  className="mobile-project-card"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Gambar untuk mobile (400x250) */}
                  {!hasError ? (
                    <div className="mobile-project-image">
                      <Image
                        src={project.imageMobile || project.image}
                        alt={project.title}
                        width={400}
                        height={250}
                        className="mobile-project-img"
                        onError={() => handleImageError(project.id)}
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div
                      className="mobile-project-image-placeholder"
                      style={{ background: project.iconGradient }}
                    >
                      <IconComponent
                        size={32}
                        strokeWidth={1.5}
                        color="white"
                      />
                    </div>
                  )}

                  <div className="mobile-project-content">
                    <div className="mobile-project-header">
                      <h3>{project.title}</h3>
                      <span
                        className="mobile-project-status"
                        style={{ color: getStatusInfo(project.status).color }}
                      >
                        <StatusIcon size={12} />
                        {getStatusInfo(project.status).text}
                      </span>
                    </div>
                    <p className="mobile-project-description">
                      {project.description}
                    </p>
                    <div className="mobile-project-techs">
                      {project.techs.slice(0, 3).map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mobile Modal Sederhana */}
      {/* Mobile Modal - Premium Bottom Sheet */}
      {selectedProject && (
        <div
          className="mobile-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="mobile-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* iOS Style Handle */}
            <div className="mobile-modal-container-handle"></div>

            {/* Close Button */}
            <button
              className="mobile-modal-container-close"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            {/* Image Section */}
            <div className="mobile-modal-container-image-wrapper">
              <img
                src={selectedProject.imageMobile || selectedProject.image}
                alt={selectedProject.title}
                className="mobile-modal-container-image"
              />
              <div
                className="mobile-modal-container-status"
                data-status={selectedProject.status}
              >
                {/* ✅ Perbaikan: panggil icon sebagai komponen */}
                {(() => {
                  const StatusIcon = getStatusInfo(selectedProject.status).icon;
                  return <StatusIcon size={12} />;
                })()}
                <span>{getStatusInfo(selectedProject.status).text}</span>
              </div>
            </div>

            {/* Content Section - Scrollable */}
            <div className="mobile-modal-container-content">
              {/* Header */}
              <div className="mobile-modal-container-header">
                <div
                  className="mobile-modal-container-icon"
                  style={{ background: selectedProject.iconGradient }}
                >
                  <selectedProject.icon
                    size={26}
                    strokeWidth={1.5}
                    color="white"
                  />
                </div>
                <div className="mobile-modal-container-title-section">
                  <h3 className="mobile-modal-container-title">
                    {selectedProject.title}
                  </h3>
                  <p className="mobile-modal-container-subtitle">
                    {selectedProject.description}
                  </p>
                </div>
              </div>

              <div className="mobile-modal-container-divider"></div>

              {/* About Section */}
              <div className="mobile-modal-container-section">
                <h4 className="mobile-modal-container-section-title">About</h4>
                <p className="mobile-modal-container-section-text">
                  {selectedProject.longDescription ||
                    selectedProject.description}
                </p>
              </div>

              {/* Features Section */}
              <div className="mobile-modal-container-section">
                <h4 className="mobile-modal-container-section-title">
                  Key Features
                </h4>
                <ul className="mobile-modal-container-features">
                  {selectedProject.features.map((feature) => (
                    <li key={feature}>
                      <span className="feature-check">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Section */}
              <div className="mobile-modal-container-section">
                <h4 className="mobile-modal-container-section-title">
                  Technologies
                </h4>
                <div className="mobile-modal-container-techs">
                  {selectedProject.techs.map((tech) => (
                    <span key={tech} className="mobile-modal-container-tech">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links Section */}
              <div className="mobile-modal-container-links">
                {selectedProject.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      link.label === "Live Demo"
                        ? "mobile-modal-container-link-primary"
                        : "mobile-modal-container-link-secondary"
                    }
                  >
                    {link.label}
                    <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
