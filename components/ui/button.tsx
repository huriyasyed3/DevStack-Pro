// "use client";

// import * as React from "react";
// import { cva, VariantProps } from "class-variance-authority";
// import { cn } from "@/lib/utils";

// /**
//  * Button Variants
//  * Centralized styling system
//  * Every button in project will use this
//  */
// const buttonVariants = cva(
//   "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
//   {
//     variants: {
//       variant: {
//         primary:
//           "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
//         secondary:
//           "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-400",
//         outline:
//           "border border-gray-300 hover:bg-gray-50 focus:ring-gray-400",
//         ghost:
//           "hover:bg-gray-100 text-gray-700 focus:ring-gray-400",
//         danger:
//           "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
//       },
//       size: {
//         sm: "h-8 px-3",
//         md: "h-10 px-4",
//         lg: "h-12 px-6 text-base",
//         icon: "h-9 w-9 p-0 flex items-center justify-center rounded-lg",
//       },
//     },
//     defaultVariants: {
//       variant: "primary",
//       size: "md",
//     },
//   }
// );

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {}

// export function Button({ className, variant, size, ...props }: ButtonProps) {
//   return (
//     <button
//       className={cn(buttonVariants({ variant, size }), className)}
//       {...props}
//     />
//   );
// }

"use client";

import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button Variants
 * Dual-Theme Support: Handles both Light and Dark modes seamlessly.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
  {
    variants: {
      variant: {
        // Blue primary - stays blue but adjusts shade
        primary:
          "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-sm",
        
        // Secondary - Light: Light Gray | Dark: Deep Slate
        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700",
        
        // Outline - Clean borders for both modes
        outline:
          "border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white",
        
        // Ghost - Minimalist (No more weird white hover in dark mode!)
        ghost:
          "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-white",
        
        // Danger - For logout/delete actions
        danger:
          "bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-500",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-base",
        icon: "h-9 w-9 p-0 flex items-center justify-center rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}