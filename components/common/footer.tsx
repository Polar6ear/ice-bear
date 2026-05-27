export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="foot">
      <div className="foot-inner">
        <div>© {year} · Nitin Negi · Ice Bear&apos;s Iceberg</div>
        <div className="mono">
          crafted <span className="heart">cold</span> · 16°F · built with Next.js + ❄️
        </div>
      </div>
    </footer>
  );
}
