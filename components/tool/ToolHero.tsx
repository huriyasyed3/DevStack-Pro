"use client";

import { Card, CardContent } from "@/components/ui/card";

interface ToolHeroProps {
  title: string;
  description: string;
}

export default function ToolHero({ title, description }: ToolHeroProps) {
  return (
    /* FIXED: border-border aur bg-card/50 se modern glass look aata hai */
    <Card className="relative overflow-hidden border-border bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10 dark:to-background shadow-none">
      
      {/* Decorative Blur (Optional for Pro Look) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-primary/20 blur-[100px] -z-10" />

      <CardContent className="p-10 md:p-16 text-center space-y-6">
        {/* Title: Black/Bold typography with tracking-tighter */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground leading-[1.1]">
          {title}
        </h1>
        
        {/* Description: Muted but readable */}
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-medium">
          {description}
        </p>

        {/* Dynamic Badge (Just for aesthetics) */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest">
          ⚡ AI-Powered Processing
        </div>
      </CardContent>
    </Card>
  );
}