import { api } from "@/config/axios";

export async function uploadResume(file: File) {
  const formData = new FormData();

  formData.append("resume", file);

  const { data } = await api.post(
    "/resume/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data;
}