import { Product } from "../models/Product";

export class Drink extends Product {
  getCategory(): string {
    return "Drink";
  }
}
