import useSWR from "swr";
import { api } from "@/lib/api";
import { SupplierCard } from "@/components/supplier/SupplierCard";

type SupplierListProps = {
  selectedSupplierId?: string;
};

export const SupplierList: React.FunctionComponent<SupplierListProps> = ({
  selectedSupplierId,
}) => {
  const { data: suppliers } = useSWR("suppliers", api.getSuppliers, {
    suspense: true,
  });

  return (
    <ul className="space-y-2">
      {suppliers?.map((supplier) => (
        <SupplierCard
          key={supplier.id}
          supplier={supplier}
          isSelected={supplier.id == selectedSupplierId}
        />
      ))}
    </ul>
  );
};
