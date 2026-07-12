import { ErrorBoundary } from "react-error-boundary";
import type { PropsWithChildren } from "react";

import ErrorFallback from "@/components/common/ErrorFallback";

export default function ErrorBoundaryProvider({
    children,
}: PropsWithChildren) {
    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
        >
            {children}
        </ErrorBoundary>
    );
}