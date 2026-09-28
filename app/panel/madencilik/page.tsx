"use client";

import { useState, useEffect } from "react";
import CikisButonu from "@/components/CikisButonu";
import PanelSidebar from "@/components/PanelSidebar";

const availablePlans = [
  { name: "PLAN - 1", profit: "+120%", daily: "+6%", range: "1 - 10 USD", duration: "20 GÜN", price: "$10", color: "from-purple-600 to-purple-800", accent: "text-purple-300" },
  { name: "PLAN - 2", profit: "+160%", daily: "+8%", range: "10 - 100 USD", duration: "20 GÜN", price: "$100", color: "from-fuchsia-600 to-purple-800", accent: "text-fuchsia-300", popular: true },
  { name: "PLAN - 3", profit: "+200%", daily: "+10%", range: "100 - 1000 USD", duration: "20 GÜN", price: "$1000", color: "from-emerald-600 to-emerald-800", accent: "text-emerald-300" },
];

export default function Madencilik() {
  const [hashrate, setHashrate] = useState(0);
  const [aktif, setAktif] = useState(false);

  // Sadece aktifken hashrate oynasın
  useEffect(() => {
    if (!aktif) {
      setHashrate(0);
      return;
    }
    const interval = setInterval(() => {
      setHashrate((prev) => {
        const delta = (Math.random() - 0.5) * 15;
        return Math.max(80, Math.min(220, prev + delta));
      });
    }, 1500);
    return () => clearInterval(interval);
  }, [aktif]);

  return (
    <div className="flex min-h-screen">
      <PanelSidebar />
      <main className="flex-1 p-6 md:p-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">⛏️ Madencilik</h1>
            <p className="text-sm text-slate-400">Aktif madencilik planlarınızı yönetin, kazancınızı takip edin.</p>
          </div>
          <CikisButonu />
        </div>

        {/* ÜST ÖZET KARTLARI */}
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <div className="card p-5">
            <div className="text-xs text-slate-400">Toplam Yatırım</div>
            <div className="mt-1 text-2xl font-bold">$0.00</div>
          </div>
          <div className="card p-5">
            <div className="text-xs text-slate-400">Günlük Kâr</div>
            <div className="mt-1 text-2xl font-bold text-emerald-400">+$0.00</div>
          </div>
          <div className="card p-5">
            <div className="text-xs text-slate-400">Toplam Kazanç</div>
            <div className="mt-1 text-2xl font-bold text-emerald-400">$0.00</div>
          </div>
          <div className="card p-5">
            <div className="text-xs text-slate-400">Durum</div>
            <div className={`mt-1 flex items-center gap-2 text-2xl font-bold ${aktif ? "text-emerald-400" : "text-slate-500"}`}>
              <span className={`h-2 w-2 rounded-full ${aktif ? "animate-pulse bg-emerald-400" : "bg-slate-500"}`} />
              {aktif ? "AKTİF" : "PASİF"}
            </div>
          </div>
        </div>

        {/* CANLI HASHRATE GÖSTERGESİ */}
        <div className="mt-8 card overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-900/40 via-slate-900 to-slate-900 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 text-3xl">⚡</div>
                <div>
                  <div className="text-xs text-slate-400">Canlı Hashrate</div>
                  <div className="font-mono text-3xl font-bold text-emerald-400">
                    {hashrate.toFixed(1)} <span className="text-lg text-slate-500">MH/s</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setAktif(!aktif)}
                  className={`rounded-lg px-6 py-2.5 text-sm font-medium ${
                    aktif
                      ? "bg-red-500/20 text-red-400 hover:bg-red-500/30"
                      : "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                  }`}
                >
                  {aktif ? "⏸ DURDUR" : "▶ BAŞLAT"}
                </button>
              </div>
            </div>

            <div className="mt-6 flex h-16 items-end gap-1">
              {Array.from({ length: 40 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-emerald-500/60 transition-all duration-500"
                  style={{
                    height: aktif ? `${20 + Math.random() * 80}%` : "5%",
                    opacity: 0.3 + (i / 40) * 0.7,
                  }}
                />
              ))}
            </div>

            <div className="mt-3 flex justify-between text-xs text-slate-500">
              <span>60 saniye önce</span>
              <span>Canlı Kazanç: <span className="text-emerald-400">${aktif ? "0.0000" : "0.0000"}</span></span>
              <span>şimdi</span>
            </div>
          </div>
        </div>

        {/* AKTİF MADENCİLİK PLANLARI - BOŞ DURUM */}
        <div className="mt-10">
          <h2 className="mb-4 text-lg font-bold">🔥 Aktif Madencilik Planlarınız</h2>
          <div className="card flex flex-col items-center justify-center p-12 text-center">
            <div className="text-5xl">⛏️</div>
            <h3 className="mt-4 text-lg font-semibold text-slate-200">Henüz aktif planınız yok</h3>
            <p className="mt-2 max-w-md text-sm text-slate-400">
              Madencilik kazançlarınızı elde etmek için aşağıdan bir plan satın alın.
            </p>
            <a href="#planlar" className="mt-6 rounded-lg bg-emerald-500 px-6 py-2.5 text-sm font-medium text-slate-950 hover:bg-emerald-400">
              Planlara Git
            </a>
          </div>
        </div>

        {/* YENİ PLAN SATIN AL */}
        <div id="planlar" className="mt-12">
          <h2 className="text-center text-2xl font-bold">
            YENİ <span className="gradient-text">PLAN SATIN AL</span>
          </h2>
          <p className="mt-2 text-center text-sm text-slate-400">
            Daha fazla kazanç için bir plan başlatın.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {availablePlans.map((p) => (
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
                  <button className="mt-6 w-full rounded-lg bg-emerald-500 py-2.5 text-sm font-medium text-slate-950 hover:bg-emerald-400">SATIN AL</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* KAZANÇ GEÇMİŞİ - BOŞ */}
        <div className="mt-12">
          <h2 className="mb-4 text-lg font-bold">📜 Son Kazançlar</h2>
          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="border-b border-slate-800 bg-slate-900/50 text-left text-slate-400">
                <tr>
                  <th className="p-4">Tarih</th>
                  <th className="p-4">Plan</th>
                  <th className="p-4">Tür</th>
                  <th className="p-4 text-right">Tutar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4} className="p-8 text-center text-slate-500">
                    Henüz kazanç kaydınız yok.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
