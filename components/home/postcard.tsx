import { BearMini } from "@/components/art/bears";
import { site } from "@/lib/site";

export function PostcardSection() {
  return (
    <section className="postcard" id="contact">
      <div className="shell">
        <div className="sec-hd">
          <div className="sec-eyebrow">Episode 06 · Send a Postcard</div>
          <h2 className="chunky sec-title">
            Reach the <em>iceberg</em>.
          </h2>
          <p className="sec-sub">
            Open to interesting full-stack &amp; AI work. Quick to reply, slow to
            overcomplicate.
          </p>
        </div>

        <div className="postcard-grid">
          <div className="contact-card">
            <div className="stamp">
              POSTAGE
              <br />
              PAID
              <br />★ ★ ★<br />
              ICEBERG
              <br />
              2026
            </div>
            <h2>
              Let&apos;s build
              <br />
              <em>cold</em>.
            </h2>
            <p className="contact-sub">
              Ship me a note. Ice Bear reads everything (and Nitin actually
              replies).
            </p>
            <div className="channels">
              <a className="channel" href={`mailto:${site.author.email}`}>
                <div className="channel-i" aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 7 9-7" />
                  </svg>
                </div>
                <div>
                  <div className="channel-l">Email</div>
                  <div className="channel-v">{site.author.email}</div>
                </div>
              </a>
              <a className="channel" href={site.author.linkedin} target="_blank" rel="noreferrer">
                <div className="channel-i" style={{ background: "#2A6FDB" }} aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.3 18.3H5.7V9.7h2.6v8.6zM7 8.6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11.3 9.7h-2.6V14c0-1-.4-1.7-1.3-1.7-.8 0-1.2.5-1.4 1-.1.2-.1.5-.1.7v4.2H10.4V9.7h2.5v1.1c.3-.5 1-1.3 2.4-1.3 1.7 0 3 1.1 3 3.5v5.3z" />
                  </svg>
                </div>
                <div>
                  <div className="channel-l">LinkedIn</div>
                  <div className="channel-v">/in/neural-nitin</div>
                </div>
              </a>
              <a className="channel" href={site.author.leetcode} target="_blank" rel="noreferrer">
                <div className="channel-i" style={{ background: "#1b3a52" }} aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
                  </svg>
                </div>
                <div>
                  <div className="channel-l">LeetCode</div>
                  <div className="channel-v">/u/neuron_nitin</div>
                </div>
              </a>
              <a className="channel" href={`tel:${site.author.phone.replace(/\s/g, "")}`}>
                <div className="channel-i" style={{ background: "#9ce0c0", color: "#1b3a52" }} aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="channel-l">Phone</div>
                  <div className="channel-v">{site.author.phone}</div>
                </div>
              </a>
            </div>
          </div>

          <div className="now-card">
            <span className="badge">Now Shipping</span>
            <h3>Otto. Three platforms. One brain.</h3>
            <p>
              Currently leading full-stack on Otto — a productivity app spanning
              web, mobile, and desktop. Type-safe contracts everywhere, real-time
              sync, calm under pressure.
            </p>
            <ul>
              <li>Designing shared data models for 3 clients</li>
              <li>Owning PostgreSQL schema &amp; migrations</li>
              <li>Wiring Docker deploys on AWS EC2 / S3</li>
              <li>
                Reading <em>Designing Data-Intensive Applications</em>
              </li>
            </ul>
            <div className="now-bear" aria-hidden>
              <BearMini size={180} scarf />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
