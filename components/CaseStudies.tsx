'use client';

import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import {
  ShoppingBag,
  Sun,
  Globe,
  Sparkles,
  Building,
  Wrench,
  ArrowUpRight,
} from 'lucide-react';

interface CaseStudy {
  id: string;
  project: string;
  industry: string;
  category: 'all' | 'ecommerce' | 'local' | 'ppc';
  year: string;
  isFeatured?: boolean;
  icon: React.ReactNode;
  summary: string;
  stats: { label: string; value: string }[];
  challenge: string;
  approach: string;
  results: string[];
  tools: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'medingen',
    project: 'Medingen Healthcare',
    industry: 'Healthcare E-commerce',
    category: 'ecommerce',
    year: '2025',
    isFeatured: true,
    icon: <ShoppingBag className="w-6 h-6 text-[#F5B900]" />,
    summary: 'Healthcare e-commerce store — architecture, programmatic SEO, and AI search discoverability.',
    stats: [
      { value: '110K/mo', label: 'Organic Clicks' },
      { value: '₹15L/mo', label: 'Revenue' },
      { value: '2,500/mo', label: 'Orders' },
    ],
    challenge:
      'Medingen had 12,000+ healthcare products with poor URL structure, thin content, and minimal organic visibility.',
    approach:
      'Re-architected 12K+ product URLs. Implemented programmatic SEO templates, topical authority frameworks, and GEO entity optimization.',
    results: [
      'Monthly revenue scaled from ₹2L to ₹15L',
      'Monthly orders grew from 300 to 2,500',
      'Organic clicks grew from 30K to 110K/month',
      'Organic impressions scaled from 1.4M to 4M/month',
      '57 AI mentions generated across Perplexity & ChatGPT',
    ],
    tools: ['Google Search Console', 'Ahrefs', 'DataForSEO API', 'GA4', 'Claude'],
  },
  {
    id: 'party-hall',
    project: 'Party Hall PPC',
    industry: 'Events & Hospitality',
    category: 'ppc',
    year: '2024 – 2025',
    isFeatured: true,
    icon: <Sparkles className="w-6 h-6 text-[#F5B900]" />,
    summary: 'Event venue lead generation — high-converting Meta Ads campaigns and ROAS optimization.',
    stats: [
      { value: '₹40L', label: 'Revenue' },
      { value: '40×', label: 'ROAS' },
      { value: '332', label: 'Leads (1 Ad)' },
    ],
    challenge:
      'Needed consistent, high-quality leads for event hall bookings at a profitable acquisition cost.',
    approach:
      'Executed Meta Ads campaign strategy focusing on local audience targeting, engagement, and lead generation.',
    results: [
      '~₹1L Meta Ads spend deployed',
      '₹40L attributed venue booking revenue',
      '40× ROAS achieved',
      'Up to 332 leads generated from a single campaign',
    ],
    tools: ['Meta Ads Manager', 'Facebook Lead Forms', 'Canva', 'GA4'],
  },
  {
    id: 'rc-solars',
    project: 'RC Solars',
    industry: 'Solar Energy',
    category: 'local',
    year: '2024 – 2025',
    icon: <Sun className="w-6 h-6 text-[#F5B900]" />,
    summary: 'Solar installer — location SEO architecture, GBP optimization, and organic lead generation.',
    stats: [
      { value: '20K/mo', label: 'Impressions' },
      { value: '1.5K/mo', label: 'Clicks' },
      { value: '#1', label: 'Local Rank' },
    ],
    challenge:
      'Zero organic search presence in a competitive solar energy market.',
    approach:
      'Built keyword strategy targeting commercial search intent and optimized Google Business Profile for local keywords.',
    results: [
      'Organic impressions grew from 0 to 20K/month',
      '1,500+ monthly organic clicks achieved',
      'Top search visibility for competitive solar queries',
    ],
    tools: ['Google Search Console', 'SEMrush', 'Google Business Profile', 'GA4'],
  },
  {
    id: 'boldborne',
    project: 'Boldborne Solar — Dubai',
    industry: 'Solar Energy (UAE)',
    category: 'local',
    year: '2024',
    icon: <Globe className="w-6 h-6 text-[#F5B900]" />,
    summary: 'International SEO strategy — UAE solar market keyword mapping and commercial landing pages.',
    stats: [
      { value: 'UAE', label: 'Market' },
      { value: 'EPC SEO', label: 'Focus' },
      { value: '100%', label: 'Custom Map' },
    ],
    challenge:
      'Establishing organic search visibility in the UAE commercial solar market.',
    approach:
      'Conducted UAE-specific keyword research and planned SEO-optimized website architecture.',
    results: [
      'Comprehensive UAE solar keyword strategy delivered',
      'SEO-optimized international website architecture planned',
    ],
    tools: ['Ahrefs', 'SEMrush', 'Google Search Console'],
  },
  {
    id: 'sri-vetrivel',
    project: 'Sri Vetrivel Garments',
    industry: 'Garments & Textiles',
    category: 'local',
    year: '2024',
    icon: <Building className="w-6 h-6 text-[#F5B900]" />,
    summary: 'Textile business — local search optimization and location-targeted recruitment PPC.',
    stats: [
      { value: 'Local SEO', label: 'Strategy' },
      { value: 'GBP', label: 'Optimized' },
      { value: 'PPC', label: 'Recruitment' },
    ],
    challenge:
      'Building local business visibility and executing targeted worker recruitment campaigns.',
    approach:
      'Optimized Google Business Profile and implemented Meta Ads recruitment campaigns.',
    results: [
      'Improved local search visibility and map pack presence',
      'Successful worker recruitment via targeted campaigns',
    ],
    tools: ['Google Business Profile', 'Meta Ads Manager', 'Google Search Console'],
  },
  {
    id: 'hydraulic',
    project: 'Hydraulic Equipment',
    industry: 'Industrial B2B',
    category: 'ecommerce',
    year: '2024',
    icon: <Wrench className="w-6 h-6 text-[#F5B900]" />,
    summary: 'Industrial supplier — commercial search intent mapping and catalog product SEO.',
    stats: [
      { value: 'Catalog', label: 'SEO' },
      { value: 'B2B', label: 'Intent' },
      { value: 'On-Page', label: 'Complete' },
    ],
    challenge:
      'Disorganized industrial product website with zero commercial keyword rankings.',
    approach:
      'Created structured B2B catalog architecture and completed on-page optimization.',
    results: [
      'Complete SEO architecture designed and implemented',
      'On-page optimization across full equipment catalog',
    ],
    tools: ['Ahrefs', 'Google Search Console', 'WordPress'],
  },
];

export default function CaseStudies() {
  const [filter, setFilter] = useState<'all' | 'ecommerce' | 'local' | 'ppc'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredStudies = filter === 'all'
    ? caseStudies
    : caseStudies.filter(cs => cs.category === filter);

  return (
    <section id="work" className="scroll-mt-20 py-20 sm:py-28 bg-[#001010] border-t border-[#0A2424]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header with Filter Pills */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <AnimateOnScroll animation="fade-in">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5B900]">
              MY PORTFOLIO
            </span>
            <h2 className="mt-3 font-extrabold text-3xl sm:text-5xl text-[#F5F5F5] tracking-tight">
              Featured Works
            </h2>
          </AnimateOnScroll>

          {/* Filter Pills */}
          <AnimateOnScroll animation="fade-in" delay={100}>
            <div className="flex flex-wrap items-center gap-2 bg-[#001818] border border-[#0A2424] p-1.5 rounded-xl">
              {[
                { label: 'All', value: 'all' },
                { label: 'E-commerce SEO', value: 'ecommerce' },
                { label: 'Local SEO', value: 'local' },
                { label: 'PPC Ads', value: 'ppc' },
              ].map((pill) => (
                <button
                  key={pill.value}
                  onClick={() => setFilter(pill.value as any)}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                    filter === pill.value
                      ? 'bg-[#F5B900] text-[#001010] shadow-md'
                      : 'text-[#B8C0C0] hover:text-[#F5F5F5]'
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </AnimateOnScroll>
        </div>

        {/* 2-Column Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {filteredStudies.map((cs, i) => {
            const isOpen = expandedId === cs.id;
            return (
              <AnimateOnScroll key={cs.id} animation="fade-in-up" delay={i * 60}>
                <div
                  className={`liam-card p-6 h-full flex flex-col justify-between ${
                    isOpen ? 'border-[#F5B900] shadow-xl' : ''
                  }`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F5B900]/10 border border-[#F5B900]/20">
                          {cs.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-[#F5F5F5]">
                            {cs.project}
                          </h3>
                          <p className="text-xs text-[#B8C0C0]">
                            {cs.industry} · {cs.year}
                          </p>
                        </div>
                      </div>
                      {cs.isFeatured && (
                        <span className="rounded-full bg-[#F5B900]/10 border border-[#F5B900]/30 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#F5B900]">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-[#B8C0C0] leading-relaxed mb-6">
                      {cs.summary}
                    </p>

                    {/* 3 Mini Stat Blocks */}
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {cs.stats.map((stat, j) => (
                        <div
                          key={j}
                          className="rounded-xl border border-[#0A2424] bg-[#001010]/80 px-2 py-2.5 text-center"
                        >
                          <div className="font-extrabold text-[15px] leading-none text-[#F5B900] sm:text-base font-mono">
                            {stat.value}
                          </div>
                          <div className="mt-1 text-[10px] font-medium uppercase tracking-wide text-[#B8C0C0]">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Toggle button */}
                  <div>
                    <button
                      onClick={() => setExpandedId(isOpen ? null : cs.id)}
                      className="w-full pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-[#F5B900] uppercase tracking-wider hover:text-[#F5F5F5] transition-colors"
                    >
                      <span>{isOpen ? 'Close Case Study' : 'View Case Study'}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    {isOpen && (
                      <div className="mt-4 pt-4 border-t border-white/10 space-y-4 text-sm text-[#B8C0C0] animate-fade-in">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8C0C0] block mb-1">
                            Challenge
                          </span>
                          <p className="text-xs text-[#F5F5F5]">{cs.challenge}</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8C0C0] block mb-1">
                            Approach
                          </span>
                          <p className="text-xs text-[#F5F5F5]">{cs.approach}</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8C0C0] block mb-1">
                            Results
                          </span>
                          <ul className="space-y-1">
                            {cs.results.map((r, k) => (
                              <li key={k} className="flex items-start gap-2 text-xs text-[#F5F5F5]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#F5B900] mt-1 shrink-0" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
