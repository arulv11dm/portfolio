import AnimateOnScroll from './AnimateOnScroll';

const timeline = [
  {
    company: 'Medingen Healthcare Pvt. Ltd.',
    role: 'SEO & PPC Specialist',
    period: 'May 2025 – Present',
    type: 'Full-time',
    points: [
      'Led end-to-end SEO strategy for a healthcare e-commerce platform with 12K+ products',
      'Re-architected 12,000+ product URLs to improve crawlability and search relevance',
      'Scaled organic clicks from 30K to 110K/month and impressions from 1.4M to 4M/month',
      'Drove monthly revenue from ₹2L to ₹15L and orders from 300 to 2,500 through organic growth',
      'Implemented programmatic SEO, GEO/AI search visibility and entity optimization',
      'Generated 57 AI mentions and 1.5K cited pages across AI search platforms',
    ],
  },
  {
    company: 'RC Solars',
    role: 'Digital Marketing Executive',
    period: 'Oct 2024 – Apr 2025',
    type: 'Full-time',
    points: [
      'Built organic search visibility from zero to 20K monthly impressions',
      'Achieved 1,500+ monthly organic clicks for competitive solar-industry keywords',
      'Developed keyword strategy, website architecture and commercial search intent mapping',
      'Managed local SEO, Google Business Profile and location-based targeting',
    ],
  },
  {
    company: 'HunterEquipments',
    role: 'Digital Marketing Intern',
    period: 'Apr 2024 – Sep 2024',
    type: 'Internship',
    points: [
      'Developed SEO-friendly website architecture for hydraulic equipment product pages',
      'Conducted in-depth keyword research and competitor analysis',
      'Created on-page optimization strategy covering product descriptions and meta data',
      'Built content strategy for commercial search intent and product SEO',
    ],
  },
  {
    company: 'Freelance SEO Consultant',
    role: 'Independent Consultant',
    period: '2024 – Present',
    type: 'Freelance',
    points: [
      'Delivered SEO and PPC projects for clients across solar, garments, events, and B2B sectors',
      'Boldborne Solar (Dubai): International SEO, UAE solar market keyword strategy and website architecture',
      'Party Hall: ₹1L Meta Ads spend → ₹40L attributed revenue, 40× ROAS, 332 leads from single campaign',
      'Sri Vetrivel Garments: Local SEO, Google Business Profile and recruitment PPC',
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 lg:py-32 bg-[#FAF8F5]"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll animation="fade-in">
          <span className="section-label">EXPERIENCE</span>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-in-up" delay={100}>
          <h2
            id="experience-heading"
            className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mt-4 mb-16 max-w-2xl"
          >
            Career snapshot.
          </h2>
        </AnimateOnScroll>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px bg-[#E5E0D8] hidden lg:block"
            style={{ left: '160px' }}
            aria-hidden
          />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <AnimateOnScroll key={i} animation="fade-in-up" delay={i * 100}>
                <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-6 lg:gap-12">
                  {/* Period */}
                  <div className="lg:pr-8 lg:text-right">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#6B6B6B]">
                      {item.period}
                    </span>
                    <div className="mt-1">
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide
                          ${
                            item.type === 'Freelance'
                              ? 'bg-[#FDF1EA] text-[#E8651A]'
                              : item.type === 'Internship'
                              ? 'bg-[#EEF2FF] text-[#6366F1]'
                              : 'bg-[#F0FDF4] text-[#16A34A]'
                          }
                        `}
                      >
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative lg:pl-10">
                    {/* Dot */}
                    <div
                      className="absolute left-0 top-1 w-3 h-3 rounded-full bg-[#E8651A] border-2 border-white shadow-sm hidden lg:block"
                      style={{ left: '-6px' }}
                      aria-hidden
                    />

                    <div className="bg-white border border-[#E5E0D8] rounded-xl p-6 card-lift">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-[#1A1A1A]">
                            {item.company}
                          </h3>
                          <p className="text-[#E8651A] font-semibold text-sm mt-0.5">
                            {item.role}
                          </p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {item.points.map((point, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2.5 text-sm text-[#2D2D2D] leading-relaxed"
                          >
                            <span
                              className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E8651A] shrink-0"
                              aria-hidden
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
