"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processes = [
  {
    number: "01",
    title: "YARN",
    subtitle: "The beginning",
    description:
      "Quality textile production begins with the right yarn. Kamal Textile works with yarn manufacturing and supply to establish a reliable foundation for fabric production.",
    image: "/images/manufacturing/yarn.jpg",
  },
  {
    number: "02",
    title: "WEAVING",
    subtitle: "Creating structure",
    description:
      "Through controlled weaving processes, yarn is transformed into fabric with the structure, texture and characteristics required for different applications.",
    image: "/images/manufacturing/weaving.jpg",
  },
  {
    number: "03",
    title: "FABRIC",
    subtitle: "Our core",
    description:
      "Fabric manufacturing and supply form the core of Kamal Textile's business, serving customers looking for consistent textile materials and reliable supply.",
    image: "/images/manufacturing/fabric.jpg",
  },
  {
    number: "04",
    title: "FINISHING",
    subtitle: "Refining the fabric",
    description:
      "Fabric finishing and processing bring the material closer to its intended appearance, feel and application.",
    image: "/images/manufacturing/finishing.jpg",
  },
  {
  number: "05",
  title: "EMBROIDERY",
  subtitle: "Adding character",
  description:
    "Embroidery adds detail and character to textile materials, creating distinctive finished applications.",
  image: "/images/manufacturing/embroidery.jpg",
},
{
  number: "06",
  title: "EXPORT",
  subtitle: "Beyond borders",
  description:
    "Kamal Textile supports textile exports, connecting its products with customers beyond the domestic market.",
  image: "/images/manufacturing/export.jpg",
},
];

export default function Manufacturing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(
        ".manufacturing-step"
      );

      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActive(index),
          onEnterBack: () => setActive(index),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!imageRef.current || !contentRef.current) return;

    const image = imageRef.current;
    const content = contentRef.current;

    const timeline = gsap.timeline();

    timeline
      .to(image, {
        opacity: 0,
        scale: 1.04,
        duration: 0.25,
        ease: "power2.in",
      })
      .set(image, {
        backgroundImage: `url(${processes[active].image})`,
      })
      .set(content, {
        y: 30,
      })
      .to(image, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
      })
      .to(
        content,
        {
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      );

    return () => {
      timeline.kill();
    };
  }, [active]);

  return (
    <section
      ref={sectionRef}
      id="manufacturing"
      className="manufacturing"
    >
      <div className="manufacturing-sticky">
        <div
          ref={imageRef}
          className="manufacturing-background"
          style={{
            backgroundImage: `url(${processes[0].image})`,
          }}
        />

        <div className="manufacturing-overlay" />

        <div className="manufacturing-top">
          <span>03 — MANUFACTURING</span>

          <span>
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(processes.length).padStart(2, "0")}
          </span>
        </div>

        <div ref={contentRef} className="manufacturing-content">
          <div className="manufacturing-number">
            {processes[active].number}
          </div>

          <div>
            <span className="manufacturing-subtitle">
              {processes[active].subtitle}
            </span>

            <h2>{processes[active].title}</h2>

            <p>{processes[active].description}</p>
          </div>
        </div>

        <div className="manufacturing-progress">
          {processes.map((process, index) => (
            <div
              key={process.number}
              className={`progress-item ${
                active === index ? "active" : ""
              }`}
            >
              <span>{process.number}</span>
              <i />
            </div>
          ))}
        </div>
      </div>

      <div className="manufacturing-scroll">
        {processes.map((process) => (
          <div
            className="manufacturing-step"
            key={process.number}
          />
        ))}
      </div>
    </section>
  );
}