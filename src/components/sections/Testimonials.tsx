"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const quotes = [
  {
    text: "I avoided dentists for six years. Lumina got me through a full restoration without a single panic moment. I actually fell asleep during the implant.",
    author: "Priya S.",
    context: "Implant patient",
  },
  {
    text: "They showed me my new smile on a screen before touching a tooth. Three veneers later, it is exactly what they promised.",
    author: "Marcus T.",
    context: "Smile design",
  },
];

export default function Testimonials() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".quote-block").forEach((el) => {
          gsap.from(el, {
            y: 48,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              once: true,
            },
          });
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="stories-anchor" className="relative overflow-hidden bg-snow px-6 py-28 md:py-36 lg:px-10">
      <div className="animate-glow-drift pointer-events-none absolute right-0 top-1/3 h-[60%] w-[70%] translate-x-1/3 bg-[radial-gradient(ellipse_at_center,rgba(142,202,230,0.22),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-sky-deep">
          Patient Stories
        </p>

        <blockquote className="quote-block mt-14 max-w-3xl">
          <span className="font-display text-7xl leading-none text-sky">“</span>
          <p className="-mt-6 font-display text-3xl font-medium italic leading-snug tracking-tight text-ink sm:text-4xl md:text-5xl">
            {quotes[0].text}
          </p>
          <footer className="mt-8 font-body text-xs font-semibold uppercase tracking-[0.25em] text-ink-soft">
            {quotes[0].author} <span className="text-sky-deep">·</span> {quotes[0].context}
          </footer>
        </blockquote>

        <blockquote className="quote-block ml-auto mt-24 max-w-3xl md:mt-32">
          <span className="font-display text-7xl leading-none text-sky">“</span>
          <p className="-mt-6 font-display text-3xl font-medium italic leading-snug tracking-tight text-ink sm:text-4xl md:text-5xl">
            {quotes[1].text}
          </p>
          <footer className="mt-8 font-body text-xs font-semibold uppercase tracking-[0.25em] text-ink-soft">
            {quotes[1].author} <span className="text-sky-deep">·</span> {quotes[1].context}
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
