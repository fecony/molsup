import Dexie from "dexie";
import { db } from "./db";
import { utils, read } from "xlsx";
import { Supplier } from "@/types/supplier";
import { CatalogItem } from "@/types/catalogItem";
import { delay, validatePositiveNumber } from "@/lib/utils";

export const api = {
  getSuppliers: async (): Promise<Supplier[]> => {
    await delay(2000);
    return db.suppliers.toArray();
  },

  getSupplierById: async (id: number): Promise<Supplier | undefined> => {
    await delay(1000);
    return await db.suppliers.get(id);
  },

  uploadCatalog: async (
    supplierId: number,
    catalogFile: File,
  ): Promise<void> => {
    const catalogItems = await api.processCatalogFile(supplierId, catalogFile);

    await db.catalogItems.bulkAdd(catalogItems);
  },

  getCatalogBySupplier: async (supplierId: number): Promise<CatalogItem[]> => {
    const catalogItems = await db.catalogItems
      .where("supplierId")
      .equals(supplierId)
      .toArray();

    await Promise.all(
      catalogItems.map(async (item) => {
        [item.supplier] = await Promise.all([
          db.suppliers.get(item.supplierId),
        ]);
      }),
    );

    return catalogItems;
  },

  addSupplier: async (
    supplierData: Omit<Supplier, "id">,
    catalogFile?: File,
  ): Promise<number> => {
    try {
      const supplierId = await db.suppliers.add(supplierData);

      if (catalogFile) {
        await api.uploadCatalog(supplierId, catalogFile);
      }

      return supplierId;
    } catch (error) {
      if (
        error instanceof Dexie.ConstraintError &&
        error.message.includes("index 'name'")
      ) {
        throw new Error(
          `A supplier with the name "${supplierData.name}" already exists.`,
        );
      }

      throw error;
    }
  },

  processCatalogFile: async (
    supplierId: number,
    file: File,
  ): Promise<CatalogItem[]> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = async (e) => {
        try {
          const data = new Uint8Array(e.target?.result as ArrayBuffer);
          const workbook = read(data, { type: "array" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = utils.sheet_to_json(worksheet, {
            header: 1,
          }) as unknown[][];
          const [, ...dataRows] = jsonData;

          const catalogItems = dataRows.map(
            (row): CatalogItem => ({
              supplierId,
              molportId: String(row[0]),
              smiles: String(row[2]),
              sellUnit: validatePositiveNumber(row[3], "sell unit"),
              measure: String(row[4]),
              price: validatePositiveNumber(row[5], "price"),
              directShippingTime: validatePositiveNumber(
                row[6],
                "direct shipping time",
              ),
              directShippingPrice: validatePositiveNumber(
                row[7],
                "direct shipping price",
              ),
            }),
          );

          resolve(catalogItems);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = (error) => reject(error);
      reader.readAsArrayBuffer(file);
    });
  },
};
