import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#061348] text-[#b6c2cf] py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Dewi11</h3>
            <p className="text-sm mb-4">
              Dewi11 selalu menjadi incaran untuk semua member karena selalu membagikan uang setiap hari nya.
            </p>
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-[#579dff] rounded-full"></div>
              <div className="w-6 h-6 bg-[#fd9891] rounded-full"></div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: support@dewi11.id</li>
              <li>WhatsApp: +62 812-3456-7890</li>
              <li>Bantuan 24/7</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Game</h4>
            <ul className="space-y-2 text-sm">
              <li>Slot Mesin</li>
              <li>Live Casino</li>
              <li>Tembak Ikan</li>
              <li>Sportsbook</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Informasi</h4>
            <ul className="space-y-2 text-sm">
              <li>Syarat & Ketentuan</li>
              <li>Kebijakan Privasi</li>
              <li>FAQ</li>
              <li>Bangun Depo</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#a1bdd914] pt-6 text-center text-sm">
          <p className="mb-2">&copy; 2025 Dewi11. All rights reserved.</p>
          <p>Link Alternatif | RTP Live | Slot Gacor | Promo Terbaru</p>
        </div>
      </div>
    </footer>
  );
}