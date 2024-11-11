import useSWR from "swr";
import { api } from "../lib/api";
import { DataTable } from "@/components/supplier/table/data-table";
import { columns } from "@/components/supplier/table/columns";
import { CatalogItem } from "@/types/catalogItem";
import { EmptyState } from "@/components/supplier/EmptyState";

interface CatalogContentProps {
  supplierId?: string;
}

export const CatalogContent = ({ supplierId }: CatalogContentProps) => {
  const { data: supplier } = useSWR(
    supplierId ? ["supplier", supplierId] : null,
    () => (supplierId ? api.getSupplierById(Number(supplierId)) : null),
    { suspense: true },
  );
  const { data: catalogItems } = useSWR<CatalogItem[]>(
    supplier?.id ? ["catalog", supplier.id] : null,
    () => (supplier?.id ? api.getCatalogBySupplier(supplier.id) : []),
  );

  return (
    <>
      {supplier?.id ? (
        <>
          <h5>{supplier?.name}</h5>

          <DataTable
            columns={columns}
            suppliedId={supplier.id}
            data={catalogItems ?? []}
          />
        </>
      ) : (
        <EmptyState />
      )}
    </>
  );
};
