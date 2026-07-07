import { Navbar } from '@/components/agency/Navbar';
import { Hero } from '@/components/agency/Hero';
import { TrustMarquee } from '@/components/agency/TrustMarquee';
import { Showcase } from '@/components/agency/Showcase';
import { Services } from '@/components/agency/Services';
import { Process } from '@/components/agency/Process';
import { Testimonials } from '@/components/agency/Testimonials';
import { Pricing } from '@/components/agency/Pricing';
import { FAQ } from '@/components/agency/FAQ';
import { Contact } from '@/components/agency/Contact';
import { Footer } from '@/components/agency/Footer';
import { StructuredData } from '@/components/agency/StructuredData';
import { ScrollProgress } from '@/components/agency/ScrollProgress';

export default function AgencyHome() {
  return (
    <div className="theme-agency min-h-screen">
      <StructuredData />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <TrustMarquee />
        <Showcase />
        <Services />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
