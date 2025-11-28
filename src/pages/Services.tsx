import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import {
  Home,
  Key,
  TrendingUp,
  ClipboardCheck,
  Building,
  Banknote,
  FileText,
  Camera,
  Megaphone,
  Shield,
  Wrench,
  Globe,
  Users,
  DollarSign,
  CheckCircle,
  MapPin,
} from "lucide-react";
import hero2 from "@/assets/hero-2.jpg";

const services = [
  {
    icon: Home,
    title: "Residential Sales",
    description: "Expert guidance through the entire property selling process. We handle marketing, viewings, negotiations, and ensure you achieve the best possible price for your property.",
  },
  {
    icon: Key,
    title: "Residential Letting",
    description: "Comprehensive letting services including tenant sourcing, referencing, and move-in coordination. We find quality tenants quickly and efficiently.",
  },
  {
    icon: TrendingUp,
    title: "Property Valuations",
    description: "Accurate, market-informed valuations backed by extensive local knowledge. Free valuations available for all property types.",
  },
  {
    icon: Building,
    title: "Property Management",
    description: "Full-service property management including rent collection, maintenance coordination, and tenant relations. Peace of mind for landlords.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description: "Professional oversight of property development and renovation projects. From planning to completion, we manage every detail.",
  },
  {
    icon: Banknote,
    title: "Mortgage Broker",
    description: "Access to competitive mortgage deals through our trusted partners. Expert advice to find the right financing solution for you.",
  },
  {
    icon: FileText,
    title: "Floor Plans",
    description: "Professional floor plans that showcase your property's layout and space. Essential for marketing and buyer visualization.",
  },
  {
    icon: Camera,
    title: "Virtual Valuations",
    description: "Convenient online property valuations using video technology. Get an accurate assessment without leaving your home.",
  },
  {
    icon: Megaphone,
    title: "Marketing & Advertising",
    description: "Strategic marketing campaigns across multiple platforms to maximize exposure and attract qualified buyers or tenants.",
  },
  {
    icon: Globe,
    title: "Social Media Advertising",
    description: "Targeted social media campaigns reaching potential buyers and tenants where they spend their time online.",
  },
  {
    icon: Shield,
    title: "Full Management Service",
    description: "Comprehensive landlord service covering all aspects of property management from tenant selection to maintenance.",
  },
  {
    icon: Wrench,
    title: "General Repairs & Maintenance",
    description: "Access to our network of trusted contractors for all property maintenance and repair needs.",
  },
  {
    icon: Users,
    title: "Estate Agent Services",
    description: "Traditional estate agency services with a modern approach. Local expertise combined with cutting-edge marketing.",
  },
  {
    icon: DollarSign,
    title: "Quick Cash Buyer Service",
    description: "Need to sell quickly? We offer fast cash purchases for properties requiring a swift sale.",
  },
  {
    icon: CheckCircle,
    title: "Property Appraisal",
    description: "Detailed property appraisals providing comprehensive market analysis and pricing recommendations.",
  },
  {
    icon: MapPin,
    title: "Property Consultancy",
    description: "Expert advice on all property matters including investment opportunities, market trends, and strategic decisions.",
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Kings Property Consultancy London</title>
        <meta
          name="description"
          content="Explore our comprehensive property services including sales, lettings, valuations, property management, and mortgage advice in London SW16."
        />
      </Helmet>
      <Layout>
        <PageBanner
          title="Our Services"
          subtitle="Comprehensive property solutions tailored to your needs"
          image={hero2}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-primary uppercase tracking-widest text-sm font-medium mb-4">
                What We Offer
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Premium Property Services
              </h2>
              <p className="text-muted-foreground">
                From sales to lettings, valuations to property management, we provide a comprehensive suite of services designed to meet all your property needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group p-6 bg-card border border-border hover:border-primary transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-muted flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-6">
                Ready to discuss your property needs?
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
