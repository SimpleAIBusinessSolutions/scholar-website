export type PageHeroData = {
  eyebrow: string;
  heading: string;
  subheading: string;
};

export default function PageHero({ data }: { data: PageHeroData }) {
  return (
    <section className="border-b border-border">
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-xs font-semibold tracking-wider uppercase text-brand-blue-bright mb-5">
          {data.eyebrow}
        </p>
        <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight">
          {data.heading}
        </h1>
        <p className="mt-6 text-lg text-text-dim leading-relaxed max-w-2xl mx-auto">
          {data.subheading}
        </p>
      </div>
    </section>
  );
}
