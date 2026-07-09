export type ServicePillar = {
  title: string;
  text: string;
};

export type ServicePillarsData = {
  heading: string;
  subheading: string;
  pillars: ServicePillar[];
};

export default function ServicePillars({
  data,
}: {
  data: ServicePillarsData;
}) {
  return (
    <section className="border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl mb-14">
          <h2 className="font-display font-bold text-3xl sm:text-4xl">
            {data.heading}
          </h2>
          <p className="text-text-dim mt-4 text-lg leading-relaxed">
            {data.subheading}
          </p>
        </div>

        <div className="grid gap-5">
          {data.pillars.map((pillar, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row gap-6 sm:gap-10 bg-surface border border-border rounded-2xl p-8"
            >
              <span className="font-mono-nums text-sm text-brand-green-bright shrink-0 pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display font-semibold text-xl mb-2">
                  {pillar.title}
                </h3>
                <p className="text-text-dim leading-relaxed">
                  {pillar.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
