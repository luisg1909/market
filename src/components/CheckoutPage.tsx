import React from "react";
import { Button, Table } from "react-bootstrap";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // Add a logo image to your project
import "jspdf-autotable";

interface CheckoutPageProps {
  basket: {
    id: number;
    name: string;
    description: string;
    price: number;
  }[];
  onClearBasket: () => void; 
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ basket, onClearBasket }) => {
  const navigate = useNavigate();

  const totalAmount = basket.reduce((sum, product) => sum + product.price, 0);

  const handleFinishPayment = () => {
    const doc = new jsPDF();

    // Get PDF width
    const pageWidth = doc.internal.pageSize.getWidth();

    // Adjust image position to top-right corner
    const imageWidth = 30; // Set the image width
    const imageHeight = 30; // Set the image height
    const xPosition = pageWidth - imageWidth - 10; // 10mm margin from the right edge
    const yPosition = 10; // 10mm from the top edge

    doc.addImage(logo, "PNG", xPosition, yPosition, imageWidth, imageHeight);

    // Add title and header
    doc.setFontSize(18);
    doc.text("Market Receipt", 10, 20); // Keep text on the left
    doc.setFontSize(12);
    doc.text("Miami, Florida", 10, 30);
    doc.text(new Date().toLocaleDateString(), 10, 40);

    // Add table content
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
    const finalY = (doc as any).lastAutoTable.finalY || 50;
    doc.text(`Total: $${totalAmount.toFixed(2)}`, 10, finalY + 10);

    // Generate the PDF as a Blob
    const pdfBlob = doc.output("blob");

    // Create an object URL for the PDF
    const pdfURL = URL.createObjectURL(pdfBlob);
    onClearBasket()
    // Navigate to the PDF viewer page with the URL as state
    navigate("/pdf-viewer", { state: { pdfURL } });
  };

  return (
    <div className="container my-4">
      <h2>Checkout</h2>
      <Table striped bordered hover>
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
      <div className="d-flex justify-content-start">
        <Button variant="success" className="me-2" onClick={handleFinishPayment}>
          Finish Payment
        </Button>
        <Button variant="primary" className="me-2" onClick={onClearBasket}>
          Clear Basket
        </Button>
        <Button variant="danger" className="me-2" onClick={() => navigate("/")}>
        Keep buying
        </Button>


      </div>
    </div>
  );
};

export default CheckoutPage;
