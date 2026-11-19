'use client';

import AnimateOnScroll from './AnimateOnScroll';
import {
  User,
  GraduationCap,
  MapPin,
  Briefcase,
  Award,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

const personalDetails = [
  {
    icon: User,
    label: 'Name:',
    value: 'Arulraj V',
  },
  {
    icon: GraduationCap,
    label: 'Education:',
    value: 'B.E. – GCT Coimbatore',
  },
  {
    icon: MapPin,
    label: 'Based In:',
    value: 'India',
  },
  {
    icon: Briefcase,
    label: 'Specialisation:',
    value: 'SEO & Performance Marketing',
  },
  {
    icon: Award,
    label: 'Certifications:',
    value: 'SEO & Google Ads',
  },
];

const metrics = [
  {
    value: '02+',
    label: 'Years Experience',
    highlight: false,
  },
  {
    value: '₹45L+',
    label: 'Attributed Revenue',
    highlight: true,
  },
  {
    value: '110K+',
    label: 'Monthly Clicks',
    highlight: false,
  },
  {
    value: '4M+',
    label: 'Monthly Impressions',
    highlight: true,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-white border-t border-[#E5E0D8] overflow-hidden"
      aria-label="About Me"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        <div className="absolute top-[15%] left-[5%] w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#FF5A36]/8 via-[#F5B900]/5 to-transparent blur-3xl opacity-70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Story, Quote, and Action Buttons */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Top Status Pill: "About Me" with live pulse beacon */}
            <AnimateOnScroll animation="fade-in">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200/90 bg-[#F9FAFB] px-3.5 py-1.5 text-xs sm:text-sm font-medium text-gray-700 shadow-2xs mb-4 sm:mb-5 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
                </span>
                <span>About Me</span>
              </div>
            </AnimateOnScroll>

            {/* Headline matching Hero section font, size & weight */}
            <AnimateOnScroll animation="fade-in-up" delay={40}>
              <h2 className="font-extrabold text-3xl xs:text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.12] tracking-tight text-[#111827]">
                An Engineer Who Found His Way Into{' '}
                <span className="text-[#FF5A36]">Digital Marketing.</span>
              </h2>
            </AnimateOnScroll>

            {/* Intro text */}
            <AnimateOnScroll animation="fade-in-up" delay={80}>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#4B5563] font-normal">
                I&apos;m <strong className="font-bold text-[#111827]">Arulraj V</strong>, an engineering graduate from Government College of Technology, Coimbatore (GCT). My journey from engineering to digital marketing started with a simple question:
              </p>
            </AnimateOnScroll>

            {/* Quote Callout Pill */}
            <AnimateOnScroll animation="fade-in-up" delay={120}>
              <div className="my-5 inline-block w-fit max-w-full rounded-2xl bg-[#FFF5F2] border border-[#FF5A36]/20 px-5 py-3 shadow-2xs">
                <p className="font-bold text-base sm:text-lg text-[#FF5A36]">
                  &ldquo;How can we increase the value of what we produce?&rdquo;
                </p>
              </div>
            </AnimateOnScroll>

            {/* Follow-up text */}
            <AnimateOnScroll animation="fade-in-up" delay={160}>
              <p className="text-base sm:text-lg leading-relaxed text-[#4B5563] font-normal">
                Today, I combine technical thinking, SEO and performance marketing to help businesses improve their digital growth.
              </p>
            </AnimateOnScroll>

            {/* Action CTA matching Hero style */}
            <AnimateOnScroll animation="fade-in-up" delay={200}>
              <div className="mt-8 flex items-center">
                <a
                  href="https://wa.me/918940319984?text=Hi%20Arulraj%20V,%20I%20would%20like%20to%20discuss%20growing%20my%20business%20online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#FF5A36] hover:bg-[#E84E2C] text-white font-semibold px-7 py-3.5 sm:py-4 text-sm sm:text-base shadow-md shadow-[#FF5A36]/25 transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer group"
                >
                  <FaWhatsapp className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
                  <span>Let&apos;s Discuss Growth</span>
                </a>
              </div>
            </AnimateOnScroll>
          </div>

          {/* RIGHT COLUMN: Metadata Info List & Stats Matrix */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full pt-4 lg:pt-8 lg:pl-6">
            
            {/* Personal Details List */}
            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <div className="space-y-5 sm:space-y-6">
                {personalDetails.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 text-sm sm:text-base"
                    >
                      <div className="w-7 sm:w-8 shrink-0 flex items-center justify-center text-[#FF5A36]">
                        <Icon className="h-6 w-6 stroke-[1.8]" />
                      </div>
                      <div className="flex items-center gap-2 sm:gap-6 min-w-0">
                        <span className="font-bold text-[#111827] w-28 sm:w-36 shrink-0">
                          {item.label}
                        </span>
                        <span className="font-normal text-[#374151]">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </AnimateOnScroll>

            {/* Subtle Divider Line */}
            <div className="my-8 sm:my-10 border-t border-gray-200/90 w-full" />

            {/* Bottom 4-Column Stats Matrix */}
            <AnimateOnScroll animation="fade-in-up" delay={180}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0">
                {metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:border-r sm:border-gray-200/90 last:sm:border-r-0 sm:px-4 first:sm:pl-0 last:sm:pr-0"
                  >
                    <span
                      className={`font-extrabold text-2xl xs:text-3xl sm:text-3xl lg:text-[2.5rem] leading-none tracking-tight ${
                        metric.highlight ? 'text-[#FF5A36]' : 'text-[#111827]'
                      }`}
                    >
                      {metric.value}
                    </span>
                    <span className="text-xs sm:text-[13px] text-[#6B7280] font-medium mt-2 leading-snug">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

          </div>

        </div>
      </div>
    </section>
  );
}
