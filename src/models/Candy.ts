import { Product } from "../models/Product";
import { Button } from "react-bootstrap";
import React from "react";

export class Candy extends Product {
  getCategory(): string {
    return "Candy";
  }
}
