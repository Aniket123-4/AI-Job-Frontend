import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { validateResume } from "../utils/resumeValidation";

interface Props {
    onFileSelect: (file: File) => void;
}

export default function ResumeDropzone({
    onFileSelect,
}: Props) {
    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            if (!acceptedFiles.length) return;

            const file = acceptedFiles[0];

            const validation = validateResume(file);

            if (!validation.valid) {
                alert(validation.message);
                return;
            }

            onFileSelect(file);
        },
        [onFileSelect]
    );

    const {
        getRootProps,
        getInputProps,
        isDragActive,
    } = useDropzone({
        multiple: false,
        onDrop,
    });

    return (
        <Card>
            <CardContent
                {...getRootProps()}
                className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed py-12 transition
        ${isDragActive
                        ? "border-primary bg-primary/5"
                        : "border-muted"
                    }`}
            >
                <input {...getInputProps()} />

                <UploadCloud className="mb-5 h-12 w-12 text-primary" />

                <h3 className="text-lg font-semibold">
                    Drag & Drop Resume
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                    PDF or DOCX (Max 5 MB)
                </p>
            </CardContent>
        </Card>
    );
}