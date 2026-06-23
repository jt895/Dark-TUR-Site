import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import turHeaderLogo from "../assets/tur-logo-white.png";

export function Navigation() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/how-we-work", label: "How We Work" },
    { path: "/services", label: "Services" },
    { path: "/case-studies", label: "Case Studies" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-[rgba(8,12,12,0.96)] shadow-[0_10px_35px_rgba(0,0,0,0.35)]" : "bg-[rgba(8,12,12,0.78)] backdrop-blur-md"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          <Link to="/" className="flex items-center space-x-3 group">
            <img src={turHeaderLogo} alt="The United Republic" className="h-24 w-auto transition-opacity group-hover:opacity-80" />
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                  isActive(link.path)
                    ? "text-[var(--accent-soft)]"
                    : "text-[var(--text-main)] hover:text-[var(--accent-soft)]"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--accent)]" />
                )}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[var(--text-main)] hover:text-[var(--accent-soft)] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[var(--surface-1)] border-t border-[var(--border-subtle)]">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-[var(--accent-soft)] bg-[var(--surface-2)]"
                    : "text-[var(--text-main)] hover:text-[var(--accent-soft)] hover:bg-[var(--surface-2)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
