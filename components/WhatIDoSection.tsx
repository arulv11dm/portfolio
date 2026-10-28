'use client';

import AnimateOnScroll from './AnimateOnScroll';
import {
  Search,
  Cpu,
  Layers,
  Code2,
  Sparkles,
  Link2,
  Bot,
  BarChart3,
  ShoppingBag,
  TrendingUp,
} from 'lucide-react';
import { SiGoogleads, SiMeta } from 'react-icons/si';

interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const expertiseList: ExpertiseItem[] = [
  {
    id: 'saas-seo',
    title: 'SaaS SEO',
    description:
      'Scaling B2B SaaS through commercial landing pages, topical authority, AI Search optimization and technical SEO.',
    icon: <Search className="w-5 h-5 text-[#D97706]" />,
  },
  {
    id: 'programmatic-seo',
    title: 'Programmatic SEO',
    description:
      'Automated systems that generate high-quality pages at scale — without sacrificing content quality.',
    icon: <Cpu className="w-5 h-5 text-[#D97706]" />,
  },
  {
    id: 'topical-authority',
    title: 'Topical Authority',
    description:
      'Content ecosystems that dominate entire search topics instead of isolated keywords.',
    icon: <Layers className="w-5 h-5 text-[#D97706]" />,
  },
  {
    id: 'technical-seo',
    title: 'Technical SEO',
    description:
      'Architecture, schema, Core Web Vitals, internal linking, indexing, image optimization and crawl budget.',
    icon: <Code2 className="w-5 h-5 text-[#D97706]" />,
  },
  {
    id: 'ai-search',
    title: 'AI Search (GEO)',
    description:
      "Optimizing for ChatGPT, Claude, Gemini, Perplexity and Google's AI Overviews.",
    icon: <Sparkles className="w-5 h-5 text-[#D97706]" />,
  },
  {
    id: 'link-building',
    title: 'Link Building',
    description:
      'Authority-focused outreach, digital PR, guest posting and automation-driven SaaS backlink acquisition.',
    icon: <Link2 className="w-5 h-5 text-[#D97706]" />,
  },
  {
    id: 'seo-automation',
    title: 'SEO Automation',
    description:
      'Internal SEO tools, reporting dashboards, content automation, SERP monitoring and workflow automation.',
    icon: <Bot className="w-5 h-5 text-[#D97706]" />,
  },
  {
    id: 'seo-analytics',
    title: 'SEO Analytics',
    description:
      'Turning Search Console, GA4 and DataForSEO data into dashboards, insights and decisions that compound.',
    icon: <BarChart3 className="w-5 h-5 text-[#D97706]" />,
  },
  {
    id: 'paid-growth',
    title: 'Meta & Google Ads',
    description:
      'High-ROI performance marketing across Google Search, Shopping, and Meta Ads designed for profitable acquisition.',
    icon: <TrendingUp className="w-5 h-5 text-[#D97706]" />,
  },
];

export default function WhatIDoSection() {
  return (
    <section
      id="expertise"
      className="scroll-mt-20 py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#E5E0D8] relative overflow-hidden"
      aria-labelledby="expertise-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading (Matching Devakar Murugan) */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <AnimateOnScroll animation="fade-in">
            <div className="flex items-center gap-2.5">
              <span className="h-px w-6 bg-[#D97706]" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D97706]">
                Expertise
              </span>
            </div>
            <h2
              id="expertise-heading"
              className="mt-4 font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111827] tracking-tight leading-tight"
            >
              Technical SEO, automation, AI workflows and business-focused strategy under one roof.
            </h2>
          </AnimateOnScroll>
        </div>

        {/* 3x3 Grid of 9 Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {expertiseList.map((item, index) => (
            <AnimateOnScroll key={item.id} animation="fade-in-up" delay={index * 50}>
              <div className="group rounded-3xl border border-[#E5E0D8] bg-white p-6 sm:p-7 h-full flex flex-col justify-between transition-all duration-300 hover:border-[#D97706]/50 hover:-translate-y-1 hover:shadow-md shadow-xs">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#E5E0D8] bg-[#FAF8F5] mb-5 group-hover:border-[#D97706]/40 group-hover:bg-amber-50/50 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="font-extrabold text-lg sm:text-xl text-[#111827] group-hover:text-[#D97706] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
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
