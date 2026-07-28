"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const details = [
  { term: "Studio", detail: "450 Post Street, San Francisco, CA 94102" },
  { term: "Phone", detail: "(415) 555-0139" },
  { term: "Email", detail: "hello@luminadental.studio" },
  { term: "Hours", detail: "Mon – Fri 8 – 6 · Sat 9 – 2" },
];

export default function Contact() {
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
          .from(".contact-left", {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: "power4.out",
          })
          .from(
            ".contact-row",
            {
              y: 18,
              opacity: 0,
              duration: 0.7,
              ease: "power4.out",
              stagger: 0.09,
            },
            "-=0.5"
          );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={root}
      className="relative overflow-hidden bg-ink px-6 py-28 md:py-36 lg:px-10"
    >
      <div className="pointer-events-none absolute -top-1/3 left-1/4 h-[80%] w-[70%] bg-[radial-gradient(ellipse_at_center,rgba(142,202,230,0.14),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2 md:gap-20">
        <div className="contact-left">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-snow/20 bg-snow/5 px-4 py-1.5">
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-sky" />
            <span className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-snow/85">
              Same-day emergency slots daily
            </span>
          </div>
          <h2 className="mt-7 font-display text-4xl font-semibold leading-tight tracking-tight text-snow sm:text-5xl md:text-6xl">
            Book your <span className="italic text-sky">visit.</span>
          </h2>
          <p className="mt-7 max-w-md font-body text-base leading-relaxed text-snow/75">
            New patients welcome. Every first visit includes a full exam, a
            digital scan and an honest, jargon-free plan. No treatment starts
            until you understand it.
          </p>
          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <a
              href="tel:+14155550139"
              className="rounded-full bg-snow px-9 py-3.5 text-center font-body text-sm font-semibold tracking-wide text-ink transition-[scale,background-color] duration-200 hover:scale-[1.03] hover:bg-sky active:scale-[0.97]"
            >
              Book an Appointment
            </a>
            <span className="font-body text-xs font-medium uppercase tracking-[0.25em] text-snow/60">
              Or call. We answer.
            </span>
          </div>
        </div>

        <dl className="self-end border-t border-line-dark">
          {details.map((row) => (
            <div
              key={row.term}
              className="contact-row grid grid-cols-[110px_1fr] items-baseline gap-6 border-b border-line-dark py-6 md:grid-cols-[140px_1fr]"
            >
              <dt className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-snow/60">
                {row.term}
              </dt>
              <dd className="font-display text-xl font-medium tracking-tight text-snow sm:text-2xl">
                {row.detail}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
