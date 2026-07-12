import type { ReactNode } from "react";

import { QueryProvider } from "./QueryProvider";
import ThemeProvider from "./ThemeProvider";

import ErrorBoundaryProvider from "@/app/ErrorBoundaryProvider";

type Props = {
    children: ReactNode;
};

export default function AppProviders({
    children,
}: Props) {
    return (
        <QueryProvider>
            <ThemeProvider>
                <ErrorBoundaryProvider>
                    {children}
                </ErrorBoundaryProvider>
            </ThemeProvider>
        </QueryProvider>
    );
}