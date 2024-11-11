import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const EmptyState = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-lg border border-secondary-neutral p-4">
      <h2 className="text-primary-dark-1 text-lg font-semibold">
        No Supplier Selected
      </h2>
      <p className="text-primary-dark-3 mt-2 text-center">
        Please select a supplier to view their catalog.
      </p>

      <div className="mt-4 space-x-2">
        <Button asChild variant="primary">
          <Link to="/supplier/create">Create Supplier</Link>
        </Button>

        <Button asChild variant="secondary">
          <Link to="/supplier/upload">Upload Catalog</Link>
        </Button>
      </div>
    </div>
  );
};
