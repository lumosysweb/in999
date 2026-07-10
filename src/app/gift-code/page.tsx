import { Ticket, Copy, Gift } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `Gift Code | ${SITE.fullName}`,
  description:
    "Redeem IN999 gift codes for bonus credits. Learn how gift codes work and where to find the latest active codes.",
  path: "/gift-code",
});

const STEPS = [
  "Open your IN999 wallet and tap Gift Code.",
  "Enter the code exactly as shown, including capital letters.",
  "Tap Redeem — your bonus credit is added instantly.",
];

export default function GiftCodePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Gift Code"
          title="Redeem a Gift Code"
          subtitle="Instant bonus credit, no extra deposit needed."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid items-start gap-14 lg:grid-cols-2">
              <Card className="flex flex-col items-center gap-6 p-8 text-center">
                <span className="gold-btn flex h-16 w-16 items-center justify-center rounded-2xl">
                  <Gift className="h-8 w-8" />
                </span>
                <h2 className="text-xl font-semibold text-mist">Where to Find Codes</h2>
                <p className="text-sm leading-relaxed text-mist-dim">
                  New gift codes are shared regularly on the IN999 Telegram
                  channel and through in-app notifications. Follow along so
                  you never miss a drop.
                </p>
                <Button variant="outline" href="https://t.me/" icon={<Copy className="h-4 w-4" />}>
                  Join Telegram
                </Button>
              </Card>

              <div>
                <h2 className="text-2xl font-bold text-mist">How to Redeem</h2>
                <ol className="mt-6 flex flex-col gap-4">
                  {STEPS.map((step, i) => (
                    <li key={step} className="flex items-start gap-4">
                      <span className="gold-btn flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                        {i + 1}
                      </span>
                      <p className="pt-1 text-sm leading-relaxed text-mist-dim">{step}</p>
                    </li>
                  ))}
                </ol>

                <Card className="mt-8 flex items-center gap-4 p-6">
                  <span className="gold-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                    <Ticket className="h-5 w-5" />
                  </span>
                  <p className="text-sm text-mist-dim">
                    Codes expire after 24-48 hours and are limited per account
                    — redeem as soon as you receive one.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
