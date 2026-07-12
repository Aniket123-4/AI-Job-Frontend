import { useState } from "react";

import ResumeDropzone from "./components/ResumeDropzone";
import ResumePreview from "./components/ResumePreview";

import { useResumeUpload } from "./hooks/useResumeUpload";

export default function Resume() {
    const [file, setFile] = useState<File | null>(null);

    const uploadMutation = useResumeUpload();

    function handleUpload() {
        if (!file) return;

        uploadMutation.mutate(file);
    }

    return (
        <div className="space-y-6">
            {!file ? (
                <ResumeDropzone
                    onFileSelect={setFile}
                />
            ) : (
                <ResumePreview
                    file={file}
                    loading={uploadMutation.isPending}
                    onRemove={() => setFile(null)}
                    onUpload={handleUpload}
                />
            )}
        </div>
    );
}