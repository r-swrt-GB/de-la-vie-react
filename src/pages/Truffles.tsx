import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import truffleCloseup from "@/assets/truffle-closeup.jpg";

const truffleFacts = [
  {
    title: "What Are Truffles?",
    text: "Truffles are a type of underground fungus that grows in symbiosis with the roots of certain trees. Unlike mushrooms, truffles grow entirely below the soil surface, making them notoriously difficult to find — traditionally requiring trained dogs to locate them by scent. At De La Vie, we cultivate the Bianchetto white truffle (Tuber borchii), a highly prized variety known for its delicate, garlicky aroma and earthy flavour.",
  },
  {
    title: "How Do They Grow?",
    text: "Truffles form through a delicate mycorrhizal relationship with host trees. The tree provides sugars to the truffle, while the truffle enhances the tree's ability to absorb water and nutrients. At De La Vie, we use Populus simonii and stone pine as our host trees, inoculated with Bianchetto truffle spores. This symbiosis requires specific soil conditions and patience — it takes several years from planting before the first truffles appear.",
  },
  {
    title: "Why Bianchetto?",
    text: "The Bianchetto white truffle (Tuber borchii) is one of the most sought-after truffle varieties in the world. While smaller than its famous cousin the Alba white truffle, the Bianchetto offers a remarkable depth of flavour — earthy, garlicky, and subtly sweet. It is more adaptable to different climates and soils, making it ideal for cultivation in South Africa.",
  },
  {
    title: "Why South Africa?",
    text: "South Africa's diverse climate zones include regions with conditions remarkably similar to the truffle-producing regions of Europe — cool winters, moderate rainfall, and suitable soils. The Southern Hemisphere's opposite seasons also mean South African truffles mature during Europe's off-season, creating unique market opportunities. De La Vie has been proving this since 2019.",
  },
];

const Truffles = () => {
  return (
    <Layout>
      <HeroSection
        image={truffleCloseup}
        title="Bianchetto White Truffles"
        subtitle="The world's most treasured culinary ingredient."
      />

      {truffleFacts.map((fact, index) => (
        <SectionWrapper key={fact.title} alternate={index % 2 !== 0}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-4">
              {fact.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{fact.text}</p>
          </div>
        </SectionWrapper>
      ))}
    </Layout>
  );
};

export default Truffles;
