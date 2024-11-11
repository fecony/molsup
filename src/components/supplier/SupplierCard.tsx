import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Supplier } from "@/types/supplier";

interface SupplierCardProps {
  supplier: Supplier;
  isSelected: boolean;
}

export const SupplierCard: React.FunctionComponent<SupplierCardProps> = ({
  supplier,
  isSelected,
}) => {
  const cardContent = (
    <CardContent className="p-3">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <h3
            className="truncate text-sm font-medium leading-5"
            title={supplier.name}
          >
            {supplier.name}
          </h3>
          <p
            className="text-muted-foreground truncate text-xs"
            title={supplier.country}
          >
            {supplier.country}
          </p>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={supplier.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">Visit website</span>
              </a>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p className="max-w-xs truncate">{supplier.website}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </CardContent>
  );

  return (
    <Card
      className={cn(
        "hover:bg-accent transform overflow-hidden rounded-lg border-2 border-secondary-neutral shadow-none transition-all hover:scale-[97%]",
        isSelected ? "border-primary-purple1" : "border-secondary-neutral",
      )}
    >
      <Link to={`/supplier/${supplier.id}`}>{cardContent}</Link>
    </Card>
  );
};
