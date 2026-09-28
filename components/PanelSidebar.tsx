"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { label: "Panel", href: "/panel", icon: "📊" },
  { label: "Madencilik", href: "/panel/madencilik", icon: "⛏️" },
  { label: "PTC", href: "/panel/ptc", icon: "🖱️" },
  { label: "Bonus", href: "/panel/bonus", icon: "🎁" },
  { label: "Ortaklar", href: "/panel/ortaklar", icon: "🤝" },
  { label: "Cüzdan", href: "/panel/ayarlar", icon: "💰" },
  { label: "Ayarlar", href: "/panel/ayarlar", icon: "⚙️" },
];

export default function PanelSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 flex-col border-r border-slate-800 bg-slate-950 p-6 md:flex">
      <Link href="/" className="text-xl font-bold">
        <span className="gradient-text">Finans</span>Pro
      </Link>
      <nav className="mt-10 space-y-1">
        {menu.map((m) => {
          const active = pathname === m.href;
          return (
            <Link
              key={m.label}
              href={m.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${
                active
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "text-slate-400 hover:bg-slate-900"
              }`}
            >
              <span>{m.icon}</span> {m.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
