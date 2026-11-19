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
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-white border-t border-[#E5E0D8] relative overflow-hidden"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching Hero & About */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <AnimateOnScroll animation="fade-in">
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200/90 bg-[#F9FAFB] px-3.5 py-1.5 text-xs sm:text-sm font-medium text-gray-700 shadow-2xs mb-4 sm:mb-5 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
              </span>
              <span>Skills &amp; Capabilities</span>
            </div>
            <h2
              id="skills-heading"
              className="font-extrabold text-3xl xs:text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.12] tracking-tight text-[#111827]"
            >
              An Engineer&apos;s Toolkit <br />
              <span className="text-[#FF5A36]">
                Applied to Growth.
              </span>
            </h2>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#4B5563] leading-relaxed font-normal">
              A comprehensive view of the technical, creative, and data-driven capabilities I deploy to scale digital businesses.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Editorial Capability List */}
        <div className="space-y-8 sm:space-y-10">
          {capabilityCategories.map((group, index) => (
            <AnimateOnScroll key={group.category} animation="fade-in-up" delay={index * 80}>
              <div className="rounded-3xl border border-gray-200/90 bg-[#FAF8F5] p-6 sm:p-8 lg:p-10 hover:border-[#FF5A36]/40 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  {/* Category Name & Description (Left) */}
                  <div className="lg:col-span-4">
                    <span className="font-mono text-xs font-bold text-[#FF5A36] tracking-[0.25em] uppercase block mb-2">
                      0{index + 1}
                    </span>
                    <h3 className="font-extrabold text-xl sm:text-2xl lg:text-3xl text-[#111827] tracking-tight">
                      {group.category}
                    </h3>
                    <p className="mt-2.5 text-sm sm:text-[15px] text-[#4B5563] leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  {/* Skills Tags Flow (Right) */}
                  <div className="lg:col-span-8 flex flex-wrap gap-2.5 sm:gap-3 lg:pt-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2.5 rounded-full bg-white border border-gray-200/90 text-xs sm:text-sm font-semibold text-[#111827] hover:border-[#FF5A36] hover:text-[#FF5A36] shadow-2xs transition-colors cursor-default"
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
