import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import SEO from "@/components/SEO";
import { Phone, Mail, MessageCircle, Facebook } from "lucide-react";
import { getBreadcrumbJsonLd, routeSeo } from "@/seo/routeSeo";

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

const Contact = () => {
  const seo = routeSeo["/contact"];

  return (
    <Layout>
      <SEO
        pathname={seo.pathname}
        title={seo.title}
        description={seo.description}
        jsonLd={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <div className="bg-forest py-20 md:py-28">
        <div className="container text-center animate-fade-in">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-cream-light mb-4">
            Get In Touch
          </h1>
          <p className="text-cream-light/80 text-lg max-w-xl mx-auto">
            We'd love to hear from you. Reach out to us through any of the channels below.
          </p>
        </div>
      </div>

      <SectionWrapper>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl font-semibold text-primary mb-2">
              Froneman Laubscher
            </h2>
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

export default Contact;
