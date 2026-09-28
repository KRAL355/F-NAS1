"use client";

import { useState } from "react";
import CikisButonu from "@/components/CikisButonu";
import PanelSidebar from "@/components/PanelSidebar";

type Tab = "gorus" | "ekle" | "reklamlarim";

export default function PTC() {
  const [tab, setTab] = useState<Tab>("gorus");

  return (
    <div className="flex min-h-screen">
      <PanelSidebar />
      <main className="flex-1 p-6 md:p-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">PTC — Reklam İzle & Kazan</h1>
            <p className="text-sm text-slate-400">Reklam izle, para kazan. Kendi reklamını ekle, tanıtım yap.</p>
          </div>
          <CikisButonu />
        </div>

        {/* SEKMELER */}
        <div className="mt-8 flex flex-wrap gap-2">
          <button onClick={() => setTab("gorus")}
            className={`rounded-lg px-5 py-2.5 text-sm font-medium ${tab === "gorus" ? "bg-purple-600 text-white" : "border border-slate-700 text-slate-300 hover:bg-slate-900"}`}>
            👁️ GÖRÜŞ
          </button>
          <button onClick={() => setTab("ekle")}
            className={`rounded-lg px-5 py-2.5 text-sm font-medium ${tab === "ekle" ? "bg-purple-600 text-white" : "border border-slate-700 text-slate-300 hover:bg-slate-900"}`}>
            ➕ BAĞLANTI EKLE
          </button>
          <button onClick={() => setTab("reklamlarim")}
            className={`rounded-lg px-5 py-2.5 text-sm font-medium ${tab === "reklamlarim" ? "bg-purple-600 text-white" : "border border-slate-700 text-slate-300 hover:bg-slate-900"}`}>
            📢 REKLAMLARIM
          </button>
        </div>

        {tab === "gorus" && <GorusTab />}
        {tab === "ekle" && <EkleTab />}
        {tab === "reklamlarim" && <ReklamlarimTab />}
      </main>
    </div>
  );
}

/* ---------- GÖRÜŞ SEKMESİ ---------- */
function GorusTab() {
  const ads = [
    { id: 1, title: "Kripto Borsası - Üye Ol", reward: "$0,002", time: 10, icon: "₿" },
    { id: 2, title: "Youtube Kanalımı İzle", reward: "$0,004", time: 20, icon: "▶️" },
    { id: 3, title: "Blog Yazımı Oku", reward: "$0,006", time: 30, icon: "📰" },
    { id: 4, title: "Anket Doldur", reward: "$0,008", time: 40, icon: "📋" },
    { id: 5, title: "Instagram Sayfam", reward: "$0,010", time: 50, icon: "📷" },
    { id: 6, title: "Yeni Proje Tanıtımı", reward: "$0,012", time: 60, icon: "🚀" },
  ];

  return (
    <div className="mt-6">
      <p className="mb-4 text-sm text-slate-400">
        Aşağıdaki reklamları izleyerek kazanç bakiyenize para ekleyin. Her reklam belirtilen saniye kadar açık kalmalıdır.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ads.map((a) => (
          <div key={a.id} className="card p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-2xl">{a.icon}</div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold">{a.title}</h3>
                <div className="mt-1 flex gap-3 text-xs text-slate-400">
                  <span className="text-emerald-400 font-semibold">{a.reward}</span>
                  <span>⏱️ {a.time} sn</span>
                </div>
              </div>
            </div>
            <button className="mt-4 w-full rounded-lg bg-emerald-500 py-2 text-xs font-medium text-slate-950 hover:bg-emerald-400">
              İZLE & KAZAN
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- BAĞLANTI EKLE SEKMESİ ---------- */
function EkleTab() {
  const [baslik, setBaslik] = useState("");
  const [url, setUrl] = useState("");
  const [sure, setSure] = useState(10);
  const [vip, setVip] = useState("Kapalı");
  const [donem, setDonem] = useState("Her 24 saatte bir");
  const [fiyat, setFiyat] = useState("0.005000");

  const sureler = [
    { sn: 10, fiyat: 0.002 },
    { sn: 20, fiyat: 0.004 },
    { sn: 30, fiyat: 0.006 },
    { sn: 40, fiyat: 0.008 },
    { sn: 50, fiyat: 0.01 },
    { sn: 60, fiyat: 0.012 },
  ];

  return (
    <div className="mt-6">
      <div className="card p-6">
        <p className="mb-6 text-sm text-slate-400">
          Bu sayfaya çeşitli projelerinizin web sitelerini/yönlendirme bağlantılarını ekleyebilirsiniz.
          Sitemizin kullanıcıları bağlantılarınızı görüntüleyecek ve tarifeye göre ödeme alacaklardır.
          Virüs içeren ve sistemi bozan pornografik sitelerin eklenmesi yasaktır.
        </p>

        <h2 className="mb-4 text-lg font-bold">BAĞLANTI EKLE</h2>

        <div className="space-y-4">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">✏️</span>
            <input type="text" value={baslik} onChange={(e) => setBaslik(e.target.value)}
              placeholder="Başlık"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 pl-12 pr-4 py-2.5 text-sm outline-none focus:border-purple-500" />
          </div>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">🔗</span>
            <input type="url" value={url} onChange={(e) => setUrl(e.target.value)}
              placeholder="URL: https://example.com"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 pl-12 pr-4 py-2.5 text-sm outline-none focus:border-purple-500" />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="mb-1 block text-xs text-slate-400">Zamanlayıcı</label>
              <select value={sure} onChange={(e) => setSure(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm outline-none focus:border-purple-500">
                {sureler.map((s) => (
                  <option key={s.sn} value={s.sn}>
                    Zamanlayıcı: {s.sn} saniye (+{s.fiyat.toFixed(3)} USD)
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs text-slate-400">VIP</label>
              <select value={vip} onChange={(e) => setVip(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm outline-none focus:border-purple-500">
                <option>Kapalı</option>
                <option>Açık</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs text-slate-400">Dönem</label>
              <select value={donem} onChange={(e) => setDonem(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm outline-none focus:border-purple-500">
                <option>Her 24 saatte bir</option>
                <option>Her 12 saatte bir</option>
                <option>Her 6 saatte bir</option>
              </select>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs text-slate-400">Fiyat Görüntüle</label>
              <input type="text" value={fiyat} onChange={(e) => setFiyat(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm outline-none focus:border-purple-500" />
            </div>
            <div>
              <label className="mb-1 block text-xs text-slate-400">Para Birimi</label>
              <div className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-slate-400">
                Amerikan Doları
              </div>
            </div>
          </div>

          <button className="rounded-lg bg-emerald-500 px-6 py-2.5 text-sm font-medium text-slate-950 hover:bg-emerald-400">
            BAĞLANTIYI EKLE
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- REKLAMLARIM SEKMESİ ---------- */
function ReklamlarimTab() {
  const reklamlar = [
    { id: 1, baslik: "Blog Yazım", url: "https://ornek.com/yazi", sure: 30, izlenme: 142, harcama: "$0,852", durum: "Aktif" },
    { id: 2, baslik: "Youtube Kanalım", url: "https://youtube.com/watch", sure: 60, izlenme: 89, harcama: "$1,068", durum: "Aktif" },
    { id: 3, baslik: "Instagram Sayfam", url: "https://instagram.com/", sure: 10, izlenme: 305, harcama: "$0,610", durum: "Bitti" },
  ];

  return (
    <div className="mt-6">
      <p className="mb-4 text-sm text-slate-400">
        Yayında olan ve geçmiş reklamlarınızın listesi. İzlenme ve harcama detaylarını görüntüleyin.
      </p>
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="border-b border-slate-800 bg-slate-900/50 text-left text-slate-400">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Başlık</th>
              <th className="p-4">Süre</th>
              <th className="p-4">İzlenme</th>
              <th className="p-4">Harcama</th>
              <th className="p-4">Durum</th>
            </tr>
          </thead>
          <tbody>
            {reklamlar.map((r) => (
              <tr key={r.id} className="border-b border-slate-800/60 last:border-0">
                <td className="p-4 text-slate-400">#{r.id}</td>
                <td className="p-4">
                  <div className="font-medium">{r.baslik}</div>
                  <div className="text-xs text-slate-500">{r.url}</div>
                </td>
                <td className="p-4">{r.sure} sn</td>
                <td className="p-4">{r.izlenme}</td>
                <td className="p-4 text-emerald-400">{r.harcama}</td>
                <td className="p-4">
                  <span className={`rounded-full px-2 py-1 text-xs ${r.durum === "Aktif" ? "bg-emerald-500/10 text-emerald-400" : "bg-slate-500/10 text-slate-400"}`}>
                    {r.durum}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
