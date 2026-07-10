import Image from "next/image";
import { Download } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `APK Download | ${SITE.fullName}`,
  description:
    "Direct APK download for IN999 Android app. Latest version, changelog, install steps, and device requirements.",
  path: "/apk-download",
});

const STEPS = [
  "Tap Download APK below to save the file to your device.",
  "Open Settings > Security and enable Install unknown apps for your browser.",
  "Open the downloaded file and tap Install.",
  "Launch IN999 and log in or register to start playing.",
];

export default function ApkDownloadPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="APK Download"
          title="IN999 Android APK"
          subtitle="Direct download, no third-party store required."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid items-start gap-14 lg:grid-cols-2">
              <Card className="flex flex-col gap-4 p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-mist-dim">Version</p>
                    <p className="text-lg font-semibold text-mist">v3.2.1</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-mist-dim">Size</p>
                    <p className="text-lg font-semibold text-mist">28 MB</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-mist-dim">Updated</p>
                    <p className="text-lg font-semibold text-mist">Jul 2026</p>
                  </div>
                </div>

                <Button variant="gold" icon={<Download className="h-4 w-4" />} className="mt-2 w-full">
                  Download APK
                </Button>

                <div className="mt-4">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                    Requirements
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-mist-dim">
                    Android 7.0 or higher, 100 MB free storage, stable internet connection.
                  </p>
                </div>

                <div className="relative mx-auto mt-4 h-32 w-32 overflow-hidden rounded-xl bg-white p-2">
                  <Image
                    src="/images/apk-qr.webp"
                    alt="Scan to download the IN999 Android app"
                    fill
                    loading="lazy"
                    sizes="128px"
                    className="object-contain p-2"
                  />
                </div>
              </Card>

              <div>
                <h2 className="text-2xl font-bold text-mist">Installation Steps</h2>
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
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
