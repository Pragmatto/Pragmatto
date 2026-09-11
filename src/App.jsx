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

const getPageFromPath = () => {
  const path = window.location.pathname;

  if (path === "/services") return "services";
  if (path === "/about") return "about";
  if (path === "/careers") return "careers";
  if (path === "/contact") return "contact";
  if (path === "/privacy-policy") return "privacy-policy";

  return "home";
};

const getPathFromPage = (pageId) => {
  if (pageId === "services") return "/services";
  if (pageId === "about") return "/about";
  if (pageId === "careers") return "/careers";
  if (pageId === "contact") return "/contact";
  if (pageId === "privacy-policy") return "/privacy-policy";

  return "/";
};

export default function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromPath);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath());
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const navigateTo = (pageId) => {
    const path = getPathFromPage(pageId);

    if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
    }

    setCurrentPage(pageId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-pragmatto-bgLight text-slate-800 antialiased font-sans">
      <StickyAnnouncementBar onNavigate={navigateTo} />

      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

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

      <Footer onNavigate={navigateTo} />
    </div>
  );
}
