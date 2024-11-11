import { BackButton } from "@/components/BackButton";
import CreateSupplierForm from "@/components/supplier/CreateSupplierForm";

export default function CreateSupplierPage() {
  return (
    <div className="m-2 flex min-h-0 flex-col items-baseline gap-2 rounded-lg border bg-secondary-white p-4 shadow md:h-full">
      <BackButton />

      <CreateSupplierForm />
    </div>
  );
}
