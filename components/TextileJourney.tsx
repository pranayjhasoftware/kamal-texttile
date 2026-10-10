"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ResponsiveImage from "@/components/ResponsiveImage";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stages = [
  {
    number: "01",
    title: "YARN",
    description:
      "The foundation of every textile begins with carefully selected yarn.",
    image: "/images/journey/yarn",
  },
  {
    number: "02",
    title: "WEAVING",
    description:
      "Yarn is transformed through precise weaving into structured textile surfaces.",
    image: "/images/journey/weaving",
  },
  {
    number: "03",
    title: "PROCESSING",
    description:
      "Fabric undergoes finishing processes designed to achieve the desired character and performance.",
    image: "/images/journey/processing",
  },
  {
    number: "04",
    title: "QUALITY",
    description:
      "Every stage is inspected to maintain consistency across the finished material.",
    image: "/images/journey/quality",
  },
  {
    number: "05",
    title: "FABRIC",
    description:
      "The final textile is prepared for customers, manufacturers and the next stage of production.",
    image: "/images/journey/fabric",
  },
];

export default function TextileJourney() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".journey-panel");

      panels.forEach((panel, index) => {
        const image = panel.querySelector(".journey-image");
        const content = panel.querySelector(".journey-content");

        gsap.fromTo(
          image,
          {
            scale: 1.15,
          },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          content,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: panel,
              start: "top 75%",
              end: "top 35%",
              scrub: 1,
            },
          }
        );
      });

      gsap.fromTo(
        ".journey-heading",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".journey-intro",
            start: "top 80%",
            end: "top 35%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="journey">
      <div className="journey-intro">
        <div className="section-number">01 — PROCESS</div>

        <h2 className="journey-heading">
          From the first
          <br />
          <em>thread</em> to
          <br />
          finished fabric.
        </h2>

        <p>
          Every textile carries a journey. At Kamal Textile, that journey
          begins with yarn and moves through a carefully controlled process
          towards finished fabric.
        </p>
      </div>

      <div className="journey-panels">
        {stages.map((stage) => (
          <article className="journey-panel" key={stage.number}>
            <div className="journey-image">
              <ResponsiveImage
                base={stage.image}
                sizes="(max-width: 900px) 100vw, 90vw"
              />
            </div>

            <div className="journey-overlay" />

            <div className="journey-content">
              <span>{stage.number}</span>

              <h3>{stage.title}</h3>

              <p>{stage.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}