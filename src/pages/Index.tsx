import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import farmHero from "@/assets/farm-hero.jpg";
import truffleCloseup from "@/assets/truffle-closeup.jpg";
import productTruffles from "@/assets/product-truffles.jpg";
import productButter from "@/assets/product-butter.jpg";
import { MapPin, Navigation, Phone, Mail, MessageCircle, Facebook, Truck } from "lucide-react";
import {
  breadcrumbJsonLd,
  localBusinessJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/seo/structuredData";

const truffleFacts = [
  {
    title: "What Are Truffles?",
    text: "Truffles are a type of underground fungus that grows in symbiosis with the roots of certain inoculated host trees. Unlike mushrooms, truffles grow entirely below the soil surface, making them notoriously difficult to find — traditionally requiring trained dogs to locate them by scent. At De La Vie, we cultivate the Bianchetto white truffle (Tuber borchii), a highly prized variety known for its delicate, garlicky aroma and earthy flavour.",
  },
  {
    title: "How Do They Grow?",
    text: "Truffles form through a delicate mycorrhizal relationship with inoculated host trees. The tree provides sugars to the truffle, while the truffle enhances the tree's ability to absorb water and nutrients. At De La Vie, we use Populus simonii and stone pine trees, each carefully inoculated with Bianchetto truffle spores. This symbiosis requires specific soil conditions and patience — it takes several years from planting before the first truffles appear.",
  },
  {
    title: "Why Bianchetto?",
    text: "The Bianchetto white truffle (Tuber borchii) is one of the most sought-after truffle varieties in the world. While smaller than its famous cousin the Alba white truffle, the Bianchetto offers a remarkable depth of flavour — earthy, garlicky, and subtly sweet. It is adaptable to different climates and soils, making it ideal for cultivation in South Africa.",
  },
  {
    title: "Why South Africa?",
    text: "South Africa's diverse climate zones include regions with conditions perfectly suited to truffle cultivation — cool winters, moderate rainfall, and suitable soils. The Southern Hemisphere's opposite seasons also mean South African truffles mature during the Northern Hemisphere's off-season, creating unique market opportunities. De La Vie has been proving this since 2019.",
  },
];

const products = [
  {
    name: "Fresh Bianchetto White Truffles",
    description:
      "Our signature offering — freshly harvested Bianchetto white truffles (Tuber borchii), available seasonally during the South African winter months (June to August). Each truffle is hand-selected for quality and shipped with care. Grown in symbiosis with inoculated Populus simonii and stone pine host trees.",
    availability: "Available in Season",
  },
  {
    name: "Fresh Truffle Butter",
    description:
      "Handcrafted truffle butter made with our own farm-fresh Bianchetto white truffles and premium locally sourced butter. Rich, aromatic, and perfect for finishing steaks, pasta, risotto, or spreading on warm bread. A luxurious way to enjoy the essence of our truffles.",
    availability: "While Stock Last",
  },
];

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
        jsonLd={[websiteJsonLd, organizationJsonLd, localBusinessJsonLd, breadcrumbJsonLd]}
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

      {/* About */}
      <SectionWrapper id="about">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-6">
            Our Story
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg text-left">
            <p>
              De La Vie Truffles was born in 2019 from a deep love for the land and a fascination
              with one of nature's most extraordinary creations. Located in the fertile soils of
              South Africa, our farm is a pioneering venture cultivating Bianchetto white truffles
              (Tuber borchii).
            </p>
            <p>
              Today, our carefully planted orchards of inoculated Populus simonii and stone pine
              form the foundation of a sustainable truffle farm. Every tree is inoculated with
              Bianchetto truffle spores and tended with care. We practice organic, low-impact
              farming that works in harmony with the natural ecosystem — no shortcuts, no compromises.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Products */}
      <SectionWrapper id="products" alternate>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-6 text-center">
            Our Products
          </h2>
          <p className="text-center text-muted-foreground mb-12 flex items-center justify-center gap-2">
            <Truck size={18} className="text-primary" />
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
              <span className="inline-block text-sm font-medium text-secondary bg-muted px-4 py-1.5 rounded-full">
                {products[0].availability}
              </span>
            </div>
          </div>

          {/* Truffle Butter — image right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-card rounded-lg p-8 border border-border order-2 md:order-1">
              <h3 className="font-heading text-2xl font-semibold text-primary mb-3">
                {products[1].name}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{products[1].description}</p>
              <span className="inline-block text-sm font-medium text-secondary bg-muted px-4 py-1.5 rounded-full">
                {products[1].availability}
              </span>
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

      {/* Truffles */}
      <SectionWrapper id="truffles">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="overflow-hidden rounded-lg">
            <img
              src={truffleCloseup}
              alt="Fresh Bianchetto white truffle"
              width={1024}
              height={1024}
              className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-4">
              Bianchetto White Truffles
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Truffles are among the world's most prized culinary ingredients — rare underground fungi
              that grow symbiotically with the roots of inoculated host trees. Our Bianchetto white truffles
              thrive alongside inoculated Populus simonii and stone pine, a product of patience, perfect soil
              conditions, and nature's own timing.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {truffleFacts.map((fact, index) => (
            <div key={fact.title} className={index % 2 !== 0 ? "bg-card rounded-lg p-8 border border-border" : ""}>
              <h3 className="font-heading text-2xl font-semibold text-primary mb-3">
                {fact.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">{fact.text}</p>
            </div>
          ))}
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

      {/* Visit / Location */}
      <SectionWrapper id="visit">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-4">
            Find Us
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            Located in the heart of South Africa.
          </p>
          <p className="text-muted-foreground mb-8 flex items-center justify-center gap-2">
            <Truck size={18} className="text-primary" />
            We offer courier services — fresh truffles and truffle butter delivered to your door.
          </p>
          <a
            href="https://maps.google.com/?q=De+La+Vie+Truffles+South+Africa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all text-base"
          >
            <Navigation size={18} />
            Open in Google Maps
          </a>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Index;
