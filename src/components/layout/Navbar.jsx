import React, { useState, useEffect } from "react";
import { PRAGMATTO_LOGO_URL } from "../../data/siteContent";
import { Button } from "../ui/Button";
import { Menu, X } from "lucide-react";

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
    { id: "about", label: "About" },
    { id: "careers", label: "Careers" },
    { id: "privacy-policy", label: "Privacy Policy" },
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
      className={`sticky top-0 z-40 transition-all duration-300 bg-white border-b border-slate-100 ${
        isScrolled ? "shadow-md py-3 sm:py-4" : "py-4 sm:py-6"
      }`}
    >
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Logo Section - Matching exact large reference size requested by user */}
          <div
            onClick={() => handleNavClick("home")}
            className="cursor-pointer flex items-center shrink-0 group py-1"
          >
            <img
              src={PRAGMATTO_LOGO_URL}
              alt="Pragmatto Solutions official logo"
              className="h-20 sm:h-24 lg:h-24 max-h-[200px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-base font-semibold transition-colors duration-200 cursor-pointer py-1 relative ${
                    isActive
                      ? "text-pragmatto-blue"
                      : "text-pragmatto-navy hover:text-pragmatto-blue"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-pragmatto-blue rounded-full" />
                  )}
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
              className="shadow-sm font-semibold"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-pragmatto-navy hover:bg-slate-100 focus:outline-none border border-slate-200/80"
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
        <div className="md:hidden bg-white border-b border-slate-200 px-5 pt-4 pb-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  currentPage === link.id
                    ? "bg-blue-50 text-pragmatto-blue"
                    : "text-pragmatto-navy hover:bg-slate-50"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                className="w-full font-semibold"
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
