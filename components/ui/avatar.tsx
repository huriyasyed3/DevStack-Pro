// "use client";

// import { FC, ReactNode } from "react";

// /**
//  * Avatar Component
//  * ----------------
//  * Props:
//  * - src: image URL
//  * - alt: alt text
//  * - size: small / medium / large
//  */
// interface AvatarProps {
//   src: string;
//   alt: string;
//   size?: "sm" | "md" | "lg";
// }

// const Avatar: FC<AvatarProps> = ({ src, alt, size = "md" }) => {
//   const sizeClass =
//     size === "sm"
//       ? "w-8 h-8"
//       : size === "lg"
//       ? "w-16 h-16"
//       : "w-12 h-12";

//   return (
//     <img
//       src={src}
//       alt={alt}
//       className={`rounded-full border border-gray-300 dark:border-gray-600 ${sizeClass}`}
//     />
//   );
// };

// export default Avatar;


"use client";

import { FC } from "react";

/**
 * Avatar Component
 * ----------------
 * Props:
 * - src: image URL
 * - alt: alt text
 * - size: small / medium / large
 * - className: additional Tailwind classes
 */
interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string; // Yeh add kiya taake error khatam ho jaye
}

const Avatar: FC<AvatarProps> = ({ src, alt, size = "md", className = "" }) => {
  const sizeClass =
    size === "sm"
      ? "w-8 h-8"
      : size === "lg"
      ? "w-16 h-16"
      : "w-12 h-12";

  return (
    <img
      src={src}
      alt={alt}
      // className prop ko yahan template literal mein inject kar diya
      className={`rounded-full border border-gray-300 dark:border-gray-600 object-cover ${sizeClass} ${className}`}
    />
  );
};

export default Avatar;