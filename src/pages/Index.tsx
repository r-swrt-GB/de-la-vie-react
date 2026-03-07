import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import farmHero from "@/assets/farm-hero.jpg";
import truffleCloseup from "@/assets/truffle-closeup.jpg";
import productTruffles from "@/assets/product-truffles.jpg";
import productButter from "@/assets/product-butter.jpg";
import { Phone, Mail, MessageCircle, Facebook } from "lucide-react";
import {
  breadcrumbJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/seo/structuredData";

const truffleFacts = [
  // {
  //   title: "What Are Truffles?",
  //   text: "Truffles are a type of underground fungus that grows in symbiosis with the roots of certain inoculated host trees. Unlike mushrooms, truffles grow entirely below the soil surface, making them notoriously difficult to find — traditionally requiring trained dogs to locate them by scent. At De La Vie, we cultivate the Bianchetto white truffle (Tuber borchii), a highly prized variety known for its delicate, garlicky aroma and earthy flavour.",
  // },
];

const products = [
  {
    name: "Fresh Bianchetto White Truffles",
    description:
      "Freshly harvested Bianchetto white truffles (Tuber borchii), available seasonally during the South African winter months (June to August).",
  },
  {
    name: "Fresh Truffle Butter",
    description:
      "Handcrafted truffle butter made with our own farm-fresh Bianchetto white truffles and premium locally sourced butter.",
  },
];

const whatsappNumber = "27824760809";

const buildProductWhatsappLink = (productName: string) => {
  const message = `Hi De La Vie Truffles, I'm interested in ${productName}.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const contactActions = [
  {
    icon: Phone,
    label: "Call Us",
    detail: "082 476 0809",
    href: "tel:+27824760809",
    color: "bg-primary",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    detail: "Chat with us on WhatsApp",
    href: "https://wa.me/27824760809",
    color: "bg-secondary",
  },
  {
    icon: Mail,
    label: "Email",
    detail: "fronemanlaubscher@gmail.com",
    href: "mailto:fronemanlaubscher@gmail.com",
    color: "bg-primary",
  },
  {
    icon: Facebook,
    label: "Facebook",
    detail: "Follow us on Facebook",
    href: "https://www.facebook.com/share/1EcbDSxHtg/",
    color: "bg-secondary",
  },
];

const Index = () => {
  return (
    <Layout>
      <SEO
        title="De La Vie Truffles | South African Bianchetto White Truffles"
        description="Premium Bianchetto white truffles grown in South Africa. Explore our story, products, and contact options."
        pathname="/"
        jsonLd={[websiteJsonLd, organizationJsonLd, breadcrumbJsonLd]}
      />
      {/* Hero */}
      <HeroSection
        image={farmHero}
        title="De La Vie Truffles"
        subtitle="Luxury truffles grown in the heart of South Africa."
        showCta
        imageWidth={1920}
        imageHeight={1088}
      />

      {/* Products */}
      <SectionWrapper id="products" alternate>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-6 text-center">
            Our Products
          </h2>
          <p className="text-center text-muted-foreground mb-12 flex items-center justify-center gap-2">
            We offer courier services — fresh truffles delivered to your door.
          </p>

          {/* Fresh Truffles — image left */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="overflow-hidden rounded-lg">
              <img
                src={productTruffles}
                alt="Fresh Bianchetto white truffles"
                width={800}
                height={800}
                className="w-full h-64 md:h-80 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="font-heading text-2xl font-semibold text-primary mb-3">
                {products[0].name}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{products[0].description}</p>
              <a
                href={buildProductWhatsappLink(products[0].name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={18} />
                Order on WhatsApp
              </a>
            </div>
          </div>

          {/* Truffle Butter — image right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-card rounded-lg p-8 border border-border order-2 md:order-1">
              <h3 className="font-heading text-2xl font-semibold text-primary mb-3">
                {products[1].name}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{products[1].description}</p>
              <a
                href={buildProductWhatsappLink(products[1].name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={18} />
                Order on WhatsApp
              </a>
            </div>
            <div className="overflow-hidden rounded-lg order-1 md:order-2">
              <img
                src={productButter}
                alt="Fresh truffle butter"
                width={800}
                height={800}
                className="w-full h-64 md:h-80 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact */}
      <SectionWrapper id="contact" alternate>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg mb-2">
              We'd love to hear from you. Reach out through any of the channels below.
            </p>
            <h3 className="font-heading text-xl font-semibold text-primary mt-6 mb-1">
              Froneman Laubscher
            </h3>
            <p className="text-muted-foreground">Owner, De La Vie Truffles</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target={action.href.startsWith("http") ? "_blank" : undefined}
                rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 bg-card border border-border rounded-lg p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div className={`${action.color} text-primary-foreground p-3 rounded-lg`}>
                  <action.icon size={22} />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{action.label}</h3>
                  <p className="text-sm text-muted-foreground">{action.detail}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Index;
