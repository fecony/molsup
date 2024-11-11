import React from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/ui/file-upload";
import { CloudUpload, Paperclip } from "lucide-react";
import { DropzoneOptions } from "react-dropzone";

interface FileUploadInputProps {
  label: string;
  description?: string;
  value: File[] | null;
  onChange: (files: File[] | null) => void;
  dropzoneOptions: DropzoneOptions;
}

const FileUploadInput: React.FC<FileUploadInputProps> = React.memo(
  ({ label, description, value, onChange, dropzoneOptions }) => {
    return (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <FileUploader
            value={value}
            onValueChange={onChange}
            dropzoneOptions={dropzoneOptions}
            className="bg-background relative rounded-lg p-2"
          >
            <FileInput className="outline-dashed outline-1 outline-primary-dark2">
              <div className="flex w-full flex-col items-center justify-center p-6">
                <CloudUpload className="h-10 w-10 text-primary-dark1" />

                <p className="mb-1 text-sm text-primary-dark1">
                  <span className="font-semibold">Click to upload</span>
                  &nbsp; or drag and drop
                </p>
                <p className="text-xs text-primary-dark1">.xlsx or .xls</p>
              </div>
            </FileInput>

            {value && value.length > 0 && (
              <FileUploaderContent>
                {value.map((file, i) => (
                  <FileUploaderItem
                    key={i}
                    index={i}
                    aria-roledescription={`file ${i + 1} containing ${
                      file.name
                    }`}
                  >
                    <Paperclip className="h-4 w-4 stroke-current" />
                    <span className="truncate">{file.name}</span>
                  </FileUploaderItem>
                ))}
              </FileUploaderContent>
            )}
          </FileUploader>
        </FormControl>

        {description && <FormDescription>{description}</FormDescription>}

        <FormMessage />
      </FormItem>
    );
  },
);

export default FileUploadInput;
