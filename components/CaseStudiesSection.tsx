'use client';

import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { ArrowUpRight, Star, X, CheckCircle2, TrendingUp } from 'lucide-react';

interface CaseStudy {
  id: string;
  name: string;
  isFeatured?: boolean;
  company: string;
  year: string;
  description: string;
  stat1: { value: string; label: string };
  stat2: { value: string; label: string };
  stat3: { value: string; label: string };
  challenge: string;
  thinking: string;
  strategy: string;
  execution: string;
  outcome: string;
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'medingen-healthcare',
    name: 'Medingen Healthcare',
    isFeatured: true,
    company: 'Healthcare E-Commerce',
    year: '2025 – Present',
    description: 'Scaling organic revenue from ₹2L to ₹15L/month through technical SEO, 12K+ URL re-architecture, and full-funnel Meta Ads.',
    stat1: { value: '₹2L → ₹15L', label: 'Monthly Rev' },
    stat2: { value: '30K → 110K', label: 'Monthly Clicks' },
    stat3: { value: '300 → 2,500', label: 'Monthly Orders' },
    challenge:
      'A sprawling 12,000+ medical product catalog burdened by legacy URL routing, duplicate indexing, and high dependence on paid acquisition. Needed sustainable organic revenue scaling and AI Search discoverability.',
    thinking:
      'Healthcare e-commerce shoppers have strict search intent. By rebuilding catalog URL architecture into hierarchical pillar-clusters and embedding rich Product & MedicalEntity schema, we could dominate high-intent commercial SERPs and capture ChatGPT/AI Overview citation share.',
    strategy:
      'Re-architected 12K+ product URLs, mapped keyword intent, deployed schema markup, optimized internal linking, launched GEO strategies across LLMs, and built a full-funnel Meta Ads engine.',
    execution:
      'Eliminated duplicate canonicals with 301 redirect mappings, executed automated title/meta optimization across 12,000 SKUs, structured entity data resulting in 57 AI citations and 1.5K cited pages across ChatGPT and Gemini, and managed Meta ads achieving ₹3.58–₹12.67 cost per messaging conversation.',
    outcome:
      'Grew monthly revenue from ₹2L to ₹15L within one year, orders grew from 300 to 2,500/mo, organic clicks rose from 30K to 110K/mo, impressions scaled from 1.4M to 4M/mo, and generated ₹5L attributed e-commerce revenue from ~₹40K Meta Ads spend (12.5× ROAS).',
    tags: ['E-Commerce SEO', '12K+ Product URLs', 'AI Search (GEO)', 'Meta Ads 12.5× ROAS'],
  },
  {
    id: 'rc-solars',
    name: 'RC Solars',
    isFeatured: true,
    company: 'Commercial Solar EPC',
    year: '2024 – 2025',
    description: 'Building the entire SEO & digital acquisition function from zero to 20K monthly impressions and high-ticket commercial leads.',
    stat1: { value: '0 → 20K', label: 'Impressions/mo' },
    stat2: { value: '1,500', label: 'Clicks/mo' },
    stat3: { value: '₹25–30L', label: 'Monthly Pipeline' },
    challenge:
      'A solar company with zero online presence entering a capital-intensive commercial market with established regional players. Needed to generate consistent inbound commercial rooftop inquiries from scratch.',
    thinking:
      'Commercial solar contracts carry high deal values (₹25–30L). Decision-makers search for turnkey installation, industrial ROI, and local regulatory incentives. Establishing local authority and high-intent landing pages would create a predictable inbound deal pipeline.',
    strategy:
      'Built the WordPress company website from the ground up, designed technical site architecture around commercial search intent, and developed money-keyword service hubs.',
    execution:
      'Established full SEO foundations including keyword research, content operations, on-page optimization, and internal linking. Managed a 4-member team coordinating development, SEO, and content creation.',
    outcome:
      'Scaled organic presence from zero to 20,000 monthly impressions and 1,500 monthly clicks, establishing SEO as a primary lead source and supporting a ₹25–30L monthly project value pipeline.',
    tags: ['Commercial Solar SEO', '0 to 20K Growth', 'Website Architecture', 'Team Leadership'],
  },
  {
    id: 'party-hall-leadgen',
    name: 'Party Hall & Event Venue',
    isFeatured: true,
    company: 'Local Hospitality & Events',
    year: '2024 – Present',
    description: 'High-ROAS Meta Ads performance campaign generating ₹40L in attributed venue revenue from ₹1L ad spend.',
    stat1: { value: '40×', label: 'ROAS' },
    stat2: { value: '₹40L', label: 'Revenue Generated' },
    stat3: { value: '332', label: 'Inbound Leads' },
    challenge:
      'Event venues face intense local competition with high cost-per-lead on standard search ads. Needed a hyper-targeted paid acquisition system delivering qualified booking inquiries at low acquisition cost.',
    thinking:
      'Event planners and families book venues based on visual appeal, dates, and rapid messaging responses. A native Meta lead funnel combined with instant WhatsApp engagement would drastically reduce lead drop-off.',
    strategy:
      'Engineered localized demographic and radius interest targeting on Meta Ads, paired with high-converting video and image creatives showcasing hall setups.',
    execution:
      'Built native on-platform lead forms, conducted continuous A/B creative testing, optimized bid strategies, and connected instant lead notification workflows.',
    outcome:
      'Generated ₹40L in attributed venue revenue from ~₹1L Meta Ads spend — delivering an exceptional 40× ROAS and capturing 332 verified booking inquiries.',
    tags: ['Meta Ads', '40× ROAS', 'Lead Generation', 'Local PPC'],
  },
  {
    id: 'boldborne-solar-dubai',
    name: 'Boldborne Solar — Dubai',
    isFeatured: false,
    company: 'International Solar EPC',
    year: '2024 – Present',
    description: 'Comprehensive SEO and website architecture for a Dubai-based commercial solar company expanding across the UAE.',
    stat1: { value: 'Dubai / UAE', label: 'Market' },
    stat2: { value: 'Commercial EPC', label: 'Focus' },
    stat3: { value: 'International', label: 'SEO Strategy' },
    challenge:
      'Entering the competitive United Arab Emirates renewable market requiring immediate credibility and search visibility for multi-million dirham corporate solar EPC projects.',
    thinking:
      'UAE enterprise clients search by industrial facility type (logistics warehouses, industrial zones, factories). Content needed to address regional technical standards, Shams Dubai regulations, and corporate ESG metrics.',
    strategy:
      'Conducted in-depth UAE competitor benchmarking, developed targeted commercial solar keyword taxonomy, and planned localized enterprise landing pages.',
    execution:
      'Designed technical website architecture, structured landing pages for international B2B buyers, and created high-value SEO content outlines addressing industrial solar ROI.',
    outcome:
      'Delivered a turnkey international SEO foundation enabling Boldborne Solar to rank for competitive commercial solar and solar EPC queries across the UAE.',
    tags: ['International SEO', 'UAE Market', 'B2B Renewable Energy', 'Competitor Analysis'],
  },
  {
    id: 'sri-vetrivel-garments',
    name: 'Sri Vetrivel Garments',
    isFeatured: false,
    company: 'Apparel Manufacturing',
    year: '2024 – Present',
    description: 'Local SEO, Google Business Profile optimization, and targeted PPC recruitment campaigns for garment manufacturing.',
    stat1: { value: 'Local SEO', label: 'Visibility' },
    stat2: { value: 'GBP #1', label: 'Rankings' },
    stat3: { value: 'PPC Hiring', label: 'Talent Acquisition' },
    challenge:
      'Local industrial manufacturer needed to build regional discovery for wholesale buyers while simultaneously solving critical manufacturing workforce hiring shortages.',
    thinking:
      'Local B2B buyers search Google Maps for nearby textile hubs, while workforce talent responds to localized geo-targeted mobile PPC advertising.',
    strategy:
      'Optimized Google Business Profile and local citation profiles while structuring hyper-targeted PPC recruitment campaigns.',
    execution:
      'Implemented local schema, product category keywords, photo updates, and location-targeted PPC campaigns addressing garment-industry labor requirements.',
    outcome:
      'Significantly strengthened local visibility and customer inquiries, while PPC recruitment campaigns drove steady worker applications and fulfilled operational staffing requirements.',
    tags: ['Local SEO', 'GBP Optimization', 'Recruitment PPC', 'Manufacturing'],
  },
  {
    id: 'hunter-equipments',
    name: 'Hunter Equipments',
    isFeatured: false,
    company: 'Hydraulic Equipment Supplier',
    year: '2024',
    description: 'Initial keyword strategy, catalog architecture, and technical on-page SEO for industrial hydraulic machinery.',
    stat1: { value: 'B2B Catalog', label: 'Scope' },
    stat2: { value: 'On-Page SEO', label: 'Execution' },
    stat3: { value: 'Industrial', label: 'Sector' },
    challenge:
      'Industrial equipment catalog with complex technical specifications lacking structured page hierarchy, metadata, and commercial search intent targeting.',
    thinking:
      'Engineers and procurement officers search using exact hydraulic component models, pressure ratings, and industrial application keywords.',
    strategy:
      'Structured website taxonomy around equipment categories, industrial use-cases, and high-intent commercial hydraulic queries.',
    execution:
      'Executed on-page SEO including title tag optimization, structured headings, internal linking graphs, and technical keyword placement across product pages.',
    outcome:
      'Built a robust organic search foundation establishing indexability and commercial search visibility for niche industrial machinery queries.',
    tags: ['Industrial B2B', 'Keyword Strategy', 'Technical On-Page', 'Site Architecture'],
  },
];

export default function CaseStudiesSection() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  return (
    <section
      id="portfolio"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-white border-t border-[#E5E0D8] relative overflow-hidden"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <AnimateOnScroll animation="fade-in">
            {/* Top Status Pill matching Hero/About style */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200/90 bg-[#F9FAFB] px-3.5 py-1.5 text-xs sm:text-sm font-medium text-gray-700 shadow-2xs mb-4 sm:mb-5 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
              </span>
              <span>Case Studies</span>
            </div>
            <h2
              id="work-heading"
              className="font-extrabold text-3xl xs:text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.12] tracking-tight text-[#111827]"
            >
              Organic growth that turns into{' '}
              <span className="text-[#FF5A36]">signups, leads &amp; sales.</span>
            </h2>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed text-[#4B5563] font-normal">
              From enterprise SaaS to local businesses — every project engineered toward one thing: measurable revenue. Tap any card for the full breakdown.
            </p>
          </AnimateOnScroll>
        </div>

        {/* 2-Column Grid of Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {caseStudies.map((study, index) => (
            <AnimateOnScroll key={study.id} animation="fade-in-up" delay={index * 80}>
              <div
                onClick={() => setSelectedStudy(study)}
                className="group flex h-full flex-col justify-between rounded-3xl border border-gray-200/90 bg-[#FAF8F5] p-5 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5A36]/40 hover:shadow-lg hover:shadow-black/5 hover:bg-white cursor-pointer"
              >
                <div>
                  {/* Card Header: Icon + Title + Featured badge + Company/Year */}
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gray-200/90 bg-white text-[#FF5A36] font-bold text-lg font-mono shadow-xs group-hover:border-[#FF5A36]/40 transition-colors">
                      {study.name.charAt(0)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="truncate font-extrabold text-lg sm:text-xl text-[#111827] group-hover:text-[#FF5A36] transition-colors">
                          {study.name}
                        </h3>
                        {study.isFeatured && (
                          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#FFF5F2] border border-[#FF5A36]/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#FF5A36]">
                            <Star className="w-2.5 h-2.5 fill-[#FF5A36] text-[#FF5A36]" />
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="truncate text-xs sm:text-[13px] font-medium text-[#6B7280]">
                        {study.company} · {study.year}
                      </p>
                    </div>
                  </div>

                  {/* Card Description */}
                  <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-[#4B5563]">
                    {study.description}
                  </p>
                </div>

                <div>
                  {/* 3-Column Metrics Pill Box */}
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    <div className="rounded-xl border border-gray-200/90 bg-white px-2 py-2.5 text-center shadow-2xs">
                      <div className="font-extrabold text-sm sm:text-base leading-none text-[#FF5A36] font-mono">
                        {study.stat1.value}
                      </div>
                      <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-[#6B7280]">
                        {study.stat1.label}
                      </div>
                    </div>
                    <div className="rounded-xl border border-gray-200/90 bg-white px-2 py-2.5 text-center shadow-2xs">
                      <div className="font-extrabold text-sm sm:text-base leading-none text-[#111827] font-mono">
                        {study.stat2.value}
                      </div>
                      <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-[#6B7280]">
                        {study.stat2.label}
                      </div>
                    </div>
                    <div className="rounded-xl border border-gray-200/90 bg-white px-2 py-2.5 text-center shadow-2xs">
                      <div className="font-extrabold text-sm sm:text-base leading-none text-[#FF5A36] font-mono">
                        {study.stat3.value}
                      </div>
                      <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-[#6B7280]">
                        {study.stat3.label}
                      </div>
                    </div>
                  </div>

                  {/* View Case Study Link */}
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-[#FF5A36] group-hover:text-[#E84E2C] transition-colors">
                    View case study
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* FULL-DETAIL CASE STUDY MODAL */}
      {selectedStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fade-in"
          onClick={() => setSelectedStudy(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-2xl text-[#111827]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedStudy(null)}
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF8F5] border border-gray-200 text-[#6B7280] hover:text-[#111827] hover:border-[#FF5A36] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-12">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF5A36]">
                  {selectedStudy.company} · {selectedStudy.year}
                </span>
                {selectedStudy.isFeatured && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#FFF5F2] border border-[#FF5A36]/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#FF5A36]">
                    ★ Featured
                  </span>
                )}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
                {selectedStudy.name}
              </h3>
              <p className="mt-2 text-sm text-[#4B5563]">
                {selectedStudy.description}
              </p>
            </div>

            {/* Metrics */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-gray-200/90 bg-[#FAF8F5] p-4 text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-[#FF5A36] font-mono">
                  {selectedStudy.stat1.value}
                </div>
                <div className="text-xs text-[#6B7280] mt-1">{selectedStudy.stat1.label}</div>
              </div>
              <div className="rounded-2xl border border-gray-200/90 bg-[#FAF8F5] p-4 text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-[#111827] font-mono">
                  {selectedStudy.stat2.value}
                </div>
                <div className="text-xs text-[#6B7280] mt-1">{selectedStudy.stat2.label}</div>
              </div>
              <div className="rounded-2xl border border-gray-200/90 bg-[#FAF8F5] p-4 text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-[#FF5A36] font-mono">
                  {selectedStudy.stat3.value}
                </div>
                <div className="text-xs text-[#6B7280] mt-1">{selectedStudy.stat3.label}</div>
              </div>
            </div>

            {/* Narrative Sections */}
            <div className="mt-8 space-y-6 text-sm text-[#4B5563] leading-relaxed">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-[#111827] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A36]" />
                  The Challenge
                </h4>
                <p className="bg-[#FAF8F5] border border-gray-200/90 rounded-2xl p-4 text-[#374151]">
                  {selectedStudy.challenge}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-[#111827] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A36]" />
                  The Thinking &amp; Strategy
                </h4>
                <div className="bg-[#FAF8F5] border border-gray-200/90 rounded-2xl p-4 space-y-3 text-[#374151]">
                  <p>{selectedStudy.thinking}</p>
                  <p>{selectedStudy.strategy}</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-[#111827] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#246FEA]" />
                  Execution
                </h4>
                <p className="bg-[#FAF8F5] border border-gray-200/90 rounded-2xl p-4 text-[#374151]">
                  {selectedStudy.execution}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-[#111827] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  The Outcome &amp; Revenue Growth
                </h4>
                <p className="bg-[#FAF8F5] border border-gray-200/90 rounded-2xl p-4 text-[#111827] font-semibold">
                  {selectedStudy.outcome}
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-gray-200/90">
              {selectedStudy.tags.map((tag, i) => (
                <span
                  key={i}
                  className="rounded-full bg-[#FAF8F5] border border-gray-200/90 px-3 py-1 text-xs font-semibold text-[#4B5563]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
