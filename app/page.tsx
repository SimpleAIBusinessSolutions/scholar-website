import { getPageContent, withDefaults } from "@/lib/content";
import Hero, { HeroData } from "@/components/sections/Hero";
import StatsBand, { StatsBandData } from "@/components/sections/StatsBand";
import FeatureGrid, {
  FeatureGridData,
} from "@/components/sections/FeatureGrid";
import CTABand, { CTABandData } from "@/components/sections/CTABand";

export default async function HomePage() {
  const content = await getPageContent("home");

  const hero = withDefaults<HeroData>(content, "hero", {
    eyebrow: "Websites + Dashboard, Built Together",
    heading: "Websites that run your business, not just represent it",
    subheading:
      "We design and build unique websites for growing businesses — every one comes with Scholar Dashboard, so you can edit your content, track your visitors, and see your site's health without ever touching code.",
    action_primary: "Get a Quote",
    action_secondary: "See Pricing",
  });

  const stats = withDefaults<StatsBandData>(content, "stats_band", {
    stat_1_value: "6",
    stat_1_label: "Website packages, from simple to full e-commerce",
    stat_2_value: "100%",
    stat_2_label: "Custom built — never a generic template",
    stat_3_value: "24/7",
    stat_3_label: "Live stats on your traffic and site health",
    stat_4_value: "0",
    stat_4_label: "Code required to update your own content",
  });

  const features = withDefaults<FeatureGridData>(content, "feature_grid", {
    heading: "Every website comes with its own dashboard",
    subheading:
      "Scholar Dashboard is built into every package — a private admin panel where you manage your site's content and keep an eye on how it's performing.",
    feature_1_title: "Live Text & Image Edits",
    feature_1_text:
      "Update your headlines, copy, and photos yourself, anytime — changes go live in minutes, no developer needed.",
    feature_2_title: "Stats Dashboard",
    feature_2_text:
      "See your traffic, visitor activity, and hosting status at a glance, so you always know how your site is doing.",
    feature_3_title: "AI Assistant",
    feature_3_text:
      "Give your visitors an AI-powered chat assistant that can answer questions and help convert them into customers.",
    feature_4_title: "Secure Payments",
    feature_4_text:
      "Accept payments safely and reliably, whether it's a one-off booking, a membership, or a full online store.",
  });

  const cta = withDefaults<CTABandData>(content, "cta_band", {
    heading: "Ready to build something that actually works for you?",
    subheading:
      "Tell us about your business and we'll help you pick the right package.",
    action_label: "Start the Conversation",
  });

  return (
    <>
      <Hero data={hero} />
      <StatsBand data={stats} />
      <FeatureGrid data={features} />
      <CTABand data={cta} />
    </>
  );
}
