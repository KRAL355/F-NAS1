"use client";

import { useRouter } from "next/navigation";

export default function CikisButonu() {
  const router = useRouter();

  function cikisYap() {
    router.push("/");
  }

  return (
    <button
      onClick={cikisYap}
      className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800"
    >
      Çıkış Yap
    </button>
  );
}
