"use client";

import { useState } from "react";
import CikisButonu from "@/components/CikisButonu";
import PanelSidebar from "@/components/PanelSidebar";

const wallets = [
  { id: "faucetpay", name: "FaucetPay", icon: "🔷", placeholder: "Wallet FaucetPay", color: "bg-blue-500" },
  { id: "doge", name: "DOGECOIN", icon: "🐕", placeholder: "Wallet DOGECOIN", color: "bg-yellow-500" },
  { id: "ltc", name: "LITECOIN", icon: "Ł", placeholder: "Wallet LITECOIN", color: "bg-slate-400" },
  { id: "trx", name: "TRON", icon: "🔺", placeholder: "Wallet TRON", color: "bg-red-500" },
  { id: "btc", name: "BITCOIN", icon: "₿", placeholder: "Wallet BITCOIN", color: "bg-orange-500" },
  { id: "bch", name: "BITCOIN NAKİT", icon: "₿", placeholder: "Wallet BITCOIN CASH", color: "bg-emerald-500" },
  { id: "usdt", name: "BAĞLANTI KABLOSU (TRC-20)", icon: "₮", placeholder: "Wallet TETHER (TRC-20)", color: "bg-emerald-600" },
  { id: "eth", name: "ETER", icon: "Ξ", placeholder: "Wallet ETHERIUM", color: "bg-indigo-500" },
  { id: "dash", name: "DASHCOIN", icon: "Đ", placeholder: "Wallet DASHCOIN", color: "bg-blue-600" },
  { id: "bnb", name: "BinanceCoin", icon: "🪙", placeholder: "Wallet BinanceCoin", color: "bg-yellow-600" },
];

export default function Ayarlar() {
  const [kaydedilen, setKaydedilen] = useState<string | null>(null);
  const [iban, setIban] = useState("");
  const [adSoyad, setAdSoyad] = useState("");
  const [ibanKaydedildi, setIbanKaydedildi] = useState(false);

  function kaydet(id: string) {
    setKaydedilen(id);
    setTimeout(() => setKaydedilen(null), 1500);
  }

  return (
    <div className="flex min-h-screen">
      <PanelSidebar />
      <main className="flex-1 p-6 md:p-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Ayarlar / Cüzdan</h1>
            <p className="text-sm text-slate-400">Para çekmek için kripto cüzdan adreslerinizi ve banka bilgilerinizi girin.</p>
          </div>
          <CikisButonu />
        </div>

        {/* KRİPTO CÜZDANLAR */}
        <div className="mt-8">
          <h2 className="mb-4 text-lg font-semibold text-slate-200">Ayarlar cüzdanı</h2>
          <div className="space-y-3">
            {wallets.map((w) => (
              <div key={w.id} className="card flex items-center gap-3 p-4">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${w.color} text-lg font-bold text-white`}>
                  {w.icon}
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-slate-300">{w.name}</div>
                  <input type="text" placeholder={w.placeholder}
                    className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm outline-none focus:border-emerald-500" />
                </div>
                <button onClick={() => kaydet(w.id)}
                  className={`shrink-0 rounded-md px-4 py-2 text-xs font-semibold ${kaydedilen === w.id ? "bg-emerald-400 text-slate-950" : "bg-emerald-500 text-slate-950 hover:bg-emerald-400"}`}>
                  {kaydedilen === w.id ? "✓" : "OK"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* BANKA HESABI */}
        <div className="mt-10">
          <h2 className="mb-4 text-lg font-semibold text-slate-200">🏦 Banka Hesabı (IBAN)</h2>
          <div className="card p-6">
            <p className="mb-5 text-sm text-slate-400">
              Türkiye'den TL çekimi yapabilmek için IBAN ve alıcı ad soyad bilgilerinizi girin.
            </p>

            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-xs text-slate-400">Ad Soyad</label>
                <input type="text" value={adSoyad} onChange={(e) => setAdSoyad(e.target.value)}
                  placeholder="Ahmet Yılmaz"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="mb-1 block text-xs text-slate-400">IBAN</label>
                <input type="text" value={iban} onChange={(e) => setIban(e.target.value.toUpperCase())}
                  placeholder="TR00 0000 0000 0000 0000 0000 00" maxLength={32}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm outline-none focus:border-emerald-500" />
              </div>
              <button
                onClick={() => {
                  setIbanKaydedildi(true);
                  setTimeout(() => setIbanKaydedildi(false), 2000);
                }}
                className={`rounded-lg px-6 py-2.5 text-sm font-semibold ${ibanKaydedildi ? "bg-emerald-400 text-slate-950" : "bg-emerald-500 text-slate-950 hover:bg-emerald-400"}`}>
                {ibanKaydedildi ? "✓ KAYDEDİLDİ" : "BANKA BİLGİLERİNİ KAYDET"}
              </button>
            </div>
          </div>
        </div>

        {/* GÜVENLİK */}
        <div className="mt-10">
          <h2 className="mb-4 text-lg font-semibold text-slate-200">🔒 Güvenlik</h2>
          <div className="card p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-sm font-medium">Şifre Değiştir</div>
                <div className="text-xs text-slate-400">Hesap güvenliğiniz için düzenli olarak şifrenizi değiştirin.</div>
              </div>
              <button className="rounded-lg border border-slate-700 px-5 py-2 text-sm hover:bg-slate-900">
                Şifreyi Değiştir
              </button>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-4">
              <div>
                <div className="text-sm font-medium">İki Faktörlü Doğrulama (2FA)</div>
                <div className="text-xs text-slate-400">Google Authenticator ile ekstra güvenlik.</div>
              </div>
              <button className="rounded-lg bg-emerald-500 px-5 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400">
                Aktif Et
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
