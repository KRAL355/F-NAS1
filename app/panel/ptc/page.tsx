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

/* ---------- GÖRÜŞ SEKMESİ (BOŞ) ---------- */
function GorusTab() {
  return (
    <div className="mt-6">
      <p className="mb-4 text-sm text-slate-400">
        Aşağıdaki reklamları izleyerek kazanç bakiyenize para ekleyin.
      </p>
      <div className="card flex flex-col items-center justify-center p-12 text-center">
        <div className="text-5xl">📭</div>
        <h3 className="mt-4 text-lg font-semibold text-slate-200">Şu an reklam yok</h3>
        <p className="mt-2 max-w-md text-sm text-slate-400">
          Kullanıcılar reklam ekledikçe burada görünecek. Kendiniz de reklam ekleyebilirsiniz.
        </p>
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

/* ---------- REKLAMLARIM SEKMESİ (BOŞ) ---------- */
function ReklamlarimTab() {
  return (
    <div className="mt-6">
      <p className="mb-4 text-sm text-slate-400">
        Yayında olan ve geçmiş reklamlarınızın listesi.
      </p>
      <div className="card flex flex-col items-center justify-center p-12 text-center">
        <div className="text-5xl">📢</div>
        <h3 className="mt-4 text-lg font-semibold text-slate-200">Henüz reklamınız yok</h3>
        <p className="mt-2 max-w-md text-sm text-slate-400">
          "Bağlantı Ekle" sekmesinden ilk reklamınızı oluşturun.
        </p>
      </div>
    </div>
  );
}
