"use client";
import UploadFormInput from "./upload-form-input";
import { z } from "zod";
import { useUploadThing } from "@/src/utils/uploadthing";
import { toast } from "sonner";

const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid File" })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      "File size must be less than 20MB"
    )
    .refine((file) => file.type === "application/pdf", "File must be a PDF"),
});

const UploadForm = () => {
  const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
    onClientUploadComplete: (res) => {
      console.log("Upload complete");
      toast.dismiss();
      toast.success("📄 File uploaded successfully");
    },
    onUploadError: (error: Error) => {
      console.error("Upload failed:", error);
      toast.error("❌ Error Occured while uploading the file", {
        description: error.message,
      });
    },
    onUploadBegin: () => {
      console.log("Upload started");
      toast.loading("Uploading your file...", {
        description: "Please wait while we upload your file",
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    //Validating file type
    const validedFields = schema.safeParse({ file });
    if (!validedFields.success) {
      toast.error("❌ Error Occured while uploading the file", {
        description:
          validedFields.error.flatten().fieldErrors.file?.[0] ?? "Invalid file",
      });
      return;
    }

    //Uplaod the file to uploadthing

    const resp = await startUpload([file]);

    if (!resp) {
      toast.error("❌ Error Occured while uploading the file", {
        description: "Something went wrong while uploading the file",
      });

      return;
    }

    toast("Processing PDF", {
      description: "Hang Tight! Our AI is reading through your document! ✨",
    });

    //Parse the pdf using langchain
    //Submarize the pdf using AI
    // save the summary to the database
    //redietr toi  the [id].pdf page
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
};

export default UploadForm;
