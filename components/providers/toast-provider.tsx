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
export default function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {/* Semicolon hata diya */}
      <Toaster position="top-right" richColors closeButton />
      {children}
    </>
  );
}