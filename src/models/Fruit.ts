import { Product } from "../models/Product";

export class Fruit extends Product {
  getCategory(): string {
    return "Fruit";
  }
}
