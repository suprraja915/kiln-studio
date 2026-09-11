const services = [
  {
    title: "Brand identity",
    description:
      "Name, mark, colour, and voice worked out together, so the brand holds up on a signboard, a menu, and a phone screen alike.",
    chip: "#C88A2E",
  },
  {
    title: "Web design & build",
    description:
      "Fast, accessible sites built to be edited without a developer on call — you should be able to change a price or a photo yourself.",
    chip: "#566246",
  },
  {
    title: "Packaging & print",
    description:
      "Labels, menus, and boxes designed for the printer you'll actually use, not just the one in the mockup.",
    chip: "#8A3B2B",
  },
  {
    title: "Social & content",
    description:
      "A month of templates and a shot list, so posting doesn't depend on someone finding time to design one from scratch.",
    chip: "#7C8A68",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-y border-line dark:border-line-dark">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-10">
        <div className="max-w-prose">
          <h2 className="font-slab text-3xl tracking-tight sm:text-4xl">
            What we take on
          </h2>
          <p className="mt-4 text-ink-soft">
            Most clients come in for one of these and leave with an identity
            that carries across all four.
          </p>
        </div>

        <div className="mt-12 divide-y divide-line dark:divide-line-dark border-t border-line dark:border-line-dark">
          {services.map((service) => (
            <div
              key={service.title}
              className="grid gap-4 py-8 sm:grid-cols-[auto_1fr_1.4fr] sm:items-baseline sm:gap-10"
            >
              <span
                className="h-3 w-3 rounded-sm"
                style={{ backgroundColor: service.chip }}
                aria-hidden="true"
              />
              <h3 className="font-slab text-xl">{service.title}</h3>
              <p className="text-ink-soft sm:max-w-prose">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
