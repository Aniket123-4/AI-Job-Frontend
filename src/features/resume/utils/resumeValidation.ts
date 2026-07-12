const MAX_SIZE = 5 * 1024 * 1024;

const ALLOWED_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export function validateResume(file: File) {
  if (!ALLOWED_TYPES.includes(file.type)) {
    return {
      valid: false,
      message: "Only PDF and DOCX files are allowed.",
    };
  }

  if (file.size > MAX_SIZE) {
    return {
      valid: false,
      message: "Maximum file size is 5 MB.",
    };
  }

  return {
    valid: true,
    message: "",
  };
}