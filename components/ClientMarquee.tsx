import AnimateOnScroll from './AnimateOnScroll';

const clients = [
  'MEDINGEN HEALTHCARE',
  'RC SOLARS',
  'BOLDBORNE SOLAR DUBAI',
  'SRI VETRIVEL GARMENTS',
  'HUNTER EQUIPMENTS',
  'PARTY HALL EVENT VENUE',
  'HEALTHCARE E-COMMERCE',
  'COMMERCIAL SOLAR EPC',
];

export default function ClientMarquee() {
  return (
    <section
      id="clients"
      className="relative py-14 sm:py-16 bg-white border-y border-[#E5E0D8] overflow-hidden"
      aria-label="Brands and Products I've Helped Grow"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8">
        <AnimateOnScroll animation="fade-in">
          <p className="text-center text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#6B7280]">
            BRANDS &amp; PRODUCTS I&apos;VE HELPED GROW
          </p>
        </AnimateOnScroll>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="marquee-mask group overflow-hidden">
        <div className="flex w-max items-center animate-marquee group-hover:[animation-play-state:paused] gap-6 sm:gap-10">
          {[...clients, ...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#FAF8F5] border border-[#E5E0D8] shadow-xs transition-all duration-300 hover:border-[#D97706]/50 hover:bg-white hover:shadow-sm group/item cursor-default shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]/60 group-hover/item:bg-[#D97706] transition-colors" />
              <span className="font-extrabold text-sm sm:text-base tracking-[0.14em] text-[#374151] group-hover/item:text-[#D97706] transition-colors uppercase">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
