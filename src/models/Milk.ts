import { Product } from "../models/Product";
import { Button } from "react-bootstrap";
import React from "react";

export class Milk extends Product {
  getCategory(): string {
    return "Milk";
  }
}
