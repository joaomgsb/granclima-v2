import React from 'react';
import HeroSlider from '../components/HeroSlider';
import QuoteBar from '../components/QuoteBar';
import AboutSection from '../components/AboutSection';
import BenefitsSection from '../components/BenefitsSection';
import ProductsSection from '../components/ProductsSection';
import CompanyTypesSection from '../components/CompanyTypesSection';
import VideoSection from '../components/VideoSection';
import ClientsSection from '../components/ClientsSection';

const Home = () => {
  return (
    <main>
      <HeroSlider />
      <QuoteBar />
      <AboutSection />
      <BenefitsSection />
      <ProductsSection />
      <CompanyTypesSection />
      <VideoSection />
      <ClientsSection />
    </main>
  );
};

export default Home;