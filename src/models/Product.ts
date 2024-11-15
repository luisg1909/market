export abstract class Product {
    id: number;
    name: string;
    description: string;
    price: number;
  
    constructor(id: number, name: string, description: string, price: number) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
    }
  
    getCategory(): string {
        return "General"; // default category or modify as needed
      }
  }
  