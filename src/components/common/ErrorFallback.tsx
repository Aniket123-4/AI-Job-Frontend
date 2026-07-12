import type { FallbackProps } from "react-error-boundary";
import { Button } from "@/components/ui/button";

export default function ErrorFallback({
    error,
    resetErrorBoundary,
}: FallbackProps) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold">Something went wrong</h1>

            <p className="text-muted-foreground">{error instanceof Error ? error.message : 'An unknown error occurred'}</p>

            <Button onClick={resetErrorBoundary}>
                Try Again
            </Button>
        </div>
    );
}