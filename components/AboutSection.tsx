'use client';

import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';
import { ArrowUpRight, Download, GraduationCap } from 'lucide-react';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#E5E0D8] overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/3 left-[-150px] w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
        style={{
          background: 'radial-gradient(circle, #F5B900 0%, transparent 70%)',
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          {/* LEFT SIDE: Editorial Title & Personal Image */}
          <div className="lg:col-span-5 flex flex-col">
            <AnimateOnScroll animation="fade-in">
              <h2
                id="about-heading"
                className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#111827] tracking-tight leading-none mb-8 sm:mb-10"
              >
                WHO <span className="text-[#D97706]">I AM</span>
              </h2>
            </AnimateOnScroll>

            {/* Large Personal Image with Organic Editorial Treatment */}
            <AnimateOnScroll animation="fade-in-up" delay={150}>
              <div className="relative rounded-[2rem] p-2.5 bg-white border border-[#E5E0D8] shadow-md group">
                <div className="relative aspect-[1024/939] w-full rounded-[1.5rem] overflow-hidden bg-[#FAF8F5]">
                  <Image
                    src="/about-arul.jpg"
                    alt="Arul — SEO Specialist & Growth Partner at work"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    priority
                  />
                </div>

                {/* Small Caption Below Photo */}
                <div className="pt-4 pb-2 px-3 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D97706]">
                    ENGINEER → DIGITAL MARKETER
                  </span>
                  <span className="text-xs text-[#6B7280] font-mono">
                    Chennai, India
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* RIGHT SIDE: Personal Story & Emphasized Quotes */}
          <div className="lg:col-span-7 flex flex-col pt-2 lg:pt-4">
            {/* Eyebrow */}
            <AnimateOnScroll animation="fade-in">
              <div className="inline-flex items-center gap-2.5 mb-4">
                <span className="h-px w-5 bg-[#D97706]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D97706]">
                  MY STORY
                </span>
              </div>
            </AnimateOnScroll>

            {/* Main Story Heading */}
            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <h3 className="font-extrabold text-3xl sm:text-4xl lg:text-[2.65rem] text-[#111827] tracking-tight leading-[1.15]">
                An Engineer Who Found His Way <br />
                <span className="text-[#D97706]">Into Digital Marketing</span>
              </h3>
            </AnimateOnScroll>

            {/* Story Paragraphs */}
            <AnimateOnScroll animation="fade-in-up" delay={200}>
              <div className="mt-8 space-y-5 text-base sm:text-lg text-[#4B5563] leading-relaxed font-normal">
                <p>
                  I started my career as an engineer graduating from Government College of Technology, Coimbatore (GCT), where I learned to think in systems, solve complex problems, and engineer solutions from first principles.
                </p>

                <p>
                  During COVID, I spent time with my family, helping with our groundnut farming and cattle. That experience sparked a simple question:
                </p>

                <div className="py-2 pl-4 border-l-2 border-[#D97706]">
                  <p className="text-lg sm:text-xl font-medium italic text-[#111827]">
                    &ldquo;How can we increase the value of what we produce?&rdquo;
                  </p>
                </div>

                <p>
                  I started exploring how branding, technical architecture, and digital search could help high-value products reach real customers at scale.
                </p>

                <p>
                  Today, with over 2 years and 4 months of dedicated hands-on experience, I help businesses scale organic visibility, dominate search intent, and run high-ROAS Meta &amp; Google ad campaigns.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Education Badge */}
            <AnimateOnScroll animation="fade-in-up" delay={250}>
              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white border border-[#E5E0D8] p-3.5 shadow-2xs">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-[#D97706] shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm text-[#4B5563]">
                  <span className="font-bold text-[#111827]">Bachelor of Engineering</span> · Government College of Technology, Coimbatore · Certified in SEO &amp; Google Ads
                </div>
              </div>
            </AnimateOnScroll>

            {/* Visually Emphasized Quote Box */}
            <AnimateOnScroll animation="fade-in-up" delay={300}>
              <div className="mt-8 rounded-2xl bg-white border border-[#E5E0D8] p-6 sm:p-8 relative overflow-hidden shadow-xs">
                <div
                  className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-[#F5B900]/15 blur-2xl"
                  aria-hidden
                />
                <div className="relative z-10 flex flex-col gap-2">
                  <p className="text-xl sm:text-2xl font-bold text-[#D97706] tracking-tight font-serif italic">
                    &ldquo;One question changed my direction.&rdquo;
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-[#111827]">
                    &ldquo;How can I make this better?&rdquo;
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* CTA Links: Download Resume & Connect */}
            <AnimateOnScroll animation="fade-in-up" delay={350}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/Arulraj-SEO-PPC-Specialist-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#F5B900] px-6 py-3 text-sm font-bold text-[#111827] shadow-sm transition-all hover:bg-[#FFC107] hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                >
                  <Download className="w-4 h-4 stroke-[2.5]" />
                  <span>Download Resume (PDF)</span>
                </a>

                <a
                  href="mailto:arulv11dm@gmail.com"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#E5E0D8] bg-white px-6 py-3 text-sm font-bold text-[#111827] shadow-2xs transition-all hover:border-[#D97706] hover:text-[#D97706] hover:bg-[#FAF8F5] cursor-pointer"
                >
                  <span>Let&apos;s Discuss Growth</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
