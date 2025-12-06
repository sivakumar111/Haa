import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from "lucide-react";

const footerLinks = {
  company: [
    { name: "Home", path: "/" },
    { name: "Servies", path: "/services" },
    { name: "Productes", path: "/products" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "AI Automation", path: "/services" },
    { name: "n8n Automation", path: "/services" },
    { name: "Custom Development", path: "/services" },
  ],
  products: [
    { name: "Agent Suite", path: "/products" },
    { name: "CRM Integrator", path: "/products" },
    { name: "Insight Engine", path: "/products" },
  ],
  legal: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative mt-20">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="glass border-t-0">
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-[hsl(35_100%_55%)] flex items-center justify-center font-heading font-bold text-primary-foreground text-lg">
                  A
                </div>
                <span className="font-heading font-semibold text-xl text-foreground">
                  Auto<span className="text-primary">Go</span>AI
                </span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
                Empowering businesses with AI-driven automation, innovative IT solutions, and scalable engineering.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a href="mailto:autogoai.in@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  autogoai.in@gmail.com
                </a>
                <a href="tel:+919949336587" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  +91 9949336587 
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  Rajahmundry, East Godavari, Andhra Pradesh, India
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-6">
                {[
                  { icon: Twitter, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Github, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4">Products</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <h4 className="font-heading font-semibold text-foreground mb-4 mt-6">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AutoGoAI. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Build Faster. Scale Smarter.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
