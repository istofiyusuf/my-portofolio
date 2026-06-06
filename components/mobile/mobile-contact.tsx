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

export default function MobileContact() {
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

    const formUrl = "https://api.web3forms.com/submit";
    const accessKey = "442ad866-3f41-4229-b42a-02bdfba2932e"; // ← GANTI DENGAN ACCESS KEY ANDA

    const formPayload = {
      access_key: accessKey,
      name: formData.name,
      email: formData.email,
      message: formData.message,
      subject: `New message from ${formData.name} - Portfolio Contact`,
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
          message: "Message sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus({ type: null, message: "" }), 5000);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send. Please try again.",
      });
      setTimeout(() => setSubmitStatus({ type: null, message: "" }), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="mobile-contact">
      <div className="mobile-contact-container">
        <div className="mobile-contact-header">
          <p className="mobile-contact-badge">Get In Touch</p>
          <h2 className="mobile-contact-title">Let's Connect</h2>
        </div>

        <div className="mobile-contact-info">
          <p className="mobile-contact-info-text">
            I'm always open to discussing new projects and creative ideas.
          </p>

          <div className="mobile-contact-details">
            <div className="mobile-contact-detail">
              <Mail size={18} />
              <div>
                <span>Email</span>
                <a href="mailto:istofi@yusuf.com">istofi@yusuf.com</a>
              </div>
            </div>
            <div className="mobile-contact-detail">
              <MapPin size={18} />
              <div>
                <span>Location</span>
                <p>Indonesia</p>
              </div>
            </div>
            <div className="mobile-contact-detail">
              <Phone size={18} />
              <div>
                <span>Availability</span>
                <p className="available">Available for work</p>
              </div>
            </div>
          </div>

          <div className="mobile-contact-social">
            <p>Follow me</p>
            <div className="mobile-contact-social-links">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mobile-contact-form">
          <div className="mobile-form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="mobile-form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="mobile-form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={4}
              required
              disabled={isSubmitting}
            />
          </div>
          <button
            type="submit"
            className="mobile-contact-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <Send size={14} />
          </button>

          {submitStatus.type === "success" && (
            <div className="mobile-form-success success">
              <CheckCircle size={14} />
              {submitStatus.message}
            </div>
          )}
          {submitStatus.type === "error" && (
            <div className="mobile-form-success error">
              <AlertCircle size={14} />
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
