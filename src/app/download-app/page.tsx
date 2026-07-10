import Image from "next/image";
import { Smartphone, Zap, ShieldCheck, WifiOff } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `Download App | ${SITE.fullName}`,
  description:
    "Download the official IN999 app for Android. Fast installs, instant access to all games, and a lighter, faster experience than the browser.",
  path: "/download-app",
});

const REASONS = [
  { title: "Faster Access", description: "Skip the browser — launch straight into your games.", icon: Zap },
  { title: "Secure by Design", description: "Encrypted sessions keep your account protected.", icon: ShieldCheck },
  { title: "Works Anywhere", description: "Lightweight app runs smoothly even on slow networks.", icon: WifiOff },
];

export default function DownloadAppPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Download"
          title="Get the IN999 App"
          subtitle="One APK, every game — install in under a minute."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <Card className="mx-auto flex w-full max-w-sm flex-col items-center gap-4 p-8 text-center">
                <div className="relative h-36 w-36 overflow-hidden rounded-xl bg-white p-2">
                  <Image
                    src="/images/apk-qr.webp"
                    alt="Scan to download the IN999 Android app"
                    fill
                    loading="lazy"
                    sizes="144px"
                    className="object-contain p-2"
                  />
                </div>
                <p className="text-sm font-semibold text-mist">Scan with your phone camera</p>
                <Button variant="gold" href="/apk-download" icon={<Smartphone className="h-4 w-4" />}>
                  Download APK
                </Button>
              </Card>

              <div className="flex flex-col gap-6">
                {REASONS.map((reason) => {
                  const Icon = reason.icon;
                  return (
                    <div key={reason.title} className="flex items-start gap-4">
                      <span className="gold-btn flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h2 className="text-lg font-semibold text-mist">{reason.title}</h2>
                        <p className="text-sm leading-relaxed text-mist-dim">{reason.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
