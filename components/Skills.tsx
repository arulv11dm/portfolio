import AnimateOnScroll from './AnimateOnScroll';

const skills = [
  'Technical SEO',
  'On-page SEO',
  'Programmatic SEO',
  'Keyword Strategy',
  'Website Architecture',
  'E-commerce SEO',
  'Local SEO',
  'Content Strategy',
  'Landing Page Optimization',
  'Schema Implementation',
  'Blog Architecture',
  'Performance Marketing',
  'Meta Ads',
  'PPC',
  'Lead Generation',
  'Sales Campaigns',
  'Engagement Campaigns',
  'Traffic Campaigns',
  'Awareness Campaigns',
  'WhatsApp / Messaging',
  'CPL Optimization',
  'ROAS Optimization',
  'GEO',
  'AI Search',
  'AI Citation Tracking',
  'AI Referral Reporting',
  'JSON-LD',
  'Entity Markup',
  'SEO Automation',
  'SEO Analytics',
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-20 sm:py-28 bg-[#0B1315] border-t border-white/10" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <AnimateOnScroll animation="fade-in">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB800]">
            SKILLS &amp; CAPABILITIES
          </span>
          <h2
            id="skills-heading"
            className="mt-3 font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Core Competencies &amp; Execution Areas
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-in-up" delay={150}>
          <p className="mt-4 text-gray-300 text-base sm:text-lg mb-12 max-w-xl">
            A comprehensive list of core skills spanning search engine optimization, paid advertising, and search automation.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in-up" delay={250}>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2.5 bg-[#131E21] border border-white/10 rounded-xl text-sm font-bold text-gray-200 hover:border-[#FFB800] hover:text-[#FFB800] transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
