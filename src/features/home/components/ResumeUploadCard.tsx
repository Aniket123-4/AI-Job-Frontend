import { UploadCloud } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ResumeUploadCard() {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Master Resume</CardTitle>
            </CardHeader>

            <CardContent>
                <div className="flex min-h-[220px] flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 text-center">
                    <UploadCloud className="mb-4 h-12 w-12 text-primary" />

                    <h3 className="text-lg font-semibold">
                        Upload your Master Resume
                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground">
                        Supports PDF and DOCX files
                    </p>

                    <Button className="mt-6">
                        Browse Resume
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}