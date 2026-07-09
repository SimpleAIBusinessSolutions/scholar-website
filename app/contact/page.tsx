import { getPageContent, withDefaults } from "@/lib/content";
import PageHero, { PageHeroData } from "@/components/sections/PageHero";
import ContactForm from "@/components/ContactForm";

export default async function ContactPage() {
  const content = await getPageContent("contact");

  const hero = withDefaults<PageHeroData>(content, "contact_hero", {
    eyebrow: "Contact",
    heading: "Let's talk about your website",
    subheading:
      "Tell us a bit about your business and what you're hoping to achieve, and we'll get back to you with next steps.",
  });

  return (
    <>
      <PageHero data={hero} />

      <section className="pb-24">
        <div className="max-w-xl mx-auto px-6 pt-12">
          <ContactForm />

          <p className="text-center text-text-dimmer text-sm mt-8">
            Prefer email? Reach us directly at{" "}
            <a
              href="mailto:kevin@simpleaibusinesssolutions.ie"
              className="text-brand-green-bright hover:underline"
            >
              kevin@simpleaibusinesssolutions.ie
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
