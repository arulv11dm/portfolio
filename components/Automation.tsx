import AnimateOnScroll from './AnimateOnScroll';

const capabilities = [
  {
    title: 'DataForSEO API & GSC API',
    desc: 'Automating rank tracking, SERP data extraction, and Search Console performance analytics directly into custom dashboards.',
  },
  {
    title: 'Claude & AI Workflows',
    desc: 'Leveraging AI LLMs for bulk meta generation, topical clustering, schema markup creation, and GEO citation analysis.',
  },
  {
    title: 'GitHub Actions & CI/CD',
    desc: 'Setting up automated recurring SEO audit pipelines, sitemap checks, and automated reporting workflows.',
  },
  {
    title: 'HTML, CSS & JavaScript',
    desc: 'Understanding code at a fundamental level to diagnose indexing issues, technical rendering, and DOM hydration bugs.',
  },
];

export default function Automation() {
  return (
    <section
      id="automation"
      className="py-24 lg:py-32 bg-[#FAF8F5] border-t border-[#E5E0D8]"
      aria-labelledby="automation-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left info */}
          <div className="lg:col-span-5">
            <AnimateOnScroll animation="fade-in">
              <span className="section-label">AUTOMATION & TECHNICAL CAPABILITIES</span>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <h2
                id="automation-heading"
                className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mt-4 mb-6 leading-tight"
              >
                SEO meets automation.
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={200}>
              <p className="text-[#2D2D2D] text-lg leading-relaxed mb-6">
                Traditional SEO relies heavily on manual audits and spreadsheet tracking. I integrate scripts, APIs, and AI workflows to scale SEO processes efficiently.
              </p>
              <p className="text-[#6B6B6B] text-base leading-relaxed">
                By combining technical marketing with code and automated workflows, I build scalable systems that monitor search health, generate structured insights, and execute programmatic optimizations.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Right grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => (
              <AnimateOnScroll key={cap.title} animation="fade-in-up" delay={i * 100}>
                <div className="bg-white border border-[#E5E0D8] rounded-xl p-6 h-full card-lift">
                  <div className="w-10 h-10 rounded-lg bg-[#FDF1EA] text-[#E8651A] flex items-center justify-center font-bold text-sm mb-4">
                    0{i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
