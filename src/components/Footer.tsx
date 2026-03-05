import { Phone, Mail, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-forest text-primary-foreground py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-heading text-2xl font-semibold mb-2">De La Vie Truffles</h3>
            <p className="text-primary-foreground/70 text-sm">
              Luxury truffles grown in the heart of South Africa.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3 text-sm">
            <a href="tel:+27824760809" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Phone size={16} />
              082 476 0809
            </a>
            <a href="mailto:fronemanlaubscher@gmail.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Mail size={16} />
              fronemanlaubscher@gmail.com
            </a>
            <a
              href="https://www.facebook.com/share/1EcbDSxHtg/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Facebook size={16} />
              Facebook
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} De La Vie Truffles. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
