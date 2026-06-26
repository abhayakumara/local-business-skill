import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Programs } from '@/components/Programs';
import { Trainers } from '@/components/Trainers';
import { Membership } from '@/components/Membership';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { Join } from '@/components/Join';
import { Visit } from '@/components/Visit';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Programs />
        <Trainers />
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
