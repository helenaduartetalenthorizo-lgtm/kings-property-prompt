import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Kings Property Consultancy made selling our family home an absolute breeze. Their professionalism and market knowledge exceeded our expectations.",
    author: "James & Sarah Mitchell",
    location: "Streatham, London",
  },
  {
    text: "From valuation to completion, the team at Kings were exceptional. They achieved above our asking price and handled everything with care.",
    author: "David Thompson",
    location: "Norbury, London",
  },
  {
    text: "As a landlord with multiple properties, I trust Kings implicitly. Their property management service is second to none.",
    author: "Elizabeth Chen",
    location: "Balham, London",
  },
  {
    text: "The most professional and dedicated estate agents I've ever worked with. They truly go above and beyond for their clients.",
    author: "Michael Roberts",
    location: "Tooting, London",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary uppercase tracking-widest text-sm font-medium mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative bg-card border border-border p-12 md:p-16">
            <Quote className="absolute top-8 left-8 h-12 w-12 text-primary/20" />
            
            <div className="relative z-10">
              <p className="font-display text-xl md:text-2xl text-foreground leading-relaxed mb-8 text-center">
                "{testimonials[current].text}"
              </p>
              <div className="text-center">
                <p className="text-primary font-medium">
                  {testimonials[current].author}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonials[current].location}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="p-3 border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
              className="p-3 border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current ? "bg-primary w-6" : "bg-muted-foreground/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
