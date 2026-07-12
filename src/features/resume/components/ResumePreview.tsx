import { FileText, Trash2, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface Props {
    file: File;
    onRemove: () => void;
    onUpload: () => void;
}

export default function ResumePreview({
    file,
    onRemove,
    onUpload,
}: Props) {
    const size = `${(file.size / (1024 * 1024)).toFixed(2)} MB`;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Selected Resume</CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
                <div className="flex items-center gap-4 rounded-lg border p-4">
                    <FileText className="h-10 w-10 text-primary" />

                    <div className="flex-1 overflow-hidden">
                        <p className="truncate font-medium">{file.name}</p>

                        <p className="text-sm text-muted-foreground">
                            {size}
                        </p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <Button
                        className="flex-1"
                        onClick={onUpload}
                    >
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Resume
                    </Button>

                    <Button
                        variant="destructive"
                        onClick={onRemove}
                    >
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}