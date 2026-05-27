"use client";

import { useEffect, useState } from "react";
import { useTweaks } from "./use-tweaks";
import type { DisplayFont, TitleStyle, Accessory } from "./types";

const displayFontOptions: ReadonlyArray<{ value: DisplayFont; label: string }> = [
  { value: "lilita", label: "Lilita One — chunky, readable" },
  { value: "paytone", label: "Paytone One — bold, condensed" },
  { value: "nunito", label: "Nunito Black — clean, sans" },
  { value: "sniglet", label: "Sniglet — friendly round" },
  { value: "fredoka", label: "Fredoka — soft, unified" },
  { value: "chango", label: "Chango — woodblock cartoon" },
  { value: "bowlby", label: "Bowlby — vintage chunky" },
  { value: "bagel", label: "Bagel Fat One — max chunk" },
];

const titleStyles: TitleStyle[] = ["outlined", "clean", "shadowed", "sticker"];
const accessories: Accessory[] = ["mug", "sword"];

export function TweaksPanel() {
  const t = useTweaks();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "." || e.key === ",") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        className="twk-fab"
        aria-label={open ? "Close tweaks" : "Open tweaks"}
        onClick={() => setOpen((v) => !v)}
      >
        ⚙
      </button>
      {open ? (
        <aside className="twk-panel" data-open="1">
          <header className="twk-hd">
            <strong>Tweaks</strong>
            <button
              type="button"
              className="twk-x"
              aria-label="Close tweaks"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </header>
          <div className="twk-body">
            <div className="twk-sect">Typography</div>
            <label className="twk-row">
              <span className="twk-lbl">Display font</span>
              <select
                className="twk-field"
                value={t.displayFont}
                onChange={(e) => t.setTweak("displayFont", e.target.value as DisplayFont)}
              >
                {displayFontOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </label>
            <div className="twk-row">
              <span className="twk-lbl">Title style</span>
              <div className="twk-seg">
                {titleStyles.map((style) => (
                  <button
                    type="button"
                    key={style}
                    className={`twk-seg-btn ${t.titleStyle === style ? "active" : ""}`}
                    onClick={() => t.setTweak("titleStyle", style)}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            <div className="twk-sect">The Bear</div>
            <div className="twk-row">
              <span className="twk-lbl">Bear is holding</span>
              <div className="twk-seg">
                {accessories.map((a) => (
                  <button
                    type="button"
                    key={a}
                    className={`twk-seg-btn ${t.accessory === a ? "active" : ""}`}
                    onClick={() => t.setTweak("accessory", a)}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>
            <label className="twk-row twk-row-h">
              <span className="twk-lbl">Ice Bear voice (3rd person)</span>
              <button
                type="button"
                className="twk-toggle"
                data-on={t.bearMode ? "1" : "0"}
                aria-pressed={t.bearMode}
                onClick={() => t.setTweak("bearMode", !t.bearMode)}
              >
                <i />
              </button>
            </label>

            <div className="twk-sect">The Weather</div>
            <label className="twk-row twk-row-h">
              <span className="twk-lbl">Snowfall</span>
              <button
                type="button"
                className="twk-toggle"
                data-on={t.snow ? "1" : "0"}
                aria-pressed={t.snow}
                onClick={() => t.setTweak("snow", !t.snow)}
              >
                <i />
              </button>
            </label>
            {t.snow ? (
              <label className="twk-row">
                <span className="twk-lbl">
                  Snow density <em>{t.snowDensity}</em>
                </span>
                <input
                  type="range"
                  className="twk-slider"
                  min={6}
                  max={80}
                  step={2}
                  value={t.snowDensity}
                  onChange={(e) => t.setTweak("snowDensity", Number(e.target.value))}
                />
              </label>
            ) : null}

            <button type="button" className="twk-reset" onClick={t.reset}>
              Reset to defaults
            </button>
          </div>
        </aside>
      ) : null}
    </>
  );
}
