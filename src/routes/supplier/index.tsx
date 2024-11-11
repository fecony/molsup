import { Suspense } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { CatalogContent } from "@/components/CatalogContent";
import { SupplierList } from "@/components/supplier/SupplierList";

export default function SupplierPage() {
  const { supplierId } = useParams<{ supplierId: string }>();

  return (
    <Layout
      supplierList={
        <Suspense fallback={<div>Loading suppliers...</div>}>
          <SupplierList selectedSupplierId={supplierId} />
        </Suspense>
      }
      catalogContent={
        <Suspense fallback={<div>Loading catalog...</div>}>
          <CatalogContent supplierId={supplierId} />
        </Suspense>
      }
    />
  );
}
