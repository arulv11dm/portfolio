import AnimateOnScroll from './AnimateOnScroll';
import {
  SiSemrush,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiMeta,
  SiWordpress,
  SiAnthropic,
  SiGoogle,
} from 'react-icons/si';
import { Search, Database, BarChart2, Eye, Flame } from 'lucide-react';

const trustTools = [
  { name: 'Claude AI', icon: <SiAnthropic className="w-5 h-5 text-[#D97706]" /> },
  { name: 'GA4', icon: <SiGoogleanalytics className="w-5 h-5 text-[#E37400]" /> },
  { name: 'Google Search Console', icon: <SiGoogle className="w-5 h-5 text-[#4285F4]" /> },
  { name: 'SEMrush', icon: <SiSemrush className="w-5 h-5 text-[#FF642D]" /> },
  { name: 'Ahrefs', icon: <Search className="w-5 h-5 text-[#FFB800]" /> },
  { name: 'PostHog', icon: <Flame className="w-5 h-5 text-[#F54E00]" /> },
  { name: 'Microsoft Clarity', icon: <Eye className="w-5 h-5 text-[#0078D4]" /> },
  { name: 'Bing Webmaster', icon: <BarChart2 className="w-5 h-5 text-[#00838F]" /> },
];

export default function TrustLogos() {
  return (
    <section className="py-10 bg-[#0B1315] border-y border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <AnimateOnScroll animation="fade-in">
          <p className="text-center text-[12px] font-semibold uppercase tracking-[0.2em] text-[#FFB800] mb-6">
            Technology &amp; Analytics Stack
          </p>
        </AnimateOnScroll>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {trustTools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#131E21] border border-white/10 hover:border-[#FFB800] transition-all"
            >
              {tool.icon}
              <span className="text-xs font-bold text-white">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
