"use client";

import { BearFull, HeroScene } from "@/components/art/bears";
import { Snowfall } from "./snowfall";
import { useTweaks } from "@/components/tweaks/use-tweaks";

export function Hero() {
  const { accessory, bearMode } = useTweaks();

  return (
    <section className="scene" id="top">
      <HeroScene />
      <Snowfall />

      <div className="scene-content">
        <div className="scene-left">
          <span className="hero-bubble">⭐ now playing · season 3</span>
          <h1 className="chunky hero-title">
            <span className="color-2">Ice Bear&apos;s</span>
            <br />
            <span className="color-1 wave">ICEBERG</span>
          </h1>
          <div className="hero-sub">
            {bearMode ? (
              <>
                Ice Bear ships full-stack — <b>FastAPI &amp; Node</b>, PostgreSQL,
                React, and applied AI (yes, including the chatbots). Ice
                Bear&apos;s portfolio lives here. Welcome to the iceberg.
              </>
            ) : (
              <>
                I&apos;m Nitin — full-stack engineer at Sonoka. I ship across{" "}
                <b>FastAPI &amp; Node</b>, PostgreSQL, React, and applied AI.
                This is my work, my writing, and my videos, all living on one
                iceberg.
              </>
            )}
          </div>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#expeditions">
              See the work →
            </a>
            <a className="btn btn-sun" href="#journal">
              Field Journal
            </a>
            <a className="btn btn-mint" href="#tv">
              Cold Cuts TV
            </a>
          </div>
        </div>

        <div className="scene-right">
          <div className="bear-wrap">
            <div className="speech">Ice Bear says hi.</div>
            <div className="bear-bob">
              <BearFull holdingSword={accessory === "sword"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
