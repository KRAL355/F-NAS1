"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function Giris() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/panel");
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto flex max-w-md flex-col px-6 py-20">
        <h1 className="text-3xl font-bold">Hoş geldiniz</h1>
        <p className="mt-2 text-sm text-slate-400">
          Hesabınıza giriş yapın
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
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
              value={sifre}
              onChange={(e) => setSifre(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm outline-none focus:border-emerald-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-500 py-2.5 font-medium text-slate-950 hover:bg-emerald-400"
          >
            Giriş Yap
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Hesabınız yok mu?{" "}
          <Link href="/kayit" className="text-emerald-400 hover:underline">
            Kayıt olun
          </Link>
        </p>
      </main>
    </>
  );
}
