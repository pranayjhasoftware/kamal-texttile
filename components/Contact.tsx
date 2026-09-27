"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-label-row > *", {
        scrollTrigger: {
          trigger: ".contact",
          start: "top 80%",
        },
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".contact-title-line", {
        scrollTrigger: {
          trigger: ".contact-title",
          start: "top 80%",
        },
        y: 120,
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: "power4.out",
      });

      gsap.from(".contact-card", {
        scrollTrigger: {
          trigger: ".contact-grid",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="contact">
      {/* TOP */}
      <div className="contact-label-row">
        <span>07 — CONTACT</span>
        <span>SHELAR · BHIWANDI</span>
      </div>

      {/* TITLE */}
      <div className="contact-title">
        <div className="contact-title-line">LET&apos;S</div>

        <div className="contact-title-line contact-title-serif">
          TALK.
        </div>
      </div>

      <div className="contact-intro">
        <p>
          Have a textile requirement?
          <br />
          Let&apos;s discuss it.
        </p>
      </div>

      {/* MAIN CONTACT GRID */}
      <div className="contact-grid">
        {/* LEFT */}
        <div className="contact-card contact-primary">
          <span className="contact-card-label">GET IN TOUCH</span>

          <h3>Abhishek Nakate</h3>

          <p className="contact-role">
            Kamal Textiles
            <br />
            Shelar, Bhiwandi
          </p>

          <div className="contact-actions">
            <a href="tel:+919890307474" className="contact-action">
              <span>Call</span>
              <strong>+91 98903 07474</strong>
              <span>↗</span>
            </a>

            <a
              href="https://wa.me/919890307474"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action"
            >
              <span>WhatsApp</span>
              <strong>+91 98903 07474</strong>
              <span>↗</span>
            </a>

            <a
              href="mailto:abhisheknakate9990@gmail.com"
              className="contact-action"
            >
              <span>Email</span>
              <strong>abhisheknakate9990@gmail.com</strong>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-card contact-location">
          <div className="location-top">
            <span className="contact-card-label">VISIT US</span>

            <span className="location-coordinates">
              19.282837° N
              <br />
              73.049557° E
            </span>
          </div>

          <div className="location-content">
            <h3>
              Kamal
              <br />
              Textiles.
            </h3>

            <p>
              Shelar
              <br />
              Bhiwandi
              <br />
              Maharashtra, India
            </p>
          </div>

          <a
            href="https://www.google.com/maps?q=19.282837,73.0495565"
            target="_blank"
            rel="noopener noreferrer"
            className="location-button"
          >
            <span>Open Google Maps</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="contact-bottom">
        <div>
          <span className="contact-card-label">BUSINESS HOURS</span>
          <strong>EVERY DAY · 9 AM — 9 PM</strong>
        </div>

        <button
          type="button"
          className="sample-button"
          onClick={() => {
            // Sample enquiry will be connected later.
          }}
        >
          <span>Request a Sample</span>
          <span>↗</span>
        </button>
      </div>

      {/* FOOTER */}
      <footer className="contact-footer">
        <div className="footer-brand">
          <span>KAMAL</span>
          <em>TEXTILE</em>
        </div>

        <div className="footer-links">
          <a href="mailto:abhisheknakate9990@gmail.com">MAIL</a>
          <a href="tel:+919890307474">PHONE</a>

          <a
            href="https://wa.me/919890307474"
            target="_blank"
            rel="noopener noreferrer"
          >
            WHATSAPP
          </a>
        </div>

        <span className="footer-copy">
          © {new Date().getFullYear()} Kamal Textiles
        </span>
      </footer>
    </section>
  );
}