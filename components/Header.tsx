import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line dark:border-line-dark bg-clay/90 dark:bg-clay-dark/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-10">
        <Link href="#top" className="font-slab text-xl font-semibold tracking-tight">
          Kiln Studio
        </Link>

        <nav className="hidden items-center gap-8 text-sm sm:flex">
          <Link href="#services" className="hover:text-amber transition-colors">
            Services
          </Link>
          <Link href="#work" className="hover:text-amber transition-colors">
            Work
          </Link>
          <Link href="#contact" className="hover:text-amber transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-ink-inverse dark:bg-ink-inverse dark:text-ink sm:inline-block"
          >
            Start a project
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
