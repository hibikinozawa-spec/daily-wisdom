import Link from "next/link";
import { getCategory } from "@/lib/categories";
import type { Wisdom } from "@/lib/types";

type Props = {
  wisdom: Wisdom;
  index: number;
  reveal?: boolean;
};

export function WisdomEntry({ wisdom, index, reveal = true }: Props) {
  const category = getCategory(wisdom.category);
  const kindLabel = wisdom.kind === "anecdote" ? "小話" : "格言";

  return (
    <article
      className={[
        "group border-t border-[var(--line)] py-10 sm:py-12",
        reveal ? "animate-rise" : "",
      ].join(" ")}
      style={reveal ? { animationDelay: `${index * 90}ms` } : undefined}
    >
      <div className="flex items-baseline justify-between gap-4">
        <p className="font-display text-sm tracking-[0.35em] text-[var(--accent)]">
          {String(index + 1).padStart(2, "0")}
        </p>
        <div className="flex items-center gap-3 text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
          <span>{kindLabel}</span>
          {category && (
            <Link
              href={`/categories/${category.slug}`}
              className="transition-colors hover:text-[var(--ink)]"
            >
              {category.name}
            </Link>
          )}
        </div>
      </div>

      <p className="mt-6 font-display text-[1.35rem] leading-[1.85] text-[var(--ink)] sm:text-[1.65rem] sm:leading-[1.75]">
        {wisdom.text}
      </p>

      <div className="mt-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-base text-[var(--ink)]">{wisdom.author}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{wisdom.role}</p>
        </div>
        {wisdom.source && (
          <p className="text-xs text-[var(--muted)]">{wisdom.source}</p>
        )}
      </div>
    </article>
  );
}
