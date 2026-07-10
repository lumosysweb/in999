import { Crown } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `VIP Club | ${SITE.fullName}`,
  description:
    "Join the IN999 VIP Club — tiered rewards, faster withdrawals, and exclusive perks for loyal players.",
  path: "/vip-club",
});

const TIERS = [
  { name: "Bronze", requirement: "Entry level", perk: "Welcome bonus + daily rewards" },
  { name: "Silver", requirement: "₹10,000+ played", perk: "Priority withdrawals" },
  { name: "Gold", requirement: "₹50,000+ played", perk: "Dedicated support line" },
  { name: "Platinum", requirement: "₹2,00,000+ played", perk: "Personal account manager + exclusive gifts" },
];

export default function VipClubPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="VIP Club"
          title="IN999 VIP Club"
          subtitle="The more you play, the more you unlock."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TIERS.map((tier) => (
                <Card key={tier.name} className="flex flex-col items-start gap-4 p-8">
                  <span className="gold-btn flex h-12 w-12 items-center justify-center rounded-2xl">
                    <Crown className="h-6 w-6" />
                  </span>
                  <h2 className="text-lg font-semibold text-mist">{tier.name}</h2>
                  <p className="text-xs uppercase tracking-[0.2em] text-mist-dim">{tier.requirement}</p>
                  <p className="text-sm leading-relaxed text-mist-dim">{tier.perk}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
