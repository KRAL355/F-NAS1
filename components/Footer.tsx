export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-4">
        <div>
          <div className="text-lg font-bold">
            <span className="gradient-text">Finans</span>Pro
          </div>
          <p className="mt-3 text-sm text-slate-400">Yasal ve şeffaf yatırım platformu.</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-slate-200">Platform</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Hakkımızda</li>
            <li>Fiyatlandırma</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-slate-200">Yasal</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Kullanım Şartları</li>
            <li>Gizlilik Politikası</li>
            <li>KVKK Aydınlatma</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-slate-200">İletişim</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>destek@finanspro.com</li>
            <li>0850 000 00 00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} FinansPro. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
