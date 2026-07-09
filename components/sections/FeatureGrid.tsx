export type FeatureGridData = {
  heading: string;
  subheading: string;
  feature_1_title: string;
  feature_1_text: string;
  feature_2_title: string;
  feature_2_text: string;
  feature_3_title: string;
  feature_3_text: string;
  feature_4_title: string;
  feature_4_text: string;
};

const ICONS = [
  // Live edit
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M4 20h4l10.5-10.5a2.83 2.83 0 0 0-4-4L4 16v4Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  // Stats dashboard
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M5 20V10M12 20V4M19 20v-6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>,
  // AI assistant
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 3v2M12 19v2M3 12h2M19 12h2M6 6l1.4 1.4M16.6 16.6L18 18M18 6l-1.4 1.4M7.4 16.6L6 18"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
  // Secure payments / shield
  <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>,
];

export default function FeatureGrid({ data }: { data: FeatureGridData }) {
  const features = [
    { title: data.feature_1_title, text: data.feature_1_text },
    { title: data.feature_2_title, text: data.feature_2_text },
    { title: data.feature_3_title, text: data.feature_3_text },
    { title: data.feature_4_title, text: data.feature_4_text },
  ];

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

        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative bg-surface border border-border rounded-2xl p-8 hover:border-brand-green/40 transition brand-border-glow"
            >
              <div className="w-11 h-11 rounded-xl bg-bg-elevated border border-border flex items-center justify-center text-brand-green-bright mb-6 group-hover:text-brand-blue-bright transition">
                {ICONS[i % ICONS.length]}
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                {f.title}
              </h3>
              <p className="text-text-dim text-sm leading-relaxed">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
