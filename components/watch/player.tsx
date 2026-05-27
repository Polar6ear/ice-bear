"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { BearMini } from "@/components/art/bears";
import { VideoThumb } from "@/components/art/covers";
import type { VideoMeta } from "@/lib/videos";

interface TranscriptLine {
  t: string;
  s: number;
  text: string;
}

interface Chapter {
  t: string;
  s: number;
  title: string;
}

interface PlayerProps {
  video: VideoMeta;
  transcript: ReadonlyArray<TranscriptLine>;
  chapters: ReadonlyArray<Chapter>;
}

function fmt(sec: number) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

type Tab = "transcript" | "notes" | "chapters";

export function WatchPlayer({ video, transcript, chapters }: PlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [tab, setTab] = useState<Tab>("transcript");
  const [liked, setLiked] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [search, setSearch] = useState("");
  const transcriptRef = useRef<HTMLDivElement | null>(null);

  const totalSec = useMemo(() => {
    const parts = video.dur.split(":").map(Number);
    const [m = 0, s = 0] = parts;
    return m * 60 + s;
  }, [video.dur]);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      setSeconds((s) => {
        if (s + 1 >= totalSec) {
          setPlaying(false);
          return totalSec;
        }
        return s + 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [playing, totalSec]);

  useEffect(() => {
    setSeconds(0);
    setPlaying(false);
  }, [video.id]);

  const activeLineIdx = useMemo(() => {
    let idx = 0;
    for (let i = 0; i < transcript.length; i++) {
      const line = transcript[i]!;
      if (seconds >= line.s) idx = i;
      else break;
    }
    return idx;
  }, [seconds, transcript]);

  useEffect(() => {
    if (!playing || !transcriptRef.current) return;
    const el = transcriptRef.current.querySelector(
      `[data-idx="${activeLineIdx}"]`,
    ) as HTMLElement | null;
    if (!el) return;
    const container = transcriptRef.current;
    const top =
      el.offsetTop -
      container.offsetTop -
      container.clientHeight / 2 +
      el.clientHeight / 2;
    container.scrollTo({ top, behavior: "smooth" });
  }, [activeLineIdx, playing]);

  const filteredTranscript = useMemo(() => {
    if (!search.trim()) return transcript;
    const q = search.toLowerCase();
    return transcript.filter(
      (l) => l.text.toLowerCase().includes(q) || l.t.includes(q),
    );
  }, [search, transcript]);

  const pct = (seconds / totalSec) * 100;

  return (
    <div>
      <div className="player">
        <div className="player-screen" onClick={() => setPlaying((p) => !p)}>
          <VideoThumb kind={video.cover} label={video.label} />
          {!playing ? (
            <div className="player-overlay">
              <div className="player-play-big">
                <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden>
                  <path d="M8 5v14l11-7z" fill="#fff" />
                </svg>
              </div>
            </div>
          ) : (
            <div
              style={{
                position: "absolute",
                top: 14,
                left: 14,
                background: "#ff3030",
                color: "#fff",
                padding: "4px 12px",
                borderRadius: 999,
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                border: "2px solid #fff",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#fff",
                }}
              />
              LIVE
            </div>
          )}
        </div>
        <div className="player-bar">
          <button
            type="button"
            className="player-icon-btn"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="5" width="4" height="14" />
                <rect x="14" y="5" width="4" height="14" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            className="player-icon-btn"
            onClick={() => setSeconds((s) => Math.max(0, s - 10))}
            aria-label="Back 10 seconds"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="11 17 6 12 11 7" />
              <path d="M6 12h11a4 4 0 0 1 0 8h-1" />
            </svg>
          </button>
          <div
            className="player-progress"
            onClick={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              const ratio = (e.clientX - r.left) / r.width;
              setSeconds(Math.round(Math.max(0, Math.min(1, ratio)) * totalSec));
            }}
          >
            <div className="player-progress-fill" style={{ width: `${pct}%` }} />
            <div className="player-progress-knob" style={{ left: `${pct}%` }} />
          </div>
          <button type="button" className="player-icon-btn" aria-label="Volume">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          </button>
          <div className="player-time">
            {fmt(seconds)} / {video.dur}
          </div>
        </div>
      </div>

      <div className="video-detail">
        <div className="video-detail-tags">
          <span className="post-tag">{video.ep}</span>
          {video.tags.map((t) => (
            <span className="tool-tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        <h1>{video.title}</h1>

        <div className="video-detail-row">
          <div className="video-detail-stats">
            <span>👁 {video.views} views</span>
            <span className="dot" />
            <span>{video.date}</span>
            <span className="dot" />
            <span>Recorded live</span>
          </div>
          <div className="video-actions">
            <button
              type="button"
              className={`action-btn ${liked ? "liked" : ""}`}
              onClick={() => setLiked((l) => !l)}
            >
              {liked ? "♥" : "♡"} {liked ? "Liked" : "Like"}
            </button>
            <button type="button" className="action-btn">
              ↗ Share
            </button>
            <button type="button" className="action-btn">
              ＋ Save
            </button>
          </div>
        </div>

        <div className="channel-row">
          <div className="channel-avatar">
            <BearMini size={42} scarf />
          </div>
          <div className="channel-info">
            <div className="name">Ice Bear (a.k.a. Nitin)</div>
            <div className="meta">12.4k bears subscribed · Live coding & cold takes</div>
          </div>
          <button
            type="button"
            className="subscribe-btn"
            onClick={() => setSubscribed((s) => !s)}
            style={subscribed ? { background: "var(--coral)" } : undefined}
          >
            {subscribed ? "🐻‍❄️ Subscribed" : "Subscribe"}
          </button>
        </div>

        <div className="tab-row">
          <button
            type="button"
            className={`tab-btn ${tab === "transcript" ? "active" : ""}`}
            onClick={() => setTab("transcript")}
          >
            📝 Transcript ({transcript.length})
          </button>
          <button
            type="button"
            className={`tab-btn ${tab === "notes" ? "active" : ""}`}
            onClick={() => setTab("notes")}
          >
            ❄ Show notes
          </button>
          <button
            type="button"
            className={`tab-btn ${tab === "chapters" ? "active" : ""}`}
            onClick={() => setTab("chapters")}
          >
            ⏱ Chapters ({chapters.length})
          </button>
        </div>

        {tab === "transcript" ? (
          <>
            <div className="transcript-search">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3-3" />
              </svg>
              <input
                placeholder="Search the transcript… (try 'RAG' or 'cache')"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search ? (
                <button
                  type="button"
                  className="player-icon-btn"
                  style={{
                    background: "var(--snow)",
                    border: "var(--outline)",
                    color: "var(--ink)",
                    width: 28,
                    height: 28,
                  }}
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              ) : null}
            </div>
            <div className="transcript" ref={transcriptRef}>
              {filteredTranscript.map((line) => {
                const realIdx = transcript.indexOf(line);
                const isActive = realIdx === activeLineIdx;
                return (
                  <div
                    key={realIdx}
                    data-idx={realIdx}
                    className={`transcript-line ${isActive ? "active" : ""}`}
                    onClick={() => {
                      setSeconds(line.s);
                      setPlaying(true);
                    }}
                  >
                    <div className="transcript-time mono">{line.t}</div>
                    <div className="transcript-text">{line.text}</div>
                  </div>
                );
              })}
              {filteredTranscript.length === 0 ? (
                <div
                  style={{
                    padding: 28,
                    textAlign: "center",
                    color: "var(--ink-3)",
                    fontWeight: 600,
                  }}
                >
                  Ice Bear didn&apos;t say that. (No matches.)
                </div>
              ) : null}
            </div>
          </>
        ) : null}

        {tab === "notes" ? (
          <div className="show-notes">
            <p>{video.description}</p>
            <h4>Tags</h4>
            <ul>
              {video.tags.map((t) => (
                <li key={t}>
                  <code>{t}</code>
                </li>
              ))}
            </ul>
            <h4>About</h4>
            <p>
              Released {video.date} · {video.views} views · {video.dur}.
            </p>
          </div>
        ) : null}

        {tab === "chapters" ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {chapters.length === 0 ? (
              <div
                style={{
                  padding: 28,
                  textAlign: "center",
                  color: "var(--ink-3)",
                  fontWeight: 600,
                }}
              >
                Chapter markers coming soon.
              </div>
            ) : (
              chapters.map((c, i) => (
                <div
                  key={i}
                  className="transcript-line"
                  onClick={() => {
                    setSeconds(c.s);
                    setPlaying(true);
                  }}
                >
                  <div className="transcript-time mono">{c.t}</div>
                  <div className="transcript-text" style={{ fontWeight: 600 }}>
                    {c.title}
                  </div>
                </div>
              ))
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
