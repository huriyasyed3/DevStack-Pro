import { getToolStructuredData } from "./structured-data";
import generateToolMetadata from "./metadata";
import SEOContent from "./SEOContent";
import ToolClientWrapper from "@/components/tool/ToolClientWrapper";
import FAQSection from "@/components/tool/FAQSection";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return generateToolMetadata(slug); 
}

export const revalidate = 3600; 
export const dynamicParams = true;

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;

  // Structured data retrieval
  const { mainSchema, breadcrumb, faqSchema } = getToolStructuredData(slug);
  const toolName = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    /* FIXED: bg-background for theme sync and min-h-screen */
    <main className="min-h-screen bg-background text-foreground transition-colors">
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-20">
        
        {/* 1. Tool UI Section (The Focus Point) */}
        <section className="relative z-10">
          <ToolClientWrapper slug={slug} />
        </section>

        {/* 2. SEO Content Section (Part 1 requirement) */}
        <div className="border-t border-border pt-16">
          <SEOContent slug={slug} toolName={toolName} />
        </div>

        {/* 3. FAQ Section (Crucial for Schema & SEO) */}
        <div className="pb-16">
          <FAQSection slug={slug} />
        </div>

        {/* 4. JSON-LD Scripts (Hidden SEO Logic) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(mainSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </div>
    </main>
  );
}