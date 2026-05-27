import Link from "next/link";
import { BearMini } from "@/components/art/bears";
import { site } from "@/lib/site";

interface NavLink {
  href: string;
  label: string;
}

const defaultLinks: NavLink[] = [
  { href: "/#meet", label: "Meet" },
  { href: "/#kit", label: "Skills" },
  { href: "/#expeditions", label: "Work" },
  { href: "/#journal", label: "Posts" },
  { href: "/#tv", label: "Videos" },
];

export function Nav({ links = defaultLinks }: { links?: NavLink[] }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link className="nav-brand" href="/">
          <div className="nav-brand-bear">
            <BearMini size={32} />
          </div>
          <div className="nav-brand-text">
            <div className="nav-brand-name">{site.name}</div>
            <div className="nav-brand-sub mono">{site.tagline}</div>
          </div>
        </Link>
        <div className="nav-links">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="nav-status">
          <span className="live-dot" />
          Open for projects
        </div>
      </div>
    </nav>
  );
}
