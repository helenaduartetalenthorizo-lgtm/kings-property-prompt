import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Kings Property Consultancy" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wider uppercase transition-colors duration-300 hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+447985708511"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+44 7985 708511</span>
            </a>
            <Link to="/contact">
              <Button variant="hero" size="default">
                Free Valuation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wider uppercase py-2 transition-colors ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="mt-4">
            <Button variant="hero" className="w-full">
              Free Valuation
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
