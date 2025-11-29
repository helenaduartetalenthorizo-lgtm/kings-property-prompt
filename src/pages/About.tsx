import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users, Target, Heart } from "lucide-react";
import propertyHouse from "@/assets/property-house.jpg";
import propertyEstate from "@/assets/property-estate.jpg";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every interaction, ensuring the highest standards of service delivery.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Honesty and transparency are at the core of everything we do. Your trust is our priority.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Your needs come first. We listen, understand, and deliver personalized solutions.",
  },
  {
    icon: Target,
    title: "Results",
    description: "We're committed to achieving the best possible outcomes for our clients, every time.",
  },
];

const whyChooseUs = [
  "Over 15 years of experience in the London property market",
  "Deep local knowledge of SW16 and surrounding areas",
  "Dedicated team of property professionals",
  "Comprehensive marketing strategies",
  "Transparent pricing with no hidden fees",
  "5-star client reviews and testimonials",
  "Member of professional property bodies",
  "Innovative technology for better service",
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Kings Property Consultancy London</title>
        <meta
          name="description"
          content="Learn about Kings Property Consultancy - London's trusted estate agents with over 15 years of experience in residential sales, lettings, and property management."
        />
      </Helmet>
      <Layout>
        <PageBanner
          title="About Us"
          subtitle="Your trusted partner in London's property market"
          image={propertyHouse}
        />

        {/* Story Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-primary uppercase tracking-widest text-sm font-medium mb-4">
                  Our Story
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                  A Legacy of Excellence
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Founded with a vision to redefine estate agency in London, Kings Property Consultancy has grown to become one of the most trusted names in the SW16 property market and beyond.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our journey began over 15 years ago with a simple belief: that buying, selling, or renting property should be a positive, stress-free experience. Today, that belief continues to drive everything we do.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We combine traditional values of honesty, professionalism, and dedication with modern technology and innovative marketing strategies to deliver exceptional results for our clients.
                </p>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src={propertyEstate}
                  alt="Luxury Interior"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent" />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-8 hidden lg:block z-10">
                  <p className="font-display text-4xl font-bold">15+</p>
                  <p className="text-sm uppercase tracking-wider">Years of Trust</p>
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
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-10 border border-border">
                <h3 className="font-display text-2xl text-primary mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional property services that exceed expectations, building lasting relationships based on trust, transparency, and outstanding results. We aim to make every property transaction a seamless and rewarding experience.
                </p>
              </div>
              <div className="p-10 border border-border">
                <h3 className="font-display text-2xl text-primary mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and respected estate agency in London, known for our unwavering commitment to client satisfaction, innovative approach, and positive impact on the communities we serve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-primary uppercase tracking-widest text-sm font-medium mb-4">
                Our Values
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">
                What Drives Us
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-muted flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-primary uppercase tracking-widest text-sm font-medium mb-4">
                  Why Choose Us
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8">
                  The Kings Difference
                </h2>
                <ul className="space-y-4">
                  {whyChooseUs.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link to="/contact">
                    <Button variant="hero" size="lg">
                      Contact Our Team
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src={propertyHouse}
                  alt="Elegant Property"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-bl from-primary/15 to-transparent" />
                <div className="absolute top-6 right-6 bg-background/95 backdrop-blur-sm border border-primary/20 px-4 py-3 hidden lg:flex items-center gap-3">
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
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
