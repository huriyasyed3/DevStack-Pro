import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-medium",
        className
      )}
    >
      {children}
    </span>
  );
}