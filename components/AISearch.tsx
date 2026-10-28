import AnimateOnScroll from './AnimateOnScroll';
import {
  SiAnthropic,
  SiGoogle,
} from 'react-icons/si';
import { Sparkles, Bot, Cpu, Zap, Search } from 'lucide-react';

const aiPlatforms = [
  { name: 'ChatGPT', role: 'LLM Search', icon: <Bot className="w-6 h-6 text-[#10A37F]" /> },
  { name: 'Claude', role: 'Entity Analysis', icon: <SiAnthropic className="w-6 h-6 text-[#D97706]" /> },
  { name: 'Gemini', role: 'AI Overviews', icon: <SiGoogle className="w-6 h-6 text-[#8E75FF]" /> },
  { name: 'Perplexity', role: 'AI Search', icon: <Sparkles className="w-6 h-6 text-[#20B2AA]" /> },
  { name: 'Grok', role: 'Conversational', icon: <Zap className="w-6 h-6 text-white" /> },
  { name: 'Copilot', role: 'Bing AI', icon: <Cpu className="w-6 h-6 text-[#0078D4]" /> },
  { name: 'Bing AI', role: 'Generative', icon: <Search className="w-6 h-6 text-[#00838F]" /> },
];

export default function AISearch() {
  return (
    <section className="py-20 sm:py-24 bg-[#0B1315] border-b border-white/10" aria-labelledby="ai-search-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="liam-card p-8 sm:p-12 relative overflow-hidden border border-[#FFB800]/20">
          <div className="max-w-3xl">
            <AnimateOnScroll animation="fade-in">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB800]">
                AI SEARCH &amp; GEO
              </span>
              <h2 id="ai-search-heading" className="mt-3 font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
                Generative Engine Optimization (GEO)
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-up" delay={150}>
              <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
                Modern search is no longer limited to traditional rankings. I optimize website architecture, structured entity markup, and LLM-readable content so your brand is cited across all major AI engines.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-up" delay={250}>
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
                {aiPlatforms.map((platform) => (
                  <div
                    key={platform.name}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#0B1315] border border-white/10 text-center hover:border-[#FFB800] transition-all group"
                  >
                    <div className="p-2.5 rounded-lg bg-[#131E21] group-hover:scale-110 transition-transform mb-2">
                      {platform.icon}
                    </div>
                    <span className="text-sm font-bold text-white group-hover:text-[#FFB800] transition-colors">
                      {platform.name}
                    </span>
                    <span className="text-[10px] text-gray-400 mt-0.5 font-medium leading-tight">
                      {platform.role}
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
