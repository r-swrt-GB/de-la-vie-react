import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import SEO from "@/components/SEO";
import oakForest from "@/assets/oak-tree-forest.jpg";
import farmHero from "@/assets/farm-hero.jpg";
import { getBreadcrumbJsonLd, routeSeo } from "@/seo/routeSeo";

const About = () => {
  const seo = routeSeo["/about"];

  return (
    <Layout>
      <SEO
        pathname={seo.pathname}
        title={seo.title}
        description={seo.description}
        jsonLd={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <HeroSection
        image={oakForest}
        title="Our Story"
        subtitle="Where passion meets the earth."
        imageWidth={1920}
        imageHeight={1088}
      />

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-6 text-center">
            About De La Vie Truffles
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              De La Vie Truffles was born in 2019 from a deep love for the land and a fascination
              with one of nature's most extraordinary creations. Located in the fertile soils of
              South Africa, our farm is a pioneering venture cultivating Bianchetto white truffles
              (Tuber borchii) in the Southern Hemisphere.
            </p>
            <p>
              Our journey began with a simple question: could the rich soils of South Africa
              nurture the same prized fungi that have captivated chefs and gourmands across Europe
              for centuries? The answer, we discovered, was a resounding yes.
            </p>
            <p>
              Today, our carefully planted orchards of Populus simonii and stone pine form the
              foundation of a sustainable truffle farm. Every tree is inoculated with Bianchetto
              truffle spores and tended with care. We practice organic, low-impact farming that
              works in harmony with the natural ecosystem — no shortcuts, no compromises.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper alternate>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-lg">
            <img
              src={farmHero}
              alt="De La Vie farm landscape"
              width={1920}
              height={1088}
              className="w-full h-64 md:h-80 object-cover rounded-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
              Sustainable & Natural
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Sustainability is at the heart of everything we do. From water-wise irrigation
              systems to composting and biodiversity preservation, we ensure that our farming
              practices leave the land better than we found it. Our truffles are a gift from
              nature — and we treat them that way.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default About;
