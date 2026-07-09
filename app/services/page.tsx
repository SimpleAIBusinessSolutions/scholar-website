import { getPageContent, withDefaults } from "@/lib/content";
import PageHero, { PageHeroData } from "@/components/sections/PageHero";
import ServicePillars, {
  ServicePillarsData,
} from "@/components/sections/ServicePillars";
import CTABand, { CTABandData } from "@/components/sections/CTABand";

export default async function ServicesPage() {
  const content = await getPageContent("services");

  const hero = withDefaults<PageHeroData>(content, "services_hero", {
    eyebrow: "Services",
    heading: "What we build",
    subheading:
      "From a premium showcase site to a full online store, every project is designed around what your business actually needs to grow.",
  });

  const pillars = withDefaults<ServicePillarsData>(content, "pillars", {
    heading: "Built around how you work",
    subheading:
      "Whichever package you choose, it's designed and built specifically for your business — not a template with your logo dropped in.",
    pillars: [
      {
        title: "Custom Design & Build",
        text: "Every site is designed from scratch around your brand, your services, and how your customers actually find and use your business — not a reskinned template.",
      },
      {
        title: "Sales & Payments",
        text: "Take secure payments directly on your site, whether that's a one-off purchase, a booking deposit, or a recurring membership fee.",
      },
      {
        title: "Booking & Scheduling",
        text: "Let customers book appointments or request callbacks straight from your site, with automatic reminders so nothing gets missed.",
      },
      {
        title: "Membership & Community",
        text: "Give your community a home with secure sign-up, login, and a dedicated members-only area for content, resources, or discussions.",
      },
      {
        title: "Full E-Commerce",
        text: "A complete online store with secure checkout, so you can sell products 24/7 and manage your digital shopfront with full control.",
      },
      {
        title: "AI Assistant",
        text: "An AI-powered chat assistant built into your site, ready to answer visitor questions and help turn browsers into customers.",
      },
    ],
  });

  const cta = withDefaults<CTABandData>(content, "cta_band", {
    heading: "Tell us what you're trying to build",
    subheading:
      "Every project starts with a conversation about your business, not a template.",
    action_label: "Get in Touch",
  });

  return (
    <>
      <PageHero data={hero} />
      <ServicePillars data={pillars} />
      <CTABand data={cta} />
    </>
  );
}
