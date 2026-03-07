interface HeroSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  showCta?: boolean;
  imageWidth: number;
  imageHeight: number;
}

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const HeroSection = ({
  image,
  title,
  subtitle,
  showCta = false,
  imageWidth,
  imageHeight,
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
      <img
        src={image}
        alt={title}
        width={imageWidth}
        height={imageHeight}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-forest/60" />

      <div className="relative z-10 text-center px-6 max-w-3xl animate-fade-in">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-cream-light leading-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-cream-light/90 font-light mb-8 max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
        {showCta && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#visit"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("visit");
              }}
              className="inline-block px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all text-base"
            >
              Visit the Farm
            </a>
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("contact");
              }}
              className="inline-block px-8 py-4 border-2 border-cream-light text-cream-light font-medium rounded-lg hover:bg-cream-light/10 transition-all text-base"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
