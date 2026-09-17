import Head from "next/head";
import Header from "../src/components/Header";
import HeroSection from "../src/components/HeroSection";
import Footer from "../src/components/Footer";

export const metadata = {
  title: "Dewi11 | Slot terbaik",
  description: "Dewi11 selalu menjadi incaran untuk semua member karena selalu membagikan uang setiap hari nya.",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Dewi11 | Slot terbaik</title>
        <meta name="description" content="Dewi11 selalu menjadi incaran untuk semua member karena selalu membagikan uang setiap hari nya." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f1d86" />
        <meta property="og:title" content="Dewi11 | Slot terbaik" />
        <meta property="og:description" content="Dewi11 selalu menjadi incaran untuk semua member karena selalu membagikan uang setiap hari nya." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sx88.cfd" />
        <meta property="og:site_name" content="Dewi11" />
        <link rel="icon" href="https://sx88.cfd/favicon.ico" />
      </Head>
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}
