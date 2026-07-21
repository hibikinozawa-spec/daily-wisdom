import { wisdoms } from "./quotes";
import type { Wisdom } from "./types";

const DAILY_COUNT = 5;
const EPOCH = Date.UTC(2025, 0, 1);

/** YYYY-MM-DD in Asia/Tokyo */
export function formatDateKey(date: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export function parseDateKey(key: string): Date {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}

export function formatDisplayDate(key: string): string {
  const date = parseDateKey(key);
  return new Intl.DateTimeFormat("ja-JP", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  }).format(date);
}

function dayIndexFromKey(key: string): number {
  const date = parseDateKey(key);
  return Math.floor((date.getTime() - EPOCH) / 86_400_000);
}

/** Deterministic shuffle seed from date key */
function mulberry32(seed: number) {
  return function next() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pickIndices(dayIndex: number, total: number, count: number): number[] {
  const rand = mulberry32(dayIndex * 9973 + 42);
  const pool = Array.from({ length: total }, (_, i) => i);

  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  // Prefer category diversity in the first pass
  const chosen: number[] = [];
  const usedCategories = new Set<string>();

  for (const idx of pool) {
    if (chosen.length >= count) break;
    const cat = wisdoms[idx].category;
    if (!usedCategories.has(cat)) {
      chosen.push(idx);
      usedCategories.add(cat);
    }
  }

  for (const idx of pool) {
    if (chosen.length >= count) break;
    if (!chosen.includes(idx)) chosen.push(idx);
  }

  return chosen.slice(0, count);
}

export function getDailyWisdom(dateKey: string = formatDateKey()): Wisdom[] {
  const dayIndex = dayIndexFromKey(dateKey);
  const indices = pickIndices(dayIndex, wisdoms.length, DAILY_COUNT);
  return indices.map((i) => wisdoms[i]);
}

export function getRecentDateKeys(days = 14, fromKey: string = formatDateKey()): string[] {
  const base = parseDateKey(fromKey).getTime();
  return Array.from({ length: days }, (_, i) => {
    const d = new Date(base - i * 86_400_000);
    const y = d.getUTCFullYear();
    const m = String(d.getUTCMonth() + 1).padStart(2, "0");
    const day = String(d.getUTCDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  });
}

export { DAILY_COUNT };
