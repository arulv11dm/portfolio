import AnimateOnScroll from './AnimateOnScroll';

const keyStats = [
  { value: '02+ Yrs', label: 'Professional Experience', detail: 'Technical & performance SEO' },
  { value: '4M+', label: 'Monthly Impressions', detail: 'Organic search visibility for Medingen' },
  { value: '110K+', label: 'Monthly Organic Clicks', detail: 'High-intent search traffic driven' },
  { value: '12K+', label: 'Programmatic URLs', detail: 'Re-architected product pages' },
  { value: '40×', label: 'Meta Ads ROAS', detail: 'Party Hall lead generation campaign' },
];

export default function KeyStatistics() {
  return (
    <section className="py-16 sm:py-20 bg-[#0B1315] border-b border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <AnimateOnScroll animation="fade-in">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB800]">
              KEY METRICS &amp; IMPACT
            </span>
            <h2 className="mt-2 font-extrabold text-2xl sm:text-4xl text-white">
              Documented Performance Numbers
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {keyStats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} animation="fade-in-up" delay={i * 80}>
              <div className="liam-card p-6 text-center h-full flex flex-col justify-between group">
                <div>
                  <div className="font-extrabold text-3xl sm:text-4xl text-[#FFB800] font-mono">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-bold text-white group-hover:text-[#FFB800] transition-colors">
                    {stat.label}
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-400 font-medium pt-2 border-t border-white/5">
                  {stat.detail}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
