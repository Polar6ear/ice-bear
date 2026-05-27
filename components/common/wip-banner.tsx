"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BearMini } from "@/components/art/bears";

type BannerState = "hidden" | "entering" | "open" | "leaving";

const MARQUEE_ITEMS = [
  "UNDER CONSTRUCTION",
  "🐻‍❄️ ICE BEAR IS BUILDING",
  "WIP",
  "ICEBERG · BETA",
  "MORE COMING SOON",
  "🚧 WET PAINT 🚧",
];

export function WipBanner() {
  const pathname = usePathname();
  const [state, setState] = useState<BannerState>("hidden");

  // Replay the banner on every route change so the user sees it across
  // navigations (per the brief). Dismiss only hides it for the current
  // pathname — next nav brings it back.
  useEffect(() => {
    setState("entering");
    const id = window.setTimeout(() => setState("open"), 60);
    return () => window.clearTimeout(id);
  }, [pathname]);

  function dismiss() {
    setState("leaving");
    window.setTimeout(() => setState("hidden"), 360);
  }

  if (state === "hidden") return null;

  // Duplicate the marquee items so the loop is seamless after one cycle.
  const marqueeRow = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className="wip-banner"
      data-state={state}
      role="status"
      aria-live="polite"
    >
      <div className="wip-marquee" aria-hidden>
        <div className="wip-marquee-track">
          {marqueeRow.map((item, i) => (
            <span key={i} className="wip-marquee-item">
              <span className="wip-marquee-text">{item}</span>
              <span className="wip-marquee-sep">❄</span>
            </span>
          ))}
        </div>
      </div>

      <div className="wip-stripes" aria-hidden />
      <div className="wip-flakes" aria-hidden>
        <span style={{ left: "8%", animationDelay: "0s" }} />
        <span style={{ left: "22%", animationDelay: "-1.2s" }} />
        <span style={{ left: "38%", animationDelay: "-2.6s" }} />
        <span style={{ left: "62%", animationDelay: "-0.6s" }} />
        <span style={{ left: "78%", animationDelay: "-3.4s" }} />
        <span style={{ left: "91%", animationDelay: "-2s" }} />
      </div>

      <div className="wip-inner">
        <div className="wip-avatar">
          <div className="wip-bear">
            <BearMini size={64} scarf />
          </div>
          <span className="wip-badge mono">WIP</span>
          <span className="wip-tool" aria-hidden>
            <svg width="32" height="32" viewBox="0 0 40 40">
              <g transform="rotate(-22 20 20)">
                <rect
                  x="6"
                  y="14"
                  width="16"
                  height="10"
                  rx="2"
                  fill="#ff8c5c"
                  stroke="#1b3a52"
                  strokeWidth="3"
                />
                <rect
                  x="22"
                  y="18"
                  width="14"
                  height="2"
                  rx="1"
                  fill="#7a5d3b"
                  stroke="#1b3a52"
                  strokeWidth="2"
                />
              </g>
            </svg>
          </span>
        </div>

        <div className="wip-copy">
          <div className="wip-eyebrow mono">
            <span className="wip-dot" />
            STATUS · BUILDING IN PROGRESS
          </div>
          <h2 className="wip-title chunky">
            Ice Bear is still <em>building</em> the iceberg.
          </h2>
          <p className="wip-sub">
            Some sections are stickier than others — copy, content and the
            occasional pixel land soon. Thanks for the patience.
          </p>
        </div>

        <div className="wip-actions">
          <Link className="wip-cta" href="/#contact">
            Send a postcard
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M5 12h14m0 0-5-5m5 5-5 5" />
            </svg>
          </Link>
          <button
            type="button"
            className="wip-x"
            aria-label="Dismiss banner"
            onClick={dismiss}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
