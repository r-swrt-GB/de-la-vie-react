import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import { MapPin, Navigation } from "lucide-react";
import visitFarm from "@/assets/visit-farm.jpg";

const Visit = () => {
  const googleMapsUrl = "https://maps.google.com/?q=De+La+Vie+Truffles+South+Africa";

  return (
    <Layout>
      <HeroSection
        image={visitFarm}
        title="Visit Us"
        subtitle="Experience the farm first-hand."
      />

      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-6">
            Come See Where the Magic Happens
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            We welcome visitors by appointment. Walk through our orchards of Populus simonii and
            stone pine, learn about Bianchetto white truffle cultivation, and experience the
            tranquility of our farm. Whether you're a chef, a food enthusiast, or simply curious
            — we'd love to show you around.
          </p>

          <div className="bg-card rounded-lg border border-border p-8 mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="text-primary" size={24} />
              <h3 className="font-heading text-xl font-semibold text-primary">Farm Location</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              De La Vie Truffles, South Africa
            </p>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all text-base"
            >
              <Navigation size={18} />
              Open in Google Maps
            </a>
          </div>

          <div className="bg-card rounded-lg border border-border p-8">
            <h3 className="font-heading text-xl font-semibold text-primary mb-4">
              Planning Your Visit
            </h3>
            <div className="space-y-4 text-muted-foreground text-left max-w-lg mx-auto">
              <p>
                <strong className="text-foreground">Appointments:</strong> All visits are by
                appointment only. Please contact us in advance to arrange a time.
              </p>
              <p>
                <strong className="text-foreground">Truffle Season:</strong> The best time to
                visit is during our winter harvest season (June – August) when you can witness a
                live truffle hunt.
              </p>
              <p>
                <strong className="text-foreground">What to Expect:</strong> A guided walk
                through our orchards, an introduction to Bianchetto white truffle farming, and a
                chance to see (and smell!) fresh white truffles straight from the earth.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Visit;
