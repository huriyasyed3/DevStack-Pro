export default function ToolSkeleton() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-pulse px-4">
      
      {/* 1. Breadcrumb Skeleton */}
      <div className="h-4 w-32 bg-muted rounded-md mb-8" />

      {/* 2. Hero Section Skeleton */}
      <div className="space-y-4 text-center flex flex-col items-center">
        <div className="h-10 md:h-14 w-3/4 bg-muted rounded-2xl" />
        <div className="h-10 md:h-14 w-1/2 bg-muted rounded-2xl opacity-60" />
        <div className="h-4 w-2/3 bg-muted rounded-md mt-4" />
      </div>

      {/* 3. Main Upload Box Skeleton */}
      <div className="relative group">
        <div className="h-64 md:h-80 w-full rounded-[2rem] border-2 border-dashed border-border bg-muted/30 flex flex-col items-center justify-center space-y-4">
          <div className="h-16 w-16 rounded-2xl bg-muted" />
          <div className="h-4 w-48 bg-muted rounded-md" />
          <div className="h-3 w-32 bg-muted rounded-md opacity-50" />
        </div>
      </div>

      {/* 4. Action Buttons Skeleton */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
        <div className="h-12 w-full md:w-48 rounded-xl bg-muted" />
        <div className="h-12 w-full md:w-48 rounded-xl bg-muted opacity-50" />
      </div>

      {/* 5. SEO/FAQ Skeleton (Optional but looks complete) */}
      <div className="pt-16 space-y-6">
        <div className="h-8 w-64 bg-muted rounded-lg" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-32 bg-muted/20 rounded-2xl border border-border" />
          <div className="h-32 bg-muted/20 rounded-2xl border border-border" />
        </div>
      </div>
    </div>
  );
}