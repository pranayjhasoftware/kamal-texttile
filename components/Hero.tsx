"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      timeline
        .from(".hero-image", {
          scale: 1.15,
          duration: 1.8,
        })
        .from(
          ".hero-overlay",
          {
            opacity: 0,
            duration: 1,
          },
          "-=1.3"
        )
        .from(
          titleRef.current,
          {
            y: 100,
            opacity: 0,
            duration: 1.2,
          },
          "-=0.6"
        )
        .from(
          subtitleRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.7"
        )
        .from(
          buttonRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero">
      <div className="hero-image" />

      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-kicker">TEXTILES • YARN • FABRICS</p>

        <h1 ref={titleRef}>
          FROM YARN
          <br />
          <em>TO FABRIC.</em>
        </h1>

        <p ref={subtitleRef} className="hero-description">
          Textile manufacturing rooted in Narpoli, Bhiwandi.
          <br />
          Built around quality, consistency and craft.
        </p>

        <a ref={buttonRef} href="#products" className="hero-button">
          Explore Products
          <span>↗</span>
        </a>
      </div>

      <div className="hero-bottom">
        <span>BHIVANDI · MAHARASHTRA</span>

        <span className="scroll-indicator">
          SCROLL
          <i />
        </span>

        <span>EST. KAMAL TEXTILE</span>
      </div>
    </section>
  );
}