"use client";

import { useState } from "react";
import { socialLinks } from "@/data/socials";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function DesktopContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Web3Forms API endpoint
    const formUrl = "https://api.web3forms.com/submit";

    // Ganti dengan Access Key Anda dari web3forms.com
    const accessKey = "442ad866-3f41-4229-b42a-02bdfba2932e"; // ← GANTI DENGAN ACCESS KEY ANDA

    const formPayload = {
      access_key: accessKey,
      name: formData.name,
      email: formData.email,
      message: formData.message,
      subject: `New message from ${formData.name} - Portfolio Contact`,
      from_name: formData.name,
      // Optional: redirect to prevent spam
      botcheck: "",
    };

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formPayload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: "" });
        }, 5000);
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or email me directly.",
      });

      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="desktop-contact">
      <div className="contact-bg-blur"></div>

      <div className="contact-container">
        <div className="contact-header">
          <p className="contact-badge">Get In Touch</p>
          <h2 className="contact-title">
            Let's Work Together
            <span className="title-dot">.</span>
          </h2>
          <p className="contact-subtitle">
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column - Info & Social */}
          <div className="contact-info">
            <div className="contact-info-card">
              <h3 className="contact-info-title">Let's Connect</h3>
              <p className="contact-info-description">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="contact-detail-label">Email</p>
                    <a
                      href="mailto:yusufistofi@gmail.com"
                      className="contact-detail-value"
                    >
                      yusufistofi@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="contact-detail-label">Location</p>
                    <p className="contact-detail-value">Indonesia</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="contact-detail-label">Availability</p>
                    <p className="contact-detail-value available">
                      Available for work
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <p className="contact-social-label">Follow me on</p>
                <div className="contact-social-links">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-social-link"
                        style={
                          {
                            "--social-color": social.color,
                          } as React.CSSProperties
                        }
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={4}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="btn-loading">Sending...</span>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>

              {submitStatus.type === "success" && (
                <div className="form-success success">
                  <CheckCircle size={16} />
                  {submitStatus.message}
                </div>
              )}

              {submitStatus.type === "error" && (
                <div className="form-success error">
                  <AlertCircle size={16} />
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
