"use client";

import { useEffect, useMemo, useState } from "react";
import { useTweaks } from "@/components/tweaks/use-tweaks";

interface Flake {
  left: number;
  size: number;
  dur: number;
  delay: number;
}

function makeFlakes(count: number): Flake[] {
  return Array.from({ length: count }).map(() => ({
    left: Math.random() * 100,
    size: 5 + Math.random() * 7,
    dur: 9 + Math.random() * 14,
    delay: Math.random() * -22,
  }));
}

export function Snowfall() {
  const { snow, snowDensity } = useTweaks();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const flakes = useMemo(
    () => (mounted ? makeFlakes(snowDensity) : []),
    [mounted, snowDensity],
  );

  if (!mounted || !snow) return null;

  return (
    <div className="snow" aria-hidden>
      {flakes.map((f, i) => (
        <span
          key={i}
          style={{
            left: `${f.left}%`,
            width: `${f.size}px`,
            height: `${f.size}px`,
            animationDuration: `${f.dur}s`,
            animationDelay: `${f.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
