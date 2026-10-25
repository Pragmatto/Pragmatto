import React from "react";
import { Helmet } from "react-helmet-async";
import { SITE_DOMAIN, DEFAULT_OG_IMAGE } from "../../data/seoMetadata";

export function SEO({
  title,
  description,
  canonical,
  type = "website",
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  structuredData,
}) {
  const rawPath = typeof window !== "undefined" && window.location ? window.location.pathname : "";
  const cleanPath = rawPath === "/" ? "/" : rawPath.replace(/\/+$/, "");
  const currentCanonical = canonical || (cleanPath ? `${SITE_DOMAIN}${cleanPath}` : `${SITE_DOMAIN}/`);
  const pageTitle = title || "Pragmatto Solutions | Technology Delivery Partner";
  const pageDesc =
    description ||
    "Pragmatto helps manufacturers and SMBs solve specific technology problems simply and practically.";

  return (
    <Helmet>
      {/* HTML Title */}
      <title>{pageTitle}</title>

      {/* Standard Metadata */}
      <meta name="description" content={pageDesc} />
      <link rel="canonical" href={currentCanonical} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"}
      />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:site_name" content="Pragmatto Solutions" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:url" content={currentCanonical} />
      <meta property="og:image" content={image} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
