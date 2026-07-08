import { Navbar } from '@/components/salon/Navbar';
import { Hero } from '@/components/salon/Hero';
import { About } from '@/components/salon/About';
import { Ritual } from '@/components/salon/Ritual';
import { Services } from '@/components/salon/Services';
import { Team } from '@/components/salon/Team';
import { Gallery } from '@/components/salon/Gallery';
import { Testimonials } from '@/components/salon/Testimonials';
import { Booking } from '@/components/salon/Booking';
import { Visit } from '@/components/salon/Visit';
import { FAQ } from '@/components/salon/FAQ';
import { Footer } from '@/components/salon/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Ritual />
        <Services />
        <Team />
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
