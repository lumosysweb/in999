import { Gift, RefreshCcw, Users, CalendarCheck } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `Promotions | ${SITE.fullName}`,
  description:
    "See all active IN999 promotions — welcome bonus, daily rewards, reload bonus, and referral payouts.",
  path: "/promotions",
});

const PROMOTIONS = [
  { title: "Welcome Bonus", description: "New players get an instant bonus on their first deposit.", icon: Gift },
  { title: "Daily Login Rewards", description: "Log in every day to unlock small bonus credits.", icon: CalendarCheck },
  { title: "Reload Bonus", description: "Extra credit added every time you top up your wallet.", icon: RefreshCcw },
  { title: "Referral Payouts", description: "Earn a share of your friends' play when they join.", icon: Users },
];

export default function PromotionsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Promotions"
          title="Current Promotions"
          subtitle="Bonuses and rewards, running all year round."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {PROMOTIONS.map((promo) => {
                const Icon = promo.icon;
                return (
                  <Card key={promo.title} className="flex items-start gap-4 p-8">
                    <span className="gold-btn flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h2 className="text-lg font-semibold text-mist">{promo.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-mist-dim">{promo.description}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
