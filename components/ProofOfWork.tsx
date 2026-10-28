import AnimateOnScroll from './AnimateOnScroll';

const proofItems = [
  {
    title: 'Google Search Console Growth',
    category: 'Search Analytics',
    description: 'Growth trajectory from 30K to 110K monthly organic clicks and 1.4M to 4M monthly impressions.',
    aspectRatio: 'aspect-video',
  },
  {
    title: 'GA4 Revenue & Conversion Metrics',
    category: 'E-commerce Analytics',
    description: 'Revenue scaling from ₹2L to ₹15L monthly with 2,500 monthly orders tracked in GA4.',
    aspectRatio: 'aspect-video',
  },
  {
    title: 'Meta Ads Manager Campaign Dashboard',
    category: 'Performance Marketing',
    description: 'Lead generation and sales campaign metrics delivering 40× ROAS and 332 leads per campaign.',
    aspectRatio: 'aspect-video',
  },
  {
    title: 'AI Search & GEO Citation Tracking',
    category: 'AI Visibility Audit',
    description: 'Documented 57 AI mentions and 1.5K cited product pages across Perplexity, ChatGPT, and AI Search.',
    aspectRatio: 'aspect-video',
  },
  {
    title: 'Programmatic Website Architecture Map',
    category: 'Technical Architecture',
    description: 'Re-architected layout structure for 12,000+ product URLs with clear canonical hierarchy.',
    aspectRatio: 'aspect-video',
  },
  {
    title: 'Comprehensive SEO & Technical Audit',
    category: 'Site Health',
    description: 'Detailed indexing, Core Web Vitals, and structured data implementation report.',
    aspectRatio: 'aspect-video',
  },
];

export default function ProofOfWork() {
  return (
    <section id="proof" className="scroll-mt-20 py-20 sm:py-28 bg-[#0B1315] border-t border-white/10" aria-labelledby="proof-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <AnimateOnScroll animation="fade-in">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB800]">
            PROOF OF WORK
          </span>
          <h2
            id="proof-heading"
            className="mt-3 font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Real Work. Real Search Data.
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-in-up" delay={150}>
          <p className="mt-4 text-gray-300 text-base sm:text-lg mb-12 max-w-xl">
            Verified performance dashboards, search console data, and technical architecture blueprints.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proofItems.map((item, i) => (
            <AnimateOnScroll key={item.title} animation="fade-in-up" delay={i * 80}>
              <div className="liam-card overflow-hidden h-full flex flex-col justify-between">
                <div className={`w-full ${item.aspectRatio} bg-[#0B1315] border-b border-white/10 flex flex-col items-center justify-center p-6 text-center relative`}>
                  <div className="w-12 h-12 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/20 flex items-center justify-center text-[#FFB800] mb-3">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    {item.category} Screenshot
                  </span>
                </div>

                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFB800] bg-[#FFB800]/10 px-2.5 py-1 rounded-full border border-[#FFB800]/20">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-3 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
