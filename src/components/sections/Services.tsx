"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "General & Preventive",
    body: "Checkups, cleanings and catch-it-early care. The quiet foundation of every healthy smile we look after.",
  },
  {
    number: "02",
    title: "Cosmetic Dentistry",
    body: "Veneers, bonding and professional whitening, planned digitally so you preview your new smile before we begin.",
  },
  {
    number: "03",
    title: "Implants & Restoration",
    body: "Single implants to full-arch restorations, guided by 3D imaging for millimetre-level precision.",
  },
  {
    number: "04",
    title: "Invisalign Orthodontics",
    body: "Discreet alignment for teens and adults, monitored remotely so appointments fit around your calendar.",
  },
];

export default function Services() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: root.current,
              start: "top 75%",
              once: true,
            },
          })
          .from(".services-header", {
            y: 28,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out",
          })
          .from(
            ".service-row",
            {
              y: 40,
              opacity: 0,
              duration: 0.8,
              ease: "power4.out",
              stagger: 0.12,
            },
            "-=0.4"
          );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={root} className="bg-snow px-6 py-28 md:py-36 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="services-header flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-sky-deep">
              What We Do
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl">
              Complete care, <span className="italic text-sky-deep">one studio.</span>
            </h2>
          </div>
          <p className="max-w-xs font-body text-sm leading-relaxed text-ink-soft">
            Every treatment under one roof, so your records, your scans and
            your dentist never have to travel.
          </p>
        </div>

        <div className="mt-16 border-t border-line md:mt-24">
          {services.map((service) => (
            <div
              key={service.number}
              className="service-row group grid grid-cols-1 gap-3 border-b border-line py-9 transition-colors duration-300 hover:bg-ice md:grid-cols-[90px_1.1fr_1fr_60px] md:items-baseline md:gap-8 md:px-4 md:py-11"
            >
              <span className="font-display text-3xl font-medium text-ink-soft/40 transition-colors duration-300 group-hover:text-sky-deep md:text-4xl">
                {service.number}
              </span>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl md:text-4xl">
                {service.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-ink-soft sm:text-base">
                {service.body}
              </p>
              <span className="hidden font-display text-2xl text-sky-deep opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 md:block">
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
