import { ToolIcon } from "@/components/art/tool-icons";
import { expeditions } from "@/lib/expeditions";

export function ExpeditionsSection() {
  return (
    <section className="expeditions" id="expeditions">
      <div className="shell">
        <div className="sec-hd">
          <div className="sec-eyebrow">Episode 03 · The Expeditions</div>
          <h2 className="chunky sec-title">
            Things the bear <em>shipped</em>.
          </h2>
          <p className="sec-sub">
            Production code from the day job and side projects that taught Ice
            Bear something worth keeping.
          </p>
        </div>

        <div className="exp-list">
          {expeditions.map((e) => (
            <article className="exp-card" key={e.title}>
              <div className="exp-icon">
                <div style={{ transform: "scale(2.4)" }}>
                  <ToolIcon name={e.icon} />
                </div>
              </div>
              <div>
                <div className="exp-meta mono">{e.when}</div>
                <div className="exp-body">
                  <h3>{e.title}</h3>
                  <div className="exp-role">{e.role}</div>
                  <p className="exp-desc">{e.desc}</p>
                  <div className="exp-stack">
                    {e.stack.map((s) => (
                      <span key={s} className="tool-tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="exp-go" aria-hidden>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14m0 0-5-5m5 5-5 5" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
