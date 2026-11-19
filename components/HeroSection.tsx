'use client';

import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { FaLinkedinIn, FaInstagram, FaXTwitter, FaYoutube, FaStar } from 'react-icons/fa6';

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
      className="relative flex flex-col justify-start pt-20 sm:pt-24 lg:pt-26 pb-6 sm:pb-8 overflow-x-clip w-full max-w-full bg-white text-[#111827] selection:bg-[#FF5A36] selection:text-white"
      aria-label="Hero Section"
    >
      {/* Background: Pure white with soft warm ambient glow matching reference */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        {/* Soft warm peach/coral ambient glow behind the portrait */}
        <div className="absolute top-[8%] right-[0%] sm:right-[5%] w-[420px] sm:w-[580px] h-[420px] sm:h-[580px] rounded-full bg-gradient-to-br from-[#FF5A36]/12 via-[#F5B900]/8 to-transparent blur-3xl opacity-80" />
        {/* Soft subtle glow center-top */}
        <div className="absolute -top-[10%] left-[15%] sm:left-[25%] w-[340px] sm:w-[480px] h-[280px] sm:h-[360px] rounded-full bg-gradient-to-b from-orange-50/70 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto z-10">
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full min-w-0">
          
          {/* LEFT COLUMN: Previous High-Craft Editorial Font & Style */}
          <div className="lg:col-span-7 flex flex-col justify-center py-2 lg:py-6 w-full min-w-0">
            {/* Top Status Pill: "SEO & PPC Specialist" with live pulse beacon */}
            <AnimateOnScroll animation="fade-in">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200/90 bg-[#F9FAFB] px-3.5 py-1.5 text-xs sm:text-sm font-medium text-gray-700 shadow-2xs mb-4 sm:mb-5 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
                </span>
                <span>SEO &amp; PPC Specialist</span>
              </div>
            </AnimateOnScroll>

            {/* Greeting */}
            <AnimateOnScroll animation="fade-in" delay={30}>
              <div className="text-base sm:text-lg font-bold text-[#FF5A36] mb-2 sm:mb-3 flex items-center gap-2">
                <span>Hello, I&apos;m Arulraj V</span>
                <span className="text-xl sm:text-2xl animate-pulse">👋</span>
              </div>
            </AnimateOnScroll>

            {/* Giant Editorial Headline in Previous Font & Style */}
            <AnimateOnScroll animation="fade-in-up" delay={60}>
              <h1 className="font-extrabold text-[2.2rem] xs:text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[3.9rem] xl:text-[4.3rem] leading-[1.08] tracking-tight text-[#111827]">
                I help businesses{' '}
                <span className="text-[#FF5A36]">grow online.</span>
              </h1>
            </AnimateOnScroll>

            {/* Supporting Copy */}
            <AnimateOnScroll animation="fade-in-up" delay={120}>
              <p className="mt-4 sm:mt-5 max-w-xl text-base sm:text-lg lg:text-[1.1rem] leading-relaxed text-[#4B5563] font-normal">
                SEO, Meta Ads, Google Ads and Web Solutions to bring more traffic, leads and sales — creating data-driven digital strategies that convert.
              </p>
            </AnimateOnScroll>

            {/* Dual Pill Action Buttons in Previous Style */}
            <AnimateOnScroll animation="fade-in-up" delay={180}>
              <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none">
                {/* Primary Coral Pill Button */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll('#contact');
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF5A36] hover:bg-[#E84E2C] text-white font-semibold px-7 py-3.5 sm:py-4 text-sm sm:text-base shadow-md shadow-[#FF5A36]/25 transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer group"
                >
                  <span>Work With Me</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-1" />
                </a>

                {/* Secondary White Pill Button */}
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll('#portfolio');
                  }}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-gray-200/90 bg-white hover:bg-gray-50/90 px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-[#111827] shadow-2xs transition-all hover:-translate-y-0.5 cursor-pointer group"
                >
                  <span>View My Work</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5] text-[#FF5A36] group-hover:text-black transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </AnimateOnScroll>

            {/* Follow Me Social Row & Proof */}
            <AnimateOnScroll animation="fade-in-up" delay={220}>
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-semibold text-[#374151]">
                    Follow Me :
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.linkedin.com/in/arulraj-v11/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200/90 bg-white text-[#4B5563] hover:border-[#FF5A36] hover:text-[#FF5A36] hover:bg-orange-50/30 transition-all shadow-2xs hover:-translate-y-0.5"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.instagram.com/arulrajav"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200/90 bg-white text-[#4B5563] hover:border-[#FF5A36] hover:text-[#FF5A36] hover:bg-orange-50/30 transition-all shadow-2xs hover:-translate-y-0.5"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200/90 bg-white text-[#4B5563] hover:border-[#FF5A36] hover:text-[#FF5A36] hover:bg-orange-50/30 transition-all shadow-2xs hover:-translate-y-0.5"
                      aria-label="X Twitter"
                    >
                      <FaXTwitter className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200/90 bg-white text-[#4B5563] hover:border-[#FF5A36] hover:text-[#FF5A36] hover:bg-orange-50/30 transition-all shadow-2xs hover:-translate-y-0.5"
                      aria-label="YouTube"
                    >
                      <FaYoutube className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Star rating strip */}
                <div className="flex items-center gap-1.5 text-xs text-gray-600 sm:border-l sm:border-gray-200 sm:pl-6">
                  <div className="flex text-[#10B981] gap-0.5">
                    <FaStar className="w-3.5 h-3.5 fill-[#10B981]" />
                    <FaStar className="w-3.5 h-3.5 fill-[#10B981]" />
                    <FaStar className="w-3.5 h-3.5 fill-[#10B981]" />
                    <FaStar className="w-3.5 h-3.5 fill-[#10B981]" />
                    <FaStar className="w-3.5 h-3.5 fill-[#10B981]" />
                  </div>
                  <span className="font-semibold text-gray-900">4.9/5</span>
                  <span className="text-gray-500">from 30+ clients</span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* RIGHT COLUMN: Arul's Portrait Centered with Floating Logos from public/hero section */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-end relative self-end w-full min-w-0 mt-6 lg:mt-0">
            <AnimateOnScroll animation="fade-in" delay={150} className="w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[500px] xl:max-w-[530px] aspect-[987/1024] flex items-end justify-center lg:justify-end">
                
                {/* Natural Cutout of Arul (Smooth bottom fade, no box, no shape, pure studio cutout) */}
                <div className="relative w-full h-full [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]">
                  <Image
                    src="/arul-real-cutout.png"
                    alt="Arulraj V — SEO & Digital Growth Specialist"
                    fill
                    priority
                    className="object-contain object-bottom select-none pointer-events-none"
                    sizes="(max-width: 640px) 340px, (max-width: 1024px) 460px, 530px"
                  />
                </div>

                {/* Floating Tool Badge 1: Google (Top-Left) using public/hero-section/google.png */}
                <div
                  className="absolute top-[8%] left-0 sm:-left-3 lg:-left-5 z-20 animate-float-1 max-w-[190px] sm:max-w-none"
                >
                  <div className="flex items-center gap-2.5 rounded-2xl border border-gray-100/90 bg-white/95 px-3.5 py-2.5 shadow-xl shadow-stone-900/5 backdrop-blur-md transition-transform hover:scale-105 cursor-default">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gray-50/80 p-1">
                      <Image
                        src="/hero-section/google.png"
                        alt="Google"
                        width={22}
                        height={22}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col text-left min-w-0">
                      <span className="text-[12px] sm:text-[13px] font-bold text-gray-900 leading-tight">Google</span>
                      <span className="text-[10px] text-gray-500 font-medium">Search &amp; Ads</span>
                    </div>
                  </div>
                </div>

                {/* Floating Tool Badge 2: Claude (Top-Right) using public/hero-section/claude-icon.png */}
                <div
                  className="absolute top-[10%] right-0 sm:-right-3 lg:-right-5 z-20 animate-float-2 max-w-[190px] sm:max-w-none"
                >
                  <div className="flex items-center gap-2.5 rounded-2xl border border-gray-100/90 bg-white/95 px-3.5 py-2.5 shadow-xl shadow-stone-900/5 backdrop-blur-md transition-transform hover:scale-105 cursor-default">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-50/80 p-1">
                      <Image
                        src="/hero-section/claude-icon.png"
                        alt="Claude"
                        width={22}
                        height={22}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col text-left min-w-0">
                      <span className="text-[12px] sm:text-[13px] font-bold text-gray-900 leading-tight">Claude</span>
                      <span className="text-[10px] text-gray-500 font-medium">AI Workflows</span>
                    </div>
                  </div>
                </div>

                {/* Floating Tool Badge 3: ChatGPT (Mid/Bottom-Left) using public/hero-section/chatgpt.png */}
                <div
                  className="absolute bottom-[22%] left-0 sm:-left-3 lg:-left-5 z-20 animate-float-3 max-w-[190px] sm:max-w-none"
                >
                  <div className="flex items-center gap-2.5 rounded-2xl border border-gray-100/90 bg-white/95 px-3.5 py-2.5 shadow-xl shadow-stone-900/5 backdrop-blur-md transition-transform hover:scale-105 cursor-default">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-50/80 p-1">
                      <Image
                        src="/hero-section/chatgpt.png"
                        alt="ChatGPT"
                        width={22}
                        height={22}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col text-left min-w-0">
                      <span className="text-[12px] sm:text-[13px] font-bold text-gray-900 leading-tight">ChatGPT</span>
                      <span className="text-[10px] text-gray-500 font-medium">AI Search &amp; GEO</span>
                    </div>
                  </div>
                </div>

                {/* Floating Tool Badge 4: Meta Ads (Mid/Bottom-Right) using public/hero-section/meta.png */}
                <div
                  className="absolute bottom-[20%] right-0 sm:-right-3 lg:-right-5 z-20 animate-float max-w-[190px] sm:max-w-none"
                >
                  <div className="flex items-center gap-2.5 rounded-2xl border border-gray-100/90 bg-white/95 px-3.5 py-2.5 shadow-xl shadow-stone-900/5 backdrop-blur-md transition-transform hover:scale-105 cursor-default">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50/80 p-1">
                      <Image
                        src="/hero-section/meta.png"
                        alt="Meta Ads"
                        width={22}
                        height={22}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col text-left min-w-0">
                      <span className="text-[12px] sm:text-[13px] font-bold text-gray-900 leading-tight">Meta Ads</span>
                      <span className="text-[10px] text-gray-500 font-medium">Paid Performance</span>
                    </div>
                  </div>
                </div>

              </div>
            </AnimateOnScroll>
          </div>

        </div>

        {/* "Optimized for AI Search" Strip using user's uploaded logos from public/hero section */}
        <AnimateOnScroll animation="fade-in-up" delay={260} className="w-full mt-6 sm:mt-8 lg:mt-10">
          <div className="mx-auto w-full max-w-7xl rounded-2xl sm:rounded-full border border-gray-200/90 bg-white/95 px-6 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-6.5 shadow-xl shadow-stone-900/5 backdrop-blur-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8">
              {/* Left Label */}
              <div className="flex items-center gap-5 shrink-0">
                <span className="font-bold text-base sm:text-lg text-[#111827] tracking-tight leading-tight whitespace-nowrap text-center md:text-left">
                  Optimized for AI Search
                </span>
                <div className="hidden md:block h-8 w-px bg-gray-200" />
              </div>

              {/* Right AI Search Logos using public/hero-section files */}
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-5 sm:gap-7 lg:gap-9 w-full md:w-auto">
                {/* 1. ChatGPT */}
                <div className="flex items-center gap-2 sm:gap-2.5 text-[#374151] hover:text-black transition-colors cursor-default">
                  <Image
                    src="/hero-section/chatgpt.png"
                    alt="ChatGPT"
                    width={20}
                    height={20}
                    className="object-contain shrink-0"
                  />
                  <span className="text-sm sm:text-[15px] font-semibold tracking-tight">ChatGPT</span>
                </div>

                {/* 2. Claude */}
                <div className="flex items-center gap-2 sm:gap-2.5 text-[#374151] hover:text-black transition-colors cursor-default">
                  <Image
                    src="/hero-section/claude-icon.png"
                    alt="Claude"
                    width={20}
                    height={20}
                    className="object-contain shrink-0"
                  />
                  <span className="text-sm sm:text-[15px] font-semibold tracking-tight">Claude</span>
                </div>

                {/* 3. Gemini */}
                <div className="flex items-center gap-2 sm:gap-2.5 text-[#374151] hover:text-black transition-colors cursor-default">
                  <Image
                    src="/hero-section/gemini-icon.png"
                    alt="Gemini"
                    width={20}
                    height={20}
                    className="object-contain shrink-0"
                  />
                  <span className="text-sm sm:text-[15px] font-semibold tracking-tight">Gemini</span>
                </div>

                {/* 4. Perplexity */}
                <div className="flex items-center gap-2 sm:gap-2.5 text-[#374151] hover:text-black transition-colors cursor-default">
                  <Image
                    src="/hero-section/perplexity-icon.png"
                    alt="Perplexity"
                    width={20}
                    height={20}
                    className="object-contain shrink-0"
                  />
                  <span className="text-sm sm:text-[15px] font-semibold tracking-tight">Perplexity</span>
                </div>

                {/* 5. Grok */}
                <div className="flex items-center gap-2 sm:gap-2.5 text-[#374151] hover:text-black transition-colors cursor-default">
                  <Image
                    src="/hero-section/grok-icon.png"
                    alt="Grok"
                    width={20}
                    height={20}
                    className="object-contain shrink-0"
                  />
                  <span className="text-sm sm:text-[15px] font-semibold tracking-tight">Grok</span>
                </div>

                {/* 6. Copilot */}
                <div className="flex items-center gap-2 sm:gap-2.5 text-[#374151] hover:text-black transition-colors cursor-default">
                  <Image
                    src="/hero-section/copilot-icon.png"
                    alt="Copilot"
                    width={20}
                    height={20}
                    className="object-contain shrink-0"
                  />
                  <span className="text-sm sm:text-[15px] font-semibold tracking-tight">Copilot</span>
                </div>

                {/* 7. Bing */}
                <div className="flex items-center gap-2 sm:gap-2.5 text-[#374151] hover:text-black transition-colors cursor-default">
                  <Image
                    src="/hero-section/bing-icon.png"
                    alt="Bing"
                    width={18}
                    height={22}
                    className="object-contain shrink-0"
                  />
                  <span className="text-sm sm:text-[15px] font-semibold tracking-tight">Bing</span>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
