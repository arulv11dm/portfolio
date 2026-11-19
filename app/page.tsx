import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ClientMarquee from '@/components/ClientMarquee';
import AboutSection from '@/components/AboutSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import WhatIDoSection from '@/components/WhatIDoSection';
import ProofOfWorkSection from '@/components/ProofOfWorkSection';
import ToolsSection from '@/components/ToolsSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#111827] selection:bg-[#FF5A36] selection:text-white overflow-x-clip w-full max-w-full">
      {/* Sticky Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Client Logo Marquee */}
        <ClientMarquee />

        {/* 3. About / Who I Am */}
        <AboutSection />

        {/* 4. Portfolio / Case Studies */}
        <CaseStudiesSection />

        {/* 5. What I Do */}
        <WhatIDoSection />

        {/* 6. Proof of Work */}
        <ProofOfWorkSection />

        {/* 7. Tools & Technology */}
        <ToolsSection />

        {/* 8. FAQ */}
        <FAQSection />

        {/* 9. Final CTA */}
        <FinalCTASection />
      </main>

      {/* 10. Footer */}
      <FooterSection />
    </div>
  );
}
