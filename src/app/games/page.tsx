import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { POPULAR_GAMES } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IN999 Game | WinGo, K3, 5D, TRX, Sports & Casino",
  description:
    "Explore every IN999 Game — WinGo, K3, 5D, TRX, Sports betting and Casino. Fast rounds, fair outcomes, instant payouts.",
  path: "/games",
});

export default function GamesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Games"
          title="All Games on IN999"
          subtitle="Six game categories built for speed, fairness, and simplicity."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-[1400px]">
            <p className="mx-auto mb-14 max-w-2xl text-center text-sm leading-relaxed text-mist-dim sm:text-base">
              Every IN999 Game is designed for quick rounds and clear results. Whether you prefer the colour
              prediction of WinGo, the dice strategy of K3, multi-digit 5D predictions, blockchain-powered TRX
              rounds, live Sports markets, or classic Casino tables, each IN999 Game category is available instantly
              after you complete the{" "}
              <a href="/login" className="text-gold underline underline-offset-2 hover:text-gold/80">
                IN999 Login
              </a>{" "}
              process.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {POPULAR_GAMES.map((game) => {
                const Icon = game.icon;
                return (
                  <Card key={game.name} className="flex flex-col items-start gap-4 p-8">
                    <span className="gold-btn flex h-12 w-12 items-center justify-center rounded-2xl">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h2 className="text-xl font-semibold text-mist">{game.name}</h2>
                    <p className="text-sm leading-relaxed text-mist-dim">{game.description}</p>
                  </Card>
                );
              })}
            </div>

            <div className="mt-14 flex justify-center">
              <Button variant="gold" href="/download-app">
                Download &amp; Play
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
