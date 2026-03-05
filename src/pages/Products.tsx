import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import truffleProducts from "@/assets/truffle-products.jpg";

const products = [
  {
    name: "Fresh Bianchetto White Truffles",
    description:
      "Our signature product — freshly harvested Bianchetto white truffles (Tuber borchii), available seasonally during the South African winter months (June to August). Each truffle is hand-selected for quality and shipped with care. Grown in symbiosis with Populus simonii and stone pine host trees.",
    availability: "June – August (Winter Season)",
  },
  {
    name: "Truffle Oil",
    description:
      "Coming soon — a cold-pressed truffle-infused oil made with locally sourced extra-virgin olive oil and our own farm-fresh Bianchetto white truffles. Perfect for finishing dishes.",
    availability: "Coming Soon",
  },
  {
    name: "Farm Experiences",
    description:
      "Join us for guided truffle hunts, farm tours, and tasting experiences. Learn about the art of truffle farming and enjoy the beauty of our oak orchards first-hand.",
    availability: "By Appointment",
  },
];

const Products = () => {
  return (
    <Layout>
      <HeroSection
        image={truffleProducts}
        title="Our Products"
        subtitle="From earth to table — nature's finest."
      />

      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 md:gap-12">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-shadow"
              >
                <h3 className="font-heading text-2xl font-semibold text-primary mb-3">
                  {product.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{product.description}</p>
                <span className="inline-block text-sm font-medium text-secondary bg-muted px-4 py-1.5 rounded-full">
                  {product.availability}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Products;
