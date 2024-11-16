import { Product } from "../models/Product";


export class Cheese extends Product {
  getCategory(): string {
    return "Cheese";
  }
}
