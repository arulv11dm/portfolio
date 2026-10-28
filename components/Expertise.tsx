import AnimateOnScroll from './AnimateOnScroll';
import {
  Search,
  ShoppingBag,
  Code,
  Sparkles,
  FileText,
  MapPin,
  Target,
  Bot,
  BarChart3,
  Layers,
  ArrowUpRight,
} from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Technical SEO',
    description:
      'Architecture, schema markup, Core Web Vitals, internal linking, indexing strategy, and crawl budget optimization.',
    icon: <Search className="w-6 h-6 text-[#F5B900]" />,
  },
  {
    number: '02',
    title: 'E-commerce SEO',
    description:
      'Product page optimization, category architecture, structured data, search intent mapping, and large-scale catalog SEO.',
    icon: <ShoppingBag className="w-6 h-6 text-[#F5B900]" />,
  },
  {
    number: '03',
    title: 'Programmatic SEO',
    description:
      'Scalable page generation systems, structured keyword mapping, automated content templates, and internal linking networks.',
    icon: <Code className="w-6 h-6 text-[#F5B900]" />,
  },
  {
    number: '04',
    title: 'AI Search / GEO',
    description:
      'AI visibility, citation building, LLM-readable content structures, entity optimization, and AI referral reporting.',
    icon: <Sparkles className="w-6 h-6 text-[#F5B900]" />,
  },
  {
    number: '05',
    title: 'Content Strategy',
    description:
      'Keyword research, search intent analysis, topical authority frameworks, pillar-cluster strategies, and content planning.',
    icon: <FileText className="w-6 h-6 text-[#F5B900]" />,
  },
  {
    number: '06',
    title: 'Local SEO',
    description:
      'Google Business Profile optimization, local search signals, location-based landing pages, and lead generation.',
    icon: <MapPin className="w-6 h-6 text-[#F5B900]" />,
  },
  {
    number: '07',
    title: 'PPC / Meta Ads',
    description:
      'Lead generation, traffic, engagement, conversion tracking, retargeting campaigns, CPL reduction, and ROAS optimization.',
    icon: <Target className="w-6 h-6 text-[#F5B900]" />,
  },
  {
    number: '08',
    title: 'SEO Automation',
    description:
      'Automated site audits, custom reporting pipelines, content generation workflows, API integrations, and recurring process automation.',
    icon: <Bot className="w-6 h-6 text-[#F5B900]" />,
  },
  {
    number: '09',
    title: 'SEO Analytics',
    description:
      'Google Search Console analysis, GA4 event tracking, DataForSEO API data extraction, and commercial performance reporting.',
    icon: <BarChart3 className="w-6 h-6 text-[#F5B900]" />,
  },
  {
    number: '10',
    title: 'Website Architecture',
    description:
      'SEO-friendly information architecture, conversion-focused landing page structures, and scalable website layouts.',
    icon: <Layers className="w-6 h-6 text-[#F5B900]" />,
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="scroll-mt-20 py-20 sm:py-28 bg-[#001010] border-t border-[#0A2424]"
      aria-labelledby="expertise-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <AnimateOnScroll animation="fade-in">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5B900]">
              WHAT I DO
            </span>
            <h2
              id="expertise-heading"
              className="mt-3 font-extrabold text-3xl sm:text-5xl text-[#F5F5F5] tracking-tight"
            >
              Services That I Provide
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in" delay={100}>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#0A2424] bg-[#001818] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#B8C0C0] hover:border-[#F5B900] hover:text-[#F5B900] transition-all"
            >
              View All Services
              <ArrowUpRight className="w-4 h-4 text-[#F5B900]" />
            </a>
          </AnimateOnScroll>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.number} animation="fade-in-up" delay={i * 50}>
              <div className="liam-card p-8 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5B900]/10 border border-[#F5B900]/20 group-hover:bg-[#F5B900] group-hover:text-[#001010] transition-colors">
                      {service.icon}
                    </div>
                    <span className="text-xs font-bold font-mono tracking-widest text-[#F5B900] bg-[#F5B900]/10 px-3 py-1 rounded-full border border-[#F5B900]/20">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#F5F5F5] mb-3 group-hover:text-[#F5B900] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#B8C0C0] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
