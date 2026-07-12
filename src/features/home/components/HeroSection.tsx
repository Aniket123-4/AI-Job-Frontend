import { BriefcaseBusiness } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="rounded-xl border bg-card p-8 shadow-sm">
            <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <BriefcaseBusiness className="h-8 w-8 text-primary" />
                </div>

                <div>
                    <h1 className="text-4xl font-bold">
                        AI Job Assistant
                    </h1>

                    <p className="mt-2 text-muted-foreground">
                        Tailor your resume, analyze ATS score, generate cover letters and
                        recruiter messages — all in one place.
                    </p>
                </div>
            </div>
        </section>
    );
}