"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    number: "01",
    title: "Yarn",
    description:
      "Textile yarn solutions selected for consistency and downstream performance.",
    image: "/images/products/yarn.jpg",
  },
  {
    number: "02",
    title: "Gola",
    description:
      "Yarn formats and textile materials prepared for manufacturing requirements.",
    image: "/images/products/gola.jpg",
  },
  {
    number: "03",
    title: "Fabric",
    description:
      "Fabric produced for a range of textile and garment applications.",
    image: "/images/products/fabric.jpg",
  },
  {
    number: "04",
    title: "Custom",
    description:
      "Talk to our team about specific fabric, yarn or manufacturing requirements.",
    image: "/images/products/custom.jpg",
  },
];

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".product-card",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".products-grid",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="products" className="products">
      <div className="products-header">
        <div className="section-number">02 — PRODUCTS</div>

        <div>
          <h2 className="products-heading">
            Materials
            <br />
            <em>with purpose.</em>
          </h2>

          <p className="products-description">
            From yarn to finished fabric, Kamal Textile works across the
            materials that form the foundation of textile manufacturing.
          </p>
        </div>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <article className="product-card" key={product.number}>
            <div
              className="product-image"
              style={{
                backgroundImage: `url(${product.image})`,
              }}
            />

            <div className="product-card-overlay" />

            <div className="product-arrow">↗</div>

            <div className="product-info">
              <span className="product-number">{product.number}</span>

              <h3>{product.title}</h3>

              <p>{product.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}