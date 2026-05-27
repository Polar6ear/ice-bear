import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VideoThumb } from "@/components/art/covers";
import { Footer } from "@/components/common/footer";
import { WatchPlayer } from "@/components/watch/player";
import { getChapters, getTranscript, getVideo, videos } from "@/lib/videos";
import { site } from "@/lib/site";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return videos.map((v) => ({ id: v.id }));
}

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: RouteParams): Promise<Metadata> {
  const { id } = await params;
  const video = getVideo(id);
  if (!video) return {};
  const url = `${site.url}/watch/${video.id}`;
  return {
    title: video.title,
    description: video.description,
    alternates: { canonical: url },
    openGraph: {
      type: "video.other",
      url,
      title: video.title,
      description: video.description,
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title: video.title,
      description: video.description,
    },
  };
}

export default async function WatchPage({ params }: RouteParams) {
  const { id } = await params;
  const video = getVideo(id);
  if (!video) notFound();

  const transcript = getTranscript(id);
  const chapters = getChapters(id);

  const videoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: `${site.url}/og/watch/${video.id}.png`,
    uploadDate: new Date(video.date).toISOString(),
    duration: durationToISO(video.dur),
    contentUrl: `${site.url}/watch/${video.id}`,
    embedUrl: `${site.url}/watch/${video.id}`,
    author: {
      "@type": "Person",
      name: site.author.name,
    },
  };

  return (
    <div className="detail-page">
      <main className="detail-shell">
        <div className="breadcrumb">
          <Link href="/">← Iceberg</Link>
          <span className="sep">/</span>
          <Link href="/#tv">Cold Cuts TV</Link>
          <span className="sep">/</span>
          <span style={{ color: "var(--ink)" }}>{video.ep}</span>
        </div>

        <div className="watch-grid">
          <WatchPlayer video={video} transcript={transcript} chapters={chapters} />

          <aside className="playlist">
            <div className="playlist-hd">
              <div className="l mono">▶ Playlist</div>
              <div className="name">Cold Cuts TV</div>
              <div className="stats mono">
                <span>{videos.length} episodes</span>
                <span>·</span>
                <span>2h 5m total</span>
              </div>
            </div>
            <div className="playlist-list">
              {videos.map((v, i) => (
                <Link
                  key={v.id}
                  href={`/watch/${v.id}`}
                  className={`playlist-item ${v.id === video.id ? "active" : ""}`}
                >
                  <div className="playlist-num">
                    {v.id === video.id ? "▶" : String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="playlist-thumb">
                    <VideoThumb kind={v.cover} label={v.label} />
                    <div className="dur">{v.dur}</div>
                  </div>
                  <div className="playlist-meta">
                    <div className="title">{v.title}</div>
                    <div className="sub mono">
                      {v.ep} · {v.views} views
                    </div>
                    {v.id === video.id ? (
                      <div className="now-playing mono">NOW PLAYING</div>
                    ) : null}
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />
    </div>
  );
}

function durationToISO(dur: string): string {
  const parts = dur.split(":").map(Number);
  const [m = 0, s = 0] = parts;
  return `PT${m}M${s}S`;
}
