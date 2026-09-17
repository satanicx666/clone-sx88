"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showApk, setShowApk] = useState(true);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header style={{ zIndex: 49 }} className="root relative">
      {/* Mobile APK Download Bar */}
      {showApk && (
        <div className="apkDownload3 px-2 py-1 sm:hidden bg-[#14171d] border-b border-[#22262e] text-xs flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <button onClick={() => setShowApk(false)} type="button" aria-label="Tutup" className="text-xl">
              ✕
            </button>
            <a href="https://storetn.in/TIKET300/tiket300.apk" className="inline-flex items-center gap-2">
              <span className="text-green-500 font-bold text-sm">🤖 App TIKET300</span>
              <span className="bg-green-600 text-white px-2 py-0.5 rounded text-[10px]">Download APK</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Header Container */}
      <div className="wrapper headerWrapper w-full fixed lg:relative z-10 border-b border-[#a6c5e229] bg-[#1d2125]">
        {/* Top Utility */}
        <div className="max-w-screen-xl mx-auto px-4 py-1 flex justify-between items-center text-[12px] text-[#9fadbc]">
          <div>Selamat Datang di UGN3F</div>
          <div className="flex items-center gap-4">
            <Link href="/support" className="hover:text-white">Pengaduan Member</Link>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold italic text-yellow-500">TIKET</span>
            <span className="text-3xl font-extrabold text-yellow-600">300</span>
          </Link>

          {/* Nav with Exact Query Parameters */}
          <nav className="hidden lg:flex items-center gap-1 text-[13px] font-medium text-[#b6c2cf]">
            {/* Slots Dropdown */}
            <div className="relative group" onMouseEnter={() => setActiveMenu('slots')} onMouseLeave={() => setActiveMenu(null)}>
              <button className="p-3 flex items-center gap-1 hover:text-[#579dff]">
                Slots ▾
              </button>
              {activeMenu === 'slots' && (
                <div className="absolute top-full left-0 bg-[#22272b] border border-[#a6c5e229] shadow-lg rounded w-48 py-2 z-50 text-xs">
                  <Link href="/slots" className="px-4 py-2 block hover:bg-[#282e33]">Oleh Penyedia</Link>
                  <Link href="/all-games?type=all&category=slots" className="px-4 py-2 block hover:bg-[#282e33]">Semua</Link>
                  <Link href="/all-games?type=Top&category=slots" className="px-4 py-2 block hover:bg-[#282e33]">Populer</Link>
                  <Link href="/all-games?type=New&category=slots" className="px-4 py-2 block hover:bg-[#282e33]">Baru</Link>
                  <Link href="/all-games?type=Hold And Win&category=slots" className="px-4 py-2 block hover:bg-[#282e33]">Hold And Win</Link>
                  <Link href="/all-games?type=Buy Bonus Feature&category=slots" className="px-4 py-2 block hover:bg-[#282e33]">Fitur Beli Bonus</Link>
                  <Link href="/all-games?type=JP Progressive&category=slots" className="px-4 py-2 block hover:bg-[#282e33]">JP Progressive</Link>
                </div>
              )}
            </div>

            <Link href="/sports" className="p-3 hover:text-[#579dff]">Olahraga</Link>
            <Link href="/casino" className="p-3 hover:text-[#579dff]">Kasino</Link>
            <Link href="/poker" className="p-3 hover:text-[#579dff]">P2P</Link>
            <Link href="/togel" className="p-3 hover:text-[#579dff]">Togel</Link>
            <Link href="/cockfight" className="p-3 hover:text-[#579dff]">Sabung Ayam</Link>
            <Link href="/fish" className="p-3 hover:text-[#579dff]">Tembak Ikan</Link>
          </nav>

          {/* Auth Actions */}
          <div className="flex items-center gap-2">
            <Link href="/login" className="px-4 py-2 rounded bg-transparent border border-[#738496] text-[#b6c2cf] hover:bg-[#22272b] text-xs font-medium">
              Masuk
            </Link>
            <Link href="/register" className="px-4 py-2 rounded bg-[#579dff] text-[#1d2125] font-bold text-xs hover:bg-[#85b8ff]">
              Bergabung
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}