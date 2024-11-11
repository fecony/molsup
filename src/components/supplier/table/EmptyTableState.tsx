import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const EmptyTableState = ({ supplierId }: { supplierId: number }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center p-4 text-center">
      <h2 className="text-primary-dark-1 text-lg font-semibold">
        No Catalog Items Found
      </h2>

      <p className="text-primary-dark-3 mt-2">
        It looks like there are no catalog items for this supplier.
      </p>

      <div className="mt-4 space-x-2">
        <Button asChild variant="secondary">
          <Link to={`/supplier/upload?supplierId=${supplierId}`}>
            Upload Catalog
          </Link>
        </Button>
      </div>
    </div>
  );
};
