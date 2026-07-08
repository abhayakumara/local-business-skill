import { Navbar } from '@/components/restaurant/Navbar';
import { Hero } from '@/components/restaurant/Hero';
import { About } from '@/components/restaurant/About';
import { SignatureDishes } from '@/components/restaurant/SignatureDishes';
import { Menu } from '@/components/restaurant/Menu';
import { Gallery } from '@/components/restaurant/Gallery';
import { Testimonials } from '@/components/restaurant/Testimonials';
import { Reservation } from '@/components/restaurant/Reservation';
import { Visit } from '@/components/restaurant/Visit';
import { FAQ } from '@/components/restaurant/FAQ';
import { Footer } from '@/components/restaurant/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <SignatureDishes />
        <Menu />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Visit />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
