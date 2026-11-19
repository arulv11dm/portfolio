'use client';

import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { Search, Eye, TrendingUp, BarChart2, CheckCircle, X, ExternalLink, ShieldCheck } from 'lucide-react';

interface ProofItem {
  id: string;
  title: string;
  category: string;
  metricHighlight: string;
  description: string;
  visualType: 'gsc' | 'analytics' | 'rankings' | 'audit' | 'meta' | 'merchant' | 'automation';
  details: string[];
}

const proofList: ProofItem[] = [
  {
    id: 'gsc-growth',
    title: 'Google Search Console Growth Curve',
    category: 'ORGANIC SEARCH DATA',
    metricHighlight: '1.4M → 4M Impressions | 30K → 110K Clicks',
    description: 'Documented 12-month exponential organic trajectory for Medingen Healthcare after complete URL re-architecture.',
    visualType: 'gsc',
    details: [
      'Zero search penalties through seamless 301 canonical redirects',
      'Index coverage expanded across 12,000+ programmatic product URLs',
      'Average CTR improved by 38% through optimized schema title/meta formats',
    ],
  },
  {
    id: 'ga4-revenue',
    title: 'GA4 Revenue & Purchase Event Tracking',
    category: 'E-COMMERCE ATTRIBUTION',
    metricHighlight: '₹2L → ₹15L/mo Scaled Revenue',
    description: 'Google Analytics 4 e-commerce conversion tracking showing monthly order growth from 300 to 2,500 units.',
    visualType: 'analytics',
    details: [
      'Full purchase, add_to_cart, and view_item GTM event taxonomy',
      'Accurate attribution between organic search and paid acquisition channels',
      '2,500 monthly transactions tracked with 99.4% attribution accuracy',
    ],
  },
  {
    id: 'serp-rankings',
    title: 'Commercial Intent #1 SERP Rankings',
    category: 'KEYWORD VISIBILITY',
    metricHighlight: '#1 Rank on Competitive Solar & Medical Queries',
    description: 'First-page and position #1 search rankings achieved for high-ticket commercial solar and e-commerce buyer keywords.',
    visualType: 'rankings',
    details: [
      'RC Solars ranked #1 in target municipal geographic zones',
      'High commercial search intent targeting yielded high direct phone inquiries',
      'Zero-to-20,000 monthly impressions achieved within 6 months',
    ],
  },
  {
    id: 'meta-roas',
    title: 'Meta Ads Manager 40× ROAS Campaign',
    category: 'PAID PERFORMANCE',
    metricHighlight: '₹1L Ad Spend → ₹40L Venue Revenue',
    description: 'Targeted local event lead campaign delivering 332 qualified event inquiries with 40× attributed return on ad spend.',
    visualType: 'meta',
    details: [
      'High-converting on-Facebook native instant lead form funnel',
      'Hyper-localized demographic and radius interest targeting',
      'Lowest customer acquisition cost in the local event venue sector',
    ],
  },
  {
    id: 'tech-audit',
    title: 'Core Web Vitals & Technical Health Audit',
    category: 'TECHNICAL EXCELLENCE',
    metricHighlight: '98/100 Mobile Performance Score',
    description: 'Full-scope Screaming Frog & PageSpeed audit eliminating DOM hydration lag, render-blocking JS, and duplicate canonicals.',
    visualType: 'audit',
    details: [
      'Cumulative Layout Shift (CLS) reduced to < 0.02 across all templates',
      'Largest Contentful Paint (LCP) optimized to 1.4 seconds on mobile',
      'Proper JSON-LD structured data validated without errors or warnings',
    ],
  },
  {
    id: 'geo-ai-citations',
    title: 'GEO & AI Search Engine Citations',
    category: 'AI SEARCH OPTIMIZATION',
    metricHighlight: '57 AI Mentions | 1.5K Cited Pages',
    description: 'Generative Engine Optimization footprint across ChatGPT, Google AI Overviews, Google AI Mode, and Gemini.',
    visualType: 'automation',
    details: [
      '57 verified AI mentions across ChatGPT, Google AI Overviews, Google AI Mode, and Gemini',
      '1,500 product & category pages indexed as authoritative citation sources',
      'Structured JSON-LD schema & entity graphs enabling LLM-readable product discovery',
    ],
  },
];

export default function ProofOfWorkSection() {
  const [selectedProof, setSelectedProof] = useState<ProofItem | null>(null);

  return (
    <section
      id="proof"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] border-t border-[#E5E0D8] relative overflow-hidden"
      aria-labelledby="proof-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching Hero & About */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <AnimateOnScroll animation="fade-in">
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200/90 bg-white px-3.5 py-1.5 text-xs sm:text-sm font-medium text-gray-700 shadow-2xs mb-4 sm:mb-5 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
              </span>
              <span>Proof of Work</span>
            </div>
            <h2
              id="proof-heading"
              className="font-extrabold text-3xl xs:text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.12] tracking-tight text-[#111827]"
            >
              Real projects.{' '}
              <span className="text-[#FF5A36]">Real Search Console access.</span>
            </h2>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed text-[#4B5563] font-normal">
              These aren&apos;t case studies on paper. I own and manage the live Google Search Console properties for the businesses I&apos;ve worked with — tracking impressions, clicks and rankings directly from the source.
            </p>

            {/* 3 Verification Bullets */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs sm:text-sm font-semibold text-[#111827]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF5A36]" />
                <span>Direct GSC &amp; GA4 access across client properties</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#10B981]" />
                <span>Verified Owner properties</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#FF5A36]" />
                <span>Every result traceable to real search data</span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Masonry / Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {proofList.map((proof, index) => (
            <AnimateOnScroll key={proof.id} animation="fade-in-up" delay={index * 90}>
              <div
                onClick={() => setSelectedProof(proof)}
                className="group rounded-3xl border border-gray-200/90 bg-white p-7 sm:p-8 h-full flex flex-col justify-between hover:border-[#FF5A36]/40 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg cursor-pointer"
              >
                <div>
                  {/* Top Category Badge & Inspect Icon */}
                  <div className="flex items-center justify-between pb-5 border-b border-gray-100">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#FF5A36]">
                      {proof.category}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF8F5] border border-gray-200 group-hover:border-[#FF5A36] group-hover:text-[#FF5A36] transition-colors text-xs text-[#6B7280]">
                      <Eye className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Title & Metric Highlight */}
                  <div className="mt-5">
                    <h3 className="font-extrabold text-xl text-[#111827] tracking-tight group-hover:text-[#FF5A36] transition-colors">
                      {proof.title}
                    </h3>
                    <div className="mt-2 text-xs font-mono font-bold text-[#FF5A36]">
                      {proof.metricHighlight}
                    </div>
                    <p className="mt-3 text-sm sm:text-[15px] text-[#4B5563] leading-relaxed">
                      {proof.description}
                    </p>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#6B7280] group-hover:text-[#FF5A36] transition-colors">
                  <span>View Proof Breakdown</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* Interactive Lightbox / Modal */}
      {selectedProof && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fade-in"
          onClick={() => setSelectedProof(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-2xl text-[#111827]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProof(null)}
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF8F5] border border-gray-200 text-[#6B7280] hover:border-[#FF5A36] hover:text-[#111827] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF5A36] block mb-2">
                {selectedProof.category}
              </span>
              <h3 className="font-extrabold text-2xl sm:text-3xl text-[#111827] tracking-tight">
                {selectedProof.title}
              </h3>
              <div className="mt-2 text-sm font-mono font-bold text-[#FF5A36]">
                {selectedProof.metricHighlight}
              </div>
              <p className="mt-4 text-base text-[#4B5563] leading-relaxed">
                {selectedProof.description}
              </p>
            </div>

            {/* Evidence Checklist */}
            <div className="mt-8 pt-6 border-t border-gray-200/90 space-y-3.5">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#111827] block mb-2">
                Verified Implementation Checklist:
              </span>
              {selectedProof.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-[#374151]">
                  <CheckCircle className="w-4 h-4 text-[#10B981] mt-1 shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-6 border-t border-gray-200/90 flex items-center justify-between">
              <span className="text-xs text-[#6B7280] font-mono">
                Verified Data · Client-Attributed
              </span>
              <button
                onClick={() => setSelectedProof(null)}
                className="px-6 py-2.5 rounded-full bg-[#FF5A36] text-xs font-bold uppercase tracking-wider text-white hover:bg-[#E84E2C] transition-colors cursor-pointer shadow-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
