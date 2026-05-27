import type { SVGProps } from "react";

export function BearFull({ holdingSword = false }: { holdingSword?: boolean }) {
  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" aria-label="Ice Bear">
      <ellipse cx="200" cy="475" rx="120" ry="14" fill="#1b3a52" opacity="0.18" />
      <g>
        <rect x="148" y="380" width="46" height="90" rx="22" fill="#fdfeff" stroke="#1b3a52" strokeWidth="4" />
        <rect x="206" y="380" width="46" height="90" rx="22" fill="#fdfeff" stroke="#1b3a52" strokeWidth="4" />
        <ellipse cx="171" cy="468" rx="20" ry="6" fill="#b8e2ee" stroke="#1b3a52" strokeWidth="3" />
        <ellipse cx="229" cy="468" rx="20" ry="6" fill="#b8e2ee" stroke="#1b3a52" strokeWidth="3" />
      </g>
      <path
        d="M 110 300 Q 100 230 140 200 Q 200 175 260 200 Q 300 230 290 300 Q 290 380 200 390 Q 110 380 110 300 Z"
        fill="#fdfeff"
        stroke="#1b3a52"
        strokeWidth="4"
      />
      <ellipse cx="200" cy="320" rx="60" ry="55" fill="#f1f9fd" />
      <g>
        <path
          d="M 118 260 Q 88 280 88 340 Q 90 370 118 365 Q 138 360 138 330 Z"
          fill="#fdfeff"
          stroke="#1b3a52"
          strokeWidth="4"
        />
        {holdingSword ? (
          <g>
            <path
              d="M 282 260 Q 312 270 312 320 Q 312 350 290 360 Q 270 360 262 335 Z"
              fill="#fdfeff"
              stroke="#1b3a52"
              strokeWidth="4"
            />
            <g transform="translate(294 200) rotate(20)">
              <rect x="-3" y="0" width="6" height="160" fill="#cfe4ec" stroke="#1b3a52" strokeWidth="3" />
              <rect x="-14" y="155" width="28" height="8" fill="#1b3a52" />
              <rect x="-3" y="163" width="6" height="22" fill="#7a5d3b" stroke="#1b3a52" strokeWidth="2" />
              <circle cx="0" cy="190" r="5" fill="#1b3a52" />
            </g>
          </g>
        ) : (
          <g>
            <path
              d="M 282 260 Q 312 280 312 340 Q 310 370 282 365 Q 262 360 262 330 Z"
              fill="#fdfeff"
              stroke="#1b3a52"
              strokeWidth="4"
            />
            <g transform="translate(270 312)">
              <rect x="0" y="0" width="44" height="34" rx="6" fill="#ff8c5c" stroke="#1b3a52" strokeWidth="3" />
              <path d="M 44 8 Q 60 10 60 17 Q 60 26 44 26" fill="none" stroke="#1b3a52" strokeWidth="3" />
              <rect x="6" y="6" width="32" height="6" rx="2" fill="#fdfeff" />
              <path d="M 12 -6 Q 16 -14 12 -22" stroke="#1b3a52" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.6" />
              <path d="M 24 -8 Q 28 -16 24 -24" stroke="#1b3a52" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.6" />
              <path d="M 36 -6 Q 40 -14 36 -22" stroke="#1b3a52" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.6" />
            </g>
          </g>
        )}
      </g>
      <g>
        <circle cx="138" cy="110" r="28" fill="#fdfeff" stroke="#1b3a52" strokeWidth="4" />
        <circle cx="262" cy="110" r="28" fill="#fdfeff" stroke="#1b3a52" strokeWidth="4" />
        <circle cx="138" cy="112" r="13" fill="#b8e2ee" />
        <circle cx="262" cy="112" r="13" fill="#b8e2ee" />
      </g>
      <ellipse cx="200" cy="160" rx="80" ry="74" fill="#fdfeff" stroke="#1b3a52" strokeWidth="4" />
      <ellipse cx="200" cy="190" rx="38" ry="28" fill="#ffffff" />
      <ellipse cx="172" cy="162" rx="5" ry="6.5" fill="#1b3a52" />
      <ellipse cx="228" cy="162" rx="5" ry="6.5" fill="#1b3a52" />
      <circle cx="174" cy="159" r="1.7" fill="#ffffff" />
      <circle cx="230" cy="159" r="1.7" fill="#ffffff" />
      <ellipse cx="200" cy="180" rx="6.5" ry="4.5" fill="#1b3a52" />
      <path d="M 190 198 Q 200 204 210 198" stroke="#1b3a52" strokeWidth="3" fill="none" strokeLinecap="round" />
      <ellipse cx="158" cy="186" rx="9" ry="5" fill="#ffb6c8" opacity="0.6" />
      <ellipse cx="242" cy="186" rx="9" ry="5" fill="#ffb6c8" opacity="0.6" />
      <g>
        <path
          d="M 130 226 Q 200 246 270 226 L 270 250 Q 200 268 130 250 Z"
          fill="#ff8c5c"
          stroke="#1b3a52"
          strokeWidth="4"
        />
        <path d="M 250 246 L 260 290 L 280 282 L 268 240 Z" fill="#ff8c5c" stroke="#1b3a52" strokeWidth="4" />
        <line x1="142" y1="234" x2="148" y2="252" stroke="#1b3a52" strokeWidth="2" opacity="0.4" />
        <line x1="172" y1="240" x2="178" y2="258" stroke="#1b3a52" strokeWidth="2" opacity="0.4" />
        <line x1="226" y1="240" x2="232" y2="258" stroke="#1b3a52" strokeWidth="2" opacity="0.4" />
        <line x1="256" y1="234" x2="262" y2="252" stroke="#1b3a52" strokeWidth="2" opacity="0.4" />
      </g>
    </svg>
  );
}

export function BearPortrait() {
  return (
    <svg viewBox="0 0 320 400" xmlns="http://www.w3.org/2000/svg" aria-label="Ice Bear portrait">
      <defs>
        <linearGradient id="aurora" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#bce5d7" />
          <stop offset="0.5" stopColor="#d6ecf6" />
          <stop offset="1" stopColor="#ebf6fb" />
        </linearGradient>
      </defs>
      <rect width="320" height="400" fill="url(#aurora)" />
      <path
        d="M 0 80 Q 80 50 160 80 T 320 70 L 320 130 Q 240 110 160 130 T 0 120 Z"
        fill="#9ce0c0"
        opacity="0.45"
      />
      <path
        d="M 0 130 Q 80 110 160 140 T 320 130 L 320 170 Q 240 150 160 175 T 0 165 Z"
        fill="#7dd8ff"
        opacity="0.35"
      />
      <path
        d="M 0 280 L 60 220 L 110 250 L 160 200 L 210 240 L 270 210 L 320 240 L 320 400 L 0 400 Z"
        fill="#79c0d8"
        stroke="#1b3a52"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M 60 220 L 75 230 L 90 222 L 105 232 L 110 250 Z" fill="#fdfeff" />
      <path d="M 160 200 L 175 212 L 190 204 L 205 214 L 210 240 Z" fill="#fdfeff" />
      <path d="M 270 210 L 285 222 L 300 215 L 315 224 L 320 240 Z" fill="#fdfeff" />
      <path
        d="M 0 320 Q 80 300 160 320 T 320 310 L 320 400 L 0 400 Z"
        fill="#fdfeff"
        stroke="#1b3a52"
        strokeWidth="3"
      />
      <circle cx="262" cy="80" r="28" fill="#ffd06a" stroke="#1b3a52" strokeWidth="3" />
      <circle cx="252" cy="74" r="6" fill="#ff8c5c" opacity="0.5" />
      <circle cx="268" cy="86" r="4" fill="#ff8c5c" opacity="0.5" />
      <g fill="#fdfeff" stroke="#1b3a52" strokeWidth="2.5">
        <ellipse cx="60" cy="60" rx="22" ry="10" />
        <ellipse cx="78" cy="56" rx="14" ry="8" />
        <ellipse cx="180" cy="40" rx="18" ry="8" />
      </g>
      <g fill="#ffffff" stroke="#1b3a52" strokeWidth="1.5">
        <circle cx="40" cy="160" r="3" />
        <circle cx="100" cy="180" r="2.5" />
        <circle cx="220" cy="190" r="3" />
        <circle cx="280" cy="160" r="2.5" />
        <circle cx="140" cy="120" r="2" />
        <circle cx="200" cy="240" r="3" />
        <circle cx="60" cy="240" r="2.5" />
      </g>
      <g transform="translate(0 60)">
        <ellipse cx="100" cy="200" r="40" fill="#fdfeff" stroke="#1b3a52" strokeWidth="4" />
        <ellipse cx="220" cy="200" r="40" fill="#fdfeff" stroke="#1b3a52" strokeWidth="4" />
        <circle cx="100" cy="204" r="20" fill="#b8e2ee" />
        <circle cx="220" cy="204" r="20" fill="#b8e2ee" />
        <ellipse cx="160" cy="240" rx="110" ry="100" fill="#fdfeff" stroke="#1b3a52" strokeWidth="4" />
        <ellipse cx="160" cy="278" rx="54" ry="40" fill="#ffffff" />
        <ellipse cx="122" cy="232" rx="7" ry="9" fill="#1b3a52" />
        <ellipse cx="198" cy="232" rx="7" ry="9" fill="#1b3a52" />
        <circle cx="125" cy="228" r="2.3" fill="#ffffff" />
        <circle cx="201" cy="228" r="2.3" fill="#ffffff" />
        <ellipse cx="160" cy="262" rx="9" ry="6.5" fill="#1b3a52" />
        <path d="M 145 284 Q 160 292 175 284" stroke="#1b3a52" strokeWidth="4" fill="none" strokeLinecap="round" />
        <ellipse cx="105" cy="270" rx="13" ry="7" fill="#ffb6c8" opacity="0.65" />
        <ellipse cx="215" cy="270" rx="13" ry="7" fill="#ffb6c8" opacity="0.65" />
      </g>
    </svg>
  );
}

export function BearMini({
  size = 44,
  scarf = false,
  ...rest
}: { size?: number; scarf?: boolean } & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="bear" {...rest}>
      <circle cx="26" cy="32" r="11" fill="#fdfeff" stroke="#1b3a52" strokeWidth="3" />
      <circle cx="74" cy="32" r="11" fill="#fdfeff" stroke="#1b3a52" strokeWidth="3" />
      <circle cx="26" cy="33" r="5" fill="#b8e2ee" />
      <circle cx="74" cy="33" r="5" fill="#b8e2ee" />
      <ellipse cx="50" cy="58" rx="34" ry="30" fill="#fdfeff" stroke="#1b3a52" strokeWidth="3" />
      <ellipse cx="50" cy="68" rx="14" ry="10" fill="#ffffff" />
      <ellipse cx="38" cy="54" rx="2.5" ry="3.5" fill="#1b3a52" />
      <ellipse cx="62" cy="54" rx="2.5" ry="3.5" fill="#1b3a52" />
      <ellipse cx="50" cy="62" rx="3.2" ry="2.2" fill="#1b3a52" />
      <path d="M 46 72 Q 50 75 54 72" stroke="#1b3a52" strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="32" cy="65" rx="4" ry="2" fill="#ffb6c8" opacity="0.6" />
      <ellipse cx="68" cy="65" rx="4" ry="2" fill="#ffb6c8" opacity="0.6" />
      {scarf && (
        <path
          d="M 28 84 Q 50 92 72 84 L 72 92 Q 50 100 28 92 Z"
          fill="#ff8c5c"
          stroke="#1b3a52"
          strokeWidth="2.5"
        />
      )}
    </svg>
  );
}

export function HeroScene() {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMax slice"
      className="scene-svg"
      aria-hidden
    >
      <g>
        <circle cx="1280" cy="180" r="80" fill="#ffd06a" />
        <circle cx="1280" cy="180" r="100" fill="#ffd06a" opacity="0.3" />
        <circle cx="1280" cy="180" r="130" fill="#ffd06a" opacity="0.15" />
      </g>
      <path
        d="M 0 580 L 120 460 L 240 540 L 360 420 L 500 520 L 640 440 L 780 510 L 920 430 L 1060 510 L 1200 450 L 1340 520 L 1480 440 L 1600 510 L 1600 900 L 0 900 Z"
        fill="#79c0d8"
        stroke="#1b3a52"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <g fill="#fdfeff">
        <path d="M 120 460 L 145 480 L 170 470 L 195 488 L 220 478 L 240 540 L 200 540 L 160 520 Z" />
        <path d="M 360 420 L 390 442 L 420 432 L 450 454 L 480 444 L 500 520 L 440 502 L 400 478 Z" />
        <path d="M 640 440 L 670 460 L 700 452 L 730 472 L 760 462 L 780 510 L 720 492 L 680 470 Z" />
        <path d="M 920 430 L 950 452 L 980 442 L 1010 464 L 1040 454 L 1060 510 L 1000 492 L 960 468 Z" />
        <path d="M 1200 450 L 1230 470 L 1260 462 L 1290 480 L 1320 470 L 1340 520 L 1280 504 L 1240 478 Z" />
        <path d="M 1480 440 L 1510 462 L 1540 452 L 1570 472 L 1600 462 L 1600 510 Z" />
      </g>
      <path
        d="M 0 680 L 180 540 L 340 640 L 520 510 L 720 620 L 920 530 L 1120 630 L 1320 550 L 1500 640 L 1600 600 L 1600 900 L 0 900 Z"
        fill="#5ba9c8"
        stroke="#1b3a52"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M 0 750 Q 200 720 400 760 T 800 750 T 1200 760 T 1600 740 L 1600 900 L 0 900 Z"
        fill="#fdfeff"
        stroke="#1b3a52"
        strokeWidth="4"
      />
      <g>
        <path
          d="M 1180 800 L 1240 720 L 1300 700 L 1380 730 L 1440 780 L 1420 850 L 1190 850 Z"
          fill="#b8e2ee"
          stroke="#1b3a52"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <path
          d="M 1240 720 L 1280 740 L 1320 720 L 1380 730 L 1340 760 L 1290 770 L 1250 740 Z"
          fill="#fdfeff"
        />
      </g>
      <g transform="translate(120 820)">
        <path
          d="M 0 0 Q 40 -16 60 0 Q 40 16 0 0 Z"
          fill="#5ba9c8"
          stroke="#1b3a52"
          strokeWidth="2.5"
        />
        <path
          d="M 60 0 L 76 -10 L 76 10 Z"
          fill="#5ba9c8"
          stroke="#1b3a52"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="-2" r="2.5" fill="#1b3a52" />
      </g>
      <g fill="#fdfeff" stroke="#1b3a52" strokeWidth="3">
        <g transform="translate(120 120)">
          <ellipse cx="0" cy="0" rx="44" ry="18" />
          <ellipse cx="34" cy="-6" rx="28" ry="14" />
          <ellipse cx="-30" cy="-2" rx="22" ry="12" />
        </g>
        <g transform="translate(500 80)">
          <ellipse cx="0" cy="0" rx="36" ry="16" />
          <ellipse cx="28" cy="-4" rx="24" ry="12" />
        </g>
        <g transform="translate(840 160)">
          <ellipse cx="0" cy="0" rx="50" ry="20" />
          <ellipse cx="40" cy="-8" rx="32" ry="16" />
          <ellipse cx="-36" cy="-4" rx="26" ry="14" />
        </g>
      </g>
      <g transform="translate(80 700)">
        <path d="M 0 50 Q 0 0 60 0 Q 120 0 120 50 Z" fill="#fdfeff" stroke="#1b3a52" strokeWidth="3.5" />
        <path
          d="M 30 50 Q 30 30 50 30 Q 50 50 50 50 Z M 50 50 L 50 30 Q 70 30 70 50"
          fill="#b8e2ee"
          stroke="#1b3a52"
          strokeWidth="3"
        />
        <path
          d="M 8 30 L 50 30 M 70 30 L 112 30 M 6 20 L 114 20 M 14 10 L 106 10"
          stroke="#1b3a52"
          strokeWidth="1.5"
          opacity="0.4"
          fill="none"
        />
      </g>
      <path
        d="M 0 850 Q 100 810 220 850 L 220 900 L 0 900 Z"
        fill="#ebf6fb"
        stroke="#1b3a52"
        strokeWidth="3.5"
      />
    </svg>
  );
}
