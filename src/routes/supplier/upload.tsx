import { BackButton } from "@/components/BackButton";
import UploadCatalogForm from "@/components/supplier/UploadCatalogForm";

export default function UploadCatalogPage() {
  return (
    <div className="m-2 flex min-h-0 flex-col items-baseline gap-2 rounded-lg border bg-secondary-white p-4 shadow md:h-full">
      <BackButton />

      <UploadCatalogForm />
    </div>
  );
}
