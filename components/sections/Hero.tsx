import Link from "next/link";
import CircuitTrace from "@/components/CircuitTrace";

export type HeroData = {
  eyebrow: string;
  heading: string;
  subheading: string;
  action_primary: string;
  action_secondary: string;
};

export default function Hero({ data }: { data: HeroData }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 opacity-70">
        <CircuitTrace />
      </div>

      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(34,197,94,0.4) 0%, rgba(47,107,255,0.3) 60%, transparent 80%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-32 text-center">
        <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-brand-green-bright bg-brand-green/10 border border-brand-green/30 rounded-full px-4 py-1.5 mb-8">
          {data.eyebrow}
        </p>

        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight">
          {data.heading.split(" ").map((word, i, arr) =>
            i === arr.length - 1 ? (
              <span key={i} className="brand-gradient-text">
                {word}
              </span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </h1>

        <p className="mt-8 text-lg sm:text-xl text-text-dim max-w-2xl mx-auto leading-relaxed">
          {data.subheading}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="brand-gradient text-bg font-semibold px-8 py-4 rounded-full hover:opacity-90 transition w-full sm:w-auto text-center"
          >
            {data.action_primary}
          </Link>
          <Link
            href="/pricing"
            className="border border-border text-text font-semibold px-8 py-4 rounded-full hover:border-text-dim transition w-full sm:w-auto text-center"
          >
            {data.action_secondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
