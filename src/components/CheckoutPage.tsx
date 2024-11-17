import React from "react";
import { Button, Table } from "react-bootstrap";
import jsPDF from "jspdf";
import "jspdf-autotable";
import logo from "./logo.png";

interface CheckoutPageProps {
  basket: {
    id: number;
    name: string;
    description: string;
    price: number;
  }[];
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ basket }) => {
  const totalAmount = basket.reduce((sum, product) => sum + product.price, 0);

  const handleGeneratePDF = () => {
    const doc = new jsPDF();

    // Add logo
    doc.addImage(logo, "PNG", 10, 10, 30, 30);

    // Add title and address
    doc.setFontSize(18);
    doc.text("Market Receipt", 70, 20);
    doc.setFontSize(12);
    doc.text("Miami, Florida", 70, 30);
    doc.text(new Date().toLocaleDateString(), 70, 40);

    // Add table with products
    const tableData = basket.map((product) => [
      product.name,
      product.description,
      `$${product.price.toFixed(2)}`,
    ]);
    (doc as any).autoTable({
      head: [["Name", "Description", "Price"]],
      body: tableData,
      startY: 50,
    });

    // Add total
    const finalY = (doc as any).lastAutoTable.finalY || 50; // Get the last position of the table
    doc.setFontSize(14);
    doc.text(`Total: $${totalAmount.toFixed(2)}`, 14, finalY + 10);

    // Save the PDF
    doc.save("market_receipt.pdf");
  };

  return (
    <div className="container my-4">
      <h2>Checkout</h2>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {basket.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>${product.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p className="font-weight-bold">Total to Pay: ${totalAmount.toFixed(2)}</p>

    </div>
  );
};

export default CheckoutPage;
