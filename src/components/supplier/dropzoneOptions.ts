import { DropzoneOptions } from "react-dropzone";

export const dropzoneOptions = {
  multiple: false,
  accept: {
    "application/vnd.ms-excel": [],
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
  },
} satisfies DropzoneOptions;
