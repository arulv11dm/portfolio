'use client';

import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';
import { ArrowUpRight, Users, Megaphone, BarChart2, Eye, ChevronDown, Link2, TrendingUp } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-20 sm:pt-24 lg:pt-24 pb-6 sm:pb-8 overflow-hidden bg-[#FAF8F5]"
      style={{
        background:
          'radial-gradient(circle at 75% 35%, rgba(245, 185, 0, 0.12) 0%, rgba(250, 248, 245, 0.5) 45%, #FAF8F5 100%), #FAF8F5',
      }}
      aria-label="Hero Section"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full my-auto">
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* LEFT COLUMN: Headline, Value Proposition, Buttons, Socials */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Greeting */}
            <AnimateOnScroll animation="fade-in">
              <div className="text-base sm:text-lg font-semibold text-[#D97706] mb-2 flex items-center gap-1.5">
                <span>Hello, I&apos;m</span>
                <span className="text-[#111827] font-bold">Arul</span>
                <span className="text-xl">👋</span>
              </div>
            </AnimateOnScroll>

            {/* Giant Headline */}
            <AnimateOnScroll animation="fade-in-up" delay={60}>
              <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-[3.8rem] xl:text-[4.2rem] leading-[1.06] tracking-tight text-[#111827]">
                I HELP BUSINESSES <br />
                <span className="text-[#D97706]">GROW ONLINE</span>
              </h1>
            </AnimateOnScroll>

            {/* Supporting Copy */}
            <AnimateOnScroll animation="fade-in-up" delay={120}>
              <p className="mt-4 max-w-lg text-sm sm:text-base leading-relaxed text-[#4B5563]">
                SEO, Meta Ads, Google Ads and Web Solutions to bring more traffic, leads and sales. I create data-driven digital strategies that convert.
              </p>
            </AnimateOnScroll>

            {/* Action Buttons */}
            <AnimateOnScroll animation="fade-in-up" delay={180}>
              <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3.5">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll('#contact');
                  }}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#F5B900] px-7 py-3.5 text-sm font-bold text-[#111827] shadow-sm transition-all hover:bg-[#FFC107] hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Work With Me</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>

                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll('#portfolio');
                  }}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#E5E0D8] bg-white px-7 py-3.5 text-sm font-bold text-[#111827] shadow-xs transition-all hover:border-[#D97706] hover:text-[#D97706] hover:bg-[#FAF8F5] cursor-pointer"
                >
                  <span>View My Work</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </AnimateOnScroll>

            {/* Follow Me Social Row */}
            <AnimateOnScroll animation="fade-in-up" delay={220}>
              <div className="mt-7 sm:mt-8 flex items-center gap-3">
                <span className="text-xs sm:text-sm font-semibold text-[#6B7280] mr-1">
                  Follow Me :
                </span>
                <a
                  href="https://www.linkedin.com/in/arul-seo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E0D8] bg-white text-[#4B5563] hover:border-[#D97706] hover:text-[#D97706] hover:shadow-xs transition-all"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E0D8] bg-white text-[#4B5563] hover:border-[#D97706] hover:text-[#D97706] hover:shadow-xs transition-all"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E0D8] bg-white text-[#4B5563] hover:border-[#D97706] hover:text-[#D97706] hover:shadow-xs transition-all"
                  aria-label="X Twitter"
                >
                  <FaXTwitter className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E0D8] bg-white text-[#4B5563] hover:border-[#D97706] hover:text-[#D97706] hover:shadow-xs transition-all"
                  aria-label="YouTube"
                >
                  <FaYoutube className="w-4 h-4" />
                </a>
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll('#portfolio');
                  }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E0D8] bg-white text-[#4B5563] hover:border-[#D97706] hover:text-[#D97706] hover:shadow-xs transition-all"
                  aria-label="Portfolio link"
                >
                  <Link2 className="w-4 h-4" />
                </a>
              </div>
            </AnimateOnScroll>
          </div>

          {/* RIGHT COLUMN: Arul Portrait with Golden Accent & Floating Service Cards */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <AnimateOnScroll animation="fade-in" delay={150}>
              <div className="relative w-[340px] sm:w-[440px] md:w-[480px] lg:w-[500px] xl:w-[520px] aspect-[4/4.2] flex items-end justify-center">
                
                {/* 1. Golden Splash Backing */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative w-[85%] h-[85%] opacity-90">
                    <Image
                      src="/gold-splash-clean.png"
                      alt=""
                      fill
                      priority
                      className="object-contain filter saturate-120"
                    />
                  </div>
                </div>

                {/* 2. Soft Warm Glow Ambient Halo */}
                <div
                  className="absolute bottom-10 w-[300px] h-[300px] rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, #F5B900 0%, transparent 70%)' }}
                />

                {/* 3. Arul's Real Photo Cutout */}
                <div className="relative w-[82%] h-[92%] z-10">
                  <Image
                    src="/arul-real-cutout.png"
                    alt="Arul — SEO Specialist & Digital Growth Partner"
                    fill
                    priority
                    className="object-contain object-bottom drop-shadow-xl"
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 440px, 520px"
                  />
                </div>

                {/* 4. Floating Service Card: Google SEO (Top Left) */}
                <div className="absolute top-6 -left-2 sm:-left-6 z-20 animate-float-1">
                  <div className="flex items-center gap-2.5 rounded-2xl border border-[#E5E0D8] bg-white/95 backdrop-blur-md px-3.5 py-2.5 shadow-lg shadow-black/5 transition-all hover:scale-105 hover:border-[#D97706]/40">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-50 text-red-500 font-bold text-sm">
                      G
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#111827]">Google SEO</div>
                      <div className="flex items-center gap-1">
                        <span className="flex gap-0.5">
                          <span className="w-1 h-2 bg-[#D97706] rounded-xs" />
                          <span className="w-1 h-3 bg-[#D97706] rounded-xs" />
                          <span className="w-1 h-4 bg-[#D97706] rounded-xs" />
                        </span>
                        <span className="text-[10px] font-semibold text-emerald-600 ml-1">+140%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. Floating Service Card: Meta Ads (Top Right) */}
                <div className="absolute top-10 -right-2 sm:-right-4 z-20 animate-float-2">
                  <div className="flex items-center gap-2.5 rounded-2xl border border-[#E5E0D8] bg-white/95 backdrop-blur-md px-3.5 py-2.5 shadow-lg shadow-black/5 transition-all hover:scale-105 hover:border-[#0668E1]/40">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-[#0668E1] font-bold text-sm">
                      ∞
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#111827]">Meta Ads</div>
                      <div className="text-[10px] font-semibold text-[#6B7280]">
                        4.8x ROAS
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6. Floating Service Card: Google Ads (Middle Left) */}
                <div className="absolute bottom-28 -left-3 sm:-left-8 z-20 animate-float-3">
                  <div className="flex items-center gap-2.5 rounded-2xl border border-[#E5E0D8] bg-white/95 backdrop-blur-md px-3.5 py-2.5 shadow-lg shadow-black/5 transition-all hover:scale-105 hover:border-[#FBBC04]">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-50 text-[#D97706] font-bold text-xs">
                      Ads
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#111827]">Google Ads</div>
                      <div className="text-[10px] font-semibold text-emerald-600">
                        High Intent Leads
                      </div>
                    </div>
                  </div>
                </div>

                {/* 7. Floating Service Card: Web Development (Middle Right) */}
                <div className="absolute bottom-32 -right-3 sm:-right-6 z-20 animate-float-1">
                  <div className="flex items-center gap-2.5 rounded-2xl border border-[#E5E0D8] bg-white/95 backdrop-blur-md px-3.5 py-2.5 shadow-lg shadow-black/5 transition-all hover:scale-105 hover:border-[#D97706]/40">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 font-bold text-xs font-mono">
                      &lt;/&gt;
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#111827]">Web Solutions</div>
                      <div className="text-[10px] font-semibold text-[#6B7280]">
                        High Conversion
                      </div>
                    </div>
                  </div>
                </div>

                {/* 8. Badge: 2+ Years Experience (Bottom Right) */}
                <div className="absolute bottom-4 right-0 sm:right-2 z-20 animate-float-2">
                  <div className="flex items-center gap-2 rounded-full border-2 border-[#F5B900] bg-white px-3.5 py-1.5 shadow-md shadow-black/5">
                    <span className="text-sm font-extrabold text-[#D97706]">2+</span>
                    <span className="text-[11px] font-bold text-[#111827] uppercase tracking-wider">
                      Years Exp.
                    </span>
                  </div>
                </div>

                {/* Script Accent Text */}
                <div className="absolute bottom-1 left-4 z-20 pointer-events-none hidden sm:block">
                  <span className="text-xs font-serif italic text-[#D97706]/90 tracking-wide font-medium">
                    Digital Growth Partner
                  </span>
                </div>

              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* BOTTOM SECTION: 4-Column Stat Box + Scroll Down Indicator */}
        <div className="mt-8 lg:mt-6">
          <AnimateOnScroll animation="fade-in-up" delay={240}>
            {/* Rounded Stats Container matching verified resume metrics */}
            <div className="mx-auto max-w-4xl rounded-2xl border border-[#E5E0D8] bg-white px-6 sm:px-8 py-4 sm:py-5 shadow-sm">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-[#E5E0D8]">
                {/* 1. ₹45L+ Attributed Revenue */}
                <div className="flex flex-col items-center sm:items-start sm:px-6 text-center sm:text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#D97706]" />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#111827] font-mono">
                    ₹45L+
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-[#6B7280] mt-0.5">
                    Attributed Revenue
                  </div>
                </div>

                {/* 2. 110K+ Monthly Clicks */}
                <div className="flex flex-col items-center sm:items-start sm:px-6 text-center sm:text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <BarChart2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#D97706]" />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#111827] font-mono">
                    110K+
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-[#6B7280] mt-0.5">
                    Monthly Clicks
                  </div>
                </div>

                {/* 3. 4M+ Monthly Impressions */}
                <div className="flex flex-col items-center sm:items-start sm:px-6 text-center sm:text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-[#D97706]" />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#111827] font-mono">
                    4M+
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-[#6B7280] mt-0.5">
                    Monthly Impressions
                  </div>
                </div>

                {/* 4. 40× Peak Ad ROAS */}
                <div className="flex flex-col items-center sm:items-start sm:px-6 text-center sm:text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <Megaphone className="w-4 h-4 sm:w-5 sm:h-5 text-[#D97706]" />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#111827] font-mono">
                    40×
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-[#6B7280] mt-0.5">
                    Peak Campaign ROAS
                  </div>
                </div>
              </div>
            </div>

            {/* Mouse Scroll Down Indicator */}
            <div className="flex flex-col items-center justify-center gap-1 mt-4 sm:mt-5">
              <button
                onClick={() => handleScroll('#clients')}
                className="flex flex-col items-center justify-center gap-1 text-[#6B7280] hover:text-[#D97706] transition-colors group cursor-pointer"
                aria-label="Scroll to explore"
              >
                <div className="w-4 h-5 rounded-full border border-[#E5E0D8] group-hover:border-[#D97706] flex items-start justify-center p-1 transition-colors">
                  <div className="w-1 h-1 rounded-full bg-[#D97706] animate-bounce" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
                  SCROLL DOWN
                </span>
                <ChevronDown className="w-3 h-3 text-[#D97706] -mt-1 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
