import { Product } from "../models/Product";


export class Coffee extends Product {
  getCategory(): string {
    return "Coffee";
  }
}
