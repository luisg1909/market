import { Coffee } from "../models/Coffee";
import { Cheese } from "../models/Cheese";
import { Milk } from "../models/Milk";
import { Fruit } from "../models/Fruit";
import { Drink } from "../models/Drink";
import { Candy } from "../models/Candy";

function getRandomPrice() {
  return Math.floor(Math.random() * 10) + 1;
}
function getRandomPrice2() {
    return Math.floor(Math.random() * 20) + 1;
  }
  
export const productsData = [
  new Coffee(1, "Latte", "A creamy latte", getRandomPrice()),
  new Coffee(2, "Espresso", "Strong espresso shot", getRandomPrice()),
  new Coffee(3, "Pure Coffee", "Black pure coffee", getRandomPrice()),

  new Cheese(4, "Gouda", "Rich gouda cheese", getRandomPrice()),
  new Cheese(5, "Cheddar", "Sharp cheddar cheese", getRandomPrice()),
  new Cheese(6, "Mozzarella", "Fresh mozzarella", getRandomPrice2()),

  new Milk(7, "Lactose-Free Milk", "For lactose-intolerant", getRandomPrice()),
  new Milk(8, "Coconut Milk", "Coconut-based milk", getRandomPrice2()),
  new Milk(9, "Whole Milk", "Full-fat milk", getRandomPrice()),
  new Milk(10, "Rice Milk", "Milk from rice", getRandomPrice2()),

  new Fruit(11, "Watermelon", "Juicy watermelon", getRandomPrice()),
  new Fruit(12, "Melon", "Sweet melon", getRandomPrice()),
  new Fruit(13, "Grapette", "Grape-flavored fruit", getRandomPrice2()),
  new Fruit(14, "Strawberry", "Fresh strawberries", getRandomPrice2()),

  new Drink(15, "Soda", "Carbonated drink", getRandomPrice()),
  new Drink(16, "Beer", "Refreshing beer", getRandomPrice2()),
  new Drink(17, "Orange Juice", "Citrus orange juice", getRandomPrice()),
  new Drink(18, "Lemon Juice", "Tart lemon juice", getRandomPrice()),

  new Candy(19, "Hershey's", "Chocolate candy", getRandomPrice2()),
  new Candy(20, "Skittles", "Fruit-flavored candy", getRandomPrice2()),
];
