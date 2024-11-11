import { Supplier } from "@/types/supplier";

export interface CatalogItem {
  id?: number;
  molportId: string;
  supplierId: number;
  smiles: string;
  sellUnit: number;
  measure: string;
  price: number;
  directShippingTime: number;
  directShippingPrice: number;

  supplier?: Supplier;
}
