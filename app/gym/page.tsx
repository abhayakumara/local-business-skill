import { Navbar } from '@/components/gym/Navbar';
import { Hero } from '@/components/gym/Hero';
import { About } from '@/components/gym/About';
import { Programs } from '@/components/gym/Programs';
import { Trainers } from '@/components/gym/Trainers';
import { Schedule } from '@/components/gym/Schedule';
import { Membership } from '@/components/gym/Membership';
import { Gallery } from '@/components/gym/Gallery';
import { Testimonials } from '@/components/gym/Testimonials';
import { Join } from '@/components/gym/Join';
import { Visit } from '@/components/gym/Visit';
import { FAQ } from '@/components/gym/FAQ';
import { Footer } from '@/components/gym/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Programs />
        <Trainers />
        <Schedule />
        <Membership />
        <Gallery />
        <Testimonials />
        <Join />
        <Visit />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
