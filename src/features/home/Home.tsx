import HeroSection from "./components/HeroSection";
import ResumeUploadCard from "./components/ResumeUploadCard";
import JobDescriptionCard from "./components/JobDescriptionCard";
import QuickActions from "./components/QuickActions";

export default function Home() {
    return (
        <section className="container mx-auto space-y-8 px-4 py-8">
            <HeroSection />

            <div className="grid gap-6 lg:grid-cols-2">
                <ResumeUploadCard />
                <JobDescriptionCard />
            </div>

            <QuickActions />
        </section>
    );
}