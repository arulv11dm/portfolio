'use client';

import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

const faqList: FAQItem[] = [
  {
    q: 'What does a SaaS SEO expert actually do?',
    a: 'A SaaS SEO expert grows a software product\'s organic traffic and signups through commercial landing pages, topical authority, technical SEO and AI Search optimization. You can see exactly how I do this in my case studies.',
  },
  {
    q: 'Do you only work with SaaS companies?',
    a: 'No. While I specialize in SaaS SEO, I\'ve driven organic growth for eCommerce brands and local businesses too — from a healthcare store (Medingen) to local service businesses (RC Solars, Amit Services).',
  },
  {
    q: 'What is Programmatic SEO and AI Search (GEO)?',
    a: 'Programmatic SEO builds hundreds of high-quality pages from structured data, while AI Search Optimization (GEO) makes your brand discoverable inside ChatGPT, Claude, Gemini and Perplexity. I\'ve shipped 400+ programmatic pages and grown AI-driven traffic.',
  },
  {
    q: 'How long does SEO take to show results?',
    a: 'Most projects see meaningful movement in 3–6 months and compounding growth after that. At BoldDesk I grew the blog to 20K monthly visitors within six months.',
  },
  {
    q: 'How did you get into SEO?',
    a: 'It started in my final year of engineering with a single website I built to understand Google. That curiosity became a career — read my full story in the About section.',
  },
  {
    q: 'Can you handle both SEO and paid advertising?',
    a: 'Absolutely. That dual capability is one of my strongest advantages. SEO builds long-term organic authority and lowers customer acquisition costs over time, while Meta and Google Ads deliver immediate high-intent traffic, rapid conversion data, and profitable sales.',
  },
  {
    q: 'How do you measure success?',
    a: 'Rankings and traffic are vanity metrics if they don’t generate revenue. I measure success by bottom-line business metrics: qualified inbound inquiries, qualified phone leads, e-commerce transactions, lower cost-per-lead (CPL), and return on ad spend (ROAS).',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first one open

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      className="scroll-mt-20 py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#E5E0D8] relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section Heading (Matching Devakar) */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <AnimateOnScroll animation="fade-in">
            <div className="flex items-center gap-2.5">
              <span className="h-px w-6 bg-[#D97706]" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D97706]">
                FAQ
              </span>
            </div>
            <h2
              id="faq-heading"
              className="mt-4 font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111827] tracking-tight leading-tight"
            >
              Frequently asked questions
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#4B5563]">
              What people usually ask before working with an SEO &amp; growth specialist.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Accordion List (Strictly ONE item open at a time) */}
        <div className="space-y-4">
          {faqList.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimateOnScroll key={faq.q} animation="fade-in-up" delay={i * 50}>
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#D97706]/50 shadow-md'
                      : 'bg-white/80 border-[#E5E0D8] hover:border-[#D97706]/30 shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full px-6 sm:px-8 py-5 sm:py-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#111827] hover:text-[#D97706] transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF8F5] border border-[#E5E0D8] text-[#D97706] shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2 text-sm sm:text-base text-[#4B5563] leading-relaxed border-t border-[#E5E0D8] animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
