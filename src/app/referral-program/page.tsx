import { Share2, UserPlus, Wallet } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `Referral Program | ${SITE.fullName}`,
  description:
    "Invite friends to IN999 and earn a share of their play. Learn how the referral program works and how payouts are calculated.",
  path: "/referral-program",
});

const STEPS = [
  { title: "Share Your Link", description: "Get your unique referral link from your wallet dashboard.", icon: Share2 },
  { title: "Friends Join", description: "They register using your link and start playing.", icon: UserPlus },
  { title: "You Earn", description: "Receive a commission on their activity, paid directly to your wallet.", icon: Wallet },
];

export default function ReferralProgramPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Referral Program"
          title="Invite Friends, Earn Rewards"
          subtitle="Simple sharing, real payouts."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {STEPS.map((step) => {
                const Icon = step.icon;
                return (
                  <Card key={step.title} className="flex flex-col items-start gap-4 p-8">
                    <span className="gold-btn flex h-12 w-12 items-center justify-center rounded-2xl">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h2 className="text-lg font-semibold text-mist">{step.title}</h2>
                    <p className="text-sm leading-relaxed text-mist-dim">{step.description}</p>
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
