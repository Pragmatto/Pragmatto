import React, { useState, useEffect } from "react";
import { StickyAnnouncementBar } from "./components/layout/StickyAnnouncementBar";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

import { HomePage } from "./pages/Home";
import { ServicesPage } from "./pages/Services";
import { AboutPage } from "./pages/About";
import { CareersPage } from "./pages/Careers";
import { ContactPage } from "./pages/Contact";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicy";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-pragmatto-bgLight text-slate-800 antialiased font-sans">
      {/* Talent Pool Announcement Bar */}
      <StickyAnnouncementBar onNavigate={navigateTo} />

      {/* Main Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Dynamic Page Router Body */}
      <div className="flex-grow">
        {currentPage === "home" && <HomePage onNavigate={navigateTo} />}
        {currentPage === "services" && <ServicesPage onNavigate={navigateTo} />}
        {currentPage === "about" && <AboutPage onNavigate={navigateTo} />}
        {currentPage === "careers" && <CareersPage onNavigate={navigateTo} />}
        {currentPage === "contact" && <ContactPage onNavigate={navigateTo} />}
        {currentPage === "privacy-policy" && (
          <PrivacyPolicyPage onNavigate={navigateTo} />
        )}
      </div>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
