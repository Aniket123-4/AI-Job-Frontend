import { useState } from "react";

import ResumeDropzone from "./components/ResumeDropzone";
import ResumePreview from "./components/ResumePreview";

export default function Resume() {
    const [file, setFile] = useState<File | null>(null);

    function handleUpload() {
        console.log(file);

        alert("Backend integration in next step.");
    }

    return (
        <div className="space-y-6">
            {!file ? (
                <ResumeDropzone onFileSelect={setFile} />
            ) : (
                <ResumePreview
                    file={file}
                    onRemove={() => setFile(null)}
                    onUpload={handleUpload}
                />
            )}
        </div>
    );
}