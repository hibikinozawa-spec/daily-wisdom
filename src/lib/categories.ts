import type { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "leadership",
    name: "リーダーシップ",
    description: "人を動かし、組織を導くための言葉。",
  },
  {
    slug: "innovation",
    name: "革新",
    description: "常識を疑い、新しい価値をつくる視点。",
  },
  {
    slug: "perseverance",
    name: "忍耐",
    description: "続け、耐え、再び立ち上がる力。",
  },
  {
    slug: "wisdom",
    name: "知恵",
    description: "判断と洞察を深めるための格言。",
  },
  {
    slug: "business",
    name: "経営",
    description: "事業と顧客、価値創造についての考え。",
  },
  {
    slug: "courage",
    name: "勇気",
    description: "恐れの先にある一歩を後押しする言葉。",
  },
  {
    slug: "life",
    name: "生き方",
    description: "日々の選択と、人生の姿勢について。",
  },
  {
    slug: "learning",
    name: "学び",
    description: "成長と好奇心を育てるための教え。",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
