import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#12141A] text-[#B6C2CF] min-h-screen font-roboto pb-20 select-none">
      {/* 1. RED APK DOWNLOAD TOP BAR */}
      <div className="bg-[#7A0000] text-white px-3 py-2 flex items-center justify-between text-xs font-semibold shadow-md">
        <div className="flex items-center gap-2">
          <button className="text-white text-base font-bold">×</button>
          <div className="flex items-center gap-1.5">
            <span className="bg-[#00B0FF] text-black px-1.5 py-0.5 rounded text-[10px] font-black">APK</span>
            <div>
              <p className="font-bold text-[11px] leading-tight text-white">APLIKASI TIKET300</p>
              <p className="text-[10px] text-gray-200 font-normal leading-tight">Download Untuk Bebas Dari Nawala</p>
            </div>
          </div>
        </div>
        <a 
          href="https://storetn.in/TIKET300/tiket300.apk" 
          className="bg-[#FFD700] text-black font-extrabold px-3 py-1.5 rounded text-[11px] uppercase tracking-wider shadow"
        >
          DOWNLOAD
        </a>
      </div>

      {/* 2. MAIN HEADER */}
      <header className="bg-[#181B22] px-4 py-3 flex items-center justify-between border-b border-[#2A2E39]">
        <div className="flex items-center gap-3">
          <button className="text-white text-xl">☰</button>
          <div className="flex flex-col">
            <h1 className="text-xl font-black italic tracking-tighter text-[#FFD700] drop-shadow">
              TIKET<span className="text-[#FF8C00]">300</span>
            </h1>
            <span className="text-[8px] text-gray-400 uppercase tracking-widest font-bold -mt-1">
              TIKET MENUJU KEMENANGAN
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/login" className="px-3 py-1.5 bg-[#2A2E39] text-white text-xs font-bold rounded">
            Masuk
          </Link>
          <Link href="/register" className="px-3 py-1.5 bg-[#579DFF] text-[#12141A] text-xs font-bold rounded">
            Daftar
          </Link>
        </div>
      </header>

      {/* 3. BANNER SLIDER */}
      <div className="px-4 mt-3">
        <div className="relative rounded-xl overflow-hidden shadow-lg border border-[#2A2E39] aspect-[2.1/1] bg-[#1B2028] flex items-center justify-center">
          {/* Banner Graphic Placeholder with simulated Poseidon/Slot theme */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 opacity-90 flex flex-col justify-end p-4">
            <div className="bg-black/40 backdrop-blur-sm self-start px-2 py-0.5 rounded border border-blue-400/40 text-[10px] text-blue-300 font-bold mb-1">
              KHUSUS PERMAINAN SLOT
            </div>
            <h2 className="text-white font-extrabold text-base italic text-yellow-400 drop-shadow">
              Deposit Harian BONUS 1 JT
            </h2>
            <p className="text-[10px] text-gray-300">Dapatkan Bonus Melimpah Hanya di Tiket300</p>
          </div>
        </div>
      </div>

      {/* 4. HORIZONTAL CATEGORY PILLS */}
      <div className="mt-4 border-b border-[#2A2E39] bg-[#181B22] overflow-x-auto no-scrollbar">
        <div className="flex items-center px-4 gap-6 min-w-max">
          {[
            { name: "SLOTS", icon: "🍒", active: true },
            { name: "OLAHRAGA", icon: "⚽", active: false },
            { name: "KASINO", icon: "🃏", active: false },
            { name: "P2P", icon: "♠️", active: false },
            { name: "TOGEL", icon: "🎲", active: false },
          ].map((cat, i) => (
            <div 
              key={i} 
              className={`flex flex-col items-center py-2.5 cursor-pointer relative ${cat.active ? 'text-white' : 'text-gray-400'}`}
            >
              <span className="text-lg mb-0.5">{cat.icon}</span>
              <span className="text-[11px] font-bold tracking-wide">{cat.name}</span>
              {cat.active && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#579DFF] rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 5. SECONDARY FILTER BAR */}
      <div className="px-4 py-3 flex items-center justify-between bg-[#15181F]">
        <div className="flex items-center gap-2 overflow-x-auto">
          {["Semua", "Populer", "Baru", "Hot"].map((filter, i) => (
            <button 
              key={i} 
              className={`px-3 py-1 rounded-md text-xs font-semibold ${i === 0 ? 'bg-[#2A2E39] text-white border border-[#579DFF]/40' : 'bg-[#1D212A] text-gray-400'}`}
            >
              {filter === "Semua" ? "∷ Semua" : filter}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 text-gray-300 text-sm">
          <span>🔍</span>
          <span>⚙️</span>
        </div>
      </div>

      {/* 6. POPULER SECTION HEADER */}
      <div className="px-4 py-2 flex items-center justify-between">
        <span className="text-xs font-bold uppercase text-gray-300 tracking-wider">POPULER (6)</span>
        <span className="text-xs text-[#579DFF] font-semibold cursor-pointer">Lihat Semua →</span>
      </div>

      {/* 7. GAME CARDS GRID WITH RTP BADGE */}
      <div className="px-4 grid grid-cols-3 gap-2.5">
        {[
          { name: "Fortune Gems 500", rtp: "97.00%", mult: "500x", color: "from-amber-600 to-yellow-500" },
          { name: "Storm of Seth", rtp: "97.00%", mult: "1000x", color: "from-blue-700 to-indigo-600" },
          { name: "Gates of Olympus", rtp: "96.50%", mult: "5000x", color: "from-sky-600 to-blue-500" },
          { name: "Mahjong Ways 2", rtp: "97.69%", mult: "100x", color: "from-emerald-600 to-green-500" },
          { name: "Starlight Princess", rtp: "96.50%", mult: "5000x", color: "from-pink-600 to-purple-500" },
          { name: "Wild Bandito", rtp: "96.73%", mult: "2500x", color: "from-red-700 to-orange-600" },
        ].map((game, i) => (
          <div key={i} className="bg-[#1A1E26] rounded-lg overflow-hidden border border-[#2A2E39] flex flex-col group relative shadow">
            {/* RTP Badge */}
            <div className="absolute top-1 right-1 z-10 bg-black/70 backdrop-blur-sm px-1.5 py-0.5 rounded text-[9px] font-bold text-yellow-400 border border-yellow-500/30">
              RTP {game.rtp}
            </div>
            
            {/* Thumbnail Placeholder */}
            <div className={`aspect-[4/3] bg-gradient-to-br ${game.color} flex items-center justify-center p-2 relative`}>
              <span className="text-white font-black text-[11px] text-center drop-shadow-md">
                {game.name}
              </span>
              <span className="absolute bottom-1 left-1 bg-black/60 px-1 rounded text-[8px] font-bold text-white">
                {game.mult}
              </span>
            </div>

            {/* Game Info */}
            <div className="p-2 flex flex-col justify-between flex-grow">
              <span className="text-[11px] font-bold text-gray-200 truncate">{game.name}</span>
              <button className="mt-1 w-full bg-[#2A2E39] group-hover:bg-[#579DFF] group-hover:text-black transition text-white text-[10px] font-extrabold py-1 rounded">
                MAIN
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 8. FIXED BOTTOM NAVIGATION BAR */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#12141A] border-t border-[#2A2E39] py-2 px-6 flex items-center justify-between z-50 shadow-2xl">
        <div className="flex flex-col items-center text-gray-400 hover:text-[#579DFF] cursor-pointer">
          <span className="text-lg">🏠</span>
          <span className="text-[10px] font-semibold mt-0.5">Home</span>
        </div>
        <div className="flex flex-col items-center text-gray-400 hover:text-[#579DFF] cursor-pointer">
          <span className="text-lg">🎁</span>
          <span className="text-[10px] font-semibold mt-0.5">Promosi</span>
        </div>
        
        {/* Floating Center Account Button */}
        <div className="flex flex-col items-center relative -top-4">
          <div className="w-12 h-12 bg-[#579DFF] text-[#12141A] rounded-full flex items-center justify-center shadow-lg border-4 border-[#12141A] text-xl font-bold">
            👤
          </div>
          <span className="text-[10px] font-bold text-white mt-0.5">Akun</span>
        </div>

        <div className="flex flex-col items-center text-gray-400 hover:text-[#579DFF] cursor-pointer">
          <span className="text-lg">⚠️</span>
          <span className="text-[10px] font-semibold mt-0.5">Keluhan</span>
        </div>
        <div className="flex flex-col items-center text-gray-400 hover:text-[#579DFF] cursor-pointer">
          <span className="text-lg">🎧</span>
          <span className="text-[10px] font-semibold mt-0.5">Hub Kami</span>
        </div>
      </nav>
    </div>
  );
}