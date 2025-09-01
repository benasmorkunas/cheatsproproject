import Header from '@/components/homepage/Header';
import Hero from '@/components/homepage/Hero';
import FeaturesSection from '@/components/homepage/FeaturesSection';
import BF6Section from '@/components/homepage/BF6Section';
import PricingSection from '@/components/homepage/PricingSection';
import TrustElements from '@/components/homepage/TrustElements';
import TestimonialsSection from '@/components/homepage/TestimonialsSection';
import LatestArticles from '@/components/homepage/LatestArticles';
import Footer from '@/components/homepage/Footer';
import MinimalisticBackground from '@/components/common/MinimalisticBackground';

export default function HomePage() {
  return (
    <MinimalisticBackground>
      <Header />
      <main className="pt-0">
        <Hero />
        <TrustElements />
        <FeaturesSection />
        <BF6Section />
        <PricingSection />
        <TestimonialsSection />
        <LatestArticles />
      </main>
      <Footer />
    </MinimalisticBackground>
  );
}
