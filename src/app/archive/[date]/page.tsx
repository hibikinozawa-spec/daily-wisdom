import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WisdomEntry } from "@/components/wisdom-entry";
import {
  formatDateKey,
  formatDisplayDate,
  getDailyWisdom,
  getRecentDateKeys,
} from "@/lib/daily";

type Props = {
  params: Promise<{ date: string }>;
};

export function generateStaticParams() {
  return getRecentDateKeys(30).map((date) => ({ date }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { date } = await params;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return { title: "アーカイブ" };
  return { title: formatDisplayDate(date) };
}

export default async function ArchiveDayPage({ params }: Props) {
  const { date } = await params;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) notFound();

  const today = formatDateKey();
  if (date > today) notFound();

  const items = getDailyWisdom(date);

  return (
    <div className="mx-auto max-w-5xl px-6 pb-20 pt-14 sm:px-10 sm:pt-16">
      <Link
        href="/archive"
        className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
      >
        ← アーカイブ一覧
      </Link>

      <p className="mt-10 text-xs tracking-[0.28em] text-[var(--accent)] uppercase">Daily</p>
      <h1 className="mt-3 font-display text-4xl tracking-wide text-[var(--ink)] sm:text-5xl">
        {formatDisplayDate(date)}
      </h1>
      <p className="mt-4 text-[var(--muted)]">この日に届いた五言</p>

      <div className="mt-10">
        {items.map((wisdom, index) => (
          <WisdomEntry key={wisdom.id} wisdom={wisdom} index={index} />
        ))}
      </div>
    </div>
  );
}
