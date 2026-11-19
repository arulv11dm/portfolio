import AnimateOnScroll from './AnimateOnScroll';
import {
  SiSemrush,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiGoogleads,
  SiMeta,
  SiWordpress,
  SiElementor,
  SiAnthropic,
  SiGoogle,
} from 'react-icons/si';
import { Search, Sparkles, TrendingUp, Bug, ShoppingCart, Bot, Palette } from 'lucide-react';

const tools = [
  { name: 'Semrush', icon: <SiSemrush className="w-5 h-5 text-[#FF642D]" /> },
  { name: 'Ahrefs', icon: <Search className="w-5 h-5 text-[#F5B900]" /> },
  { name: 'Screaming Frog', icon: <Bug className="w-5 h-5 text-[#4CAF50]" /> },
  { name: 'Google Search Console', icon: <SiGoogle className="w-5 h-5 text-[#4285F4]" /> },
  { name: 'GA4 (Google Analytics)', icon: <SiGoogleanalytics className="w-5 h-5 text-[#E37400]" /> },
  { name: 'Google Tag Manager', icon: <SiGoogletagmanager className="w-5 h-5 text-[#246FEA]" /> },
  { name: 'Google Ads', icon: <SiGoogleads className="w-5 h-5 text-[#FBBC04]" /> },
  { name: 'Google Merchant Center', icon: <ShoppingCart className="w-5 h-5 text-[#34A853]" /> },
  { name: 'Google Trends', icon: <TrendingUp className="w-5 h-5 text-[#EA4335]" /> },
  { name: 'Meta Ads Manager', icon: <SiMeta className="w-5 h-5 text-[#0668E1]" /> },
  { name: 'ChatGPT', icon: <Bot className="w-5 h-5 text-[#10A37F]" /> },
  { name: 'Gemini', icon: <SiGoogle className="w-5 h-5 text-[#8E75FF]" /> },
  { name: 'Claude AI', icon: <SiAnthropic className="w-5 h-5 text-[#D97706]" /> },
  { name: 'Perplexity AI', icon: <Sparkles className="w-5 h-5 text-[#20B2AA]" /> },
  { name: 'WordPress', icon: <SiWordpress className="w-5 h-5 text-[#21759B]" /> },
  { name: 'Elementor', icon: <SiElementor className="w-5 h-5 text-[#92003B]" /> },
  { name: 'Canva', icon: <Palette className="w-5 h-5 text-[#00C4CC]" /> },
];

export default function ToolsSection() {
  return (
    <section
      id="tools"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-white border-t border-[#E5E0D8] overflow-hidden"
      aria-labelledby="tools-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
        <AnimateOnScroll animation="fade-in">
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center">
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200/90 bg-[#F9FAFB] px-3.5 py-1.5 text-xs sm:text-sm font-medium text-gray-700 shadow-2xs mb-4 sm:mb-5 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
              </span>
              <span>Stack &amp; Platforms</span>
            </div>
            <h2
              id="tools-heading"
              className="font-extrabold text-3xl xs:text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.12] tracking-tight text-[#111827]"
            >
              Tools I <span className="text-[#FF5A36]">Work With.</span>
            </h2>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#4B5563] leading-relaxed font-normal">
              Industry-standard platforms, analytics suites, and AI engines integrated seamlessly into my daily workflow.
            </p>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Row 1: Forward Marquee */}
      <div className="marquee-mask group overflow-hidden py-3">
        <div className="flex w-max items-center animate-marquee [animation-duration:35s] group-hover:[animation-play-state:paused] gap-4 sm:gap-6">
          {[...tools, ...tools].map((tool, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 sm:px-6 py-3 rounded-2xl bg-[#FAF8F5] border border-gray-200/90 shadow-2xs transition-all duration-300 hover:border-[#FF5A36]/40 hover:bg-white hover:shadow-md shrink-0 group/item cursor-default"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white border border-gray-200/90 group-hover/item:border-[#FF5A36]/30 shadow-2xs transition-colors">
                {tool.icon}
              </div>
              <span className="font-bold text-sm tracking-wide text-[#111827] group-hover/item:text-[#FF5A36] transition-colors">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
