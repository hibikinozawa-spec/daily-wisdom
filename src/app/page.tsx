import Link from "next/link";
import { WisdomEntry } from "@/components/wisdom-entry";
import { categories } from "@/lib/categories";
import { DAILY_COUNT, formatDateKey, formatDisplayDate, getDailyWisdom } from "@/lib/daily";

export default function HomePage() {
  const dateKey = formatDateKey();
  const items = getDailyWisdom(dateKey);

  return (
    <div className="mx-auto max-w-5xl px-6 pb-20 pt-14 sm:px-10 sm:pt-20">
      <section className="relative min-h-[52vh] sm:min-h-[58vh]">
        <div className="animate-drift pointer-events-none absolute -right-8 top-4 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(180,86,44,0.22),transparent_70%)] sm:h-56 sm:w-56" />
        <div className="animate-fade max-w-3xl">
          <p className="text-xs tracking-[0.35em] text-[var(--muted)] uppercase">
            {formatDisplayDate(dateKey)}
          </p>
          <h1 className="mt-6 font-display text-5xl leading-[1.15] tracking-[0.04em] text-[var(--ink)] sm:text-7xl sm:leading-[1.08]">
            GOGEN
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            偉人の言葉を、一日に五つ。
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#today"
              className="inline-flex items-center bg-[var(--ink)] px-6 py-3 text-sm tracking-wide text-[var(--bg-2)] transition-opacity hover:opacity-80"
            >
              今日の{DAILY_COUNT}言を読む
            </a>
            <Link
              href="/categories"
              className="text-sm tracking-wide text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
            >
              カテゴリから探す →
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5 text-sm tracking-wide text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--ink)]"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="today" className="scroll-mt-24">
        <div className="flex items-end justify-between gap-4 border-b border-[var(--line)] pb-4">
          <div>
            <p className="text-xs tracking-[0.28em] text-[var(--accent)] uppercase">Today</p>
            <h2 className="mt-2 font-display text-3xl tracking-wide text-[var(--ink)] sm:text-4xl">
              今日の五言
            </h2>
          </div>
          <Link
            href="/archive"
            className="mb-1 text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
          >
            過去の日へ
          </Link>
        </div>

        <div>
          {items.map((wisdom, index) => (
            <WisdomEntry key={wisdom.id} wisdom={wisdom} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
