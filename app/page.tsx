import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ClientMarquee from '@/components/ClientMarquee';
import AboutSection from '@/components/AboutSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import WhatIDoSection from '@/components/WhatIDoSection';
import SkillsSection from '@/components/SkillsSection';
import ProofOfWorkSection from '@/components/ProofOfWorkSection';
import ToolsSection from '@/components/ToolsSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#111827] selection:bg-[#F5B900] selection:text-[#111827]">
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

        {/* 6. Skills & Capabilities */}
        <SkillsSection />

        {/* 7. Proof of Work */}
        <ProofOfWorkSection />

        {/* 8. Tools & Technology */}
        <ToolsSection />

        {/* 9. FAQ */}
        <FAQSection />

        {/* 10. Final CTA */}
        <FinalCTASection />
      </main>

      {/* 11. Footer */}
      <FooterSection />
    </div>
  );
}
