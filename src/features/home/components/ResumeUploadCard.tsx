import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Resume } from "@/features/resume";

export default function ResumeUploadCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Master Resume</CardTitle>
            </CardHeader>

            <CardContent>
                <Resume />
            </CardContent>
        </Card>
    );
}