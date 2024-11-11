import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { api } from "@/lib/api";
import { useCallback } from "react";
import FileUploadInput from "@/components/FileUploadInput";
import { dropzoneOptions } from "@/components/supplier/dropzoneOptions";

const CreateSupplierFormSchema = z.object({
  supplierName: z.string({ required_error: "Supplier name is required" }),
  country: z.string({ required_error: "Country is required" }),
  website: z
    .string({ required_error: "Website is required" })
    .url("Please enter a valid URL. Example: https://www.example.com")
    .refine((url) => {
      try {
        new URL(url);
        return true;
      } catch {
        return false;
      }
    }, "Please enter a valid URL. Example: https://www.example.com"),
  catalog: z.array(z.instanceof(File)).nullable(),
});

export default function CreateSupplierForm() {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof CreateSupplierFormSchema>>({
    resolver: zodResolver(CreateSupplierFormSchema),
    defaultValues: {
      supplierName: "",
      country: "",
      website: "",
      catalog: null,
    },
  });

  const onSubmit = useCallback(
    async (values: z.infer<typeof CreateSupplierFormSchema>) => {
      try {
        const catalogFile = values.catalog?.[0];
        const supplierData = {
          name: values.supplierName,
          country: values.country,
          website: values.website,
        };
        const supplierId = await api.addSupplier(supplierData, catalogFile);

        toast.success(`Supplier added successfully with ID: ${supplierId}`);

        navigate("/");
      } catch (error) {
        if (error instanceof Error) {
          if (error.message.includes("already exists")) {
            toast.warning(error.message);
          } else {
            toast.error(
              "An error occurred while adding the supplier. Please try again.",
            );
          }
        } else {
          toast.error("An unexpected error occurred. Please try again.");
        }
        console.error("Form submission error", error);
      }
    },
    [navigate],
  );

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="m-auto w-full max-w-sm space-y-4 py-5"
      >
        <FormField
          control={form.control}
          name="supplierName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Supplier Name</FormLabel>
              <FormControl>
                <Input placeholder="" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input placeholder="Latvia" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input placeholder="https://..." type="url" {...field} />
              </FormControl>

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
              description="Select a catalog file for this supplier."
              value={field.value}
              onChange={field.onChange}
              dropzoneOptions={dropzoneOptions}
            />
          )}
        />

        <Button className="w-full" variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
