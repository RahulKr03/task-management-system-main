"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { useState } from "react";


export default function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </ClerkProvider>
    );
}
