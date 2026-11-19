'use client';

import AnimateOnScroll from './AnimateOnScroll';
import { Mail, Phone } from 'lucide-react';
import { FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa6';

export default function FinalCTASection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-white border-t border-[#E5E0D8] relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Warm ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[130px] opacity-10"
        style={{
          background: 'radial-gradient(circle, #FF5A36 0%, #FAF8F5 60%, transparent 80%)',
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <AnimateOnScroll animation="fade-in">
          {/* Top Status Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200/90 bg-[#F9FAFB] px-3.5 py-1.5 text-xs sm:text-sm font-medium text-gray-700 shadow-2xs mb-4 sm:mb-5 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
            </span>
            <span>Get In Touch</span>
          </div>
        </AnimateOnScroll>

        {/* Story-driven closing headline */}
        <AnimateOnScroll animation="fade-in-up" delay={80}>
          <h2
            id="cta-heading"
            className="font-extrabold text-3xl xs:text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.12] tracking-tight text-[#111827]"
          >
            Want more leads or orders from Google and Meta?{' '}
            <span className="text-[#FF5A36]">Let&apos;s talk.</span>
          </h2>
        </AnimateOnScroll>

        {/* Supporting Copy */}
        <AnimateOnScroll animation="fade-in-up" delay={140}>
          <p className="mt-4 sm:mt-5 max-w-2xl mx-auto text-base sm:text-lg text-[#4B5563] leading-relaxed font-normal">
            Whether you&apos;re looking to scale organic search, dominate AI citations, or run high-ROAS paid funnels — let&apos;s connect.
          </p>
        </AnimateOnScroll>

        {/* Action Buttons matching Hero style */}
        <AnimateOnScroll animation="fade-in-up" delay={200}>
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            {/* Primary Coral Pill Button */}
            <a
              href="https://wa.me/918940319984?text=Hi%20Arulraj%20V,%20I%20would%20like%20to%20discuss%20growing%20my%20business%20online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#FF5A36] hover:bg-[#E84E2C] text-white font-semibold px-7 py-3.5 sm:py-4 text-sm sm:text-base shadow-md shadow-[#FF5A36]/25 transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer group"
            >
              <FaWhatsapp className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
              <span>Let&apos;s Discuss Growth</span>
            </a>

            {/* LinkedIn Pill */}
            <a
              href="https://www.linkedin.com/in/arulraj-v11/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-gray-200/90 bg-white hover:bg-gray-50/90 px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-[#111827] shadow-2xs transition-all hover:-translate-y-0.5 cursor-pointer group"
            >
              <FaLinkedin className="w-4 h-4 text-[#0077B5]" />
              <span>LinkedIn</span>
            </a>

            {/* Instagram Pill */}
            <a
              href="https://www.instagram.com/arulrajav"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-gray-200/90 bg-white hover:bg-gray-50/90 px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-[#111827] shadow-2xs transition-all hover:-translate-y-0.5 cursor-pointer group"
            >
              <FaInstagram className="w-4 h-4 text-[#E4405F]" />
              <span>Instagram</span>
            </a>

            {/* Email Pill */}
            <a
              href="mailto:arulv11dm@gmail.com"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-gray-200/90 bg-white hover:bg-gray-50/90 px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-[#111827] shadow-2xs transition-all hover:-translate-y-0.5 cursor-pointer group"
            >
              <Mail className="w-4 h-4 text-[#FF5A36]" />
              <span>arulv11dm@gmail.com</span>
            </a>

            {/* Phone Pill */}
            <a
              href="tel:+918940319984"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-gray-200/90 bg-white hover:bg-gray-50/90 px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-[#111827] shadow-2xs transition-all hover:-translate-y-0.5 cursor-pointer group"
            >
              <Phone className="w-4 h-4 text-[#FF5A36]" />
              <span>+91 89403 19984</span>
            </a>
          </div>
        </AnimateOnScroll>

        {/* Emotional Closing Note */}
        <AnimateOnScroll animation="fade-in" delay={260}>
          <div className="mt-14 sm:mt-16 pt-8 border-t border-gray-200/80 w-full">
            <p className="text-xs sm:text-sm font-mono tracking-wider text-[#6B7280] uppercase">
              SEO · Meta Ads · Google Ads · WordPress · AI Video
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
