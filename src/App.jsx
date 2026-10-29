import React, { useState, useEffect } from "react";
import { StickyAnnouncementBar } from "./components/layout/StickyAnnouncementBar";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { SEO } from "./components/common/SEO";

import { HomePage } from "./pages/Home";
import { ServicesPage } from "./pages/Services";
import { ServiceDetailPage } from "./pages/ServiceDetail";
import { WorkDetailPage } from "./pages/WorkDetail";
import { AboutPage } from "./pages/About";
import { CareersPage } from "./pages/Careers";
import { ContactPage } from "./pages/Contact";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicy";
import { NotFoundPage } from "./pages/NotFound";

import { siteContent } from "./data/siteContent";
import { slugify } from "./data/workDetails";
import { getPageSEO, SITE_DOMAIN } from "./data/seoMetadata";
import { useLenis } from "./components/common/SmoothScroll";

const getPageFromPath = () => {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  if (path === "/" || path === "") {
    return { page: "home", serviceId: null, workId: null };
  }
  if (path === "/services") {
    return { page: "services", serviceId: null, workId: null };
  }
  if (path.startsWith("/services/")) {
    const raw = path.replace("/services/", "");
    const parts = raw.split("/").filter(Boolean);

    if (parts.length === 1) {
      const serviceExists = siteContent.services.some((s) => s.id === parts[0]);
      if (serviceExists) {
        return { page: "service-detail", serviceId: parts[0], workId: null };
      }
      return { page: "not-found", serviceId: null, workId: null };
    }

    if (parts.length === 2) {
      const service = siteContent.services.find((s) => s.id === parts[0]);
      if (service) {
        const workExists = service.features.some(
          (f) =>
            slugify(f) === parts[1] ||
            f.toLowerCase() === parts[1].replace(/-/g, " ").toLowerCase(),
        );
        if (workExists) {
          return { page: "work-detail", serviceId: parts[0], workId: parts[1] };
        }
      }
      return { page: "not-found", serviceId: null, workId: null };
    }

    return { page: "not-found", serviceId: null, workId: null };
  }

  if (path === "/about") return { page: "about", serviceId: null, workId: null };
  if (path === "/careers") return { page: "careers", serviceId: null, workId: null };
  if (path === "/contact") return { page: "contact", serviceId: null, workId: null };
  if (path === "/privacy-policy") return { page: "privacy-policy", serviceId: null, workId: null };

  return { page: "not-found", serviceId: null, workId: null };
};

const getPathFromPage = (pageId, serviceId, workId) => {
  if (pageId === "work-detail" && serviceId && workId) {
    return `/services/${serviceId}/${workId}`;
  }
  if (pageId === "service-detail" && serviceId) {
    return `/services/${serviceId}`;
  }
  if (pageId === "services") return "/services";
  if (pageId === "about") return "/about";
  if (pageId === "careers") return "/careers";
  if (pageId === "contact") return "/contact";
  if (pageId === "privacy-policy") return "/privacy-policy";
  if (pageId === "not-found") return "/404";

  return "/";
};

export default function App() {
  const [route, setRoute] = useState(getPageFromPath);
  const lenis = useLenis();

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
    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(0, { immediate: true });
    } else if (typeof window.__lenis?.scrollTo === "function") {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    // Recalculate dimensions for the newly rendered page route
    const rafId = requestAnimationFrame(() => {
      if (lenis && typeof lenis.resize === "function") {
        lenis.resize();
      } else if (typeof window.__lenis?.resize === "function") {
        window.__lenis.resize();
      }
    });

    return () => cancelAnimationFrame(rafId);
  }, [route, lenis]);

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

  const currentSEO = getPageSEO(route);

  // Global Organization Schema for Structured Data
  const orgSchema =
    route.page === "home"
      ? {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Pragmatto Solutions",
          url: SITE_DOMAIN,
          logo: `${SITE_DOMAIN}/logo.png`,
          description: currentSEO.description,
          email: "info@pragmatto.com",
          address: {
            "@type": "PostalAddress",
            addressCountry: "US",
          },
          sameAs: [
            "https://www.linkedin.com/company/pragmatto/posts/?feedView=all",
            "https://www.facebook.com/profile.php?id=61591354486980",
          ],
        }
      : undefined;

  return (
    <div className="min-h-screen flex flex-col bg-pragmatto-bgLight text-slate-800 antialiased font-sans">
      {/* Route-level SEO Metadata */}
      <SEO
        title={currentSEO.title}
        description={currentSEO.description}
        canonical={currentSEO.canonical}
        type={currentSEO.type}
        noindex={currentSEO.noindex}
        structuredData={orgSchema}
      />

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
        {route.page === "not-found" && (
          <NotFoundPage onNavigate={navigateTo} />
        )}
      </div>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}
