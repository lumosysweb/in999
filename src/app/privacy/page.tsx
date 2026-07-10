import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `Privacy Policy | ${SITE.fullName}`,
  description: "How IN999 collects, uses, and protects your personal information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero eyebrow="Legal" title="Privacy Policy" />
        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto flex max-w-3xl flex-col gap-6 text-sm leading-relaxed text-mist-dim">
            <p>
              IN999 collects only the information required to create your
              account, process deposits and withdrawals, and provide
              customer support — including your mobile number, payment
              details, and basic device information.
            </p>
            <p>
              Your data is encrypted in transit and at rest, and is never
              sold to third parties. Payment information is handled by
              verified, PCI-compliant payment partners.
            </p>
            <p>
              You may request a copy of your data or ask us to delete your
              account at any time by contacting support through the
              Contact page.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
