export default function ToolSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">
      
      {/* Hero Skeleton */}
      <div className="h-48 w-full rounded-2xl bg-gray-200 dark:bg-gray-800" />

      {/* Upload Box Skeleton */}
      <div className="h-64 w-full rounded-2xl border-2 border-dashed border-gray-300" />

      {/* Buttons Skeleton */}
      <div className="flex gap-4">
        <div className="h-12 w-40 rounded-xl bg-gray-200 dark:bg-gray-800" />
        <div className="h-12 w-40 rounded-xl bg-gray-200 dark:bg-gray-800" />
      </div>

    </div>
  );
}