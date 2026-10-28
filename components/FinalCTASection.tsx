'use client';

import AnimateOnScroll from './AnimateOnScroll';
import { ArrowUpRight, Mail, Phone, Download } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa6';

export default function FinalCTASection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 py-24 sm:py-32 bg-white border-t border-[#E5E0D8] relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Warm ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[130px] opacity-10"
        style={{
          background: 'radial-gradient(circle, #F5B900 0%, #E5E0D8 60%, transparent 80%)',
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <AnimateOnScroll animation="fade-in">
          <div className="inline-flex items-center gap-2.5 mb-6">
            <span className="h-px w-5 bg-[#D97706]" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D97706]">
              Get In Touch
            </span>
            <span className="h-px w-5 bg-[#D97706]" />
          </div>
        </AnimateOnScroll>

        {/* Story-driven closing headline */}
        <AnimateOnScroll animation="fade-in-up" delay={100}>
          <h2
            id="cta-heading"
            className="font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#111827] tracking-tight leading-tight"
          >
            I love talking SEO, AI Search and automation with fellow marketers and founders.
          </h2>
        </AnimateOnScroll>

        {/* Supporting Copy matching Devakar style */}
        <AnimateOnScroll animation="fade-in-up" delay={200}>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Whether you&apos;re looking to scale organic search, dominate AI citations, or run high-ROAS paid funnels — let&apos;s connect.
          </p>
        </AnimateOnScroll>

        {/* Action Buttons */}
        <AnimateOnScroll animation="fade-in-up" delay={300}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <a
              href="https://www.linkedin.com/in/arul-seo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F5B900] px-7 py-3.5 text-sm font-bold text-[#111827] shadow-sm transition-all hover:bg-[#FFC107] hover:shadow-md hover:-translate-y-0.5"
            >
              <FaLinkedin className="w-4 h-4 text-[#111827]" />
              <span>Connect on LinkedIn</span>
            </a>

            <a
              href="mailto:arulv11dm@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E5E0D8] bg-[#FAF8F5] px-6 py-3.5 text-sm font-semibold text-[#111827] transition-colors hover:border-[#D97706] hover:text-[#D97706] shadow-2xs"
            >
              <Mail className="w-4 h-4 text-[#D97706]" />
              <span>arulv11dm@gmail.com</span>
            </a>

            <a
              href="tel:+918940319984"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E5E0D8] bg-[#FAF8F5] px-6 py-3.5 text-sm font-semibold text-[#111827] transition-colors hover:border-[#D97706] hover:text-[#D97706] shadow-2xs"
            >
              <Phone className="w-4 h-4 text-[#D97706]" />
              <span>+91 89403 19984</span>
            </a>

            <a
              href="/Arulraj-SEO-PPC-Specialist-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E5E0D8] bg-white px-6 py-3.5 text-sm font-bold text-[#111827] shadow-2xs hover:border-[#D97706] hover:text-[#D97706] hover:bg-[#FAF8F5] transition-all"
            >
              <Download className="w-4 h-4 text-[#D97706]" />
              <span>Resume PDF</span>
            </a>
          </div>
        </AnimateOnScroll>

        {/* Emotion Closing Note */}
        <AnimateOnScroll animation="fade-in" delay={400}>
          <div className="mt-16 pt-8 border-t border-[#E5E0D8]">
            <p className="text-xs sm:text-sm font-mono tracking-wider text-[#6B7280] uppercase">
              Still learning · Still building · Still growing
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
