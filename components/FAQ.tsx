'use client';

import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const faqs = [
  {
    q: 'What does an SEO & PPC Specialist do?',
    a: 'An SEO & PPC Specialist handles both organic search engine optimization and paid advertising campaigns. I optimize website architecture, technical health, on-page content, and programmatic landing pages to drive organic traffic, while simultaneously designing targeted Meta Ads and search campaigns to convert paid traffic into qualified leads and sales.',
  },
  {
    q: 'Do you work with e-commerce businesses?',
    a: 'Yes. E-commerce SEO is one of my core focus areas. For Medingen Healthcare, I re-architected 12,000+ product URLs, implemented structured product data, built scalable category structures, and helped scale monthly revenue from ₹2L to ₹15L and monthly orders from 300 to 2,500.',
  },
  {
    q: 'What is Programmatic SEO?',
    a: 'Programmatic SEO is the practice of creating large scale, high-quality, search-optimized pages using structured data templates and automation. Instead of creating pages manually one by one, programmatic SEO allows a business to target thousands of long-tail search queries automatically while maintaining strong quality, internal linking, and user experience.',
  },
  {
    q: 'What is AI Search / Generative Engine Optimization (GEO)?',
    a: 'AI Search / GEO focuses on ensuring your brand and content are referenced, cited, and recommended by modern AI engines like Perplexity, ChatGPT, and Google Search Generative Experience. It involves structuring entity data, establishing topical authority, and optimizing LLM-readable content to capture visibility in conversational search.',
  },
  {
    q: 'Do you offer freelance SEO consulting?',
    a: 'Yes, I am available for freelance consulting, full SEO audits, technical architecture planning, programmatic SEO implementation, and performance marketing campaign management for selected clients.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="scroll-mt-20 py-20 sm:py-28 bg-[#0B1315] border-t border-white/10" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <AnimateOnScroll animation="fade-in">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB800]">
            TESTIMONIALS &amp; FAQS
          </span>
          <h2
            id="faq-heading"
            className="mt-3 font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Frequently Asked Questions
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-in-up" delay={150}>
          <p className="mt-4 text-gray-300 text-base sm:text-lg mb-12">
            Clear answers about my services, methodologies, and consulting arrangements.
          </p>
        </AnimateOnScroll>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimateOnScroll key={faq.q} animation="fade-in-up" delay={i * 60}>
                <div className="liam-card overflow-hidden">
                  <button
                    onClick={() => toggle(i)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-white text-base sm:text-lg hover:text-[#FFB800] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#FFB800] text-2xl font-normal leading-none shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-gray-300 leading-relaxed border-t border-white/5">
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
