import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Services from '@/app/components/Services';
import VideoSection from '@/app/components/VideoSection';
import Portfolio from '@/app/components/Portfolio';
import ContactForm from '@/app/components/ContactForm';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <VideoSection />
      <Portfolio />
      <ContactForm />
      <Footer />
    </main>
  );
}