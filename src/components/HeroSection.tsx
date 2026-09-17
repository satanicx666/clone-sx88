import React from 'react';

export default function HeroSection() {
  return (
    <section className="hero-section w-full bg-black">
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%25\' height=\'100%25\'><rect fill=\'%230f1d86\' width=\'100%25\' height=\'100%25\'/><text x=\'50%25\' y=\'50%25\' font-family=\'Arial\' font-size=\'20\' fill=\'%23d4b918\' text-anchor=\'middle\' dominant-baseline=\'middle\'>Dewi11 - Slot Terbaik</text></svg>")'
          }}
        >
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Dewi11
            </h1>
            <p className="text-lg md:text-xl text-[#d4b918] mb-8">
              Slot Terbaik dengan RTP Tertinggi
            </p>
            <div className="flex gap-4">
              <button className="bg-[#d4b918] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#bf9c17] transition-colors">
                Main Sekarang
              </button>
              <button className="bg-transparent border-2 border-[#d4b918] text-[#d4b918] px-8 py-3 rounded-lg font-bold hover:bg-[#d4b918] hover:text-white transition-colors">
                Demo Slot
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}