"use client";

import { useState, useEffect } from "react";
import CikisButonu from "@/components/CikisButonu";
import PanelSidebar from "@/components/PanelSidebar";

type ActiveMining = {
  id: number;
  plan: string;
  investment: number;
  dailyProfit: number;
  totalDays: number;
  passedDays: number;
  earned: number;
  color: string;
};

const initialMining: ActiveMining[] = [
  {
    id: 1,
    plan: "PLAN - 2",
    investment: 50,
    dailyProfit: 4,
    totalDays: 20,
    passedDays: 7,
    earned: 28,
    color: "from-fuchsia-600 to-purple-800",
  },
  {
    id: 2,
    plan: "PLAN - 1",
    investment: 10,
    dailyProfit: 0.6,
    totalDays: 20,
    passedDays: 3,
    earned: 1.8,
    color: "from-purple-600 to-purple-800",
  },
];

const history = [
  { date: "18.09.2026", plan: "PLAN-2", amount: "+$4,00", type: "Günlük Kâr" },
  { date: "17.09.2026", plan: "PLAN-2", amount: "+$4,00", type: "Günlük Kâr" },
  { date: "16.09.2026", plan: "PLAN-2", amount: "+$4,00", type: "Günlük Kâr" },
  { date: "15.09.2026", plan: "PLAN-1", amount: "+$0,60", type: "Günlük Kâr" },
  { date: "14.09.2026", plan: "PLAN-1", amount: "+$0,60", type: "Günlük Kâr" },
];

const availablePlans = [
  {
    name: "PLAN - 1",
    profit: "+120%",
    daily: "+6%",
    range: "1 - 10 USD",
    duration: "20 GÜN",
    price: "$10",
    color: "from-purple-600 to-purple-800",
    accent: "text-purple-300",
  },
  {
    name: "PLAN - 2",
    profit: "+160%",
    daily: "+8%",
    range: "10 - 100 USD",
    duration: "20 GÜN",
    price: "$100",
    color: "from-fuchsia-600 to-purple-800",
    accent: "text-fuchsia-300",
    popular: true,
  },
  {
    name: "PLAN - 3",
    profit: "+200%",
    daily: "+10%",
    range: "100 - 1000 USD",
    duration: "20 GÜN",
    price: "$1000",
    color: "from-emerald-600 to-emerald-800",
    accent: "text-emerald-300",
  },
];

export default function Madencilik() {
  const [hashrate, setHashrate] = useState(142.5);
  const [aktif, setAktif] = useState(true);
  const [kazanc, setKazanc] = useState(29.8);

  // Canlı hashrate simülasyonu
  useEffect(() => {
    if (!aktif) return;
    const interval = setInterval(() => {
      setHashrate((prev) => {
        const delta = (Math.random() - 0.5) * 15;
        return Math.max(80, Math.min(220, prev + delta));
      });
      setKazanc((prev) => prev + Math.random() * 0.001);
    }, 1500);
    return () => clearInterval(interval);
  }, [aktif]);

  const toplamYatirim = initialMining.reduce((s, m) => s + m.investment, 0);
  const gunlukToplam = initialMining.reduce((s, m) => s + m.dailyProfit, 0);
  const toplamKazanc = initialMining.reduce((s, m) => s + m.earned, 0);

  return (
    <div className="flex min-h-screen">
      <PanelSidebar />
      <main className="flex-1 p-6 md:p-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">⛏️ Madencilik</h1>
            <p className="text-sm text-slate-400">
              Aktif madencilik planlarınızı yönetin, kazancınızı takip edin.
            </p>
          </div>
          <CikisButonu />
        </div>

        {/* ÜST ÖZET KARTLARI */}
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <div className="card p-5">
            <div className="text-xs text-slate-400">Toplam Yatırım</div>
            <div className="mt-1 text-2xl font-bold">${toplamYatirim.toFixed(2)}</div>
          </div>
          <div className="card p-5">
            <div className="text-xs text-slate-400">Günlük Kâr</div>
            <div className="mt-1 text-2xl font-bold text-emerald-400">
              +${gunlukToplam.toFixed(2)}
            </div>
          </div>
          <div className="card p-5">
            <div className="text-xs text-slate-400">Toplam Kazanç</div>
            <div className="mt-1 text-2xl font-bold text-emerald-400">
              ${toplamKazanc.toFixed(2)}
            </div>
          </div>
          <div className="card p-5">
            <div className="text-xs text-slate-400">Durum</div>
            <div className={`mt-1 flex items-center gap-2 text-2xl font-bold ${aktif ? "text-emerald-400" : "text-slate-500"}`}>
              <span className={`h-2 w-2 rounded-full ${aktif ? "animate-pulse bg-emerald-400" : "bg-slate-500"}`} />
              {aktif ? "AKTİF" : "DURDURULDU"}
            </div>
          </div>
        </div>

        {/* CANLI HASHRATE GÖSTERGESİ */}
        <div className="mt-8 card overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-900/40 via-slate-900 to-slate-900 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 text-3xl">
                  ⚡
                </div>
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

            {/* Canlı grafik çubuğu */}
            <div className="mt-6 flex h-16 items-end gap-1">
              {Array.from({ length: 40 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-emerald-500/60 transition-all duration-500"
                  style={{
                    height: aktif ? `${20 + Math.random() * 80}%` : "10%",
                    opacity: 0.3 + (i / 40) * 0.7,
                  }}
                />
              ))}
            </div>

            <div className="mt-3 flex justify-between text-xs text-slate-500">
              <span>60 saniye önce</span>
              <span>Canlı Kazanç: <span className="text-emerald-400">+${kazanc.toFixed(4)}</span></span>
              <span>şimdi</span>
            </div>
          </div>
        </div>

        {/* AKTİF MADENCİLİK PLANLARI */}
        <div className="mt-10">
          <h2 className="mb-4 text-lg font-bold">🔥 Aktif Madencilik Planlarınız</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {initialMining.map((m) => {
              const progress = (m.passedDays / m.totalDays) * 100;
              const remaining = m.totalDays - m.passedDays;
              const totalEarning = m.investment + m.dailyProfit * m.totalDays;

              return (
                <div key={m.id} className="card overflow-hidden">
                  <div className={`bg-gradient-to-r ${m.color} p-4`}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white">{m.plan}</span>
                      <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-white">
                        {remaining} gün kaldı
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="text-xs text-slate-500">Yatırım</div>
                        <div className="mt-1 text-sm font-bold text-slate-200">
                          ${m.investment}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Günlük</div>
                        <div className="mt-1 text-sm font-bold text-emerald-400">
                          +${m.dailyProfit}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Toplam</div>
                        <div className="mt-1 text-sm font-bold text-emerald-400">
                          ${totalEarning}
                        </div>
                      </div>
                    </div>

                    {/* İlerleme çubuğu */}
                    <div className="mt-5">
                      <div className="mb-2 flex justify-between text-xs">
                        <span className="text-slate-400">
                          {m.passedDays}/{m.totalDays} gün
                        </span>
                        <span className="text-emerald-400 font-semibold">
                          {progress.toFixed(0)}%
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-between rounded-lg bg-slate-900/60 p-3">
                      <div className="text-xs text-slate-400">Şu ana kadar kazanılan</div>
                      <div className="text-sm font-bold text-emerald-400">
                        +${m.earned.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* YENİ PLAN SATIN AL */}
        <div className="mt-12">
          <h2 className="text-center text-2xl font-bold">
            YENİ <span className="gradient-text">PLAN SATIN AL</span>
          </h2>
          <p className="mt-2 text-center text-sm text-slate-400">
            Daha fazla kazanç için yeni bir plan başlatın.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {availablePlans.map((p) => (
              <div
                key={p.name}
                className={`card relative overflow-hidden ${
                  p.popular ? "ring-2 ring-emerald-500" : ""
                }`}
              >
                {p.popular && (
                  <div className="absolute right-4 top-4 z-10 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-950">
                    POPÜLER
                  </div>
                )}

                <div className={`bg-gradient-to-br ${p.color} p-6 text-center`}>
                  <div className="text-3xl font-bold text-white">{p.profit}</div>
                  <div className="mt-1 text-xs text-white/80">{p.name}</div>
                </div>

                <div className="p-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-400">Günlük Kâr</span>
                      <span className={`font-semibold ${p.accent}`}>{p.daily}</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-400">Yatırım Aralığı</span>
                      <span className="text-slate-200">{p.range}</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-400">Süre</span>
                      <span className="text-slate-200">{p.duration}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-400">Min. Yatırım</span>
                      <span className="text-slate-200">{p.price}</span>
                    </li>
                  </ul>

                  <button className="mt-6 w-full rounded-lg bg-emerald-500 py-2.5 text-sm font-medium text-slate-950 hover:bg-emerald-400">
                    SATIN AL
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* KAZANÇ GEÇMİŞİ */}
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
                {history.map((h, i) => (
                  <tr key={i} className="border-b border-slate-800/60 last:border-0">
                    <td className="p-4 text-slate-400">{h.date}</td>
                    <td className="p-4">
                      <span className="rounded-md bg-slate-800 px-2 py-0.5 text-xs">
                        {h.plan}
                      </span>
                    </td>
                    <td className="p-4 text-slate-300">{h.type}</td>
                    <td className="p-4 text-right font-semibold text-emerald-400">
                      {h.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
