import AnimateOnScroll from './AnimateOnScroll';

const metrics = [
  {
    before: '₹2L',
    after: '₹15L',
    label: 'Monthly revenue',
    project: 'Medingen',
    icon: '📈',
  },
  {
    before: '300',
    after: '2,500',
    label: 'Monthly orders',
    project: 'Medingen',
    icon: '🛒',
  },
  {
    before: '30K',
    after: '110K',
    label: 'Monthly organic clicks',
    project: 'Medingen',
    icon: '🔍',
  },
  {
    before: '1.4M',
    after: '4M',
    label: 'Monthly impressions',
    project: 'Medingen',
    icon: '👁️',
  },
  {
    before: null,
    after: '12K+',
    label: 'Product URLs re-architected',
    project: 'Medingen',
    icon: '🏗️',
  },
  {
    before: null,
    after: '57',
    label: 'AI mentions generated',
    project: 'Medingen · AI Search',
    icon: '🤖',
  },
  {
    before: null,
    after: '1.5K',
    label: 'AI search cited pages',
    project: 'Medingen · GEO',
    icon: '📄',
  },
  {
    before: '₹1L',
    after: '₹40L',
    label: 'Meta Ads attributed revenue',
    project: 'Party Hall',
    icon: '🎯',
  },
  {
    before: null,
    after: '40×',
    label: 'ROAS achieved',
    project: 'Party Hall',
    icon: '⚡',
  },
  {
    before: null,
    after: '332',
    label: 'Leads from single campaign',
    project: 'Party Hall',
    icon: '📬',
  },
  {
    before: '0',
    after: '20K',
    label: 'Monthly impressions (solar)',
    project: 'RC Solars',
    icon: '☀️',
  },
  {
    before: null,
    after: '1,500',
    label: 'Monthly organic clicks (solar)',
    project: 'RC Solars',
    icon: '🔗',
  },
];

export default function Results() {
  return (
    <section
      id="results"
      className="py-24 lg:py-32 bg-[#1A1A1A] text-white"
      aria-labelledby="results-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll animation="fade-in">
          <span className="section-label" style={{ color: '#E8651A' }}>
            RESULTS
          </span>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-in-up" delay={100}>
          <h2
            id="results-heading"
            className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-4"
          >
            Numbers that show the work.
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-in-up" delay={200}>
          <p className="text-[#9B9B9B] text-lg mb-16 max-w-xl">
            Every metric below is documented. No invented statistics, no
            inflated numbers — just real results from real projects.
          </p>
        </AnimateOnScroll>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {metrics.map((m, i) => (
            <AnimateOnScroll key={i} animation="scale-in" delay={i * 60}>
              <div className="bg-[#2D2D2D] border border-[#3D3D3D] rounded-xl p-5 lg:p-6 hover:border-[#E8651A] transition-colors duration-200">
                <span className="text-2xl mb-3 block" aria-hidden>
                  {m.icon}
                </span>

                {/* Value display */}
                {m.before ? (
                  <div className="flex items-baseline gap-1.5 flex-wrap">
                    <span className="text-[#6B6B6B] text-base font-semibold line-through">
                      {m.before}
                    </span>
                    <span className="text-[#E8651A] text-xs" aria-hidden>→</span>
                    <span className="text-2xl lg:text-3xl font-bold text-white leading-none">
                      {m.after}
                    </span>
                  </div>
                ) : (
                  <span className="text-2xl lg:text-3xl font-bold text-[#E8651A] leading-none">
                    {m.after}
                  </span>
                )}

                <p className="text-sm text-[#9B9B9B] mt-2 leading-snug">
                  {m.label}
                </p>
                <p className="text-[10px] text-[#6B6B6B] mt-1 uppercase tracking-wide font-medium">
                  {m.project}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Disclaimer */}
        <AnimateOnScroll animation="fade-in" delay={400}>
          <p className="text-center text-[#6B6B6B] text-xs mt-10 max-w-lg mx-auto">
            All results are based on documented project data. Individual results vary based on project scope, industry, and investment.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
