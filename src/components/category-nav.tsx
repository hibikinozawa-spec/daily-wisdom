import Link from "next/link";
import { categories } from "@/lib/categories";

type Props = {
  active?: string;
};

export function CategoryNav({ active }: Props) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2">
      {categories.map((category) => {
        const isActive = active === category.slug;
        return (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className={[
              "text-sm tracking-wide transition-colors",
              isActive
                ? "text-[var(--accent)]"
                : "text-[var(--muted)] hover:text-[var(--ink)]",
            ].join(" ")}
          >
            {category.name}
          </Link>
        );
      })}
    </div>
  );
}
