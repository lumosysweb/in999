import { Plus } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { FAQ_ITEMS } from "@/lib/data";
import { SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `FAQ | ${SITE.fullName}`,
  description:
    "Answers to common questions about IN999 registration, withdrawals, the Android app, and bonuses.",
  path: "/faq",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="flex-1">
        <PageHero eyebrow="Support" title="Frequently Asked Questions" />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col gap-4">
              {FAQ_ITEMS.map((item) => (
                <details key={item.question} className="card group overflow-hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left">
                    <span className="text-base font-semibold text-mist sm:text-lg">
                      {item.question}
                    </span>
                    <span className="gold-btn flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-open:rotate-45">
                      <Plus className="h-4 w-4" />
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-sm leading-relaxed text-mist-dim sm:text-base">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
