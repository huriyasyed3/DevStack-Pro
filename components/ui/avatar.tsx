"use client";

import { FC } from "react";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string; 
}

const Avatar: FC<AvatarProps> = ({ src, alt, size = "md", className = "" }) => {
  // FIXED: Using standard Tailwind sizing that matches Shadcn avatars
  const sizeClass =
    size === "sm"
      ? "h-8 w-8"
      : size === "lg"
      ? "h-16 w-16"
      : "h-12 w-12";

  return (
    <img
      src={src}
      alt={alt}
      // FIXED: Added aspect-square and border-border for theme compatibility
      className={`
        rounded-full border border-border 
        aspect-square object-cover 
        shadow-sm transition-opacity hover:opacity-90
        ${sizeClass} 
        ${className}
      `.trim()}
    />
  );
};

export default Avatar;