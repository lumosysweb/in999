import { Send, Mail, Clock } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `Contact & Support | ${SITE.fullName}`,
  description:
    "Get in touch with IN999 support — Telegram, email, and 24x7 live help for account, deposit, and withdrawal questions.",
  path: "/contact",
});

const CHANNELS = [
  { title: "Telegram Support", description: "Fastest response — chat with our team directly.", icon: Send, action: "Open Telegram", href: "https://t.me/" },
  { title: "Email", description: "For account and payment queries.", icon: Mail, action: "support@in999.in.net", href: "mailto:support@in999.in.net" },
  { title: "Availability", description: "Our support team is online 24x7, every day of the year.", icon: Clock, action: null, href: null },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Contact"
          title="We're Here to Help"
          subtitle="Reach IN999 support anytime, day or night."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {CHANNELS.map((channel) => {
                const Icon = channel.icon;
                return (
                  <Card key={channel.title} className="flex flex-col items-start gap-4 p-8">
                    <span className="gold-btn flex h-12 w-12 items-center justify-center rounded-2xl">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h2 className="text-lg font-semibold text-mist">{channel.title}</h2>
                    <p className="text-sm leading-relaxed text-mist-dim">{channel.description}</p>
                    {channel.href && (
                      <Button variant="outline" href={channel.href} className="mt-2 text-xs">
                        {channel.action}
                      </Button>
                    )}
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
