"use client";
import { Toaster } from "@/components/ui/toast";
import { ThemeProvider } from "next-themes";
import type React from "react";
interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      forcedTheme="light"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};
