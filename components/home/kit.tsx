import { ToolIcon } from "@/components/art/tool-icons";
import { skills } from "@/lib/skills";

export function KitSection() {
  return (
    <section className="kit" id="kit">
      <div className="shell">
        <div className="sec-hd">
          <div className="sec-eyebrow">Episode 02 · Survival Kit</div>
          <h2 className="chunky sec-title">
            Tools the bear <em>actually</em> uses.
          </h2>
          <p className="sec-sub">
            A working set, not a wishlist. These are the things Ice Bear reaches
            for when something needs to ship.
          </p>
        </div>

        <div className="kit-grid">
          {skills.map((t) => (
            <div className={`tool-card ${t.variant}`} key={t.tag}>
              <div className="tool-num chunky">{t.tag}</div>
              <div className="tool-emoji">
                <ToolIcon name={t.icon} />
              </div>
              <h4 style={{ fontFamily: "system-ui" }}>{t.title}</h4>
              <div style={{ fontSize: 13, color: "#335a78", marginBottom: 4 }}>
                {t.desc}
              </div>
              <div className="tool-tags">
                {t.items.map((it) => (
                  <span key={it} className="tool-tag">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
