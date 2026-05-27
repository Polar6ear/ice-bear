import type { ReactElement } from "react";

export type PostCoverKind =
  | "rag"
  | "speech"
  | "types"
  | "scrape"
  | "deploy"
  | "notes";

const scrapeCells = (() => {
  let seed = 1;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  const grid: boolean[][] = [];
  for (let row = 0; row < 5; row++) {
    const r: boolean[] = [];
    for (let col = 0; col < 8; col++) r.push(rand() > 0.4);
    grid.push(r);
  }
  return grid;
})();

const covers: Record<PostCoverKind, ReactElement> = {
  rag: (
    <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
      {([
        [80, 80, 16],
        [180, 60, 18],
        [240, 110, 14],
        [140, 130, 12],
        [60, 150, 10],
        [220, 160, 16],
      ] as const).map(([x, y, r], i, arr) => (
        <g key={i}>
          {arr
            .filter((_, j) => j !== i)
            .map(([x2, y2], j) => (
              <line
                key={j}
                x1={x}
                y1={y}
                x2={x2}
                y2={y2}
                stroke="#1b3a52"
                strokeWidth="1.5"
                opacity="0.18"
              />
            ))}
          <circle cx={x} cy={y} r={r} fill="#fdfeff" stroke="#1b3a52" strokeWidth="2.5" />
          <circle cx={x} cy={y} r={r * 0.4} fill="#ff8c5c" />
        </g>
      ))}
    </svg>
  ),
  speech: (
    <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
      <g>
        {Array.from({ length: 36 }).map((_, i) => {
          const h = 20 + Math.abs(Math.sin(i * 0.5)) * 90 + (i % 4) * 8;
          return (
            <rect
              key={i}
              x={16 + i * 8}
              y={100 - h / 2}
              width="5"
              height={h}
              rx="2.5"
              fill="#1b3a52"
              stroke="#1b3a52"
              strokeWidth="1"
            />
          );
        })}
      </g>
    </svg>
  ),
  types: (
    <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
      <g transform="translate(40 30)">
        <rect width="240" height="140" rx="10" fill="#fdfeff" stroke="#1b3a52" strokeWidth="3" />
        <rect width="240" height="22" rx="10" fill="#1b3a52" />
        <rect width="240" height="22" rx="10" y="0" fill="none" stroke="#1b3a52" strokeWidth="3" />
        <circle cx="12" cy="11" r="3" fill="#ff8c5c" />
        <circle cx="22" cy="11" r="3" fill="#ffd06a" />
        <circle cx="32" cy="11" r="3" fill="#9ce0c0" />
        <text x="20" y="60" fontFamily="var(--font-mono)" fontSize="13" fill="#1b3a52" fontWeight="700">
          interface Otto {"{"}
        </text>
        <text x="34" y="80" fontFamily="var(--font-mono)" fontSize="13" fill="#1b3a52">
          id: string;
        </text>
        <text x="34" y="100" fontFamily="var(--font-mono)" fontSize="13" fill="#1b3a52">
          user: User;
        </text>
        <text x="34" y="120" fontFamily="var(--font-mono)" fontSize="13" fill="#1b3a52">
          sync: State;
        </text>
        <text x="20" y="140" fontFamily="var(--font-mono)" fontSize="13" fill="#1b3a52" fontWeight="700">
          {"}"}
        </text>
      </g>
    </svg>
  ),
  scrape: (
    <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
      <g>
        {scrapeCells.map((row, rIdx) =>
          row.map((filled, cIdx) => (
            <rect
              key={`${rIdx}-${cIdx}`}
              x={24 + cIdx * 36}
              y={24 + rIdx * 32}
              width="28"
              height="22"
              rx="4"
              fill={filled ? "#1b3a52" : "#fdfeff"}
              stroke="#1b3a52"
              strokeWidth="2"
            />
          )),
        )}
      </g>
    </svg>
  ),
  deploy: (
    <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(${50 + i * 56}, ${60 + (i % 2) * 14})`}>
          <rect width="48" height="80" rx="6" fill="#fdfeff" stroke="#1b3a52" strokeWidth="3" />
          <rect width="48" height="14" fill="#1b3a52" />
          <circle cx="8" cy="7" r="2" fill="#9ce0c0" />
          <rect x="8" y="24" width="32" height="4" rx="2" fill="#79c0d8" />
          <rect x="8" y="34" width="20" height="4" rx="2" fill="#b8e2ee" />
          <rect x="8" y="52" width="32" height="20" rx="3" fill="#ff8c5c" />
        </g>
      ))}
    </svg>
  ),
  notes: (
    <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
      <g transform="translate(40 30)" stroke="#1b3a52" strokeWidth="3" fill="#fdfeff">
        <rect width="240" height="140" rx="6" transform="rotate(-2 120 70)" />
        <g transform="rotate(-2 120 70)">
          <line x1="20" y1="30" x2="220" y2="30" strokeWidth="1.5" opacity="0.3" />
          <line x1="20" y1="50" x2="220" y2="50" strokeWidth="1.5" opacity="0.3" />
          <line x1="20" y1="70" x2="220" y2="70" strokeWidth="1.5" opacity="0.3" />
          <line x1="20" y1="90" x2="220" y2="90" strokeWidth="1.5" opacity="0.3" />
          <line x1="20" y1="110" x2="220" y2="110" strokeWidth="1.5" opacity="0.3" />
          <line x1="40" y1="14" x2="40" y2="126" strokeWidth="1.5" stroke="#ff8c5c" opacity="0.6" />
          <text x="50" y="34" fontFamily="var(--font-mono)" fontSize="11" fill="#1b3a52" strokeWidth="0">
            listen first
          </text>
          <text x="50" y="54" fontFamily="var(--font-mono)" fontSize="11" fill="#1b3a52" strokeWidth="0">
            ship small
          </text>
          <text x="50" y="74" fontFamily="var(--font-mono)" fontSize="11" fill="#1b3a52" strokeWidth="0">
            read diff x2
          </text>
          <text x="50" y="94" fontFamily="var(--font-mono)" fontSize="11" fill="#1b3a52" strokeWidth="0">
            ask the question
          </text>
        </g>
      </g>
    </svg>
  ),
};

export function PostCover({ kind }: { kind: PostCoverKind }) {
  return covers[kind] ?? covers.rag;
}

const videoColors: Record<string, readonly [string, string]> = {
  v1: ["#5ba9c8", "#1b3a52"],
  v2: ["#79c0d8", "#1b3a52"],
  v3: ["#b8e2ee", "#1b3a52"],
  v4: ["#5ba9c8", "#1b3a52"],
  v5: ["#ff8c5c", "#1b3a52"],
  v6: ["#9ce0c0", "#1b3a52"],
};

export function VideoThumb({ kind, label }: { kind: string; label: string }) {
  const [bg, fg] = videoColors[kind] ?? videoColors.v1!;
  return (
    <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="180" fill={bg} />
      <circle cx="260" cy="40" r="22" fill="#ffd06a" />
      <path
        d="M 0 130 L 60 80 L 110 110 L 160 60 L 220 100 L 270 70 L 320 110 L 320 180 L 0 180 Z"
        fill={fg}
        opacity="0.85"
      />
      <path d="M 60 80 L 75 90 L 90 84 L 110 110 L 75 100 Z" fill="#fdfeff" />
      <path d="M 160 60 L 175 72 L 190 66 L 220 100 L 180 86 Z" fill="#fdfeff" />
      <path
        d="M 0 150 Q 80 145 160 150 T 320 148 L 320 180 L 0 180 Z"
        fill="#fdfeff"
      />
      <g transform="translate(16 16)">
        <rect width="120" height="22" rx="11" fill="#fdfeff" stroke="#1b3a52" strokeWidth="2" />
        <text
          x="60"
          y="15"
          fontFamily="var(--font-chunky)"
          fontSize="11"
          fill="#1b3a52"
          textAnchor="middle"
        >
          {label}
        </text>
      </g>
    </svg>
  );
}

export function TestCardSVG() {
  return (
    <svg viewBox="0 0 96 56" preserveAspectRatio="none" width="96" height="56">
      {(
        [
          ["#c8c8c8", 0],
          ["#c8c800", 12],
          ["#00c8c8", 24],
          ["#00c800", 36],
          ["#c800c8", 48],
          ["#c80000", 60],
          ["#0000c8", 72],
          ["#1b3a52", 84],
        ] as const
      ).map(([c, x]) => (
        <rect key={x} x={x} y={0} width={12} height={44} fill={c} />
      ))}
      {(
        [
          ["#0000c8", 0],
          ["#1b3a52", 12],
          ["#c800c8", 24],
          ["#1b3a52", 36],
          ["#00c8c8", 48],
          ["#1b3a52", 60],
          ["#c8c8c8", 72],
          ["#c8c8c8", 84],
        ] as const
      ).map(([c, x]) => (
        <rect key={`b-${x}`} x={x} y={44} width={12} height={12} fill={c} />
      ))}
    </svg>
  );
}
