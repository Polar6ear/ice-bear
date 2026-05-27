import type { ComponentType } from "react";

export type IconName =
  | "Frontend"
  | "Backend"
  | "AI"
  | "Database"
  | "Cloud"
  | "Async"
  | "Explore"
  | "Mug";

export const ToolIcons: Record<IconName, ComponentType> = {
  Frontend: () => (
    <svg viewBox="0 0 40 40" width="28" height="28">
      <rect x="3" y="6" width="34" height="24" rx="3" fill="#fdfeff" stroke="#1b3a52" strokeWidth="2.5" />
      <rect x="3" y="6" width="34" height="6" rx="3" fill="#1b3a52" />
      <circle cx="7" cy="9" r="1" fill="#ff8c5c" />
      <circle cx="11" cy="9" r="1" fill="#ffd06a" />
      <circle cx="15" cy="9" r="1" fill="#9ce0c0" />
      <rect x="8" y="16" width="14" height="3" rx="1" fill="#79c0d8" />
      <rect x="8" y="21" width="20" height="3" rx="1" fill="#b8e2ee" />
      <rect x="14" y="33" width="12" height="3" rx="1.5" fill="#1b3a52" />
    </svg>
  ),
  Backend: () => (
    <svg viewBox="0 0 40 40" width="28" height="28">
      <rect x="6" y="6" width="28" height="10" rx="2" fill="#fdfeff" stroke="#1b3a52" strokeWidth="2.5" />
      <rect x="6" y="18" width="28" height="10" rx="2" fill="#fdfeff" stroke="#1b3a52" strokeWidth="2.5" />
      <rect x="6" y="30" width="28" height="6" rx="2" fill="#fdfeff" stroke="#1b3a52" strokeWidth="2.5" />
      <circle cx="11" cy="11" r="1.6" fill="#9ce0c0" />
      <circle cx="11" cy="23" r="1.6" fill="#ffd06a" />
      <circle cx="11" cy="33" r="1.6" fill="#ff8c5c" />
    </svg>
  ),
  AI: () => (
    <svg viewBox="0 0 40 40" width="28" height="28">
      <path
        d="M 20 6 Q 10 6 8 16 Q 4 18 6 26 Q 6 33 16 33 L 24 33 Q 34 33 34 26 Q 36 18 32 16 Q 30 6 20 6 Z"
        fill="#fdfeff"
        stroke="#1b3a52"
        strokeWidth="2.5"
      />
      <circle cx="15" cy="18" r="2.4" fill="#1b3a52" />
      <circle cx="25" cy="18" r="2.4" fill="#1b3a52" />
      <path d="M 14 26 Q 20 30 26 26" stroke="#1b3a52" strokeWidth="2" fill="none" strokeLinecap="round" />
      <line x1="20" y1="3" x2="20" y2="6" stroke="#1b3a52" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="20" cy="2" r="1.5" fill="#ffd06a" stroke="#1b3a52" strokeWidth="1.5" />
    </svg>
  ),
  Database: () => (
    <svg viewBox="0 0 40 40" width="28" height="28">
      <ellipse cx="20" cy="9" rx="13" ry="4" fill="#fdfeff" stroke="#1b3a52" strokeWidth="2.5" />
      <path
        d="M 7 9 L 7 30 Q 7 34 20 34 Q 33 34 33 30 L 33 9"
        fill="#fdfeff"
        stroke="#1b3a52"
        strokeWidth="2.5"
      />
      <path d="M 7 17 Q 13 21 20 21 Q 27 21 33 17" fill="none" stroke="#1b3a52" strokeWidth="2.5" />
      <path d="M 7 24 Q 13 28 20 28 Q 27 28 33 24" fill="none" stroke="#1b3a52" strokeWidth="2.5" />
    </svg>
  ),
  Cloud: () => (
    <svg viewBox="0 0 40 40" width="28" height="28">
      <path
        d="M 12 26 Q 4 26 4 18 Q 4 12 12 12 Q 14 6 22 6 Q 30 6 30 14 Q 36 14 36 22 Q 36 30 28 30 L 12 30 Z"
        fill="#fdfeff"
        stroke="#1b3a52"
        strokeWidth="2.5"
      />
      <path
        d="M 16 24 L 20 28 L 28 18"
        stroke="#1b3a52"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Async: () => (
    <svg viewBox="0 0 40 40" width="28" height="28">
      <path
        d="M 20 6 Q 30 6 32 14 L 28 14 L 33 22 L 38 14 L 34 14 Q 32 4 20 4"
        fill="#fdfeff"
        stroke="#1b3a52"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M 20 36 Q 10 36 8 28 L 12 28 L 7 20 L 2 28 L 6 28 Q 8 38 20 38"
        fill="#fdfeff"
        stroke="#1b3a52"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Explore: () => (
    <svg viewBox="0 0 40 40" width="28" height="28">
      <circle cx="20" cy="20" r="14" fill="#fdfeff" stroke="#1b3a52" strokeWidth="2.5" />
      <path
        d="M 14 26 L 18 16 L 28 12 L 24 22 Z"
        fill="#ff8c5c"
        stroke="#1b3a52"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="21" cy="19" r="1.6" fill="#1b3a52" />
    </svg>
  ),
  Mug: () => (
    <svg viewBox="0 0 40 40" width="28" height="28">
      <rect x="7" y="14" width="22" height="20" rx="3" fill="#ff8c5c" stroke="#1b3a52" strokeWidth="2.5" />
      <path d="M 29 18 Q 35 18 35 24 Q 35 30 29 30" fill="none" stroke="#1b3a52" strokeWidth="2.5" />
      <rect x="10" y="18" width="16" height="4" rx="2" fill="#fdfeff" />
      <path
        d="M 12 10 Q 14 6 12 4 M 18 10 Q 20 6 18 4 M 24 10 Q 26 6 24 4"
        stroke="#1b3a52"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  ),
};

export function ToolIcon({ name }: { name: IconName }) {
  const Component = ToolIcons[name];
  return <Component />;
}
