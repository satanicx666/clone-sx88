import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-10">
      <div className="root w-full">
        <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-10 gap-4">
          {/* === LEFT SIDE (col-span-10 sm:col-span-5) === */}
          <div className="col-span-10 sm:col-span-5 pt-10 pb-3">
            <div className="grid grid-cols-2 sm:grid-cols-4 mb-10 gap-5">
              <div>
                <h4 className="title font-bold mb-5 text-white text-sm">Informasi</h4>
                <Link href="/info/tentang-kami" className="mb-4 block text-xs text-ds-text-subtle hover:text-ds-text-brand">
                  Tentang kami
                </Link>
                <Link href="/info/afiliasi" className="mb-4 block text-xs text-ds-text-subtle hover:text-ds-text-brand">
                  Program Afiliasi
                </Link>
                <Link href="/info/responsible-gaming" className="mb-4 block text-xs text-ds-text-subtle hover:text-ds-text-brand">
                  Responsible Gaming
                </Link>
              </div>
              <div>
                <h4 className="title font-bold mb-5 text-white text-sm">Bantuan</h4>
                <Link href="/support/dukungan" className="mb-4 block text-xs text-ds-text-subtle hover:text-ds-text-brand">
                  Dukungan 24/7
                </Link>
                <Link href="/support/faq" className="mb-4 block text-xs text-ds-text-subtle hover:text-ds-text-brand">
                  FAQ
                </Link>
                <Link href="/support/hubungi" className="mb-4 block text-xs text-ds-text-subtle hover:text-ds-text-brand">
                  Hubungi kami
                </Link>
              </div>
              <div>
                <h4 className="title font-bold mb-5 text-white text-sm">Hukum</h4>
                <Link href="/legal/syarat" className="mb-4 block text-xs text-ds-text-subtle hover:text-ds-text-brand">
                  Syarat & Ketentuan
                </Link>
                <Link href="/legal/privasi" className="mb-4 block text-xs text-ds-text-subtle hover:text-ds-text-brand">
                  Kebijakan Privasi
                </Link>
                <Link href="/legal/perjanjian" className="mb-4 block text-xs text-ds-text-subtle hover:text-ds-text-brand">
                  Perjanjian Pengguna
                </Link>
              </div>
              <div>
                <h4 className="title font-bold mb-5 text-white text-sm">Lisensi</h4>
                <Link href="/legal/license" className="mb-4 block text-xs text-ds-text-subtle hover:text-ds-text-brand">
                  Lisensi
                </Link>
                <Link href="/legal/audit" className="mb-4 block text-xs text-ds-text-subtle hover:text-ds-text-brand">
                  Audit
                </Link>
                <Link href="/legal/payment" className="mb-4 block text-xs text-ds-text-subtle hover:text-ds-text-brand">
                  Cara Pembayaran
                </Link>
              </div>
            </div>
          </div>

          {/* === RIGHT SIDE (col-span-10 sm:col-span-5) === */}
          <div className="col-span-10 sm:col-span-5 pt-10 pb-3">
            {/* Provider logos / Payment methods */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {["BCA", "MANDIRI", "BNI", "BRI", "QRIS", "DANA"].map((bank) => (
                <div key={bank} className="bg-ds-surface-raised rounded px-3 py-2 text-center">
                  <span className="text-[10px] text-ds-text-subtle font-bold">{bank}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-end mb-6">
              <span className="w-8 h-8 rounded-full bg-ds-surface-raised flex items-center justify-center text-ds-text-subtle">IG</span>
              <span className="w-8 h-8 rounded-full bg-ds-surface-raised flex items-center justify-center text-ds-text-subtle">FB</span>
              <span className="w-8 h-8 rounded-full bg-ds-surface-raised flex items-center justify-center text-ds-text-subtle">TG</span>
              <span className="w-8 h-8 rounded-full bg-ds-surface-raised flex items-center justify-center text-ds-text-subtle">TW</span>
            </div>

            <p className="text-[11px] text-ds-text-subtle text-center">
              ©2026 . Seluruh hak cipta dilindungi | 18+ | v2.56
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}