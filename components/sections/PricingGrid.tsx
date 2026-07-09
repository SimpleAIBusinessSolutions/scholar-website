import PricingCard, { PricingTier } from "./PricingCard";

export type PricingGridData = {
  heading: string;
  subheading: string;
  tiers: PricingTier[];
  extras: { label: string; price: string }[];
  common_features: string[];
};

export default function PricingGrid({ data }: { data: PricingGridData }) {
  return (
    <section className="border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl">
            {data.heading}
          </h2>
          <p className="text-text-dim mt-4 text-lg leading-relaxed">
            {data.subheading}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.tiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>

        {data.common_features.length > 0 && (
          <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-text-dim border-t border-b border-border py-6">
            {data.common_features.map((feature, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green-bright" />
                {feature}
              </span>
            ))}
          </div>
        )}

        {data.extras.length > 0 && (
          <div className="mt-10 rounded-2xl border border-border bg-surface p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <p className="font-display font-semibold text-lg shrink-0">
              Upgrades &amp; Extras
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-text-dim">
              {data.extras.map((extra, i) => (
                <span key={i}>
                  {extra.label}{" "}
                  <span className="font-mono-nums text-text">
                    {extra.price}
                  </span>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
