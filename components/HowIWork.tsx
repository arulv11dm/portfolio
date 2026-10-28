import AnimateOnScroll from './AnimateOnScroll';

const steps = [
  {
    number: '01',
    title: 'Understand',
    desc: 'Deep dive into your business model, target audience, existing website architecture, and search market demand.',
  },
  {
    number: '02',
    title: 'Strategize',
    desc: 'Formulate an actionable keyword strategy, website architecture blueprint, content plan, and paid acquisition funnel.',
  },
  {
    number: '03',
    title: 'Execute',
    desc: 'Implement technical SEO fixes, scalable content workflows, on-page optimization, Meta Ads campaigns, and automated workflows.',
  },
  {
    number: '04',
    title: 'Measure & Improve',
    desc: 'Track Search Console analytics, GA4 event conversions, CPL/ROAS metrics, and continuously iterate for growth.',
  },
];

export default function HowIWork() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-white border-t border-[#E5E0D8]" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll animation="fade-in">
          <span className="section-label">HOW I WORK</span>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-in-up" delay={100}>
          <h2
            id="process-heading"
            className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mt-4 mb-4 max-w-2xl"
          >
            A systematic, data-driven approach to growth.
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-in-up" delay={200}>
          <p className="text-[#6B6B6B] text-lg mb-16 max-w-xl">
            Clear phases designed to move from initial audit to sustainable revenue acquisition.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.number} animation="fade-in-up" delay={i * 80}>
              <div className="bg-[#FAF8F5] border border-[#E5E0D8] rounded-xl p-6 h-full flex flex-col justify-between card-lift">
                <div>
                  <span className="text-3xl font-extrabold font-mono text-[#E8651A] block mb-4">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">
                    {step.desc}
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
