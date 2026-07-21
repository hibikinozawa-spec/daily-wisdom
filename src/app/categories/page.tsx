import Link from "next/link";
import type { Metadata } from "next";
import { categories } from "@/lib/categories";
import { getWisdomsByCategory } from "@/lib/quotes";

export const metadata: Metadata = {
  title: "カテゴリ",
};

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-20 pt-14 sm:px-10 sm:pt-16">
      <p className="animate-fade text-xs tracking-[0.28em] text-[var(--accent)] uppercase">
        Categories
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-wide text-[var(--ink)] sm:text-5xl">
        カテゴリ
      </h1>
      <p className="mt-4 max-w-xl text-[var(--muted)]">
        リーダーシップから学びまで。興味のあるテーマから言葉を探せます。
      </p>

      <ul className="mt-14 space-y-0">
        {categories.map((category, index) => {
          const count = getWisdomsByCategory(category.slug).length;
          return (
            <li key={category.slug} className="animate-rise border-t border-[var(--line)]" style={{ animationDelay: `${index * 60}ms` }}>
              <Link
                href={`/categories/${category.slug}`}
                className="group flex flex-col gap-2 py-8 transition-colors sm:flex-row sm:items-end sm:justify-between"
              >
                <div>
                  <p className="font-display text-2xl text-[var(--ink)] transition-colors group-hover:text-[var(--accent)] sm:text-3xl">
                    {category.name}
                  </p>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--muted)]">
                    {category.description}
                  </p>
                </div>
                <p className="text-sm tracking-wide text-[var(--muted)]">{count} 件 →</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
