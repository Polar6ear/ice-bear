import type { ComponentType } from "react";

type MDXModule = { default: ComponentType };

const loaders: Record<string, () => Promise<MDXModule>> = {
  rag: () => import("@/content/posts/rag.mdx") as Promise<MDXModule>,
  speech: () => import("@/content/posts/speech.mdx") as Promise<MDXModule>,
  types: () => import("@/content/posts/types.mdx") as Promise<MDXModule>,
  scrape: () => import("@/content/posts/scrape.mdx") as Promise<MDXModule>,
  deploy: () => import("@/content/posts/deploy.mdx") as Promise<MDXModule>,
  notes: () => import("@/content/posts/notes.mdx") as Promise<MDXModule>,
};

export async function loadPostMdx(slug: string): Promise<ComponentType | null> {
  const loader = loaders[slug];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}
