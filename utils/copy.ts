import { toast } from "sonner";

export const copyToClipboard = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => toast.success("Copied", { description: text }))
    .catch((error) => toast.error("Failed to copy", { description: error }));
};
