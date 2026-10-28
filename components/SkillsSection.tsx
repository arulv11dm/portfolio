'use client';

import AnimateOnScroll from './AnimateOnScroll';

interface CapabilityCategory {
  category: string;
  description: string;
  skills: string[];
}

const capabilityCategories: CapabilityCategory[] = [
  {
    category: 'SEO & WEBSITE ARCHITECTURE',
    description: 'Technical audits, 12K+ URL taxonomy design, schema markup, and commercial keyword mapping.',
    skills: [
      'Technical SEO',
      'On-page SEO',
      'Programmatic SEO',
      'E-commerce SEO',
      'Website Architecture',
      'Keyword Strategy',
      'Schema Implementation',
      'Local SEO & GBP',
      'Landing-Page Optimization',
      'Blog Architecture',
    ],
  },
  {
    category: 'PERFORMANCE MARKETING (META & PPC)',
    description: 'Full-funnel Meta and Google Ads delivering up to 40× ROAS, lead generation, and messaging campaigns.',
    skills: [
      'Meta Ads Manager',
      'PPC Campaigns',
      'Lead Generation',
      'ROAS Optimization',
      'CPL Optimization',
      'WhatsApp / Messaging Ads',
      'Sales & Retargeting',
      'Audience Segmentation',
    ],
  },
  {
    category: 'GEO & AI SEARCH OPTIMIZATION',
    description: 'Generative Engine Optimization tracking brand citations and entity visibility across LLMs.',
    skills: [
      'AI Citation Tracking',
      'ChatGPT Share of Voice',
      'Perplexity Visibility',
      'Google AI Overviews',
      'LLM-Readable Architecture',
      'JSON-LD & Entity Markup',
      'AI-Referral Reporting',
    ],
  },
  {
    category: 'AUTOMATION, ANALYTICS & TOOLS',
    description: 'Claude workflows, API integrations, automated crons, and end-to-end attribution tracking.',
    skills: [
      'Claude AI Workflows',
      'GitHub Actions Crons',
      'DataForSEO API',
      'Google Search Console API',
      'Google Analytics 4 (GA4)',
      'Google Tag Manager',
      'SEMrush & Ahrefs',
      'WordPress & HTML/CSS',
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="capabilities"
      className="scroll-mt-20 py-24 sm:py-32 bg-white border-t border-[#E5E0D8] relative overflow-hidden"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <AnimateOnScroll animation="fade-in">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="h-px w-5 bg-[#D97706]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D97706]">
                SKILLS &amp; CAPABILITIES
              </span>
            </div>
            <h2
              id="skills-heading"
              className="font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#111827] tracking-tight leading-tight"
            >
              An Engineer&apos;s Toolkit <br />
              <span className="text-[#D97706]">
                Applied to Growth.
              </span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              A comprehensive view of the technical, creative, and data-driven capabilities I deploy to scale digital businesses.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Editorial Capability List (Row-based alternating layout rather than repetitive cards) */}
        <div className="space-y-12">
          {capabilityCategories.map((group, index) => (
            <AnimateOnScroll key={group.category} animation="fade-in-up" delay={index * 80}>
              <div className="rounded-3xl border border-[#E5E0D8] bg-[#FAF8F5] p-8 sm:p-10 lg:p-12 hover:border-[#D97706]/40 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Category Name & Description (Left) */}
                  <div className="lg:col-span-4">
                    <span className="font-mono text-xs font-bold text-[#D97706] tracking-[0.25em] uppercase block mb-2">
                      0{index + 1}
                    </span>
                    <h3 className="font-extrabold text-2xl sm:text-3xl text-[#111827] tracking-tight">
                      {group.category}
                    </h3>
                    <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  {/* Skills Tags Flow (Right) */}
                  <div className="lg:col-span-8 flex flex-wrap gap-2.5 sm:gap-3 lg:pt-4">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2.5 rounded-full bg-white border border-[#E5E0D8] text-xs sm:text-sm font-semibold text-[#111827] hover:border-[#D97706] hover:text-[#D97706] shadow-xs transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
