"use client";

import { Card, CardContent } from "@/components/ui/card";

/**
 * ToolHero Component
 * -----------------
 * Displays the hero section of a tool page.
 * Props:
 * - title: string (main heading)
 * - description: string (subheading / description)
 */
interface ToolHeroProps {
  title: string;
  description: string;
}

export default function ToolHero({ title, description }: ToolHeroProps) {
  return (
    <Card className="bg-blue-50 dark:bg-blue-900/20">
      <CardContent className="p-8 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </CardContent>
    </Card>
  );
}