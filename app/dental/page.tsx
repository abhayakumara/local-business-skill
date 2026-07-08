import { Navbar } from '@/components/dental/Navbar';
import { Hero } from '@/components/dental/Hero';
import { About } from '@/components/dental/About';
import { CareJourney } from '@/components/dental/CareJourney';
import { Services } from '@/components/dental/Services';
import { Team } from '@/components/dental/Team';
import { Insurance } from '@/components/dental/Insurance';
import { Gallery } from '@/components/dental/Gallery';
import { Testimonials } from '@/components/dental/Testimonials';
import { Booking } from '@/components/dental/Booking';
import { Visit } from '@/components/dental/Visit';
import { FAQ } from '@/components/dental/FAQ';
import { Footer } from '@/components/dental/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <CareJourney />
        <Services />
        <Team />
        <Insurance />
        <Gallery />
        <Testimonials />
        <Booking />
        <Visit />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
