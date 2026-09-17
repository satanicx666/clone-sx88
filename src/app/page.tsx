import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categoryItems = [
  { name: "Kasino Langsung", href: "/casino", icon: "🃏" },
  { name: "Blackjack, Baccarat, Roulette and Poker", href: "/casino", icon: "♠" },
  { name: "Slots", href: "/slots", icon: "🎰" },
  { name: "Archer, 3 Kingdom, Dolphin & etc", href: "/slots", icon: "🎯" },
  { name: "Olahraga", href: "/sports", icon: "⚽" },
  { name: "Football, Basketball & etc", href: "/sports", icon: "🏀" },
  { name: "Promosi", href: "/promotions", icon: "🎁" },
];

const providers = [
  "Pragmatic Play", "PG Soft", "CQ9", "Microgaming", "Joker", "Spadegaming",
  "Jili", "Fastspin", "Habanero", "Playtech", "Hacksaw", "Nolimit City",
  "Pragmatic Play POP", "Wow Gaming", "Prime Sigma Gaming", "Askme Slot",
  "Habanero", "AdvantPlay", "HacksaW", "Live22", "Nolimit City", "Fachai",
  "Playstar", "VPlus", "Togel Slot", "Megawin", "5Gaming", "Dragoon Soft",
  "NextSpin", "Hotdog Gaming", "DST Play", "Relax Gaming", "Skywind", "JDB",
  "AI Gaming", "Redtiger", "NetEnt", "Playngo", "Booming", "Apollo777", "Ygg",
  "KA Gaming", "Naga Games", "One Game", "BGaming", "GMW", "UU Slot",
  "Pegasus", "BTG", "Liteplay", "SBO", "568 Win",
];

export default function Home() {
  return (
    <div className="bg-ds-surface text-ds-text font-roboto-condensed min-h-screen">
      <Header />

      <main className="max-w-screen-xl mx-auto px-4 py-6">
        {/* ============ ORIGINAL: banner-slider / Splide ============ */}
        <section className="max-w-screen--xs-full mt-5 relative">
          <div
            aria-label="SLIDER"
            className="banner-slider splide relative rounded-xl overflow-hidden is-overflow splide--slide splide--ltr splide--draggable is-active is-initialized"
            id="splide01"
          >
            <div
              className="splide__track w-full aspect-[1.87826/1] sm:aspect-[3.13043/1] splide__track--slide splide__track--ltr splide__track--draggable"
              id="splide01-track"
            >
              <div
                className="splide__slide is-active splide__slide--active"
                data-splide-item=""
              >
                <img
                  src="https://files.sitestatic.net/ImageFile/2025022717430800000073ec1175dc__CGAMING_NS3__1859x612.png"
                  alt="Banner Utama"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="splide__pagination" />
          </div>
        </section>

        {/* ============ ORIGINAL: categoryBoxWrap (grid 4 columns) ============ */}
        <section className="max-w-screen mt-6 lg:mt-8 order-3 animate fade-in-left">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
            {categoryItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="categoryBoxWrap rounded-md hover:scale-110 hover:z-10 transition-all duration-300 ease-out"
              >
                <div className="relative overflow-hidden root --brand-subtlest w-full rounded px-3 py-2 animatedBg">
                  <div className="left-0 relative">
                    <div className="flex flex-col md:gap-2 js-aos md:gap-0 lg:gap-2">
                      <span className="text-2xl mb-1">{item.icon}</span>
                      <span className="text-xs font-bold">{item.name}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ============ ORIGINAL: game providers grid ============ */}
        <section className="max-w-screen lg:mt-8 order-1">
          <div className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-12 lg:col-span-3">
              <div className="hidden lg:block">
                <div className="relative overflow-hidden root --brand-subtlest w-full rounded py-2 px-3">
                  <div className="left-0 relative">
                    <div className="flex flex-col md:gap-2 js-aos md:gap-0 lg:gap-0">
                      <span className="text-2xl mb-1">🎰</span>
                      <span className="text-xs font-bold">Provider Slots</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-9">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                {providers.map((provider, index) => (
                  <div
                    key={provider}
                    className="rounded-md bg-ds-surface-raised border border-ds-border p-3 hover:scale-105 transition-all duration-300 ease-out group"
                  >
                    <div className="rounded overflow-hidden aspect-[4/3] bg-ds-surface-sunken flex items-center justify-center p-4 mb-2">
                      <span className="text-[10px] text-ds-text-subtle font-bold uppercase text-center">
                        {provider}
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-ds-text text-center group-hover:text-ds-text-brand transition">
                      {provider}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ ORIGINAL: apkDownloadSection ============ */}
        <section className="my-10 max-w-screen" id="apkDownloadSection">
          <div className="root relative">
            <picture>
              <source media="(min-width: 640px)" srcSet="https://files.sitestatic.net/assets/imgs/banners/featuring/apk-download-bg-1255x450.webp" width="1255" height="450" />
              <img
                src="https://files.sitestatic.net/assets/imgs/banners/featuring/apk-download-mobile-bg-350x728.webp"
                alt="Download Aplikasi TIKET300"
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}