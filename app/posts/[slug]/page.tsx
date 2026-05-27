import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BearMini } from "@/components/art/bears";
import { PostCover } from "@/components/art/covers";
import { Footer } from "@/components/common/footer";
import { Toc } from "@/components/post/toc";
import { Share } from "@/components/post/share";
import { loadPostMdx } from "@/lib/load-mdx";
import {
  buildPostMetadataDescription,
  formatPostDate,
  getAllPostSlugs,
  getAllPosts,
  getPost,
} from "@/lib/posts";
import { site } from "@/lib/site";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const url = `${site.url}/posts/${post.slug}`;
  const description = buildPostMetadataDescription(post);
  const ogImage = post.ogImage ?? `${site.url}/og/posts/${post.slug}.png`;

  return {
    title: post.title,
    description,
    alternates: { canonical: url },
    authors: [{ name: site.author.name, url: site.url }],
    keywords: post.tag.split(/\s*·\s*/).map((s) => s.trim()).filter(Boolean),
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description,
      siteName: site.name,
      publishedTime: new Date(post.date).toISOString(),
      authors: [site.author.name],
      tags: post.tag.split(/\s*·\s*/),
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [ogImage],
    },
  };
}

export default async function PostPage({ params }: RouteParams) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const Content = await loadPostMdx(slug);
  if (!Content) notFound();

  const allPosts = await getAllPosts();
  const currentIdx = allPosts.findIndex((p) => p.slug === slug);
  const nextPost =
    currentIdx >= 0
      ? allPosts[(currentIdx + 1) % allPosts.length]
      : allPosts[0];
  const readNext = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const url = `${site.url}/posts/${post.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.lede,
    image: post.ogImage ?? `${site.url}/og/posts/${post.slug}.png`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      name: site.author.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.url}/icon.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: post.tag,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Iceberg", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Field Journal",
        item: `${site.url}/#journal`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  };

  return (
    <div className="detail-page">
      <main className="detail-shell">
        <div className="breadcrumb">
          <Link href="/">← Iceberg</Link>
          <span className="sep">/</span>
          <Link href="/#journal">Field Journal</Link>
          <span className="sep">/</span>
          <span style={{ color: "var(--ink)" }}>{post.tag}</span>
        </div>

        <article className="post-hero">
          <div className="post-hero-cover">
            <PostCover kind={post.cover} />
          </div>
          <div className="post-hero-body">
            <div className="post-hero-tags">
              <span className="post-tag">{post.tag}</span>
              <span className="tool-tag">Long read</span>
              <span className="tool-tag">From production</span>
            </div>
            <h1>{post.title}</h1>
            <p className="lede">{post.lede}</p>
            <div className="post-hero-meta">
              <div className="author-chip">
                <div className="av">
                  <BearMini size={36} scarf />
                </div>
                <div>
                  <div className="name">
                    {site.author.name}{" "}
                    <span
                      style={{
                        color: "var(--ink-2)",
                        fontWeight: 600,
                        fontSize: 13,
                      }}
                    >
                      (Ice Bear)
                    </span>
                  </div>
                  <div className="sub">{site.author.role}</div>
                </div>
              </div>
              <span className="post-meta-dot" />
              <span className="post-meta-item">
                <time dateTime={new Date(post.date).toISOString()}>
                  {formatPostDate(post.date, "long")}
                </time>
              </span>
              <span className="post-meta-dot" />
              <span className="post-meta-item">{post.read}</span>
              <span className="post-meta-dot" />
              <span className="post-meta-item">{post.reads}</span>
            </div>
          </div>
        </article>

        <div className="post-body-grid">
          <article className="post-article">
            <Content />
          </article>

          <aside className="post-side">
            <Toc sections={post.sections} />
            <Share url={url} title={post.title} />

            {nextPost ? (
              <div className="toc">
                <div className="l">Next post</div>
                <Link
                  href={`/posts/${nextPost.slug}`}
                  style={{
                    display: "block",
                    padding: 6,
                    color: "var(--ink)",
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: 1.4,
                  }}
                >
                  {nextPost.title}
                  <span
                    style={{
                      display: "block",
                      marginTop: 6,
                      color: "var(--coral-2)",
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      fontWeight: 700,
                    }}
                  >
                    READ →
                  </span>
                </Link>
              </div>
            ) : null}
          </aside>
        </div>

        <section className="read-next">
          <h2>Read next</h2>
          <div className="posts-grid">
            {readNext.map((p) => (
              <Link
                className="post-card"
                key={p.slug}
                href={`/posts/${p.slug}`}
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                <div className="post-cover">
                  <PostCover kind={p.cover} />
                </div>
                <div className="post-body">
                  <div className="post-meta-row">
                    <span className="post-tag">{p.tag}</span>
                    <span>{formatPostDate(p.date, "short")}</span>
                    <span>·</span>
                    <span>{p.read}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.lede}</p>
                  <div className="post-foot">
                    <span className="post-read">Read the post →</span>
                    <BearMini size={26} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </div>
  );
}
