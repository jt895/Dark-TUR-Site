import { Link } from "react-router";
import logo from "../assets/tur-logo-white.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#03090A] text-white mt-20 border-t border-[#163135]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="lg:col-span-2">
            <img src={logo} alt="The United Republic" className="h-24 w-auto mb-6" />
            <p className="text-white leading-relaxed max-w-md">
              An independent communications strategy consultancy helping organisations define the real problem, shape the right strategy, and guide the work that follows.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/how-we-work" className="text-white hover:text-[#9AE8D5] transition-colors">How We Work</Link></li>
              <li><Link to="/services" className="text-white hover:text-[#9AE8D5] transition-colors">Services</Link></li>
              <li><Link to="/case-studies" className="text-white hover:text-[#9AE8D5] transition-colors">Case Studies</Link></li>
              <li><Link to="/about" className="text-white hover:text-[#9AE8D5] transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-white">
              <li><a href="mailto:hello@theunitedrepublic.com.au" className="hover:text-[#9AE8D5] transition-colors">hello@theunitedrepublic.com.au</a></li>
              <li><Link to="/contact" className="hover:text-[#9AE8D5] transition-colors">Contact Us</Link></li>
              <li><Link to="/why-independent" className="hover:text-[#9AE8D5] transition-colors">Why Strategy Works</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#163135] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white">
          <p>© {currentYear} The United Republic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
