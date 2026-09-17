import React from 'react';

export default function Header() {
  return (
    <header className="top_navbar" style={{ position: 'relative', zIndex: 1050 }}>
      <div className="header-wrapper" style={{ position: 'relative', zIndex: 1050 }}>
        <div className="main-header container" style={{ minHeight: '91.59375px', marginBottom: 0, position: 'relative' }}>
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center gap-2">
              <img 
                src="/assets/file.svg" 
                alt="Dewi11 Logo" 
                className="w-8 h-8"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div>
                <h1 className="text-white text-xl font-bold m-0">Dewi11</h1>
                <p className="text-gray-400 text-xs m-0">Slot terbaik</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-4">
              <a href="#" className="text-white text-sm hover:text-[#d4b918] transition-colors">Live RTP</a>
              <a href="#" className="text-white text-sm hover:text-[#d4b918] transition-colors">Slot Gacor</a>
              <a href="#" className="text-white text-sm hover:text-[#d4b918] transition-colors">Promosi</a>
              <a href="#" className="text-white text-sm hover:text-[#d4b918] transition-colors">Alternatif Link</a>
            </nav>
            
            <div className="flex items-center gap-2">
              <button className="bg-transparent border border-[#d4b918] text-[#d4b918] px-4 py-1 rounded text-sm hover:bg-[#d4b918] hover:text-white transition-colors">
                Masuk
              </button>
              <button className="bg-[#d4b918] text-white px-4 py-1 rounded text-sm hover:bg-[#bf9c17] transition-colors">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
