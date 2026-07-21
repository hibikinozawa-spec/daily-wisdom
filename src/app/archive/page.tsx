import Link from "next/link";
import type { Metadata } from "next";
import {
  formatDateKey,
  formatDisplayDate,
  getDailyWisdom,
  getRecentDateKeys,
} from "@/lib/daily";

export const metadata: Metadata = {
  title: "アーカイブ",
};

export default function ArchivePage() {
  const today = formatDateKey();
  const dates = getRecentDateKeys(21, today);

  return (
    <div className="mx-auto max-w-5xl px-6 pb-20 pt-14 sm:px-10 sm:pt-16">
      <p className="text-xs tracking-[0.28em] text-[var(--accent)] uppercase">Archive</p>
      <h1 className="mt-3 font-display text-4xl tracking-wide text-[var(--ink)] sm:text-5xl">
        アーカイブ
      </h1>
      <p className="mt-4 max-w-xl text-[var(--muted)]">
        日付ごとに届いた五言を振り返れます。同じ日は、誰が見ても同じ五件です。
      </p>

      <ul className="mt-14">
        {dates.map((key, index) => {
          const preview = getDailyWisdom(key);
          const isToday = key === today;
          return (
            <li
              key={key}
              className="animate-rise border-t border-[var(--line)]"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <Link
                href={`/archive/${key}`}
                className="group flex flex-col gap-3 py-7 sm:flex-row sm:items-start sm:justify-between"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <p className="font-display text-xl text-[var(--ink)] transition-colors group-hover:text-[var(--accent)] sm:text-2xl">
                      {formatDisplayDate(key)}
                    </p>
                    {isToday && (
                      <span className="text-xs tracking-[0.2em] text-[var(--accent)]">TODAY</span>
                    )}
                  </div>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
                    {preview
                      .map((w) => w.author)
                      .slice(0, 3)
                      .join(" · ")}
                    {preview.length > 3 ? " …" : ""}
                  </p>
                </div>
                <p className="text-sm text-[var(--muted)]">5言 →</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
