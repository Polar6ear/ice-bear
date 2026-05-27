import Link from "next/link";
import { BearMini } from "@/components/art/bears";
import { TestCardSVG, VideoThumb } from "@/components/art/covers";
import { videos } from "@/lib/videos";

export function TVSection() {
  const featured = videos.find((v) => v.id === "v2") ?? videos[1]!;
  const featuredIdx = videos.indexOf(featured);
  const shorts = videos.filter((v) => v.id !== featured.id);

  return (
    <section className="tv" id="tv">
      <div className="shell">
        <div className="sec-hd">
          <div className="sec-eyebrow">Episode 05 · Cold Cuts TV</div>
          <h2 className="chunky sec-title">
            Bear on a <em>screen</em>.
          </h2>
          <p className="sec-sub">
            Live coding, walkthroughs, and the occasional cold take. Tune in
            when text isn&apos;t enough.
          </p>
        </div>

        <div className="tv-channel">
          <div className="tv-channel-num">CH · 07</div>
          <div className="tv-channel-info">
            <span className="tv-channel-name">COLD CUTS TV</span>
            <span className="tv-channel-ticker">
              LIVE FROM THE ICEBERG · 24 / 7
            </span>
          </div>
          <div className="tv-test-card">
            <TestCardSVG />
          </div>
        </div>

        <div className="tv-main">
          <div>
            <div className="tv-featured">
              <Link className="tv-crt-screen" href={`/watch/${featured.id}`} aria-label={`Watch ${featured.title}`}>
                <VideoThumb kind={featured.cover} label={featured.label} />
                <div className="tv-crt-overlay">
                  <div className="corner-label">FEATURED · {featured.ep}</div>
                  <div className="live-tag">● MOST WATCHED</div>
                  <div className="corner-dur">{featured.dur}</div>
                  <div className="play-big">
                    <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden>
                      <path d="M8 5v14l11-7z" fill="#fff" />
                    </svg>
                  </div>
                </div>
              </Link>
              <div className="tv-crt-controls">
                <div className="tv-crt-knobs">
                  <div className="tv-knob" />
                  <div className="tv-knob" />
                  <div className="tv-knob" />
                </div>
                <div className="tv-channel-display">
                  CH {String(featuredIdx + 1).padStart(2, "0")} · ICEBERG
                </div>
                <div className="tv-crt-knobs">
                  <div className="tv-knob" />
                  <div className="tv-knob" />
                </div>
              </div>
            </div>

            <div className="tv-featured-info">
              <div className="tv-featured-tags">
                <span className="post-tag">{featured.ep}</span>
                {featured.tags.map((t) => (
                  <span className="tool-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <h3>{featured.title}</h3>
              <p>{featured.description}</p>
              <div className="tv-featured-row">
                <div className="tv-featured-stats mono">
                  👁 {featured.views} views · 🔥 trending · recorded live
                </div>
                <Link className="tv-watch-cta" href={`/watch/${featured.id}`}>
                  Watch full episode
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14m0 0-5-5m5 5-5 5" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <aside className="tv-guide">
            <div className="tv-guide-hd">
              <div>
                <div className="l">▶ Channel Guide</div>
                <div className="n">This week on Cold Cuts</div>
              </div>
              <div className="bars">|||·|·||·|</div>
            </div>
            <div className="tv-guide-list">
              {videos.map((v, i) => (
                <Link
                  key={v.id}
                  href={`/watch/${v.id}`}
                  className={`tv-guide-item ${v.id === featured.id ? "featured" : ""}`}
                >
                  <div className="tv-guide-ep">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="tv-guide-meta">
                    <div className="tv-guide-title">{v.title}</div>
                    <div className="tv-guide-sub">
                      {v.ep} · {v.views} views
                    </div>
                    {v.id === featured.id && (
                      <div className="tv-now-playing">FEATURED EPISODE</div>
                    )}
                  </div>
                  <div className="tv-guide-dur mono">{v.dur}</div>
                </Link>
              ))}
            </div>
          </aside>
        </div>

        <div className="tv-shorts-section">
          <div className="tv-shorts-hd">
            <h3>
              <em>FROM THE</em> CUTTING ROOM FLOOR
            </h3>
            <div className="meta">▸ {shorts.length} EPISODES · ARCHIVE</div>
          </div>
          <div className="tv-shorts-grid">
            {shorts.map((v) => (
              <Link className="tv-short" key={v.id} href={`/watch/${v.id}`}>
                <div className="tv-short-tape" />
                <div className="tv-short-thumb">
                  <VideoThumb kind={v.cover} label={v.label} />
                  <div className="tv-short-ep">{v.ep}</div>
                  <div className="play">
                    <div className="play-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                        <path d="M8 5v14l11-7z" fill="#fff" />
                      </svg>
                    </div>
                  </div>
                  <div className="tv-short-dur mono">{v.dur}</div>
                </div>
                <div className="tv-short-cap">{v.title}</div>
                <div className="tv-short-meta">{v.views} views · by Ice Bear</div>
              </Link>
            ))}
          </div>
        </div>

        <div className="tv-sub-strip">
          <div className="tv-sub-avatar">
            <BearMini size={56} scarf />
          </div>
          <div className="tv-sub-info">
            <h4>Don&apos;t miss the next cold take.</h4>
            <p>
              New episodes whenever Ice Bear has something worth saying. Subscribe
              to know when the screen lights up.
            </p>
          </div>
          <a className="tv-sub-btn" href="#">
            🐻‍❄️ Subscribe to the channel
          </a>
        </div>
      </div>
    </section>
  );
}
