import Link from "next/link";
import CikisButonu from "@/components/CikisButonu";
import PanelSidebar from "@/components/PanelSidebar";

const quickStats = [
  { label: "Günlük Kâr", value: "15 USD", icon: "📅" },
  { label: "Haftalık Kâr", value: "105 USD", icon: "📆" },
  { label: "Yatırım Tutarı", value: "0 USD", icon: "💵" },
  { label: "Para Çekme", value: "0 USD", icon: "🏦" },
];

const plans = [
  { name: "PLAN - 1", profit: "+120%", daily: "+6%", range: "1 - 10 USD", duration: "20 GÜN", price: "$10", color: "from-purple-600 to-purple-800", accent: "text-purple-300" },
  { name: "PLAN - 2", profit: "+160%", daily: "+8%", range: "10 - 100 USD", duration: "20 GÜN", price: "$100", color: "from-fuchsia-600 to-purple-800", accent: "text-fuchsia-300", popular: true },
  { name: "PLAN - 3", profit: "+200%", daily: "+10%", range: "100 - 1000 USD", duration: "20 GÜN", price: "$1000", color: "from-emerald-600 to-emerald-800", accent: "text-emerald-300" },
];

export default function Panel() {
  return (
    <div className="flex min-h-screen">
      <PanelSidebar />
      <main className="flex-1 p-6 md:p-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Merhaba, Kullanıcı 👋</h1>
            <p className="text-sm text-slate-400">Madencilik panelinize hoş geldiniz</p>
          </div>
          <div className="flex items-center gap-3">
            <CikisButonu />
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 font-bold text-slate-950">K</div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="card p-6">
            <div className="text-sm text-slate-400">Mevcut Bakiye</div>
            <div className="mt-2 text-3xl font-bold">$10,00</div>
            <div className="mt-4 flex gap-2">
              <button className="rounded-lg bg-emerald-500 px-4 py-2 text-xs font-medium text-slate-950 hover:bg-emerald-400">+ YATIR</button>
              <button className="rounded-lg border border-slate-700 px-4 py-2 text-xs hover:bg-slate-900">ÇEK</button>
            </div>
          </div>
          <div className="card p-6">
            <div className="text-sm text-slate-400">Kazanç Bakiyesi</div>
            <div className="mt-2 text-3xl font-bold text-emerald-400">$0,018438</div>
            <div className="mt-4 flex gap-2">
              <button className="rounded-lg bg-emerald-500 px-4 py-2 text-xs font-medium text-slate-950 hover:bg-emerald-400">PARA ÇEK</button>
              <button className="rounded-lg border border-slate-700 px-4 py-2 text-xs hover:bg-slate-900">TAKAS</button>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {quickStats.map((s) => (
            <div key={s.label} className="card p-4">
              <div className="text-2xl">{s.icon}</div>
              <div className="mt-2 text-lg font-bold text-emerald-400">{s.value}</div>
              <div className="mt-1 text-xs text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-center text-2xl font-bold">YATIRIM <span className="gradient-text">PLANLARI</span></h2>
          <p className="mt-2 text-center text-sm text-slate-400">Bulut madenciliği ile istediğiniz zaman kazanç elde edin.</p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <div key={p.name} className={`card relative overflow-hidden ${p.popular ? "ring-2 ring-emerald-500" : ""}`}>
                {p.popular && (
                  <div className="absolute right-4 top-4 z-10 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-950">POPÜLER</div>
                )}
                <div className={`bg-gradient-to-br ${p.color} p-6 text-center`}>
                  <div className="text-3xl font-bold text-white">{p.profit}</div>
                  <div className="mt-1 text-xs text-white/80">{p.name}</div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between border-b border-slate-800 pb-2"><span className="text-slate-400">Günlük Kâr</span><span className={`font-semibold ${p.accent}`}>{p.daily}</span></li>
                    <li className="flex justify-between border-b border-slate-800 pb-2"><span className="text-slate-400">Yatırım Aralığı</span><span className="text-slate-200">{p.range}</span></li>
                    <li className="flex justify-between border-b border-slate-800 pb-2"><span className="text-slate-400">Süre</span><span className="text-slate-200">{p.duration}</span></li>
                    <li className="flex justify-between"><span className="text-slate-400">Min. Yatırım</span><span className="text-slate-200">{p.price}</span></li>
                  </ul>
                  <button className="mt-6 block w-full rounded-lg bg-emerald-500 py-2.5 text-center text-sm font-medium text-slate-950 hover:bg-emerald-400">SATIN AL</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
