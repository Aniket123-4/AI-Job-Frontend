import {
    FileText,
    Sparkles,
    MessageSquare,
    ClipboardList,
} from "lucide-react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

const actions = [
    {
        title: "ATS Score",
        icon: ClipboardList,
    },
    {
        title: "Generate Resume",
        icon: FileText,
    },
    {
        title: "Cover Letter",
        icon: Sparkles,
    },
    {
        title: "Recruiter Message",
        icon: MessageSquare,
    },
];

export default function QuickActions() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
            </CardHeader>

            <CardContent className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {actions.map(({ title, icon: Icon }) => (
                    <Button
                        key={title}
                        variant="outline"
                        className="h-24 flex-col gap-3"
                        disabled
                    >
                        <Icon className="h-6 w-6" />
                        <span>{title}</span>
                    </Button>
                ))}
            </CardContent>
        </Card>
    );
}