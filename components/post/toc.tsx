"use client";

import { useEffect, useState } from "react";

interface TocSection {
  id: string;
  title: string;
}

export function Toc({ sections }: { sections: ReadonlyArray<TocSection> }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const first = visible[0];
        if (first) setActive(first.target.id);
      },
      { rootMargin: "-100px 0px -55% 0px", threshold: [0, 0.5, 1] },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="toc">
      <div className="l">In this post</div>
      <ol>
        {sections.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className={active === s.id ? "active" : ""}>
              {s.title}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
