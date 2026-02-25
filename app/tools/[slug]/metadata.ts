// app/tools/[slug]/metadata.ts
import { Metadata } from "next";

const BASE_URL = "https://devstackpro.com";

export default function generateToolMetadata(slug: string): Metadata {
  const toolName = slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const title = `${toolName} Converter - DevStack Pro`;
  const description = `Convert your files quickly and securely using our free online ${toolName} converter. Supports multiple file types and formats.`;

  return {
    title,
    description,
     alternates: {
      canonical: `${BASE_URL}/tools/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/tools/${slug}`,
      siteName: "DevStack Pro",
      images: [
        {
          url: `${BASE_URL}/og-image/tools/${slug}.png`,
          width: 1200,
          height: 630,
          alt: toolName,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@DevStackPro",
      creator: "@DevStackPro",
      images: [`${BASE_URL}/og-image/tools/${slug}.png`],
    },
  };
}