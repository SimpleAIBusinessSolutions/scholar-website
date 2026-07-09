import { getPageContent, withDefaults } from "@/lib/content";
import PageHero, { PageHeroData } from "@/components/sections/PageHero";
import PricingGrid, {
  PricingGridData,
} from "@/components/sections/PricingGrid";
import CTABand, { CTABandData } from "@/components/sections/CTABand";

export default async function PricingPage() {
  const content = await getPageContent("pricing");

  const hero = withDefaults<PageHeroData>(content, "pricing_hero", {
    eyebrow: "Pricing",
    heading: "Premium website packages",
    subheading:
      "All websites are professionally designed to maximise credibility, conversions, and search visibility.",
  });

  const packages = withDefaults<PricingGridData>(content, "packages", {
    heading: "Find the right fit",
    subheading:
      "Every package includes Scholar Dashboard, so you can manage your site the day it goes live.",
    common_features: [
      "Custom built",
      "Contact form linked to email",
      "Mobile friendly",
      "Stats dashboard",
      "Live text and image edits",
      "SEO ready",
      "AI assistant (chat functionality)",
    ],
    extras: [
      { label: "Extra page", price: "€199 + VAT" },
      { label: "Domain email set up", price: "€199 + VAT" },
      { label: "Extra 5,000 visits or 100 API actions", price: "€15 + VAT" },
    ],
    tiers: [
      {
        name: "The Builder",
        price: "€999",
        priceNote: "+ VAT",
        tagline:
          "Advanced website built to showcase your services and create a premium first impression.",
        features: [
          "Up to 5 Custom Pages",
          "AI Assistant (Chat functionality)",
          "5,000 Visits and 50 API actions/month",
        ],
        support: "Monthly Support €20 + VAT",
      },
      {
        name: "The Revenue Generator",
        price: "€1,499",
        priceNote: "+ VAT",
        tagline:
          "Advanced website with sales and payment functionality.",
        features: [
          "Secure Payment Processing",
          "AI Assistant (Chat functionality)",
          "15,000 Visits and 200 API actions/month",
        ],
        support: "Monthly Support €20 + VAT",
        highlighted: true,
      },
      {
        name: "The Secretary",
        price: "€2,499",
        priceNote: "+ VAT",
        tagline:
          "Your website can become your personal assistant, acting like a digital secretary.",
        features: [
          "Online Booking / Reminders",
          "Secure Payment Processing",
          "25,000 Visits and 500 API actions/month",
        ],
        support: "Monthly Support €30 + VAT",
      },
      {
        name: "The Community",
        price: "€3,499",
        priceNote: "+ VAT",
        tagline:
          "Membership website built to create a community with secure access.",
        features: [
          "Sign-up, Login, Password Reset",
          "Dedicated Membership Area",
          "25,000 Visits and 500 API actions/month",
        ],
        support: "Monthly Support €35 + VAT",
      },
      {
        name: "The Shop",
        price: "€4,999",
        priceNote: "+ VAT",
        tagline:
          "Online store built to sell products 24/7 and give you full control of your digital shopfront.",
        features: [
          "Full Online Store Setup",
          "Secure Checkout & Payment",
          "35,000 Visits and 750 API actions/month",
        ],
        support: "Monthly Support €40 + VAT",
      },
      {
        name: "DIY",
        price: "POA",
        tagline:
          "Custom website built entirely around your vision and goals with tailored functionality.",
        features: [
          "Fully Bespoke Design",
          "Custom Features & Integrations",
          "Build to Your Specification",
          "Custom Usage Limits",
          "AI Assistant (Chat Functionality)",
        ],
      },
    ],
  });

  const cta = withDefaults<CTABandData>(content, "cta_band", {
    heading: "Not sure which package fits?",
    subheading:
      "Tell us what you're trying to achieve and we'll point you to the right one.",
    action_label: "Talk to Us",
  });

  return (
    <>
      <PageHero data={hero} />
      <PricingGrid data={packages} />
      <CTABand data={cta} />
    </>
  );
}
