import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#1a1d24] min-h-screen font-sans text-white">
      <Header />
      
      <main className="max-w-screen-xl mx-auto px-4 py-6">
        {/* Hero Slider Area */}
        <section className="mb-6 relative aspect-[1859/612] w-full bg-[#22262e] rounded-lg overflow-hidden border border-[#303641]">
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            {/* Banner image would go here */}
            <div className="text-center">
              <span className="block text-4xl font-bold text-blue-500/50">HERO BANNER AREA</span>
              <span className="text-sm opacity-50">1859 x 612 pixels</span>
            </div>
          </div>
          {/* Slider Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {[1, 2, 3, 4].map(i => <div key={i} className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-blue-500' : 'bg-gray-600'}`}></div>)}
          </div>
        </section>

        {/* Game Category Navigation (Mobile/Visual) */}
        <div className="grid grid-cols-4 md:grid-cols-9 gap-2 mb-8">
          {[
            { name: "Slots", icon: "🎰" },
            { name: "Sports", icon: "⚽" },
            { name: "Casino", icon: "🃏" },
            { name: "Poker", icon: "♠️" },
            { name: "Togel", icon: "🎲" },
            { name: "Cockfight", icon: "🐓" },
            { name: "Fish", icon: "🎣" },
            { name: "E-Games", icon: "🎮" },
            { name: "Live", icon: "📺" }
          ].map((cat, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-3 bg-[#22262e] rounded-lg border border-[#303641] hover:border-blue-500 transition cursor-pointer group">
              <span className="text-2xl mb-1 group-hover:scale-110 transition">{cat.icon}</span>
              <span className="text-[10px] font-bold uppercase text-[#9FADBC]">{cat.name}</span>
            </div>
          ))}
        </div>

        {/* Top Winners / Jackpots */}
        <div className="bg-[#22262e] rounded-lg border border-[#303641] p-4 mb-8 flex items-center gap-6 overflow-hidden">
          <div className="flex-shrink-0 flex items-center gap-2 border-r border-[#303641] pr-6">
            <span className="text-yellow-500 text-xl">🏆</span>
            <span className="font-bold text-[12px] uppercase">Top Winners</span>
          </div>
          <div className="flex-grow flex items-center gap-10 animate-marquee whitespace-nowrap">
             <div className="flex items-center gap-2">
                <span className="text-blue-400">user_***</span>
                <span className="text-gray-500">menang</span>
                <span className="text-green-500 font-bold">IDR 5,420,000</span>
             </div>
             <div className="flex items-center gap-2">
                <span className="text-blue-400">king_***</span>
                <span className="text-gray-500">menang</span>
                <span className="text-green-500 font-bold">IDR 12,800,000</span>
             </div>
             <div className="flex items-center gap-2">
                <span className="text-blue-400">win***</span>
                <span className="text-gray-500">menang</span>
                <span className="text-green-500 font-bold">IDR 1,200,500</span>
             </div>
          </div>
        </div>

        {/* Game Providers Section */}
        <div className="mb-8">
           <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold uppercase tracking-wide flex items-center gap-2">
                 <span className="w-1 h-6 bg-blue-500 rounded"></span>
                 Provider Slots Terpopuler
              </h2>
              <span className="text-xs text-blue-400 cursor-pointer">Lihat Semua</span>
           </div>
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {[
                "Pragmatic Play", "PG Soft", "CQ9", "Microgaming", "Joker", "Spadegaming",
                "Jili", "Fastspin", "Habanero", "Playtech", "Hacksaw", "Nolimit City"
              ].map((provider, i) => (
                <div key={i} className="aspect-[4/3] bg-[#22262e] rounded-lg border border-[#303641] hover:border-blue-500 transition flex flex-col items-center justify-center p-4 relative group overflow-hidden">
                   <div className="w-full h-full bg-[#1a1d24] rounded flex items-center justify-center mb-2">
                      <span className="text-[10px] text-gray-600 font-bold uppercase">{provider} LOGO</span>
                   </div>
                   <span className="text-[11px] font-bold text-[#B6C2CF] text-center">{provider}</span>
                   <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition"></div>
                </div>
              ))}
           </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}