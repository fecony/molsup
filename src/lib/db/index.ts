import Dexie, { Table } from "dexie";
import { populate } from "./populate";
import { Supplier } from "../../types/supplier";
import { CatalogItem } from "../../types/catalogItem";

class MolsupDB extends Dexie {
  suppliers!: Table<Supplier, number>;
  catalogItems!: Table<CatalogItem, number>;

  constructor() {
    super("MolsupDB");

    this.version(1).stores({
      suppliers: "++id, &name, country, website",
      catalogItems:
        "++id, supplierId, molportId, smiles, sellUnit, measure, price, directShippingTime, directShippingPrice",
    });
  }
}

export const db = new MolsupDB();

db.on("populate", populate);

export function resetDatabase() {
  return db.transaction("rw", db.catalogItems, db.suppliers, async () => {
    await Promise.all(db.tables.map((table) => table.clear()));
    await populate();
  });
}
