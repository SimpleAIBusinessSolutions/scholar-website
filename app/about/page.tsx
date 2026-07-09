import { getPageContent, withDefaults } from "@/lib/content";
import PageHero, { PageHeroData } from "@/components/sections/PageHero";
import CTABand, { CTABandData } from "@/components/sections/CTABand";

type MissionData = {
  heading: string;
  paragraph_1: string;
  paragraph_2: string;
};

export default async function AboutPage() {
  const content = await getPageContent("about");

  const hero = withDefaults<PageHeroData>(content, "about_hero", {
    eyebrow: "About Us",
    heading: "Websites built by people who actually use them",
    subheading:
      "We started Scholar Digital Solutions because too many small businesses were stuck with websites they couldn't update, and no idea whether their site was even working for them.",
  });

  const mission = withDefaults<MissionData>(content, "mission", {
    heading: "Our approach",
    paragraph_1:
      "We build every website around the business it belongs to — what you sell, how customers find you, and what you actually need it to do. No generic templates, no bloated features you'll never use.",
    paragraph_2:
      "Every site comes with Scholar Dashboard built in, so once your site is live, you're not stuck waiting on us for every small change. You can edit your own content and see how your site is performing, any time.",
  });

  const cta = withDefaults<CTABandData>(content, "cta_band", {
    heading: "Let's build something for your business",
    subheading: "Get in touch and tell us what you're working with.",
    action_label: "Contact Us",
  });

  return (
    <>
      <PageHero data={hero} />

      <section className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="font-display font-bold text-3xl mb-8">
            {mission.heading}
          </h2>
          <div className="space-y-6 text-text-dim text-lg leading-relaxed">
            <p>{mission.paragraph_1}</p>
            <p>{mission.paragraph_2}</p>
          </div>
        </div>
      </section>

      <CTABand data={cta} />
    </>
  );
}
