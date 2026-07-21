import Link from "next/link";

const links = [
  { href: "/", label: "今日" },
  { href: "/categories", label: "カテゴリ" },
  { href: "/archive", label: "アーカイブ" },
  { href: "/about", label: "について" },
];

export function SiteHeader() {
  return (
    <header className="relative z-20 px-6 pt-6 sm:px-10 sm:pt-8">
      <div className="mx-auto flex max-w-5xl items-end justify-between gap-6">
        <Link href="/" className="group block">
          <p className="font-display text-3xl tracking-[0.08em] text-[var(--ink)] transition-opacity group-hover:opacity-70 sm:text-4xl">
            GOGEN
          </p>
          <p className="mt-1 text-[11px] tracking-[0.28em] text-[var(--muted)] uppercase">
            五言 · daily wisdom
          </p>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm text-[var(--muted)]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="tracking-wide transition-colors hover:text-[var(--ink)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
