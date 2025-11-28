import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import hero2 from "@/assets/hero-2.jpg";

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero2} alt="Luxury Interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Book a free, no-obligation valuation with our expert team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Request Free Valuation
              </Button>
            </Link>
            <a href="tel:+447985708511">
              <Button variant="outline" size="xl">
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
