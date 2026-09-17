"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showApk, setShowApk] = useState(true);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (id: string) =>
    setOpenMenu((prev) => (prev === id ? null : id));

  return (
    <>
      {/* ============================ */}
      {/* ORIGINAL: <header> + .wrapper */}
      {/* ============================ */}
      <header className="relative">
        <div className="wrapper headerWrapper w-full fixed lg:relative z-10 border-b border-ds-border pb-1 bg-ds-surface">
          {/* ---------- MOBILE APK BAR ---------- */}
          {showApk && (
            <div
              data-apk-download=""
              className="apkDownload3 px-2 py-1 sm:hidden animate fade-in-bottom flex items-center gap-2 bg-ds-surface-sunken"
            >
              <button
                data-apk-download-close=""
                type="button"
                aria-label="Tutup"
                onClick={() => setShowApk(false)}
                className="text-xl text-ds-text-subtle"
              >
                ✕
              </button>
              <a
                href="https://storetn.in/TIKET300/tiket300.apk"
                className="inline-flex items-center rounded gap-2 flex-nowrap text-ds-text-brand"
              >
                <svg
                  style={{ color: "#3CE138" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.27em"
                  height="1.5em"
                  viewBox="0 0 38 45"
                  fill="none"
                >
                  <path d="M18.9902 15.0406C22.9223 15.0406 26.8554 15.0474 30.7876 15.0319..." />
                </svg>
                <span className="text-3xl shrink-0 font-bold">App TIKET300</span>
              </a>
            </div>
          )}

          {/* ---------- TOP UTILITY ---------- */}
          <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center text-[12px] text-ds-text-subtle py-1">
            <div>Selamat Datang di UGN3F</div>
            <div className="flex items-center gap-4">
              <Link href="/support">Pengaduan Member</Link>
              <span>🔔</span>
              <span>🎧</span>
            </div>
          </div>

          {/* ---------- MAIN NAV ---------- */}
          <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
            <a href="/" className="logo flex items-center animate fade-in-left">
              <img
                src="https://files.sitestatic.net/ImageFile/2025022717430800000073ec1175dc__CGAMING_NS3__1859x612.png"
                alt="Logo"
                className="w-auto h-8"
                loading="lazy"
                decoding="async"
              />
            </a>

            <nav className="hidden lg:flex items-center gap-1 text-[13px] font-medium text-ds-text">
              {/* SLOTSWITH SUBMENU */}
              <div className="relative">
                <button
                  onClick={() => toggleMenu("slots")}
                  className="p-4 w-full font-medium flex items-center gap-2 hover:text-ds-text-brand"
                >
                  Slots
                </button>
                {openMenu === "slots" && (
                  <div className="absolute top-full left-0 bg-ds-surface-raised border border-ds-border rounded shadow-lg min-w-[180px] py-1 z-50">
                    <a href="/slots" className="px-7 py-3 block hover:bg-ds-surface-hovered">
                      Oleh Penyedia
                    </a>
                    <a href="/all-games?type=all&category=slots" className="px-7 py-3 block hover:bg-ds-surface-hovered">
                      Semua
                    </a>
                    <a href="/all-games?type=Top&category=slots" className="px-7 py-3 block hover:bg-ds-surface-hovered">
                      Populer
                    </a>
                    <a href="/all-games?type=New&category=slots" className="px-7 py-3 block hover:bg-ds-surface-hovered">
                      Baru
                    </a>
                    <a href="/all-games?type=Hold And Win&category=slots" className="px-7 py-3 block hover:bg-ds-surface-hovered">
                      Hold And Win
                    </a>
                    <a href="/all-games?type=Buy Bonus Feature&category=slots" className="px-7 py-3 block hover:bg-ds-surface-hovered">
                      Fitur Beli Bonus
                    </a>
                    <a href="/all-games?type=JP Progressive&category=slots" className="px-7 py-3 block hover:bg-ds-surface-hovered">
                      JP Progressive
                    </a>
                  </div>
                )}
              </div>

              <button onClick={() => toggleMenu("sports")} className="p-4 w-full font-medium flex items-center gap-2 hover:text-ds-text-brand">
                Olahraga
              </button>
              <Link href="/casino" className="p-4 flex items-center gap-2 hover:text-ds-text-brand">
                Kasino
              </Link>
              <Link href="/poker" className="p-4 flex items-center gap-2 hover:text-ds-text-brand">
                P2P
              </Link>
              <Link href="/togel" className="p-4 flex items-center gap-2 hover:text-ds-text-brand">
                Togel
              </Link>
              <Link href="/cockfight" className="p-4 flex items-center gap-2 hover:text-ds-text-brand">
                Sabung Ayam
              </Link>
              <Link href="/fish" className="p-4 flex items-center gap-2 hover:text-ds-text-brand">
                Tembak Ikan
              </Link>
            </nav>

            {/* ---------- AUTH ---------- */}
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="px-5 py-3 bg-transparent border border-ds-border-bold text-ds-text font-medium rounded hover:bg-ds-surface-hovered"
              >
                Masuk
              </Link>
              <Link
                href="/register"
                className="px-7 py-3 bg-ds-background-brand-bold text-ds-text-inverse font-bold rounded hover:bg-ds-background-brand-bold-hovered"
              >
                Bergabung
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- MOBILE NAV (ORIGINAL: .headerMainNav) ---------- */}
      <div className="lg:hidden relative max-w-screen-xl mx-auto px-4 mt-5">
        <div className="headerMainNav border-y-gradient flex lg:hidden animate fade-in-bottom bg-ds-surface-raised rounded-lg">
          <div className="grid grid-cols-6 gap-4">
            {[
              { label: "Slots", href: "/slots" },
              { label: "Sports", href: "/sports" },
              { label: "Casino", href: "/casino" },
              { label: "P2P", href: "/poker" },
              { label: "Togel", href: "/togel" },
              { label: "Sabung", href: "/cockfight" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="col-span-1 flex flex-col items-center justify-center p-2 hover:text-ds-text-brand transition">
                <span className="text-lg">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}