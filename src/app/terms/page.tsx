import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `Terms & Conditions | ${SITE.fullName}`,
  description: "The terms and conditions governing use of the IN999 platform.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero eyebrow="Legal" title="Terms & Conditions" />
        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto flex max-w-3xl flex-col gap-6 text-sm leading-relaxed text-mist-dim">
            <p>
              By registering an account, you confirm you are 18 years of
              age or older and legally permitted to use online gaming
              services in your jurisdiction.
            </p>
            <p>
              Bonuses, gift codes, and promotions are subject to individual
              terms including wagering requirements and expiry windows,
              detailed on the Promotions and Gift Code pages.
            </p>
            <p>
              IN999 reserves the right to suspend accounts found in
              violation of fair play policies. Play responsibly — set
              limits and never wager more than you can afford to lose.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
