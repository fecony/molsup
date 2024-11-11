import { CatalogItem } from "@/types/catalogItem";
import { ColumnDef } from "@tanstack/react-table";

const NoWrapHeaderCell = ({
  value,
  align = "left",
}: {
  value: string;
  align?: "left" | "right" | "center";
}) => (
  <div
    className={`overflow-hidden text-ellipsis whitespace-nowrap p-2 text-${align}`}
  >
    {value}
  </div>
);

const createColumn = (
  accessorKey: keyof CatalogItem,
  header: string,
  align: "left" | "right" | "center" = "left",
): ColumnDef<CatalogItem> => ({
  accessorKey,
  header: () => <NoWrapHeaderCell value={header} />,
  cell: ({ row }) => (
    <NoWrapHeaderCell align={align} value={row.getValue(accessorKey)} />
  ),
});

const createPriceColumn = (
  accessorKey: keyof CatalogItem,
  header: string,
  align: "left" | "right" | "center" = "left",
): ColumnDef<CatalogItem> => ({
  accessorKey,
  header: () => <NoWrapHeaderCell value={header} />,
  cell: ({ row }) => {
    const amount = parseFloat(row.getValue("directShippingPrice"));
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);

    return <NoWrapHeaderCell align={align} value={formatted} />;
  },
});

export const columns: ColumnDef<CatalogItem>[] = [
  createColumn("molportId", "Molport ID"),
  {
    accessorKey: "supplier.name",
    header: () => <NoWrapHeaderCell value="Supplier" />,
    cell: ({ row }) => (
      <NoWrapHeaderCell
        align="center"
        value={row.original.supplier?.name ?? row.getValue("supplierId")}
      />
    ),
  },

  createColumn("smiles", "SMILES"),
  createColumn("sellUnit", "Sell Unit", "left"),
  createColumn("measure", "Measure", "left"),
  createPriceColumn("price", "Measure Price (USD)", "center"),
  createColumn("directShippingTime", "Direct Shipping Time (Days)", "center"),
  createPriceColumn(
    "directShippingPrice",
    "Direct Shipping Price (USD)",
    "center",
  ),
];
