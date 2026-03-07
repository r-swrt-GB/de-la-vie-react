import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "about", label: "About" },
  { to: "truffles", label: "Truffles" },
  { to: "products", label: "Products" },
  { to: "visit", label: "Find Us" },
  { to: "contact", label: "Contact" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      scrollToSection(id);
    }
    setIsOpen(false);
  };

  return (
    <nav
      aria-label="Primary"
      className="fixed top-0 left-0 right-0 z-50 bg-[#EBE0C3]/95 backdrop-blur-sm border-b border-border"
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <button
          onClick={() => handleClick("home")}
          className="flex items-center gap-2 font-heading text-xl md:text-2xl font-semibold text-primary tracking-wide"
          aria-label="Go to top of page"
        >
          <img
            src={logo}
            alt="De La Vie Truffles logo"
            width={135}
            height={114}
            decoding="async"
            className="h-10 md:h-12 w-auto"
          />
          De La Vie Truffles
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={`#${link.to}`}
              onClick={(event) => {
                event.preventDefault();
                handleClick(link.to);
              }}
              className="text-sm font-medium tracking-wide transition-colors hover:text-primary text-muted-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#EBE0C3] border-b border-border animate-fade-in">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={`#${link.to}`}
                onClick={(event) => {
                  event.preventDefault();
                  handleClick(link.to);
                }}
                className="text-base font-medium py-2 transition-colors hover:text-primary text-muted-foreground text-left"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
