// app/tools/[slug]/structured-data.ts
export function getToolStructuredData(slug: string) {
  const toolName = slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How do I use the ${toolName} tool?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Upload your file in the ${toolName} tool and click Convert. Download the processed file instantly.`,
        },
      },
      {
        "@type": "Question",
        "name": `Is the ${toolName} tool free?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the tool is completely free for personal use with no signup required.",
        },
      },
    ],
  };

  // Breadcrumb Schema
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://devstackpro.com" },
      { "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://devstackpro.com/tools" },
      { "@type": "ListItem", "position": 3, "name": toolName, "item": `https://devstackpro.com/tools/${slug}` },
    ],
  };

  // Main Schema (Optional: Website / SoftwareApplication)
  const mainSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": `${toolName} Converter`,
    "url": `https://devstackpro.com/tools/${slug}`,
    "applicationCategory": "WebApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
  };

  return { faqSchema, breadcrumb, mainSchema };
}