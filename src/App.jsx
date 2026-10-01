import React, { useState, useEffect } from "react";
import { StickyAnnouncementBar } from "./components/layout/StickyAnnouncementBar";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

import { HomePage } from "./pages/Home";
import { ServicesPage } from "./pages/Services";
import { ServiceDetailPage } from "./pages/ServiceDetail";
import { AboutPage } from "./pages/About";
import { CareersPage } from "./pages/Careers";
import { ContactPage } from "./pages/Contact";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicy";

const getPageFromPath = () => {
  const path = window.location.pathname;

  if (path === "/services") {
    return { page: "services", serviceId: null };
  }
  if (path.startsWith("/services/")) {
    const serviceId = path.replace("/services/", "");
    if (serviceId) {
      return { page: "service-detail", serviceId };
    }
    return { page: "services", serviceId: null };
  }
  if (path === "/about") return { page: "about", serviceId: null };
  if (path === "/careers") return { page: "careers", serviceId: null };
  if (path === "/contact") return { page: "contact", serviceId: null };
  if (path === "/privacy-policy") return { page: "privacy-policy", serviceId: null };

  return { page: "home", serviceId: null };
};

const getPathFromPage = (pageId, serviceId) => {
  if (pageId === "service-detail" && serviceId) {
    return `/services/${serviceId}`;
  }
  if (typeof pageId === "string" && pageId.startsWith("services/")) {
    return `/${pageId}`;
  }
  if (pageId === "services") return "/services";
  if (pageId === "about") return "/about";
  if (pageId === "careers") return "/careers";
  if (pageId === "contact") return "/contact";
  if (pageId === "privacy-policy") return "/privacy-policy";

  return "/";
};

export default function App() {
  const [route, setRoute] = useState(getPageFromPath);

  useEffect(() => {
    const handlePopState = () => {
      setRoute(getPageFromPath());
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [route]);

  const navigateTo = (pageId, serviceId) => {
    let targetPage = pageId;
    let targetServiceId = serviceId || null;

    if (typeof pageId === "string" && pageId.startsWith("services/")) {
      targetServiceId = pageId.replace("services/", "");
      targetPage = "service-detail";
    } else if (pageId === "service-detail" && serviceId) {
      targetServiceId = serviceId;
    }

    const path = getPathFromPage(targetPage, targetServiceId);

    if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
    }

    setRoute({ page: targetPage, serviceId: targetServiceId });
  };

  const navCurrentPage =
    route.page === "service-detail" ? "services" : route.page;

  return (
    <div className="min-h-screen flex flex-col bg-pragmatto-bgLight text-slate-800 antialiased font-sans">
      <StickyAnnouncementBar onNavigate={navigateTo} />

      <Navbar currentPage={navCurrentPage} onNavigate={navigateTo} />

      <div className="flex-grow">
        {route.page === "home" && <HomePage onNavigate={navigateTo} />}
        {route.page === "services" && <ServicesPage onNavigate={navigateTo} />}
        {route.page === "service-detail" && (
          <ServiceDetailPage
            serviceId={route.serviceId}
            onNavigate={navigateTo}
          />
        )}
        {route.page === "about" && <AboutPage onNavigate={navigateTo} />}
        {route.page === "careers" && <CareersPage onNavigate={navigateTo} />}
        {route.page === "contact" && <ContactPage onNavigate={navigateTo} />}
        {route.page === "privacy-policy" && (
          <PrivacyPolicyPage onNavigate={navigateTo} />
        )}
      </div>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}
