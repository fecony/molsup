import { useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { dropzoneOptions } from "@/components/supplier/dropzoneOptions";
import { api } from "@/lib/api";
import FileUploadInput from "@/components/FileUploadInput";
import { Button } from "@/components/ui/button";
import useSWR from "swr";
import { Supplier } from "@/types/supplier";

const UploadCatalogFormSchema = z.object({
  supplierId: z.string().min(1, "Please select a supplier"),
  catalog: z.array(z.instanceof(File)).min(1, "Please upload a catalog file"),
});

export default function UploadCatalogForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const supplierId = searchParams.get("supplierId");

  const { data: suppliers, error } = useSWR<Supplier[]>(
    "suppliers",
    api.getSuppliers,
  );

  const form = useForm<z.infer<typeof UploadCatalogFormSchema>>({
    resolver: zodResolver(UploadCatalogFormSchema),
    defaultValues: {
      supplierId: supplierId ?? undefined,
      catalog: undefined,
    },
  });

  const onSubmit = useCallback(
    async (values: z.infer<typeof UploadCatalogFormSchema>) => {
      try {
        const catalogFile = values.catalog[0];
        await api.uploadCatalog(Number(values.supplierId), catalogFile);
        toast.success("Catalog uploaded successfully");
        navigate("/");
      } catch (error) {
        console.error("Form submission error", error);
        toast.error("Failed to upload catalog. Please try again.");
      }
    },
    [navigate],
  );

  if (error) return <div>Failed to load suppliers</div>;
  if (!suppliers) return <div>Loading suppliers...</div>;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="m-auto w-full max-w-sm space-y-4 py-5"
      >
        <FormField
          control={form.control}
          name="supplierId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Supplier</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a supplier" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {suppliers.map((supplier) => (
                    <SelectItem
                      key={supplier.id}
                      value={supplier.id!.toString()}
                    >
                      {supplier.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="catalog"
          render={({ field }) => (
            <FileUploadInput
              label="Catalog file"
              description="Upload a catalog file for the selected supplier."
              value={field.value}
              onChange={field.onChange}
              dropzoneOptions={dropzoneOptions}
            />
          )}
        />

        <Button className="w-full" variant="primary" type="submit">
          Upload Catalog
        </Button>
      </form>
    </Form>
  );
}
