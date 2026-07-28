"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tech = [
  {
    term: "Imaging",
    detail: "3D CBCT scans and digital X-rays at a tenth of the radiation of film.",
  },
  {
    term: "Scanning",
    detail: "Intraoral scanners, no gag-inducing molds ever. Your teeth, rendered in minutes.",
  },
  {
    term: "Laser",
    detail: "Laser dentistry for gum care and cavity prep. Quieter, gentler, faster healing.",
  },
  {
    term: "Comfort",
    detail: "Sedation from laughing gas to IV, plus noise-cancelling headphones and weighted blankets.",
  },
  {
    term: "Sterilization",
    detail: "Hospital-grade sterilization with sealed, tracked instrument cycles for every visit.",
  },
  {
    term: "Records",
    detail: "Fully digital records that follow you. Second opinions and referrals shared in one tap.",
  },
];

export default function Technology() {
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
          .from(".tech-header", {
            y: 28,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out",
          })
          .from(
            ".tech-row",
            {
              y: 20,
              opacity: 0,
              duration: 0.7,
              ease: "power4.out",
              stagger: 0.08,
            },
            "-=0.4"
          );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="technology" ref={root} className="bg-ice px-6 py-28 md:py-36 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="tech-header">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-sky-deep">
            The Technology
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Precise where it <span className="italic text-sky-deep">counts.</span>
          </h2>
        </div>

        <dl className="mt-14 border-t border-line md:mt-20">
          {tech.map((row) => (
            <div
              key={row.term}
              className="tech-row grid grid-cols-1 gap-2 border-b border-line py-6 transition-colors duration-300 hover:bg-snow md:grid-cols-[220px_1fr] md:gap-8 md:px-4 md:py-7"
            >
              <dt className="font-display text-2xl font-semibold tracking-tight text-ink">
                {row.term}
              </dt>
              <dd className="font-body text-sm leading-relaxed text-ink-soft sm:text-base">
                {row.detail}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
