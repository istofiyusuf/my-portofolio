"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { projectsData, Project, getAllTags } from "@/data/projects";
import { ExternalLink, CheckCircle, Clock, Wrench, X } from "lucide-react";

export default function DesktopProjects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] =
    useState<Project[]>(projectsData);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const tags = ["all", ...getAllTags()];

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((p) => p.tags.includes(selectedCategory)),
      );
    }
  }, [selectedCategory]);

  const getStatusIcon = (status: Project["status"]) => {
    switch (status) {
      case "live":
        return <CheckCircle size={14} />;
      case "coming-soon":
        return <Clock size={14} />;
      case "maintenance":
        return <Wrench size={14} />;
    }
  };

  const getStatusText = (status: Project["status"]) => {
    switch (status) {
      case "live":
        return "Live";
      case "coming-soon":
        return "Coming Soon";
      case "maintenance":
        return "Maintenance";
    }
  };

  const handleImageError = (projectId: string) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }));
  };

  return (
    <>
      <section id="projects" className="desktop-projects">
        <div className="projects-bg-blur"></div>

        <div className="projects-container">
          <div className="projects-header">
            <p className="projects-badge">My Work</p>
            <h2 className="projects-title">
              Featured Projects
              <span className="title-dot">.</span>
            </h2>
            <p className="projects-subtitle">
              Real-world solutions I've built and deployed
            </p>
          </div>

          {/* Filter Tags */}
          <div className="projects-filters">
            {tags.map((tag) => (
              <button
                key={tag}
                className={`filter-btn ${selectedCategory === tag ? "active" : ""}`}
                onClick={() => setSelectedCategory(tag)}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => {
              const IconComponent = project.icon;
              const hasError = imageErrors[project.id];

              return (
                <div
                  key={project.id}
                  className="project-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="project-card-inner">
                    <div className="project-image-wrapper">
                      {!hasError ? (
                        <div className="project-image-container">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="project-image"
                            onError={() => handleImageError(project.id)}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      ) : (
                        <div
                          className="project-image-placeholder"
                          style={{ background: project.iconGradient }}
                        >
                          <IconComponent
                            size={48}
                            strokeWidth={1}
                            color="white"
                          />
                        </div>
                      )}
                      <div
                        className="project-status-badge"
                        data-status={project.status}
                      >
                        {getStatusIcon(project.status)}
                        <span>{getStatusText(project.status)}</span>
                      </div>
                    </div>

                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">
                        {project.description}
                      </p>

                      <div className="project-techs">
                        {project.techs.slice(0, 4).map((tech) => (
                          <span key={tech} className="project-tech">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="project-links">
                        {project.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.url}
                            target={link.isExternal ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="project-link"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {link.label}
                            <ExternalLink size={14} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== DESKTOP MODAL ========== */}
      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              <X size={18} />
            </button>

            {/* Modal Image */}
            <div className="modal-image-container">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="modal-image"
              />
              <div
                className="modal-status-badge"
                data-status={selectedProject.status}
              >
                {getStatusIcon(selectedProject.status)}
                <span>{getStatusText(selectedProject.status)}</span>
              </div>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="modal-content">
              <div className="modal-header-custom">
                <div
                  className="modal-icon"
                  style={{ background: selectedProject.iconGradient }}
                >
                  <selectedProject.icon
                    size={20}
                    strokeWidth={1.5}
                    color="white"
                  />
                </div>
                <div>
                  <h2 className="modal-title">{selectedProject.title}</h2>
                  <p className="modal-tagline">{selectedProject.description}</p>
                </div>
              </div>

              <div className="modal-body">
                <div className="modal-section">
                  <h3>About This Project</h3>
                  <p>
                    {selectedProject.longDescription ||
                      selectedProject.description}
                  </p>
                </div>

                <div className="modal-section">
                  <h3>Key Features</h3>
                  <ul className="modal-features">
                    {selectedProject.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h3>Technologies Used</h3>
                  <div className="modal-techs">
                    {selectedProject.techs.map((tech) => (
                      <span key={tech} className="modal-tech">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-links">
                  {selectedProject.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-link-primary"
                    >
                      {link.label}
                      <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
