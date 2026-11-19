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
  TrendingUp,
  Globe,
  Video,
} from 'lucide-react';

interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const expertiseList: ExpertiseItem[] = [
  {
    id: 'programmatic-seo',
    title: 'Programmatic SEO',
    description:
      'Automated systems that generate high-quality pages at scale — without sacrificing content quality.',
    icon: <Cpu className="w-5 h-5 text-[#FF5A36]" />,
  },
  {
    id: 'topical-authority',
    title: 'Topical Authority',
    description:
      'Content ecosystems that dominate entire search topics instead of isolated keywords.',
    icon: <Layers className="w-5 h-5 text-[#FF5A36]" />,
  },
  {
    id: 'technical-seo',
    title: 'Technical SEO',
    description:
      'Architecture, schema, Core Web Vitals, internal linking, indexing, image optimization and crawl budget.',
    icon: <Code2 className="w-5 h-5 text-[#FF5A36]" />,
  },
  {
    id: 'ai-search',
    title: 'AI Search (GEO)',
    description:
      "Optimizing for ChatGPT, Claude, Gemini, Perplexity and Google's AI Overviews.",
    icon: <Sparkles className="w-5 h-5 text-[#FF5A36]" />,
  },
  {
    id: 'link-building',
    title: 'Link Building',
    description:
      'Authority-focused outreach, digital PR, guest posting and automation-driven backlink acquisition.',
    icon: <Link2 className="w-5 h-5 text-[#FF5A36]" />,
  },
  {
    id: 'seo-automation',
    title: 'SEO Automation',
    description:
      'Internal SEO tools, reporting dashboards, content automation, SERP monitoring and workflow automation.',
    icon: <Bot className="w-5 h-5 text-[#FF5A36]" />,
  },
  {
    id: 'seo-analytics',
    title: 'SEO Analytics',
    description:
      'Turning Search Console, GA4 and DataForSEO data into dashboards, insights and decisions that compound.',
    icon: <BarChart3 className="w-5 h-5 text-[#FF5A36]" />,
  },
  {
    id: 'paid-growth',
    title: 'Meta & Google Ads',
    description:
      'High-ROI performance marketing across Google Search, Shopping, and Meta Ads designed for profitable acquisition.',
    icon: <TrendingUp className="w-5 h-5 text-[#FF5A36]" />,
  },
  {
    id: 'wordpress-development',
    title: 'WordPress Development',
    description:
      'Fast, SEO-ready WordPress websites built with Elementor, with clean structure, Core Web Vitals, tracking and schema set up from day one.',
    icon: <Globe className="w-5 h-5 text-[#FF5A36]" />,
  },
  {
    id: 'ai-video-creation',
    title: 'AI Video Creation',
    description:
      'AI-generated video ads and short-form content for Meta, Instagram and YouTube, made quickly and tested against real ad results.',
    icon: <Video className="w-5 h-5 text-[#FF5A36]" />,
  },
];

export default function WhatIDoSection() {
  return (
    <section
      id="expertise"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] border-t border-[#E5E0D8] relative overflow-hidden"
      aria-labelledby="expertise-heading"
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
              <span>Services &amp; Expertise</span>
            </div>
            <h2
              id="expertise-heading"
              className="font-extrabold text-3xl xs:text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.12] tracking-tight text-[#111827]"
            >
              SEO, ads, websites and AI video, built around{' '}
              <span className="text-[#FF5A36]">tracked results.</span>
            </h2>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed text-[#4B5563] font-normal">
              From technical audits and search architecture to multi-channel paid funnels — scalable solutions built from engineering principles.
            </p>
          </AnimateOnScroll>
        </div>

        {/* 3x3 Grid of 9 Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {expertiseList.map((item, index) => (
            <AnimateOnScroll key={item.id} animation="fade-in-up" delay={index * 50}>
              <div className="group rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-7 h-full flex flex-col justify-between transition-all duration-300 hover:border-[#FF5A36]/40 hover:-translate-y-1 hover:shadow-lg shadow-xs">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200/90 bg-[#FAF8F5] mb-5 group-hover:border-[#FF5A36]/40 group-hover:bg-orange-50/50 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="font-extrabold text-lg sm:text-xl text-[#111827] group-hover:text-[#FF5A36] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-[#4B5563]">
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
