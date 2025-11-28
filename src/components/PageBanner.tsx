import hero1 from "@/assets/hero-1.jpg";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  image?: string;
}

const PageBanner = ({ title, subtitle, image = hero1 }: PageBannerProps) => {
  return (
    <section className="page-banner">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 text-center px-4">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageBanner;
