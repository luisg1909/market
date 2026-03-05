export abstract class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    base64Image: string;
  
    constructor(id: number, name: string, description: string, price: number, base64Image: string) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.base64Image = base64Image;
    }
    abstract getCategory(): string;

  }
  