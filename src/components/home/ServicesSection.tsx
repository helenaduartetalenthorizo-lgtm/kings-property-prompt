import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Home,
  Key,
  TrendingUp,
  ClipboardCheck,
  Building,
  Banknote,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Sales",
    description: "Expert guidance through the entire property selling process with maximum returns.",
  },
  {
    icon: Key,
    title: "Lettings",
    description: "Comprehensive letting services for landlords and tenants across London.",
  },
  {
    icon: TrendingUp,
    title: "Property Valuations",
    description: "Accurate, market-informed valuations to help you make the right decisions.",
  },
  {
    icon: Building,
    title: "Property Management",
    description: "Full-service property management ensuring peace of mind for owners.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description: "Professional oversight of property development and renovation projects.",
  },
  {
    icon: Banknote,
    title: "Mortgage Advice",
    description: "Access to competitive mortgage deals through our trusted partners.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary uppercase tracking-widest text-sm font-medium mb-4">
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Our Premium Services
          </h2>
          <p className="text-muted-foreground">
            From sales to lettings, valuations to property management, we provide a comprehensive suite of services tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-background border border-border hover:border-primary transition-all duration-300"
            >
              <div className="w-14 h-14 bg-muted flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" size="lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
