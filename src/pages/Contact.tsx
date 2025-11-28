import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import hero4 from "@/assets/hero-4.jpg";

const services = [
  "Property Valuation",
  "Selling Your Property",
  "Buying a Property",
  "Property Lettings",
  "Property Management",
  "Mortgage Advice",
  "General Enquiry",
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your enquiry. We'll get back to you shortly.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Kings Property Consultancy London</title>
        <meta
          name="description"
          content="Get in touch with Kings Property Consultancy for property valuations, sales, lettings and management services in London SW16. Call +44 7985 708511."
        />
      </Helmet>
      <Layout>
        <PageBanner
          title="Contact Us"
          subtitle="We'd love to hear from you"
          image={hero4}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and one of our property experts will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-card border-border focus:border-primary"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-card border-border focus:border-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="bg-card border-border focus:border-primary"
                        placeholder="+44 7XXX XXXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Service Required *
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          setFormData({ ...formData, service: value })
                        }
                      >
                        <SelectTrigger className="bg-card border-border">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-card border-border focus:border-primary resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full md:w-auto">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  Visit our office or reach out directly - we're here to help with all your property needs.
                </p>

                <div className="space-y-8 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Our Office</h4>
                      <p className="text-muted-foreground">
                        1 Empire Mews, London SW16 2BF, United Kingdom
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Phone / WhatsApp</h4>
                      <a
                        href="tel:+447985708511"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +44 7985 708511
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Opening Hours</h4>
                      <p className="text-muted-foreground">
                        Mon - Fri: 9:00 AM - 7:00 PM<br />
                        Saturday: 10:00 AM - 5:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/447985708511"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="font-medium">Chat on WhatsApp</span>
                </a>

                {/* Map */}
                <div className="mt-10">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.4836947193584!2d-0.12706092307899858!3d51.42687137179261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605f3a9c1a1c9%3A0x5c38c2e8e3f5c5e0!2s1%20Empire%20Mews%2C%20London%20SW16%202BF%2C%20UK!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale"
                    title="Kings Property Consultancy Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
