import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { PopularGames } from "@/components/sections/PopularGames";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { WelcomeBonus } from "@/components/sections/WelcomeBonus";
import { DownloadApp } from "@/components/sections/DownloadApp";
import { AboutIn999 } from "@/components/sections/AboutIn999";
import { LatestUpdates } from "@/components/sections/LatestUpdates";
import { FAQ } from "@/components/sections/FAQ";
import { SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: SITE.title,
  description: SITE.description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <PopularGames />
        <WhyChooseUs />
        <WelcomeBonus />
        <DownloadApp />
        <AboutIn999 />
        <LatestUpdates />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
