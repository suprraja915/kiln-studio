export default function Footer() {
  return (
    <footer className="border-t border-line dark:border-line-dark">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-6 py-10 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p className="font-slab text-base text-ink dark:text-ink-inverse">Kiln Studio</p>
        <p>Small studio, based in Hyderabad. Working with clients everywhere.</p>
        <p>
          &copy; {new Date().getFullYear()} Kiln Studio. Built by Supraja Maddukuri.
        </p>
      </div>
    </footer>
  );
}
