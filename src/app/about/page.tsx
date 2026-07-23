import type { Metadata } from "next";
import { DAILY_COUNT } from "@/lib/daily";

export const metadata: Metadata = {
  title: "GOGENについて",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-20 pt-14 sm:px-10 sm:pt-16">
      <p className="text-xs tracking-[0.28em] text-[var(--accent)] uppercase">About</p>
      <h1 className="mt-3 font-display text-4xl tracking-wide text-[var(--ink)] sm:text-5xl">
        GOGEN について
      </h1>

      <div className="mt-10 space-y-8 text-[1.05rem] leading-[1.9] text-[var(--ink)]">
        <p>
          GOGEN（五言）は、著名な経営者・思想家・偉人たちが残した格言や小話を、
          一日に{DAILY_COUNT}件ずつ届けます。
        </p>
        <p>
          掲載文は読みやすさ優先の意訳・要約を含みます。厳密な史料訳ではなく、日々の思索のきっかけとしてお使いください。
        </p>
      </div>

      <dl className="mt-14 space-y-6 border-t border-[var(--line)] pt-10 text-sm">
        <div>
          <dt className="tracking-[0.2em] text-[var(--muted)] uppercase">Stack</dt>
          <dd className="mt-2 text-[var(--ink)]">Next.js · TypeScript · Tailwind CSS · Vercel</dd>
        </div>
        <div>
          <dt className="tracking-[0.2em] text-[var(--muted)] uppercase">Timezone</dt>
          <dd className="mt-2 text-[var(--ink)]">日付の切り替わりは Asia/Tokyo 基準</dd>
        </div>
      </dl>
    </div>
  );
}
