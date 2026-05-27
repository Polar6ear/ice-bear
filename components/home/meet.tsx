import { BearPortrait } from "@/components/art/bears";
import { traits } from "@/lib/skills";

export function MeetSection() {
  return (
    <section className="meet" id="meet">
      <div className="shell">
        <div className="sec-hd">
          <div className="sec-eyebrow">Episode 01 · The Bear</div>
          <h2 className="chunky sec-title">
            Meet <em>Ice Bear</em>.
          </h2>
          <p className="sec-sub">
            A.k.a. Nitin Negi. Full-stack engineer with a thing for cold storage,
            async pipelines, and shipping things end-to-end.
          </p>
        </div>

        <div className="meet-grid">
          <div className="bio-card">
            <div className="tape" />
            <h3>Nitin Negi</h3>
            <div className="role">Software Engineer · Sonoka.asia</div>
            <p>
              Ships production SaaS across the Python and Node ecosystems.
              Comfortable end-to-end — APIs, data layers, React UIs, and applied
              AI including RAG-powered chatbots. Currently leading full-stack on{" "}
              <b>Otto</b>, a productivity app for web, mobile, and desktop.
            </p>
            <p style={{ color: "#335a78", fontSize: 14 }}>
              <b>Spirit animal:</b> Ice Bear. Stoic. Hyper-competent. Speaks in
              third person, sometimes.
            </p>

            <div className="bio-traits">
              {traits.map((t) => (
                <div className="bio-trait" key={t.l}>
                  <div className="bio-trait-emoji">{t.e}</div>
                  <div>{t.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bear-portrait">
            <BearPortrait />
            <div className="stamp">
              PORTRAIT
              <br />
              OF A BEAR
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
