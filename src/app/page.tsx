import Header from "./pages/Header";
import Hero from "./pages/Hero";
import AboutSection from "./pages/About";
import Projects from "./pages/Project";
import Testimonials from "./pages/Testimonial";
import WhyTrusted from './pages/WhyTrusted'
import Faq from './pages/Faq'
import CTASection from './pages/Cta'
import Footer from './pages/Footer'

export default function Home() {
  return (
   <div>
      <Header/>
      <Hero />
      <AboutSection />
      <Projects />
      <WhyTrusted />
      <Testimonials />
      <Faq />
      <CTASection />
      <Footer />
   </div>
  );
}
