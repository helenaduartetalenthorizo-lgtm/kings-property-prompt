import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kings Property Consultancy | Premium London Estate Agents</title>
        <meta
          name="description"
          content="Kings Property Consultancy - Your trusted London estate agents specializing in residential sales, lettings, valuations and property management in SW16 and surrounding areas."
        />
      </Helmet>
      <Layout>
        <HeroSlider />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
