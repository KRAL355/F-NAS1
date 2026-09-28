import CikisButonu from "@/components/CikisButonu";
import PanelSidebar from "@/components/PanelSidebar";

const yatirimBonuses = [
  { amount: "5 USD BONUS", sub: "PARA YATIRMA BONUSU #1", desc: "100 USD veya üzeri para yatırma işlemleriniz için bakiyenize ek olarak %5 bonus alacaksınız.", color: "from-purple-500 to-purple-700" },
  { amount: "50 USD BONUS", sub: "PARA YATIRMA BONUSU #2", desc: "500 USD veya üzeri para yatırma işlemleriniz için bakiyenize ek olarak %10 bonus alacaksınız.", color: "from-blue-500 to-blue-700" },
  { amount: "150 USD BONUS", sub: "PARA YATIRMA BONUSU #3", desc: "1000 USD veya üzeri para yatırma işlemleriniz için bakiyenize ek olarak %15 bonus alacaksınız.", color: "from-red-500 to-red-700" },
];

const ortaklikBonuses = [
  { amount: "10 USD BONUS", sub: "ORTAKLIK BONUSU #1", desc: "Aktif referanslar davet ettiğiniz için size bir bonus veriyoruz. Referanslarınızdan elde edeceğiniz gelir 199 ABD dolarından başlamalıdır.", color: "from-emerald-500 to-emerald-700" },
  { amount: "30 USD BONUS", sub: "ORTAKLIK BONUSU #2", desc: "Aktif referanslar davet ettiğiniz için size bir bonus veriyoruz. Referanslarınızdan elde edeceğiniz gelir 699 ABD dolarından başlamalıdır.", color: "from-emerald-500 to-emerald-700" },
  { amount: "100 USD BONUS", sub: "ORTAKLIK BONUSU #3", desc: "Aktif referanslar davet ettiğiniz için size bir bonus veriyoruz. Referanslarınızdan elde edeceğiniz gelir 1499 ABD dolarından başlamalıdır.", color: "from-emerald-500 to-emerald-700" },
];

export default function Bonus() {
  return (
    <div className="flex min-h-screen">
      <PanelSidebar />
      <main className="flex-1 p-6 md:p-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Aktiviteler ve Bonuslar</h1>
            <p className="text-sm text-slate-400">Belirli bir seviyeye ulaştığınızda size ek bir bonus veriyoruz.</p>
          </div>
          <CikisButonu />
        </div>

        {/* YATIRIM BONUSLARI */}
        <h2 className="mt-10 text-center text-2xl font-bold text-slate-200">YATIRIM BONUSLARI</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {yatirimBonuses.map((b) => (
            <BonusCard key={b.amount} {...b} buttonText="BONUSU TALEP ET" buttonColor="bg-red-500 hover:bg-red-400 text-white" />
          ))}
        </div>

        {/* DİĞER BONUSLAR */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <BonusCard
            amount="500 USD BONUS"
            sub="ÖDÜL SİSTEMİ"
            desc="Kullanıcılarımızı aktif olarak teşvik etmeye hazırız; projemizle ilgili video yorumları veya gönderiler oluşturmanın karşılığında bonus veriyoruz."
            color="from-cyan-500 to-cyan-700"
            buttonText="BONUSU TALEP ET"
            buttonColor="bg-red-500 hover:bg-red-400 text-white"
          />
          <div className="flex items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
            <div className="text-center">
              <div className="text-5xl">🎉</div>
              <h3 className="mt-4 text-lg font-bold text-emerald-400">DAHA FAZLA BONUS YOLDA!</h3>
              <p className="mt-2 text-sm text-slate-400">Yeni bonus kampanyaları için bizi takip edin.</p>
            </div>
          </div>
        </div>

        {/* ORTAKLIK BONUSLARI */}
        <h2 className="mt-12 text-center text-2xl font-bold text-slate-200">ORTAKLIK BONUSLARI</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {ortaklikBonuses.map((b) => (
            <BonusCard key={b.amount} {...b} buttonText="BONUSU TALEP ET" buttonColor="bg-red-500 hover:bg-red-400 text-white" />
          ))}
        </div>
      </main>
    </div>
  );
}

function BonusCard({
  amount, sub, desc, color, buttonText, buttonColor,
}: {
  amount: string; sub: string; desc: string; color: string;
  buttonText: string; buttonColor: string;
}) {
  return (
    <div className="card flex flex-col overflow-hidden p-6 text-center">
      <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${color} text-3xl text-white`}>
        🎁
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-100">{amount}</h3>
      <div className="mt-1 text-xs font-semibold text-purple-400">{sub}</div>
      <p className="mt-4 flex-1 text-xs text-slate-400">{desc}</p>
      <button className={`mt-6 w-full rounded-lg py-2.5 text-sm font-semibold ${buttonColor}`}>
        {buttonText}
      </button>
    </div>
  );
}
