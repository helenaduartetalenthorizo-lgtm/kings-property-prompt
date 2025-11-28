import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <img src={logo} alt="Kings Property Consultancy" className="h-16 w-auto" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted partner in London's premium property market. We deliver exceptional service with integrity and expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-primary mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "About", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg text-primary mb-6">Our Services</h4>
            <ul className="space-y-3">
              {["Property Sales", "Lettings", "Valuations", "Property Management", "Mortgage Advice"].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg text-primary mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  1 Empire Mews, London SW16 2BF, United Kingdom
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+447985708511" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  +44 7985 708511
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-muted-foreground text-sm">
                  <p>Mon-Fri: 9AM - 7PM</p>
                  <p>Sat: 10AM - 5PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Kings Property Consultancy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
