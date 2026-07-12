import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function JobDescriptionCard() {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Job Description</CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Job URL
                    </label>

                    <Input placeholder="Paste LinkedIn / Naukri / Indeed URL" />
                </div>

                <Separator />

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Or Paste Job Description
                    </label>

                    <Textarea
                        placeholder="Paste complete Job Description..."
                        className="min-h-[150px]"
                    />
                </div>

                <Button className="w-full">
                    Analyze ATS
                </Button>
            </CardContent>
        </Card>
    );
}