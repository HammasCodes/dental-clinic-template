const items = [
  "General Dentistry",
  "Invisalign",
  "Veneers",
  "Implants",
  "Whitening",
  "Pediatric Care",
  "Emergency Dentistry",
  "Sedation Options",
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item) => (
        <span
          key={item}
          className="flex items-center font-body text-sm font-medium uppercase tracking-[0.3em] text-ink-soft"
        >
          <span className="px-8">{item}</span>
          <span className="text-sky-deep">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="overflow-hidden border-y border-line bg-snow py-7">
      <div className="animate-marquee flex w-max">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
