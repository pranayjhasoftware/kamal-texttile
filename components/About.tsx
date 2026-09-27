"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-top > *", {
        scrollTrigger: {
          trigger: ".about",
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".about-heading", {
        scrollTrigger: {
          trigger: ".about-main",
          start: "top 75%",
        },
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.from(".about-copy p", {
        scrollTrigger: {
          trigger: ".about-copy",
          start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".about-capability", {
        scrollTrigger: {
          trigger: ".about-bottom",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="about">
      <div className="about-top">
        <span>06 — ABOUT</span>
        <span>SHELAR · BHIWANDI</span>
      </div>

      <div className="about-main">
        <h2 className="about-heading">
          Textile
          <br />
          <em>at its core.</em>
        </h2>

        <div className="about-copy">
          <p>
            Founded in 2023, Kamal Textiles is a textile manufacturing and
            supply business based in Shelar, Bhiwandi.
          </p>

          <p>
            Fabric manufacturing and fabric supply form the core of our
            operations, supported by capabilities across yarn, weaving,
            processing, finishing and embroidery.
          </p>

          <p>
            Built with a focus on scale and consistent textile production,
            Kamal Textiles serves the growing needs of customers across the
            textile value chain and also supports textile exports.
          </p>
        </div>
      </div>

      <div className="about-bottom">
        <div className="about-capability">
          <span>01</span>
          <strong>Fabric Manufacturing</strong>
        </div>

        <div className="about-capability">
          <span>02</span>
          <strong>Fabric Supply</strong>
        </div>

        <div className="about-capability">
          <span>03</span>
          <strong>Textile Export</strong>
        </div>
      </div>
    </section>
  );
}