"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const rooms = [
  {
    name: "Operatory 01",
    detail: "Natural light · ceiling display",
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop",
    alt: "Modern dental operatory with chair and ceiling-mounted light",
  },
  {
    name: "The Chair",
    detail: "Heated · massaging · headphone-ready",
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1600&auto=format&fit=crop",
    alt: "Dental chair with overhead lamp in a bright treatment room",
  },
  {
    name: "Consultation Lounge",
    detail: "Where plans are explained, not rushed",
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600&auto=format&fit=crop",
    alt: "Dentist reviewing a digital scan with a patient",
  },
  {
    name: "Imaging Room",
    detail: "3D CBCT · digital X-ray",
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
    alt: "Clinician operating advanced dental imaging equipment",
  },
  {
    name: "Sterilization Suite",
    detail: "Sealed, tracked instrument cycles",
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1600&auto=format&fit=crop",
    alt: "Dental instruments laid out in a sterile tray",
  },
  {
    name: "Reception",
    detail: "Coffee, calm, and on-time starts",
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1600&auto=format&fit=crop",
    alt: "Bright minimal dental clinic reception area",
  },
];

export default function Clinic() {
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
          .from(".clinic-header", {
            y: 28,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out",
          })
          .from(
            ".clinic-card",
            {
              y: 56,
              opacity: 0,
              duration: 0.9,
              ease: "power4.out",
              stagger: 0.12,
            },
            "-=0.4"
          )
          .from(
            ".clinic-footer",
            { y: 20, opacity: 0, duration: 0.7, ease: "power4.out" },
            "-=0.4"
          );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="clinic" ref={root} className="bg-snow px-6 py-28 md:py-36 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="clinic-header flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-sky-deep">
              The Clinic
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl">
              Built to feel <span className="italic text-sky-deep">unclinical.</span>
            </h2>
          </div>
          <p className="max-w-xs font-body text-sm leading-relaxed text-ink-soft">
            Daylight, warm wood and quiet machines. Every room designed to
            lower your shoulders, not raise them.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-16 md:mt-24 md:grid-cols-2 md:gap-y-24">
          {rooms.map((room, i) => (
            <div key={room.name} className="clinic-card group">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={room.src}
                  alt={room.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute bottom-5 left-5 translate-y-2 rounded-full bg-snow/95 px-5 py-2 font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  Step Inside →
                </span>
              </div>

              <div className="mt-6 flex items-baseline justify-between gap-4 border-t border-line pt-5">
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-sky-deep sm:text-3xl">
                    {room.name}
                  </h3>
                  <p className="mt-1.5 font-body text-xs font-medium uppercase tracking-[0.25em] text-ink-soft">
                    {room.detail}
                  </p>
                </div>
                <span className="font-display text-lg italic text-ink-soft/50">
                  № 0{i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="clinic-footer mt-20 flex justify-center border-t border-line pt-10 md:mt-24">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 font-body text-sm tracking-wide text-ink"
          >
            <span className="block h-px w-8 bg-ink/40 transition-all duration-300 group-hover:w-12 group-hover:bg-sky-deep" />
            Tour the studio before your first visit
            <span className="text-sky-deep transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
