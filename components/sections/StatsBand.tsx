export type StatsBandData = {
  stat_1_value: string;
  stat_1_label: string;
  stat_2_value: string;
  stat_2_label: string;
  stat_3_value: string;
  stat_3_label: string;
  stat_4_value: string;
  stat_4_label: string;
};

export default function StatsBand({ data }: { data: StatsBandData }) {
  const stats = [
    { value: data.stat_1_value, label: data.stat_1_label },
    { value: data.stat_2_value, label: data.stat_2_label },
    { value: data.stat_3_value, label: data.stat_3_label },
    { value: data.stat_4_value, label: data.stat_4_label },
  ];

  return (
    <section className="border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center md:text-left">
            <p className="font-mono-nums text-3xl md:text-4xl font-semibold brand-gradient-text">
              {stat.value}
            </p>
            <p className="text-text-dim text-sm mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
