import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-auto border-t border-[var(--line)] px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl tracking-[0.12em] text-[var(--ink)]">GOGEN</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--muted)]">
            著名な経営者・思想家・偉人の格言と小話を、一日に五つ届ける読み物。
          </p>
        </div>
        <div className="flex gap-5 text-sm text-[var(--muted)]">
          <Link href="/categories" className="hover:text-[var(--ink)]">
            カテゴリ
          </Link>
          <Link href="/archive" className="hover:text-[var(--ink)]">
            アーカイブ
          </Link>
          <Link href="/about" className="hover:text-[var(--ink)]">
            について
          </Link>
        </div>
      </div>
    </footer>
  );
}
