import Link from "next/link";
import { Footer } from "@/components/common/footer";
import { BearMini } from "@/components/art/bears";

export default function NotFound() {
  return (
    <>
      <main className="detail-page">
        <div
          className="detail-shell"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 24,
            paddingTop: 120,
            paddingBottom: 120,
          }}
        >
          <div style={{ transform: "rotate(-6deg)" }}>
            <BearMini size={120} scarf />
          </div>
          <h1 className="chunky" style={{ fontSize: "clamp(48px, 8vw, 96px)", margin: 0 }}>
            404 · cold trail
          </h1>
          <p style={{ maxWidth: 520, color: "var(--ink-2)", fontSize: 18, lineHeight: 1.6 }}>
            Ice Bear couldn&apos;t find that page. Could be melted. Could be misfiled.
            The iceberg is still here, though.
          </p>
          <Link className="btn btn-primary" href="/">
            Back to the iceberg →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
