import { Product } from "../models/Product";

export class Soda extends Product {
  getCategory(): string {
    return "Soda";
  }
}
