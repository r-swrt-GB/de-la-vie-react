import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import Layout from "@/components/Layout";
import farmHero from "@/assets/farm-hero.jpg";
import truffleCloseup from "@/assets/truffle-closeup.jpg";
import oakForest from "@/assets/oak-tree-forest.jpg";

const Index = () => {
  return (
    <Layout>
      <HeroSection
        image={farmHero}
        title="De La Vie Truffles"
        subtitle="Luxury truffles grown in the heart of South Africa."
        showCta
      />

      {/* Intro */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-6">
            A Taste of the Extraordinary
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Since 2019, De La Vie Truffles has been cultivating prized Bianchetto white truffles
            (Tuber borchii) in the South African countryside. Using Populus simonii and stone pine
            as host trees, our farm brings the art of European truffle cultivation to the
            Southern Hemisphere, producing a truly exceptional delicacy.
          </p>
        </div>
      </SectionWrapper>

      {/* About preview */}
      <SectionWrapper alternate>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-lg">
            <img
              src={truffleCloseup}
              alt="Fresh Bianchetto white truffle on forest soil"
              className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-semibold text-primary mb-4">
              Nature's Hidden Gem
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Truffles are among the world's most prized culinary ingredients — rare underground fungi
              that grow symbiotically with the roots of host trees. Our Bianchetto white truffles
              thrive alongside Populus simonii and stone pine, a product of patience, perfect soil
              conditions, and nature's own timing.
            </p>
            <a
              href="/truffles"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all"
            >
              Learn About Truffles
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* Oak trees */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-heading text-3xl font-semibold text-primary mb-4">
              Rooted in Tradition
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our orchards of Populus simonii and stone pine mirror the truffières of Europe. Since
              2019, with careful cultivation, sustainable practices, and deep respect for the land,
              we've been bringing the European countryside tradition to African soil.
            </p>
            <a
              href="/about"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all"
            >
              Our Story
            </a>
          </div>
          <div className="order-1 md:order-2 overflow-hidden rounded-lg">
            <img
              src={oakForest}
              alt="Oak tree forest with dappled sunlight"
              className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Index;
