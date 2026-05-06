import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import About from './components/About';
import Features from './components/Features';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCall from './components/FloatingCall';


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <About />
        <Features />
        <Products />
        <Gallery />
        <Reviews />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
