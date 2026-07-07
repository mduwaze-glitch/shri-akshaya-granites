"use client";

import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const footerLinks = {
  products: [
    { name: "Granite Slabs", href: "#products" },
    { name: "Marble Slabs", href: "#products" },
    { name: "Custom Countertops", href: "#services" },
    { name: "Flooring", href: "#services" },
    { name: "Wall Cladding", href: "#services" },
  ],
  services: [
    { name: "Fabrication", href: "#services" },
    { name: "Installation", href: "#services" },
    { name: "Templating", href: "#services" },
    { name: "Delivery", href: "#services" },
    { name: "Consultation", href: "#contact" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Gallery", href: "#gallery" },
    { name: "Contact Us", href: "#contact" },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">SA</span>
              </div>
              <div>
                <p className="font-bold text-lg leading-tight tracking-wide">
                  SHRI AKSHAYA
                </p>
                <p className="text-primary text-xs tracking-[0.3em] font-medium">
                  GRANITES
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Your trusted partner for premium granite and marble solutions.
              Transforming spaces with natural stone elegance since 2009.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <span className="text-sm">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <span className="text-sm">ig</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="WhatsApp"
              >
                <span className="text-sm">wa</span>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-6">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-white/60 hover:text-primary text-sm transition-colors"
                >
                  <Phone size={16} />
                  <span>+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@shriakshayagranites.com"
                  className="flex items-center gap-3 text-white/60 hover:text-primary text-sm transition-colors"
                >
                  <Mail size={16} />
                  <span>info@shriakshayagranites.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <span>
                  Rasipalli Village,
                  <br />
                  Achamangalam, Tamil Nadu
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Shri Akshaya Granites. All rights
            reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-white hover:text-secondary transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
