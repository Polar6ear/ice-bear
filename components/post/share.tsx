"use client";

import { useState } from "react";

interface ShareProps {
  url: string;
  title: string;
}

export function Share({ url, title }: ShareProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard blocked — silently ignore
    }
  }

  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="side-share">
      <div className="l">Share the cold</div>
      <div className="h">Tell a bear.</div>
      <div className="share-row">
        <button
          type="button"
          className="share-btn"
          aria-label={copied ? "Link copied" : "Copy link"}
          onClick={copy}
        >
          {copied ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12l5 5L20 7" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" />
            </svg>
          )}
        </button>
        <a
          className="share-btn"
          aria-label="Share on X"
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encoded}`}
          target="_blank"
          rel="noreferrer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2H21l-6.51 7.44L22 22h-6.297l-4.928-6.443L5.05 22H2.293l6.97-7.962L2 2h6.444l4.456 5.892L18.244 2zm-1.103 18.4h1.564L7.005 3.51H5.328L17.14 20.4z" />
          </svg>
        </a>
        <a
          className="share-btn"
          aria-label="Share on LinkedIn"
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
          target="_blank"
          rel="noreferrer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.3 18.3H5.7V9.7h2.6v8.6zM7 8.6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11.3 9.7h-2.6V14c0-1-.4-1.7-1.3-1.7-.8 0-1.2.5-1.4 1-.1.2-.1.5-.1.7v4.2H10.4V9.7h2.5v1.1c.3-.5 1-1.3 2.4-1.3 1.7 0 3 1.1 3 3.5v5.3z" />
          </svg>
        </a>
        <a
          className="share-btn"
          aria-label="Share via email"
          href={`mailto:?subject=${encodedTitle}&body=${encoded}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 7 9-7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
