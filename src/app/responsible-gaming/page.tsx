import { ShieldCheck, Clock, Wallet, PhoneCall } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IN999 Responsible Gaming | Play Safely, 18+ Only",
  description:
    "IN999 responsible gaming guidelines — set limits, recognise warning signs, and find support resources for safer play. IN999 is intended for adults 18+ only.",
  path: "/responsible-gaming",
});

const PRINCIPLES = [
  {
    title: "18+ Only",
    description: "IN999 is intended strictly for adults aged 18 and above. Do not play if you are underage.",
    icon: ShieldCheck,
  },
  {
    title: "Set a Time Limit",
    description: "Decide how long you'll play before you start, and stop when that time is up.",
    icon: Clock,
  },
  {
    title: "Set a Spending Limit",
    description: "Only play with money you can afford to lose, and never chase losses with bigger bets.",
    icon: Wallet,
  },
  {
    title: "Take Breaks",
    description: "Step away regularly. Gaming should stay fun — if it stops feeling that way, pause and reassess.",
    icon: PhoneCall,
  },
];

export default function ResponsibleGamingPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Play Safely"
          title="IN999 Responsible Gaming"
          subtitle="Simple guidelines to help you keep gaming fun, controlled, and within your means."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-[1000px]">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {PRINCIPLES.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="flex items-start gap-4 p-8">
                    <span className="gold-btn flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h2 className="text-lg font-semibold text-mist">{item.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-mist-dim">{item.description}</p>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="mt-14">
              <h2 className="text-2xl font-bold text-mist">Recognising the Warning Signs</h2>
              <p className="mt-4 text-sm leading-relaxed text-mist-dim">
                Playing responsibly means noticing early warning signs: spending more than planned, borrowing money
                to play, hiding your play from family, or feeling anxious when you can&apos;t play. If any of this
                sounds familiar, take a break from IN999 and consider speaking with someone you trust or a
                professional support service in your area.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-mist">Need Help?</h2>
              <p className="mt-4 text-sm leading-relaxed text-mist-dim">
                If you feel your gaming is becoming a problem, reach out to our{" "}
                <a href="/contact" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  support team
                </a>{" "}
                to discuss account limits or a break from play, or contact a local, independent problem-gambling
                helpline in your region for confidential support.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
