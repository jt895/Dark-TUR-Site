import { Link } from "react-router";
import turLogoWhite from "../assets/tur-logo-white.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--surface-0)] text-white mt-24 border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="lg:col-span-2">
            <img src={turLogoWhite} alt="The United Republic" className="h-24 w-auto mb-6" />
            <p className="text-[var(--text-muted)] leading-relaxed max-w-md">
              An independent communications strategy consultancy helping organisations define the real problem, shape the right strategy, and guide the work that follows.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/how-we-work" className="text-[var(--text-muted)] hover:text-[var(--accent-soft)] transition-colors">How We Work</Link></li>
              <li><Link to="/services" className="text-[var(--text-muted)] hover:text-[var(--accent-soft)] transition-colors">Services</Link></li>
              <li><Link to="/case-studies" className="text-[var(--text-muted)] hover:text-[var(--accent-soft)] transition-colors">Case Studies</Link></li>
              <li><Link to="/about" className="text-[var(--text-muted)] hover:text-[var(--accent-soft)] transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Get in Touch</h4>
            <ul className="space-y-3 text-[var(--text-muted)]">
              <li><a href="mailto:hello@theunitedrepublic.com.au" className="hover:text-[var(--accent-soft)] transition-colors">hello@theunitedrepublic.com.au</a></li>
              <li><Link to="/contact" className="hover:text-[var(--accent-soft)] transition-colors">Contact Us</Link></li>
              <li><Link to="/why-independent" className="hover:text-[var(--accent-soft)] transition-colors">Why Strategy Works</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border-subtle)] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[var(--text-subtle)]">
          <p>© {currentYear} The United Republic. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Independent communications strategy consultancy</p>
        </div>
      </div>
    </footer>
  );
}
