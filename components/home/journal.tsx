import Link from "next/link";
import { BearMini } from "@/components/art/bears";
import { PostCover } from "@/components/art/covers";
import { formatPostDate, type PostSummary } from "@/lib/posts";

export function JournalSection({ posts }: { posts: PostSummary[] }) {
  return (
    <section className="journal" id="journal">
      <div className="shell">
        <div className="sec-hd">
          <div className="sec-eyebrow">Episode 04 · Field Journal</div>
          <h2 className="chunky sec-title">
            Notes from the <em>iceberg</em>.
          </h2>
          <p className="sec-sub">
            Long-form writing on what Ice Bear is building, breaking, and
            learning. Tagged for whoever&apos;s reading.
          </p>
        </div>

        <div className="posts-grid">
          {posts.map((p) => (
            <Link
              className="post-card"
              key={p.slug}
              href={`/posts/${p.slug}`}
              style={{ textDecoration: "none" }}
              prefetch
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
  );
}
