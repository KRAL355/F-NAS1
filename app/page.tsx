import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { label: "Kullanıcı", value: "79.212", icon: "👥" },
  { label: "Toplam Yatırım", value: "$459.128,09", icon: "💰" },
  { label: "Toplam Ödeme", value: "$123.594,42", icon: "💳" },
  { label: "Çalışma Süresi", value: "691 GÜN", icon: "⏱️" },
];

const steps = [
  {
    title: "GİRİŞ YAP",
    desc: "Panele giriş yap ve madenciliğe başla.",
    icon: "🔐",
  },
  {
    title: "KAZAN",
    desc: "Her gün %10'a kadar kazanç elde et.",
    icon: "💎",
  },
  {
    title: "PARA ÇEK",
    desc: "İstediğin zaman anında çek.",
    icon: "🏦",
  },
];

const plans = [
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

const faqs = [
  {
    q: "Nasıl başlarım?",
    a: "Panele giriş yapın ve ilk yatırımınızı gerçekleştirin. Hepsi bu kadar.",
  },
  {
    q: "Minimum yatırım ne kadar?",
    a: "Sadece 10 USD ile başlayabilirsiniz. Dilediğiniz zaman ek yatırım yapabilirsiniz.",
  },
  {
    q: "Kazancımı ne zaman çekebilirim?",
    a: "Plan süreniz dolduğunda (20 gün), kazancınızı anında çekebilirsiniz. Gizli ücret yok.",
  },
  {
    q: "Ödeme yöntemleri neler?",
    a: "Kripto para (BTC, ETH, USDT), banka havalesi ve kredi kartı ile ödeme yapabilirsiniz.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs text-emerald-300">
            🎉 Yeni: İlk 30 gün komisyonsuz
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            KRİPTO MADENCİLİĞİ <br />
            <span className="gradient-text">ÜCRETSİZ VE HIZLI!</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Yasal, şeffaf ve güvenli madencilik platformu. Bulut madenciliği ile
            kazancınızı tek yerden yönetin.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/panel"
              className="rounded-xl bg-emerald-500 px-8 py-3 font-medium text-slate-950 hover:bg-emerald-400"
            >
              Giriş Yap
            </Link>
            <Link
              href="#planlar"
              className="rounded-xl border border-slate-700 px-8 py-3 font-medium text-slate-200 hover:bg-slate-800"
            >
              Planları Gör
            </Link>
          </div>
        </div>
      </section>

      {/* İSTATİSTİKLER */}
      <section className="border-b border-slate-800">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="card p-5 text-center">
              <div className="text-2xl">{s.icon}</div>
              <div className="mt-2 text-xl font-bold text-emerald-400">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 ADIM */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          3 ADIMDA <span className="gradient-text">BAŞLA!</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-400">
          Giriş yap ve hemen kazanmaya başla. Hepsi bu kadar basit.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="card p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-3xl">
                {s.icon}
              </div>
              <h3 className="mt-5 font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
              <div className="mt-4 text-xs text-slate-500">
                ADIM {i + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* YATIRIM PLANLARI */}
      <section
        id="planlar"
        className="border-y border-slate-800 bg-slate-900/30"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            KAZANCINIZ <span className="gradient-text">+200%</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-400">
            Yatırım planlarımız — her bütçeye uygun.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`card relative overflow-hidden p-6 ${
                  p.popular ? "ring-2 ring-emerald-500" : ""
                }`}
              >
                {p.popular && (
                  <div className="absolute right-4 top-4 z-10 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-950">
                    POPÜLER
                  </div>
                )}

                <div
                  className={`-mx-6 -mt-6 mb-6 bg-gradient-to-br ${p.color} p-6 text-center`}
                >
                  <div className="text-3xl font-bold text-white">
                    {p.profit}
                  </div>
                  <div className="mt-1 text-xs text-white/80">{p.name}</div>
                </div>

                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Günlük Kâr</span>
                    <span className={`font-semibold ${p.accent}`}>
                      {p.daily}
                    </span>
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

                <Link
                  href="/panel"
                  className="mt-6 block w-full rounded-lg bg-emerald-500 py-2.5 text-center text-sm font-medium text-slate-950 hover:bg-emerald-400"
                >
                  YATIRIM YAP
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section id="sss" className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          SIKÇA SORULAN <span className="gradient-text">SORULAR</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-400">
          Başlamadan önce bilmeniz gerekenler.
        </p>

        <div className="mt-12 space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="card group cursor-pointer p-5 transition hover:border-emerald-500/40"
            >
              <summary className="flex items-center justify-between text-sm font-medium text-slate-200">
                {f.q}
                <span className="text-emerald-400 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-slate-400">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="card p-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Bugün <span className="gradient-text">başlayın</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Panele giriş yapın ve madenciliğe hemen başlayın.
          </p>
          <Link
            href="/panel"
            className="mt-8 inline-block rounded-xl bg-emerald-500 px-8 py-3 font-medium text-slate-950 hover:bg-emerald-400"
          >
            Giriş Yap
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
