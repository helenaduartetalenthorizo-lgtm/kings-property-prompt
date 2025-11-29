import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Users, Home, TrendingUp } from "lucide-react";
import propertyEstate from "@/assets/property-estate.jpg";

const stats = [
  { icon: Home, value: "500+", label: "Properties Sold" },
  { icon: Users, value: "1000+", label: "Happy Clients" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: TrendingUp, value: "£50M+", label: "Property Value" },
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative overflow-hidden group">
              <img
                src={propertyEstate}
                alt="Luxury Property"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
              <div className="absolute inset-0 border border-primary/20" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 hidden lg:block">
              <p className="font-display text-4xl font-bold">15+</p>
              <p className="text-sm uppercase tracking-wider">Years of Excellence</p>
            </div>
            <div className="absolute top-6 left-6 bg-background/95 backdrop-blur-sm border border-primary/20 px-4 py-3 hidden lg:flex items-center gap-3">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-foreground">5.0</span>
                <span className="text-muted-foreground ml-1">(29 Reviews)</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-primary uppercase tracking-widest text-sm font-medium mb-4">
                About Us
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Kings Property Consultancy is a distinguished London-based estate agency committed to delivering exceptional service in the premium property market. With over 15 years of experience, we have built an unrivalled reputation for professionalism, integrity, and results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of dedicated property experts combines local market knowledge with a client-first approach, ensuring every transaction is handled with the utmost care and attention to detail.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-muted flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-display text-2xl text-foreground">{stat.value}</p>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button variant="outline" size="lg">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
