type Project = {
  name: string;
  category: string;
  note: string;
  colors: [string, string, string];
};

const projects: Project[] = [
  {
    name: "Verandah Bakehouse",
    category: "Identity + packaging",
    note: "Moved from generic bakery gold to a print-only palette so boxes could ship without foiling.",
    colors: ["#C88A2E", "#241F18", "#E0B36B"],
  },
  {
    name: "Sundar Chai Co.",
    category: "Identity + web",
    note: "Built the whole mark around the pour, so it still reads at the size of a cup sleeve.",
    colors: ["#8A3B2B", "#E4DDCE", "#566246"],
  },
  {
    name: "Loomcraft",
    category: "Web design & build",
    note: "Site loads the loom's actual weave pattern as the grid, not a stock texture.",
    colors: ["#566246", "#F3EEE2", "#7C8A68"],
  },
  {
    name: "Basil & Bone",
    category: "Packaging",
    note: "One ink colour across the whole range, changed only by paper stock.",
    colors: ["#241F18", "#C88A2E", "#8A3B2B"],
  },
  {
    name: "North Ledge Coffee",
    category: "Identity + social",
    note: "Content system built around the roast dates they already track, nothing extra to maintain.",
    colors: ["#7C8A68", "#241F18", "#E0B36B"],
  },
  {
    name: "Marrow Studio",
    category: "Identity + web",
    note: "A ceramics studio's own glaze tests became the site's colour system.",
    colors: ["#E0B36B", "#8A3B2B", "#566246"],
  },
];

function ProjectArt({ colors, name }: { colors: [string, string, string]; name: string }) {
  return (
    <svg
      viewBox="0 0 320 220"
      className="h-full w-full"
      role="img"
      aria-label={`Abstract brand palette study for ${name}`}
    >
      <rect width="320" height="220" fill={colors[0]} />
      <circle cx="240" cy="60" r="90" fill={colors[1]} opacity="0.9" />
      <rect x="0" y="140" width="320" height="80" fill={colors[2]} opacity="0.85" />
    </svg>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className="mx-auto max-w-content px-6 py-20 sm:px-10">
      <div className="max-w-prose">
        <h2 className="font-slab text-3xl tracking-tight sm:text-4xl">Recent work</h2>
        <p className="mt-4 text-ink-soft">
          A few of the small businesses we&apos;ve rebuilt from the name up.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.name} className="group">
            <div className="relative overflow-hidden rounded-md">
              <ProjectArt colors={project.colors} name={project.name} />
              <div className="absolute inset-0 flex items-end bg-ink/0 p-4 opacity-0 transition-opacity duration-300 group-hover:bg-ink/70 group-hover:opacity-100">
                <p className="text-sm text-ink-inverse">{project.note}</p>
              </div>
            </div>
            <div className="mt-3">
              <h3 className="font-slab text-lg">{project.name}</h3>
              <p className="text-sm text-ink-soft">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
