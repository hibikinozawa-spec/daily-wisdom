export type CategorySlug =
  | "leadership"
  | "innovation"
  | "perseverance"
  | "wisdom"
  | "business"
  | "courage"
  | "life"
  | "learning";

export type QuoteKind = "quote" | "anecdote";

export type Category = {
  slug: CategorySlug;
  name: string;
  description: string;
};

export type Wisdom = {
  id: string;
  kind: QuoteKind;
  text: string;
  author: string;
  role: string;
  category: CategorySlug;
  source?: string;
};
