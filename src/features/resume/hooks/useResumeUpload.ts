import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { uploadResume } from "../services/resume.service";

export function useResumeUpload() {
  return useMutation({
    mutationFn: uploadResume,

    onSuccess: () => {
      toast.success("Resume uploaded successfully.");
    },

    onError: (error: { response?: { data?: { message?: string } } }) => {
      toast.error(
        error?.response?.data?.message ??
          "Resume upload failed."
      );
    },
  });
}