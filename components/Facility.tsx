"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const facilityItems = [
  {
    number: "01",
    title: "The Facility",
    subtitle: "Shelar · Bhiwandi",
    image: "/images/facility/mill.jpg",
  },
  {
    number: "02",
    title: "Production",
    subtitle: "Textile manufacturing",
    image: "/images/facility/production.jpg",
  },
  {
    number: "03",
    title: "Yarn",
    subtitle: "The foundation",
    image: "/images/facility/yarn.jpg",
  },
  {
    number: "04",
    title: "Fabric",
    subtitle: "Our core material",
    image: "/images/facility/fabric.jpg",
  },
  {
    number: "05",
    title: "Finishing",
    subtitle: "The final detail",
    image: "/images/facility/finishing.jpg",
  },
];

export default function Facility() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;

      if (!track) return;

      const getDistance = () =>
        track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getDistance() + window.innerHeight}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="facility" className="facility">
      <div className="facility-intro">
        <div>
          <span>04 — FACILITY</span>
        </div>

        <h2>
          Inside
          <br />
          <em>Kamal.</em>
        </h2>

        <p>
          Located in Shelar, Bhiwandi, Kamal Textiles operates within one of
          India&apos;s important textile manufacturing regions, with a
          large-capacity setup built around textile production and supply.
        </p>
      </div>

      <div ref={trackRef} className="facility-track">
        {facilityItems.map((item) => (
          <article className="facility-card" key={item.number}>
            <div className="facility-card-image">
              <img src={item.image} alt={item.title} />

              <div className="facility-card-overlay" />
            </div>

            <div className="facility-card-content">
              <span>{item.number}</span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="facility-location">
        <span>SHELAR</span>
        <span>BHIVANDI · MAHARASHTRA</span>
        <span>EST. 2023</span>
      </div>
    </section>
  );
}