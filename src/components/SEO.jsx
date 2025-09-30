// src/components/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_NAME = "MD Farhan Sadik";
const DEFAULT_DESC = "Frontend developer portfolio — React, Tailwind, UI/UX, projects.";
const DEFAULT_KEYWORDS = "Farhan Sadik, frontend developer, React, portfolio, web developer";
const DEFAULT_IMAGE = "https://yourdomain.com/og-default.png"; // change to your hosted image

export default function SEO({
  title,
  description = DEFAULT_DESC,
  keywords = DEFAULT_KEYWORDS,
  image = DEFAULT_IMAGE,
  canonical, // optional full URL
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const pageUrl =
    canonical ||
    (typeof window !== "undefined" ? window.location.href : "https://yourdomain.com");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "MD Farhan Sadik",
    url: pageUrl,
    jobTitle: "Frontend Web Developer",
    description,
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />

      {/* Canonical */}
      {pageUrl && <link rel="canonical" href={pageUrl} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
