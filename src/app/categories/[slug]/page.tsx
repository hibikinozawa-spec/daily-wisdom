import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryNav } from "@/components/category-nav";
import { WisdomEntry } from "@/components/wisdom-entry";
import { categories, getCategory } from "@/lib/categories";
import { getWisdomsByCategory } from "@/lib/quotes";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "カテゴリ" };
  return { title: category.name };
}

export default async function CategoryDetailPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = getWisdomsByCategory(slug);

  return (
    <div className="mx-auto max-w-5xl px-6 pb-20 pt-14 sm:px-10 sm:pt-16">
      <Link
        href="/categories"
        className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
      >
        ← すべてのカテゴリ
      </Link>

      <p className="mt-10 text-xs tracking-[0.28em] text-[var(--accent)] uppercase">Category</p>
      <h1 className="mt-3 font-display text-4xl tracking-wide text-[var(--ink)] sm:text-5xl">
        {category.name}
      </h1>
      <p className="mt-4 max-w-xl text-[var(--muted)]">{category.description}</p>

      <div className="mt-8">
        <CategoryNav active={slug} />
      </div>

      <div className="mt-10">
        {items.map((wisdom, index) => (
          <WisdomEntry key={wisdom.id} wisdom={wisdom} index={index} />
        ))}
      </div>
    </div>
  );
}
