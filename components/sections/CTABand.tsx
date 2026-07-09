import Link from "next/link";

export type CTABandData = {
  heading: string;
  subheading: string;
  action_label: string;
};

export default function CTABand({ data }: { data: CTABandData }) {
  return (
    <section>
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="relative rounded-3xl border border-border bg-surface p-12 sm:p-16 text-center overflow-hidden">
          <div
            className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full opacity-20 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(47,107,255,0.5) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -top-24 -left-24 w-72 h-72 rounded-full opacity-20 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(34,197,94,0.5) 0%, transparent 70%)",
            }}
          />

          <div className="relative">
            <h2 className="font-display font-bold text-3xl sm:text-4xl max-w-xl mx-auto">
              {data.heading}
            </h2>
            <p className="text-text-dim mt-4 text-lg max-w-lg mx-auto">
              {data.subheading}
            </p>
            <Link
              href="/contact"
              className="inline-block mt-8 brand-gradient text-bg font-semibold px-8 py-4 rounded-full hover:opacity-90 transition"
            >
              {data.action_label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
