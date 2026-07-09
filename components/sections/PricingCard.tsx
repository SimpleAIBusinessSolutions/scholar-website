import Link from "next/link";

export type PricingTier = {
  name: string;
  price: string;
  priceNote?: string;
  tagline: string;
  features: string[];
  support?: string;
  highlighted?: boolean;
};

export default function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-8 border transition ${
        tier.highlighted
          ? "border-brand-green/50 bg-gradient-to-b from-brand-green/[0.07] to-brand-blue/[0.05] brand-border-glow"
          : "border-border bg-surface hover:border-text-dimmer"
      }`}
    >
      {tier.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 brand-gradient text-bg text-xs font-semibold px-4 py-1 rounded-full">
          Most Popular
        </span>
      )}

      <h3 className="font-display font-bold text-xl">{tier.name}</h3>

      <div className="mt-4 flex items-baseline gap-1.5">
        <span className="font-mono-nums text-3xl font-semibold">
          {tier.price}
        </span>
        {tier.priceNote && (
          <span className="text-text-dim text-sm">{tier.priceNote}</span>
        )}
      </div>

      <p className="text-text-dim text-sm mt-4 leading-relaxed min-h-[3rem]">
        {tier.tagline}
      </p>

      <ul className="mt-6 space-y-3 flex-1">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-brand-green/15 border border-brand-green/40 flex items-center justify-center">
              <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 6.5L4.5 9L10 3"
                  stroke="#3ddc7a"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-text-dim">{feature}</span>
          </li>
        ))}
      </ul>

      {tier.support && (
        <p className="text-xs text-text-dimmer mt-6 pt-6 border-t border-border">
          {tier.support}
        </p>
      )}

      <Link
        href="/contact"
        className={`mt-6 text-center font-semibold text-sm px-5 py-3 rounded-full transition ${
          tier.highlighted
            ? "brand-gradient text-bg hover:opacity-90"
            : "border border-border text-text hover:border-text-dim"
        }`}
      >
        Get Started
      </Link>
    </div>
  );
}
