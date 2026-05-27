import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { cache } from "react";
import type { PostCoverKind } from "@/components/art/covers";

export interface PostFrontmatter {
  title: string;
  lede: string;
  tag: string;
  date: string;
  cover: PostCoverKind;
  reads?: string;
  sections?: ReadonlyArray<{ id: string; title: string }>;
  ogImage?: string;
}

export interface PostSummary {
  slug: string;
  title: string;
  lede: string;
  tag: string;
  date: string;
  cover: PostCoverKind;
  reads: string;
  read: string;
}

export interface Post extends PostSummary {
  sections: ReadonlyArray<{ id: string; title: string }>;
  ogImage?: string;
}

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function shortDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

function shortMonth(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

async function readPostFile(slug: string) {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const raw = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(raw);
  const fm = data as PostFrontmatter;
  const stats = readingTime(content);
  return {
    slug,
    title: fm.title,
    lede: fm.lede,
    tag: fm.tag,
    date: fm.date,
    cover: fm.cover,
    reads: fm.reads ?? "12.4k reads",
    read: stats.text,
    sections: fm.sections ?? [],
    ogImage: fm.ogImage,
  } satisfies Post;
}

export const getAllPostSlugs = cache(async (): Promise<string[]> => {
  const entries = await fs.readdir(POSTS_DIR);
  return entries
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
});

export const getAllPosts = cache(async (): Promise<PostSummary[]> => {
  const slugs = await getAllPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => readPostFile(slug)));
  return posts
    .map((post) => {
      const { sections, ogImage, ...summary } = post;
      void sections;
      void ogImage;
      return summary;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
});

export const getPost = cache(async (slug: string): Promise<Post | null> => {
  try {
    return await readPostFile(slug);
  } catch {
    return null;
  }
});

export function formatPostDate(date: string, style: "long" | "short" = "long") {
  return style === "long" ? shortDate(date) : shortMonth(date);
}

export function buildPostMetadataDescription(post: PostSummary): string {
  if (post.lede.length <= 160) return post.lede;
  return `${post.lede.slice(0, 157)}…`;
}
