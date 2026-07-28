"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFrameSequence } from "@/hooks/useFrameSequence";

gsap.registerPlugin(ScrollTrigger);

const TITLE = "Dentistry, brought to light.";

const TITLE_SEGMENTS = [
  { text: "Dentistry,", italic: false },
  { text: "brought to", italic: false },
  { text: "light.", italic: true },
];

function TitleChars() {
  return (
    <span aria-hidden="true">
      {TITLE_SEGMENTS.map((seg, si) => (
        <span key={si}>
          {seg.text.split(" ").map((word, wi, words) => (
            <span
              key={wi}
              className={`inline-block whitespace-nowrap ${
                seg.italic ? "italic text-sky" : ""
              }`}
            >
              {word.split("").map((ch, ci) => (
                <span key={ci} className="hero-char inline-block will-change-transform">
                  {ch}
                </span>
              ))}
              {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
            </span>
          ))}
          {si < TITLE_SEGMENTS.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cap1 = useRef<HTMLDivElement>(null);
  const cap2 = useRef<HTMLDivElement>(null);
  const cap3 = useRef<HTMLDivElement>(null);
  const railFill = useRef<HTMLDivElement>(null);
  const cue = useRef<HTMLDivElement>(null);
  const fadeOut = useRef<HTMLDivElement>(null);

  const { ready, draw, lastProgress } = useFrameSequence("hero");
  const drawRef = useRef(draw);

  useEffect(() => {
    drawRef.current = draw;
  }, [draw]);

  useEffect(() => {
    if (!ready) return;
    drawRef.current(canvasRef.current, lastProgress.current, "cover");
  }, [ready, lastProgress]);

  useEffect(() => {
    const onResize = () =>
      drawRef.current(canvasRef.current, lastProgress.current, "cover");
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [lastProgress]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power4.out" }, delay: 0.3 })
          .from(".hero-kicker", { y: 16, opacity: 0, duration: 0.7 })
          .from(".hero-char", { y: "0.7em", opacity: 0, duration: 1.1, stagger: 0.022 }, "-=0.45")
          .from(".hero-sub", { y: 20, opacity: 0, duration: 0.8 }, "-=0.65")
          .from(".hero-cta", { y: 20, opacity: 0, duration: 0.8, stagger: 0.12 }, "-=0.55")
          .from(".hero-rail", { opacity: 0, duration: 1 }, "-=0.6")
          .from(cue.current, { opacity: 0, duration: 0.8 }, "-=0.5");

        const proxy = { t: 0 };

        gsap
          .timeline({
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.5,
            },
          })
          .to(
            proxy,
            {
              t: 1,
              duration: 3,
              ease: "none",
              onUpdate: () => drawRef.current(canvasRef.current, proxy.t, "cover"),
            },
            0
          )
          .to(railFill.current, { scaleY: 1, duration: 3, ease: "none" }, 0)
          .to(cue.current, { opacity: 0, duration: 0.2, ease: "none" }, 0)
          .to(cap1.current, { yPercent: -18, opacity: 0, duration: 0.5, ease: "none" }, 0.35)
          .fromTo(
            cap2.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "none" },
            0.9
          )
          .to(cap2.current, { y: -60, opacity: 0, duration: 0.5, ease: "none" }, 1.7)
          .fromTo(
            cap3.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "none" },
            2.2
          )
          .to(fadeOut.current, { opacity: 1, duration: 0.22, ease: "none" }, 2.78);
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative h-[300vh] bg-ink md:h-[400vh]">
      <div className="sticky top-0 h-svh min-h-[560px] overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-poster.jpg"
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              ready ? "opacity-0" : "opacity-100"
            }`}
          />
          <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-ink/45" />
          <div className="pointer-events-none absolute -top-1/4 left-1/2 h-[70%] w-[90%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(142,202,230,0.16),transparent_60%)]" />
          <div className="grain absolute inset-0 opacity-[0.06] mix-blend-overlay" />
        </div>

        <div className="hero-rail absolute left-8 top-1/2 z-20 hidden -translate-y-1/2 items-center gap-4 lg:flex">
          <span className="block h-16 w-px bg-snow/30" />
          <p
            className="font-body text-[10px] font-medium uppercase tracking-[0.35em] text-snow/60"
            style={{ writingMode: "vertical-rl" }}
          >
            Lumina Dental · San Francisco · Est. 2011
          </p>
        </div>

        <div
          ref={cap1}
          className="absolute inset-0 z-10 flex items-end px-6 pb-24 will-change-transform md:items-center md:px-16 lg:px-28"
        >
          <div className="max-w-4xl md:pl-16">
            <p className="hero-kicker font-body text-xs font-medium uppercase tracking-[0.35em] text-snow/70">
              <span className="text-sky">01</span> · The Studio · San Francisco
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.03] tracking-tight text-snow sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              <span className="sr-only">{TITLE}</span>
              <TitleChars />
            </h1>
            <p className="hero-sub mt-7 max-w-lg font-body text-base leading-relaxed text-snow/80 sm:text-lg">
              A modern dental studio where precision technology meets genuine
              calm, from routine care to complete smile design.
            </p>
            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="hero-cta rounded-full bg-snow px-9 py-3.5 text-center font-body text-sm font-semibold tracking-wide text-ink transition-[scale,background-color] duration-200 hover:scale-[1.03] hover:bg-sky active:scale-[0.97]"
              >
                Book a Visit
              </a>
              <a
                href="#clinic"
                className="hero-cta group inline-flex items-center gap-3 font-body text-sm tracking-wide text-snow"
              >
                <span className="block h-px w-8 bg-snow/50 transition-all duration-300 group-hover:w-12 group-hover:bg-sky" />
                Explore the Studio
              </a>
            </div>
          </div>
        </div>

        <div
          ref={cap2}
          className="absolute inset-0 z-10 flex items-end px-6 pb-24 opacity-0 will-change-transform md:items-center md:px-16 lg:px-28"
        >
          <div className="max-w-xl md:pl-16">
            <p className="font-body text-xs font-medium uppercase tracking-[0.35em] text-snow/70">
              <span className="text-sky">02</span> · The Technology
            </p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-snow sm:text-5xl md:text-6xl">
              Precision you can <span className="italic text-sky">see.</span>
            </h2>
            <p className="mt-6 max-w-md font-body text-base leading-relaxed text-snow/80 sm:text-lg">
              3D imaging, intraoral scanners and laser dentistry, with no
              guesswork, no unnecessary treatment, no surprises.
            </p>
          </div>
        </div>

        <div
          ref={cap3}
          className="absolute inset-0 z-10 flex items-end justify-end px-6 pb-24 opacity-0 will-change-transform md:items-center md:px-16 lg:px-28"
        >
          <div className="max-w-xl md:text-right">
            <p className="font-body text-xs font-medium uppercase tracking-[0.35em] text-snow/70">
              <span className="text-sky">03</span> · The Feeling
            </p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-snow sm:text-5xl md:text-6xl">
              Calm by <span className="italic text-sky">design.</span>
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-snow/80 sm:text-lg md:ml-auto md:max-w-md">
              Sedation options, noise-cancelling headphones and appointments
              that start on time. Dentistry without the dread.
            </p>
            <div className="mt-9 md:flex md:justify-end">
              <a
                href="#contact"
                className="inline-block rounded-full bg-snow px-9 py-3.5 text-center font-body text-sm font-semibold tracking-wide text-ink transition-[scale,background-color] duration-200 hover:scale-[1.03] hover:bg-sky active:scale-[0.97]"
              >
                Book a Visit
              </a>
            </div>
          </div>
        </div>

        <div className="hero-rail absolute right-8 top-1/2 z-20 hidden -translate-y-1/2 md:block">
          <div className="relative h-44 w-px bg-snow/25">
            <div ref={railFill} className="absolute inset-0 origin-top scale-y-0 bg-sky" />
            <span className="absolute -left-[3px] -top-[3px] h-[7px] w-[7px] rounded-full bg-snow/60" />
            <span className="absolute -left-[3px] top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-snow/60" />
            <span className="absolute -bottom-[3px] -left-[3px] h-[7px] w-[7px] rounded-full bg-snow/60" />
          </div>
        </div>

        <div
          ref={cue}
          className="absolute bottom-8 right-8 z-20 hidden flex-col items-center gap-3 md:flex"
        >
          <span className="font-body text-[10px] font-medium uppercase tracking-[0.35em] text-snow/60">
            Scroll
          </span>
          <span className="animate-cue-bob block h-8 w-px bg-snow/60" />
        </div>

        <div
          ref={fadeOut}
          className="pointer-events-none absolute inset-0 z-30 bg-snow opacity-0"
        />
      </div>
    </section>
  );
}
