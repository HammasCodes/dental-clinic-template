"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LINE_ONE = "Dentistry should feel like daylight.";
const LINE_TWO = "Clear, calm, and honest.";

function Words({ text }: { text: string }) {
  return (
    <span aria-hidden="true">
      {text.split(" ").map((word, i, words) => (
        <span key={i} className="inline-block whitespace-nowrap">
          <span
            className={`manifesto-word inline-block will-change-transform ${
              word === "daylight" ? "italic text-sky-deep" : ""
            }`}
          >
            {word}
          </span>
          {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

export default function Manifesto() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: root.current,
              start: "top 72%",
              once: true,
            },
          })
          .from(".manifesto-kicker", {
            y: 16,
            opacity: 0,
            duration: 0.7,
            ease: "power4.out",
          })
          .from(
            ".manifesto-word",
            {
              y: "0.6em",
              opacity: 0,
              duration: 1,
              ease: "power4.out",
              stagger: 0.045,
            },
            "-=0.35"
          )
          .from(
            ".manifesto-note",
            { y: 14, opacity: 0, duration: 0.7, ease: "power4.out" },
            "-=0.4"
          );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="manifesto"
      className="relative overflow-hidden bg-snow px-6 py-32 md:py-44 lg:px-10"
    >
      <div className="animate-glow-drift pointer-events-none absolute -top-24 left-1/2 h-[55%] w-[90%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(142,202,230,0.28),transparent_62%)]" />
      <div className="relative mx-auto max-w-5xl text-center">
        <p className="manifesto-kicker font-body text-xs font-semibold uppercase tracking-[0.35em] text-sky-deep">
          The Lumina Principle
        </p>
        <h2 className="mt-10 font-display text-4xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="sr-only">
            {LINE_ONE} {LINE_TWO}
          </span>
          <Words text={LINE_ONE} /> <Words text={LINE_TWO} />
        </h2>
        <p className="manifesto-note mx-auto mt-12 max-w-md font-body text-sm leading-relaxed text-ink-soft">
          Written on the wall of our first operatory in 2011, and the measure
          of every visit since.
        </p>
      </div>
    </section>
  );
}
