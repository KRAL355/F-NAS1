"use client";

import { useState } from "react";
import CikisButonu from "@/components/CikisButonu";
import PanelSidebar from "@/components/PanelSidebar";

export default function Ortaklar() {
  const [kopyalandi, setKopyalandi] = useState(false);
  const davetLink = "https://f-nas1.vercel.app/ref/00000";

  function kopyala() {
    navigator.clipboard.writeText(davetLink);
    setKopyalandi(true);
    setTimeout(() => setKopyalandi(false), 2000);
  }

  return (
    <div className="flex min-h-screen">
      <PanelSidebar />
      <main className="flex-1 p-6 md:p-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Ortaklar Programı</h1>
            <p className="text-sm text-slate-400">Referans sistemi — her gün pasif gelir elde etmek için harika bir fırsat!</p>
          </div>
          <CikisButonu />
        </div>

        {/* ÜST KARTLAR */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="card flex items-center gap-4 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-2xl">💰</div>
            <div>
              <div className="text-2xl font-bold text-amber-400">0 USD</div>
              <div className="text-xs text-slate-400">Kazançlar</div>
            </div>
          </div>
          <div className="card flex items-center gap-4 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">👥</div>
            <div>
              <div className="text-2xl font-bold text-blue-400">0 KİŞİ</div>
              <div className="text-xs text-slate-400">Toplam Yönlendirme Sayısı</div>
            </div>
          </div>
          <div className="card flex items-center gap-4 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-2xl">⚡</div>
            <div>
              <div className="text-2xl font-bold text-purple-400">+10% + 2%</div>
              <div className="text-xs text-slate-400">Komisyon Kazanç</div>
            </div>
          </div>
        </div>

        {/* DAVET LİNKİ */}
        <div className="card mt-6 p-6">
          <div className="text-sm text-slate-300">
            Referans sistemi, her gün pasif gelir elde etmek için harika bir fırsat! Ortaklık programına katılın ve <span className="font-semibold text-emerald-400">%12</span>'ye varan komisyon kazanın.
          </div>

          <label className="mt-6 mb-2 block text-xs font-semibold text-slate-400">DAVET BAĞLANTINIZ:</label>
          <div className="flex flex-col gap-2 md:flex-row">
            <input type="text" readOnly value={davetLink}
              className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-slate-300 outline-none" />
            <button onClick={kopyala}
              className={`rounded-lg px-6 py-2.5 text-sm font-medium ${kopyalandi ? "bg-emerald-500 text-slate-950" : "bg-purple-600 text-white hover:bg-purple-500"}`}>
              {kopyalandi ? "✓ KOPYALANDI" : "📋 KOPYALA"}
            </button>
          </div>

          <button className="mt-4 rounded-lg bg-emerald-500 px-6 py-2.5 text-sm font-medium text-slate-950 hover:bg-emerald-400">
            📢 TANITIM GİF'İ
          </button>
        </div>

        {/* ORTAKLAR TABLOSU - BOŞ */}
        <div className="mt-8">
          <h2 className="mb-3 text-lg font-bold text-amber-400">ORTAKLARIM</h2>
          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-purple-700 text-left text-white">
                <tr>
                  <th className="p-4">Kullanıcı</th>
                  <th className="p-4">Gelir</th>
                  <th className="p-4">Alan</th>
                  <th className="p-4">Tarih</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4} className="p-12 text-center text-slate-500">
                    <div className="text-4xl">🤝</div>
                    <p className="mt-3">Henüz ortağınız yok.</p>
                    <p className="mt-1 text-xs">Davet linkinizi paylaşarak başlayın!</p>
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
