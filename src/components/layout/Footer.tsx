const exploreLinks = [
  { label: "Services", href: "#services" },
  { label: "The Clinic", href: "#clinic" },
  { label: "Technology", href: "#technology" },
];

const visitLinks = [
  { label: "The Principle", href: "#manifesto" },
  { label: "Patient Stories", href: "#stories-anchor" },
  { label: "Book a Visit", href: "#contact" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Google Reviews", href: "#" },
  { label: "Yelp", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line-dark bg-ink-deep px-6 pb-10 pt-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl font-semibold tracking-tight text-snow">
              Lumina <span className="italic text-sky">Dental</span>
            </p>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-snow/60">
              A modern dental studio in the heart of San Francisco. Precision
              technology, genuine calm, and dentistry you never have to dread.
            </p>
          </div>

          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-sky">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-snow/60 transition-colors duration-200 hover:text-snow"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-sky">
              Visit
            </p>
            <ul className="mt-5 space-y-3">
              {visitLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-snow/60 transition-colors duration-200 hover:text-snow"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-sky">
              Elsewhere
            </p>
            <ul className="mt-5 space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-snow/60 transition-colors duration-200 hover:text-snow"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line-dark pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-body text-xs tracking-wide text-snow/50">
            © 2026 Lumina Dental. All rights reserved.
          </p>
          <a
            href="#"
            className="group inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.25em] text-snow/60 transition-colors duration-200 hover:text-sky"
          >
            Back to top
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
