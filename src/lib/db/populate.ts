import { db } from ".";
import suppliers from "@/assets/data/suppliers.json";
import analyticoCatalog from "@/assets/data/AnalytiCon_catalog.json";
import bionetCatalog from "@/assets/data/BIONET_catalog.json";
import chemdivCatalog from "@/assets/data/ChemDiv_catalog.json";
import { CatalogItem } from "@/types/catalogItem";

export async function populate() {
  try {
    const supplierIds: Record<string, number> = {};

    for (const supplier of suppliers) {
      const id = await db.suppliers.add(supplier);
      supplierIds[supplier.name] = id;
    }

    const catalogItems = [
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ...analyticoCatalog.map(({ supplier, ...item }) => ({
        ...item,
        supplierId:
          supplierIds["AnalytiCon Discovery - a Division of BRAIN Biotech AG"],
      })),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ...bionetCatalog.map(({ supplier, ...item }) => ({
        ...item,
        supplierId: supplierIds["BIONET - Key Organics Ltd."],
      })),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ...chemdivCatalog.map(({ supplier, ...item }) => ({
        ...item,
        supplierId: supplierIds["ChemDiv, Inc."],
      })),
    ] as CatalogItem[];

    await db.catalogItems.bulkAdd(catalogItems);
  } catch (error) {
    console.error("Failed to populate database:", error);
  }
}
