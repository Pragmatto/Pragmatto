import React, { useState, useEffect } from "react";
import { PRAGMATTO_LOGO_URL } from "../../data/siteContent";
import { Button } from "../ui/Button";
import { Menu, X, ChevronRight } from "lucide-react";

export function Navbar({ currentPage, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About Us" },
    { id: "careers", label: "Careers" },
  ];

  const handleNavClick = (id) => {
    if (onNavigate) {
      onNavigate(id);
    }
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-glass border-b border-slate-100 py-3.5 sm:py-4"
          : "bg-white py-4 sm:py-6 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Official Pragmatto Logo - Prominent sizing & aspect ratio */}
          <div
            onClick={() => handleNavClick("home")}
            className="cursor-pointer flex items-center shrink-0 group py-1"
          >
            <img
              src={PRAGMATTO_LOGO_URL}
              alt="Pragmatto Solutions official logo"
              className="h-20 sm:h-24 lg:h-28 max-h-[110px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-slate-50/80 p-1.5 rounded-2xl border border-slate-200/60">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-white text-pragmatto-blue shadow-sm border border-slate-200/60"
                      : "text-pragmatto-navy hover:text-pragmatto-blue hover:bg-white/60"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4 shrink-0">
            <Button
              variant="primary"
              size="md"
              onClick={() => handleNavClick("contact")}
              className="shadow-glow-blue font-bold rounded-xl"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 rounded-2xl text-pragmatto-navy hover:bg-slate-100 focus:outline-none border border-slate-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-5 pt-4 pb-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-bold transition-colors ${
                  currentPage === link.id
                    ? "bg-blue-50 text-pragmatto-blue"
                    : "text-pragmatto-navy hover:bg-slate-50"
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
            <div className="pt-3">
              <Button
                variant="primary"
                size="md"
                className="w-full font-bold shadow-glow-blue"
                onClick={() => handleNavClick("contact")}
              >
                Contact Us
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
