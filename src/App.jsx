import React, { useState, useEffect } from "react";
import { StickyAnnouncementBar } from "./components/layout/StickyAnnouncementBar";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

import { HomePage } from "./pages/Home";
import { ServicesPage } from "./pages/Services";
import { ServiceDetailPage } from "./pages/ServiceDetail";
import { WorkDetailPage } from "./pages/WorkDetail";
import { AboutPage } from "./pages/About";
import { CareersPage } from "./pages/Careers";
import { ContactPage } from "./pages/Contact";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicy";

const getPageFromPath = () => {
  const path = window.location.pathname;

  if (path === "/services") {
    return { page: "services", serviceId: null, workId: null };
  }
  if (path.startsWith("/services/")) {
    const raw = path.replace("/services/", "");
    const parts = raw.split("/").filter(Boolean);
    if (parts.length === 1) {
      return { page: "service-detail", serviceId: parts[0], workId: null };
    }
    if (parts.length >= 2) {
      return { page: "work-detail", serviceId: parts[0], workId: parts[1] };
    }
    return { page: "services", serviceId: null, workId: null };
  }
  if (path === "/about") return { page: "about", serviceId: null, workId: null };
  if (path === "/careers") return { page: "careers", serviceId: null, workId: null };
  if (path === "/contact") return { page: "contact", serviceId: null, workId: null };
  if (path === "/privacy-policy") return { page: "privacy-policy", serviceId: null, workId: null };

  return { page: "home", serviceId: null, workId: null };
};

const getPathFromPage = (pageId, serviceId, workId) => {
  if (pageId === "work-detail" && serviceId && workId) {
    return `/services/${serviceId}/${workId}`;
  }
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

  const navigateTo = (pageId, serviceId, workId) => {
    let targetPage = pageId;
    let targetServiceId = serviceId || null;
    let targetWorkId = workId || null;

    if (typeof pageId === "string" && pageId.startsWith("services/")) {
      const parts = pageId.replace("services/", "").split("/").filter(Boolean);
      if (parts.length === 1) {
        targetPage = "service-detail";
        targetServiceId = parts[0];
      } else if (parts.length >= 2) {
        targetPage = "work-detail";
        targetServiceId = parts[0];
        targetWorkId = parts[1];
      }
    } else if (pageId === "work-detail") {
      targetServiceId = serviceId;
      targetWorkId = workId;
    } else if (pageId === "service-detail") {
      targetServiceId = serviceId;
    }

    const path = getPathFromPage(targetPage, targetServiceId, targetWorkId);

    if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
    }

    setRoute({
      page: targetPage,
      serviceId: targetServiceId,
      workId: targetWorkId,
    });
  };

  const navCurrentPage =
    route.page === "service-detail" || route.page === "work-detail"
      ? "services"
      : route.page;

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
        {route.page === "work-detail" && (
          <WorkDetailPage
            serviceId={route.serviceId}
            workId={route.workId}
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
