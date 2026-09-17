import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#14171d] pt-10 pb-6 text-[#9FADBC] text-[13px]">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Link Alternatives Section */}
        <div className="bg-[#1d2125] p-4 rounded-lg border border-[#22262e] mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <Link key={i} href="#" className="bg-[#22262e] py-2 px-3 rounded text-center hover:text-white transition">
                LINK ALTERNATIVE {i}
              </Link>
            ))}
            <Link href="#" className="bg-yellow-600/20 text-yellow-500 py-2 px-3 rounded text-center border border-yellow-600/50">
              Link Alternative
            </Link>
          </div>
        </div>

        {/* Info Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Informasi</h4>
            <ul className="space-y-2 text-[#8C9BAB]">
              <li><Link href="#">Tentang kami</Link></li>
              <li><Link href="#">Program Afiliasi</Link></li>
              <li><Link href="#">Responsible Gaming</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Bantuan</h4>
            <ul className="space-y-2 text-[#8C9BAB]">
              <li><Link href="#">Dukungan 24/7</Link></li>
              <li><Link href="#">FAQ</Link></li>
              <li><Link href="#">Hubungi kami</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Hukum</h4>
            <ul className="space-y-2 text-[#8C9BAB]">
              <li><Link href="#">Syarat & Ketentuan</Link></li>
              <li><Link href="#">Kebijakan Privasi</Link></li>
              <li><Link href="#">Perjanjian Pengguna</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center">
             <div className="text-center">
               <span className="text-white font-bold text-lg italic">TIKET</span>
               <span className="text-yellow-600 font-extrabold text-2xl">300</span>
             </div>
             <p className="mt-2 text-center text-[11px]">©2026 . Seluruh hak cipta dilindungi | 18+ | v2.56</p>
          </div>
        </div>

        <div className="border-t border-[#22262e] pt-6 flex flex-wrap justify-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all">
          {/* Provider Micro-Icons Placeholder */}
          <span className="text-[10px]">PAYMENT METHODS: BCA, MANDIRI, BNI, BRI, QRIS, DANA, OVO</span>
        </div>
      </div>
    </footer>
  );
}