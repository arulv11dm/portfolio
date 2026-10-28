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
import { Search, Database, Code2, Cpu, Palette } from 'lucide-react';

interface ToolItem {
  name: string;
  category: string;
  icon: React.ReactNode;
}

const toolsList: ToolItem[] = [
  {
    name: 'Ahrefs',
    category: 'SEO & Backlinks',
    icon: <Search className="w-6 h-6 text-[#FFB800]" />,
  },
  {
    name: 'SEMrush',
    category: 'Keyword & Competitor Research',
    icon: <SiSemrush className="w-6 h-6 text-[#FF642D]" />,
  },
  {
    name: 'Google Search Console',
    category: 'Indexing & Performance',
    icon: <SiGoogle className="w-6 h-6 text-[#4285F4]" />,
  },
  {
    name: 'GA4 (Google Analytics)',
    category: 'Traffic & Conversion Analytics',
    icon: <SiGoogleanalytics className="w-6 h-6 text-[#E37400]" />,
  },
  {
    name: 'Google Tag Manager',
    category: 'Tracking & Event Tags',
    icon: <SiGoogletagmanager className="w-6 h-6 text-[#246FEA]" />,
  },
  {
    name: 'Stitch',
    category: 'Data Pipeline Integration',
    icon: <Database className="w-6 h-6 text-white" />,
  },
  {
    name: 'Meta Ads Manager',
    category: 'Paid Social & Lead Ads',
    icon: <SiMeta className="w-6 h-6 text-[#0668E1]" />,
  },
  {
    name: 'Google Workspace',
    category: 'Operations & Strategy',
    icon: <SiGoogle className="w-6 h-6 text-[#34A853]" />,
  },
  {
    name: 'WordPress',
    category: 'CMS & Site Management',
    icon: <SiWordpress className="w-6 h-6 text-[#21759B]" />,
  },
  {
    name: 'Canva',
    category: 'Ad Creatives & Visuals',
    icon: <Palette className="w-6 h-6 text-[#00C4CC]" />,
  },
  {
    name: 'Claude',
    category: 'AI Workflows & GEO Analysis',
    icon: <SiAnthropic className="w-6 h-6 text-[#D97706]" />,
  },
  {
    name: 'DataForSEO API',
    category: 'Programmatic SEO Data',
    icon: <Code2 className="w-6 h-6 text-[#FFB800]" />,
  },
  {
    name: 'Search Console API',
    category: 'Automated Performance Reporting',
    icon: <Cpu className="w-6 h-6 text-[#4285F4]" />,
  },
];

export default function Tools() {
  return (
    <section id="tools" className="scroll-mt-20 py-20 sm:py-28 bg-[#0B1315] border-t border-white/10" aria-labelledby="tools-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <AnimateOnScroll animation="fade-in">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB800]">
            TOOLKIT
          </span>
          <h2
            id="tools-heading"
            className="mt-3 font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Tools &amp; Platforms I Use Daily
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-in-up" delay={150}>
          <p className="mt-4 text-gray-300 text-base sm:text-lg mb-12 max-w-xl">
            Industry-standard platforms and custom API integrations for research, tracking, automation, and campaign management.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {toolsList.map((tool, i) => (
            <AnimateOnScroll key={tool.name} animation="fade-in-up" delay={i * 40}>
              <div className="liam-card p-6 h-full flex flex-col justify-between group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-[#0B1315] border border-white/10 rounded-xl group-hover:scale-110 group-hover:border-[#FFB800] transition-all">
                    {tool.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#FFB800] transition-colors">
                      {tool.name}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-gray-400 font-medium">
                  {tool.category}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
