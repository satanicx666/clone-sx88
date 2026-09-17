"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#14171d] text-white">
      {/* Top Utility Bar */}
      <div className="bg-[#14171d] border-b border-[#22262e] py-1 text-[12px] text-[#9FADBC]">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
          <div>Selamat Datang di UGN3F</div>
          <div className="flex items-center gap-4">
            <span>Pengaduan Member</span>
            <div className="flex gap-2">
              <span>🔔</span>
              <span>🎧</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="bg-[#22262e] py-3 shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold italic tracking-tighter text-yellow-500">TIKET</span>
            <span className="text-3xl font-extrabold text-yellow-600">300</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-[13px] uppercase font-bold text-[#B6C2CF]">
            <Link href="/slots" className="hover:text-blue-400">Slots</Link>
            <Link href="/sports" className="hover:text-blue-400">Olahraga</Link>
            <Link href="/casino" className="hover:text-blue-400">Kasino</Link>
            <Link href="/poker" className="hover:text-blue-400">P2P</Link>
            <Link href="/togel" className="hover:text-blue-400">Togel</Link>
            <Link href="/cockfight" className="hover:text-blue-400">Sabung Ayam</Link>
            <Link href="/fish" className="hover:text-blue-400">Tembak Ikan</Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/login" className="px-5 py-2 bg-[#3a3f4a] rounded text-[13px] font-bold">Masuk</Link>
            <Link href="/register" className="px-5 py-2 bg-[#5ba8f7] rounded text-[13px] font-bold">Daftar</Link>
          </div>
        </div>
      </div>
    </header>
  );
}