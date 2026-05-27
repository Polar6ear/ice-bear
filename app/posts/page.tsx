import type { Metadata } from "next";
import Link from "next/link";
import { BearMini } from "@/components/art/bears";
import { PostCover } from "@/components/art/covers";
import { Footer } from "@/components/common/footer";
import { formatPostDate, getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Field Journal",
  description:
    "Long-form writing on what Ice Bear is building, breaking, and learning — RAG, async pipelines, deploys, and type contracts across platforms.",
  alternates: { canonical: `${site.url}/posts` },
  openGraph: {
    type: "website",
    url: `${site.url}/posts`,
    title: "Field Journal · Ice Bear's Iceberg",
    description: "Long-form writing on what Ice Bear is building, breaking, and learning.",
  },
};

export default async function PostsIndexPage() {
  const posts = await getAllPosts();

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Field Journal",
    url: `${site.url}/posts`,
    description: "Long-form writing on what Ice Bear is building, breaking, and learning.",
    author: { "@type": "Person", name: site.author.name },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.lede,
      datePublished: new Date(p.date).toISOString(),
      url: `${site.url}/posts/${p.slug}`,
    })),
  };

  return (
    <>
      <main className="detail-page">
        <section className="journal" id="journal" style={{ paddingTop: 56 }}>
          <div className="shell">
            <div className="sec-hd">
              <div className="sec-eyebrow">Field Journal</div>
              <h1 className="chunky sec-title">
                Notes from the <em>iceberg</em>.
              </h1>
              <p className="sec-sub">
                {posts.length} posts on RAG, deploys, async, and what it really
                takes to ship across three clients.
              </p>
            </div>

            <div className="posts-grid">
              {posts.map((p) => (
                <Link
                  className="post-card"
                  key={p.slug}
                  href={`/posts/${p.slug}`}
                  style={{ textDecoration: "none" }}
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
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
    </>
  );
}
