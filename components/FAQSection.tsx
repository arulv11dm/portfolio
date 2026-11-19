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
    q: 'What does an SEO and ads specialist actually do?',
    a: 'I get your business found on Google and in AI search, and I run paid campaigns that bring in leads or orders. Everything is tracked, so you can see what is working.',
  },
  {
    q: 'Do you work with one type of business?',
    a: 'My work is mostly e-commerce, commercial solar and local businesses. The approach is the same for all of them: find where customers search, fix what is blocking you, and measure revenue.',
  },
  {
    q: 'How long does SEO take to show results?',
    a: 'Technical fixes can show within weeks. Rankings and revenue usually build over 3 to 6 months. Paid ads can bring leads within days but need a few weeks of tuning.',
  },
  {
    q: 'Can you handle SEO, ads, websites and video?',
    a: 'Yes. SEO builds traffic that compounds, ads bring leads now, a fast WordPress site converts them, and AI video gives the ads fresh creative.',
  },
  {
    q: 'How do you measure success?',
    a: 'By revenue and leads, not rankings alone. I use GA4, Search Console and Meta Ads Manager.',
  },
  {
    q: 'How did you get into SEO?',
    a: 'Through engineering. I wanted to know how to increase the value of what a business makes, and search turned out to be the most measurable way to do that.',
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
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] border-t border-[#E5E0D8] relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching Hero & About */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <AnimateOnScroll animation="fade-in">
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200/90 bg-white px-3.5 py-1.5 text-xs sm:text-sm font-medium text-gray-700 shadow-2xs mb-4 sm:mb-5 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
              </span>
              <span>FAQ</span>
            </div>
            <h2
              id="faq-heading"
              className="font-extrabold text-3xl xs:text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.12] tracking-tight text-[#111827]"
            >
              Frequently Asked{' '}
              <span className="text-[#FF5A36]">Questions.</span>
            </h2>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed text-[#4B5563] font-normal">
              What business owners usually ask before working with me.
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
                      ? 'bg-white border-[#FF5A36]/40 shadow-md'
                      : 'bg-white/80 border-gray-200/90 hover:border-[#FF5A36]/30 shadow-2xs'
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full px-6 sm:px-8 py-5 sm:py-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#111827] hover:text-[#FF5A36] transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors shrink-0 ${
                      isOpen
                        ? 'bg-orange-50 border-[#FF5A36]/30 text-[#FF5A36]'
                        : 'bg-[#FAF8F5] border-gray-200 text-gray-500'
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2 text-sm sm:text-base text-[#4B5563] leading-relaxed border-t border-gray-100 animate-fade-in font-normal">
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
