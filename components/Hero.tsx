const swatches = [
  { color: "#C88A2E", label: "Amber 400", span: "row-span-2" },
  { color: "#566246", label: "Moss 600", span: "" },
  { color: "#8A3B2B", label: "Rust 500", span: "" },
  { color: "#E0B36B", label: "Amber 200", span: "" },
  { color: "#241F18", label: "Ink 900", span: "col-span-2" },
  { color: "#7C8A68", label: "Moss 300", span: "" },
];

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-content px-6 pb-20 pt-16 sm:px-10 sm:pt-24">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-medium text-ink-soft">Brand & digital design studio</p>
          <h1 className="mt-4 font-slab text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            We build brands that don&apos;t need a big budget to look considered.
          </h1>
          <p className="mt-6 max-w-prose text-lg text-ink-soft">
            Kiln Studio works with independent restaurants, makers, and small
            teams who are one good identity away from being taken seriously.
            Identity, packaging, and the websites that carry them.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-amber px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Start a project
            </a>
            <a
              href="#work"
              className="rounded-full border border-ink/25 dark:border-ink-inverse/25 px-6 py-3 text-sm font-medium transition-colors hover:border-ink dark:hover:border-ink-inverse"
            >
              See the work
            </a>
          </div>
        </div>

        {/* A literal glaze-test palette — the actual artifact a brand
            studio hands a client early on. Settles into place once,
            on load, rather than animating on every scroll or hover. */}
        <div className="grid grid-cols-3 grid-rows-2 gap-3 sm:gap-4" aria-hidden="true">
          {swatches.map((s, i) => (
            <div
              key={s.label}
              className={`swatch-settle flex aspect-square flex-col justify-end rounded-md p-3 ${s.span}`}
              style={{ backgroundColor: s.color, animationDelay: `${i * 70}ms` }}
            >
              <span className="text-[11px] font-medium text-clay/90 mix-blend-luminosity">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
