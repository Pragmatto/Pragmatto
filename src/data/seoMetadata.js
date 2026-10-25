import { siteContent } from "./siteContent.js";
import { slugify, getWorkDetail } from "./workDetails.js";

export const SITE_DOMAIN = "https://pragmatto.com";
export const DEFAULT_OG_IMAGE = `${SITE_DOMAIN}/logo.png`;

// Base SEO metadata for static pages
export const STATIC_PAGES_SEO = {
  home: {
    path: "/",
    title:
      "Pragmatto Solutions | Focused Technology Support for Manufacturing & SMBs",
    description:
      "Pragmatto helps manufacturers and SMBs solve specific technology problems—reducing manual work, cleaning business data, testing software, and building practical tools without big IT overhead.",
    changefreq: "weekly",
    priority: "1.0",
  },
  services: {
    path: "/services",
    title: "Technology Services for SMBs | Pragmatto Solutions",
    description:
      "Explore Pragmatto's focused technology services: manual work reduction, business data cleanup, QA software testing, existing software support, and custom internal business tools.",
    changefreq: "weekly",
    priority: "0.9",
  },
  about: {
    path: "/about",
    title:
      "About Pragmatto | Focused Technology Work Without Unnecessary Complexity",
    description:
      "Learn about Pragmatto's mission, leadership, and 20+ years of enterprise technology experience delivering practical problem solving without traditional IT consulting overhead.",
    changefreq: "monthly",
    priority: "0.8",
  },
  careers: {
    path: "/careers",
    title: "Careers at Pragmatto | Engineering & Technology Opportunities",
    description:
      "Explore career opportunities at Pragmatto Solutions. Join our collaborative engineering team solving real-world technology challenges with flexibility and meaningful impact.",
    changefreq: "monthly",
    priority: "0.7",
  },
  contact: {
    path: "/contact",
    title: "Contact Pragmatto | Discuss Your Technology Problem",
    description:
      "Get in touch with Pragmatto Solutions to discuss your specific technology requirement, manual workflow bottleneck, data cleanup, or software testing needs.",
    changefreq: "monthly",
    priority: "0.8",
  },
  "privacy-policy": {
    path: "/privacy-policy",
    title: "Privacy Policy | Pragmatto Solutions",
    description:
      "Read Pragmatto Solutions' Privacy Policy regarding the collection, use, and protection of business and personal information.",
    changefreq: "yearly",
    priority: "0.3",
  },
  "not-found": {
    path: "/404",
    title: "Page Not Found | Pragmatto Solutions",
    description:
      "The page you are looking for does not exist or has been moved. Explore Pragmatto's technology services or contact us for assistance.",
    noindex: true,
  },
};

/**
 * Retrieve SEO metadata for a specific service
 */
export function getServiceSEO(serviceId) {
  const service = siteContent.services.find((s) => s.id === serviceId);
  if (!service) {
    return STATIC_PAGES_SEO["not-found"];
  }

  const title = `${service.title} | Pragmatto Solutions`;
  const description =
    service.fullDescription ||
    service.description ||
    `Pragmatto provides focused technical capability for ${service.title.toLowerCase()} without unnecessary project overhead.`;

  return {
    path: `/services/${service.id}`,
    title,
    description,
    canonical: `${SITE_DOMAIN}/services/${service.id}`,
    type: "article",
    changefreq: "weekly",
    priority: "0.8",
  };
}

/**
 * Retrieve SEO metadata for a specific work/problem detail page
 */
export function getWorkSEO(serviceId, workId) {
  const service = siteContent.services.find((s) => s.id === serviceId);
  if (!service) {
    return STATIC_PAGES_SEO["not-found"];
  }

  const work = getWorkDetail(serviceId, workId);
  if (!work) {
    return STATIC_PAGES_SEO["not-found"];
  }

  const title = `${work.shortTitle || work.title} | ${service.title} | Pragmatto Solutions`;
  const description =
    work.tagline && work.problemSummary
      ? `${work.tagline} ${work.problemSummary}`.slice(0, 160)
      : `Focused technical capability for ${work.title.toLowerCase()} from Pragmatto Solutions.`;

  return {
    path: `/services/${service.id}/${work.id}`,
    title,
    description,
    canonical: `${SITE_DOMAIN}/services/${service.id}/${work.id}`,
    type: "article",
    changefreq: "weekly",
    priority: "0.7",
  };
}

/**
 * Resolve SEO metadata for any route object
 */
export function getPageSEO(route) {
  if (!route) return STATIC_PAGES_SEO.home;

  if (route.page === "work-detail" && route.serviceId && route.workId) {
    return getWorkSEO(route.serviceId, route.workId);
  }

  if (route.page === "service-detail" && route.serviceId) {
    return getServiceSEO(route.serviceId);
  }

  if (STATIC_PAGES_SEO[route.page]) {
    const pageMeta = STATIC_PAGES_SEO[route.page];
    return {
      ...pageMeta,
      canonical:
        pageMeta.path === "/"
          ? `${SITE_DOMAIN}/`
          : `${SITE_DOMAIN}${pageMeta.path}`,
      type: "website",
    };
  }

  return STATIC_PAGES_SEO["not-found"];
}

/**
 * Return an array of all indexable public routes on the website.
 * Used for dynamic XML sitemap generation and pre-rendering.
 */
export function getAllIndexableRoutes() {
  const routes = [];
  const currentDate = new Date().toISOString().split("T")[0];

  // 1. Static Pages
  const staticKeys = [
    "home",
    "services",
    "about",
    "careers",
    "contact",
    "privacy-policy",
  ];
  for (const key of staticKeys) {
    const meta = STATIC_PAGES_SEO[key];
    routes.push({
      path: meta.path,
      url: meta.path === "/" ? `${SITE_DOMAIN}/` : `${SITE_DOMAIN}${meta.path}`,
      title: meta.title,
      description: meta.description,
      lastmod: currentDate,
      changefreq: meta.changefreq || "monthly",
      priority: meta.priority || "0.8",
      type: "static",
    });
  }

  // 2. Dynamic Service Detail Pages
  for (const service of siteContent.services) {
    const sMeta = getServiceSEO(service.id);
    routes.push({
      path: sMeta.path,
      url: `${SITE_DOMAIN}${sMeta.path}`,
      title: sMeta.title,
      description: sMeta.description,
      lastmod: currentDate,
      changefreq: sMeta.changefreq,
      priority: sMeta.priority,
      type: "service",
    });

    // 3. Dynamic Work Detail Pages
    for (const feature of service.features) {
      const workSlug = slugify(feature);
      const wMeta = getWorkSEO(service.id, workSlug);
      routes.push({
        path: wMeta.path,
        url: `${SITE_DOMAIN}${wMeta.path}`,
        title: wMeta.title,
        description: wMeta.description,
        lastmod: currentDate,
        changefreq: wMeta.changefreq,
        priority: wMeta.priority,
        type: "work",
      });
    }
  }

  return routes;
}
