"use client";

import { Toaster } from "sonner";
import { ReactNode } from "react";
/**
 * ToastProvider Component
 * -----------------------
 * - Centralized toast notifications
 * - Works with any component calling `toast()`
 * - Fully accessible
 */

interface ToastProviderProps {
  children: ReactNode;
}
// ToastProvider.tsx update karein
export default function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      <Toaster 
        position="top-right" 
        richColors 
        closeButton
        // containerStyle ko hata kar className ya toastOptions use karein
        toastOptions={{
          style: { 
            zIndex: 99999,
          },
          // Agar aapko puri list/container ko move karna hai toh yahan classes den
          className: "mt-5", 
        }}
      />
      {children}
    </>
  );
}