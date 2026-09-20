import React from "react";
import { siteContent, PRAGMATTO_LOGO_URL } from "../../data/siteContent";
import { Mail, Linkedin } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";

export function Footer({ onNavigate }) {
  const { company } = siteContent;

  const handleLinkClick = (id) => {
    if (onNavigate) {
      onNavigate(id);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-pragmatto-navy text-white relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Column 1: Company Logo & Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="inline-block bg-white p-3.5 rounded-2xl shadow-sm">
              <img
                src={PRAGMATTO_LOGO_URL}
                alt="Pragmatto Solutions logo"
                className="h-16 sm:h-20 w-auto object-contain max-h-[85px]"
              />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Pragmatto provides practical technology support for small and
              medium-sized businesses. We help reduce manual work, clean up
              business data, improve existing software, and build small internal
              tools - with right-sized teams and U.S. accountability.
            </p>
            <div className="flex gap-3">
              <div className="pt-2 flex items-center space-x-3">
                <a
                  href={company.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-pragmatto-blue text-slate-300 hover:text-white flex items-center justify-center transition-colors duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <div className="pt-2 flex items-center space-x-3">
                <a
                  href={company.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-pragmatto-blue text-slate-300 hover:text-white flex items-center justify-center transition-colors duration-200"
                  aria-label="Facebook Profile"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-pragmatto-cyan">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick("home")}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("services")}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("about")}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("careers")}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Careers
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Reach US Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-pragmatto-cyan">
              Reach US
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div>
                <span className="text-xs font-semibold uppercase text-slate-400 block mb-1">
                  General Inquiries:
                </span>
                <a
                  href={`mailto:${company.contactEmail}`}
                  className="flex items-center gap-2 hover:text-pragmatto-cyan transition-colors font-medium"
                >
                  <Mail className="w-4 h-4 text-pragmatto-blue" />
                  {company.contactEmail}
                </a>
              </div>

              <div className="pt-2">
                <span className="text-xs font-semibold uppercase text-slate-400 block mb-1">
                  Careers & Talent Pool:
                </span>
                <a
                  href={`mailto:${company.careersEmail}`}
                  className="flex items-center gap-2 hover:text-pragmatto-cyan transition-colors font-medium"
                >
                  <Mail className="w-4 h-4 text-pragmatto-cyan" />
                  {company.careersEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{company.copyright}</p>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => handleLinkClick("privacy-policy")}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleLinkClick("contact")}
              className="hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
