import type { ReactNode } from "react";

interface CalloutProps {
  title?: string;
  icon?: string;
  children: ReactNode;
}

export function Callout({ title = "Cold tip", icon = "🧊", children }: CalloutProps) {
  return (
    <div className="callout">
      <div className="ic" aria-hidden>
        {icon}
      </div>
      <div>
        <h4>{title}</h4>
        <div>{children}</div>
      </div>
    </div>
  );
}
