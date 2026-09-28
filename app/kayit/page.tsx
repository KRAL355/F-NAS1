"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function Kayit() {
  const router = useRouter();
  const [ad, setAd] = useState("");
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");
  const [basari, setBasari] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBasari(true);
    setTimeout(() => {
      router.push("/panel");
    }, 2000);
  }

  if (basari) {
    return (
      <>
        <Navbar />
        <main className="mx-auto flex max-w-md flex-col items-center px-6 py-32 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 text-4xl">
            ✅
          </div>
          <h1 className="mt-6 text-2xl font-bold text-emerald-400">
            Kayıt Başarılı!
          </h1>
          <p className="mt-3 text-sm text-slate-400">
            Panele yönlendiriliyorsunuz...
          </p>
          <div className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-slate-800">
            <div className="h-full w-full animate-pulse rounded-full bg-emerald-500" />
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto flex max-w-md flex-col px-6 py-20">
        <h1 className="text-3xl font-bold">Hesap oluştur</h1>
        <p className="mt-2 text-sm text-slate-400">
          30 saniyede ücretsiz başla
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="mb-1 block text-sm text-slate-300">
              Ad Soyad
            </label>
            <input
              type="text"
              required
              value={ad}
              onChange={(e) => setAd(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm outline-none focus:border-emerald-500"
              placeholder="Adınız Soyadınız"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-slate-300">
              E-posta
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm outline-none focus:border-emerald-500"
              placeholder="ornek@mail.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-slate-300">Şifre</label>
            <input
              type="password"
              required
              minLength={8}
              value={sifre}
              onChange={(e) => setSifre(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm outline-none focus:border-emerald-500"
              placeholder="En az 8 karakter"
            />
          </div>
          <label className="flex items-start gap-2 text-xs text-slate-400">
            <input type="checkbox" required className="mt-1" />
            <span>
              <Link href="#" className="text-emerald-400 hover:underline">
                Kullanım Şartları
              </Link>{" "}
              ve{" "}
              <Link href="#" className="text-emerald-400 hover:underline">
                Gizlilik Politikası
              </Link>
              'nı okudum, kabul ediyorum.
            </span>
          </label>

          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-500 py-2.5 font-medium text-slate-950 hover:bg-emerald-400"
          >
            Kayıt Ol
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Zaten hesabınız var mı?{" "}
          <Link href="/giris" className="text-emerald-400 hover:underline">
            Giriş yapın
          </Link>
        </p>
      </main>
    </>
  );
}
