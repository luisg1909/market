import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const PDFViewerPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pdfURL = location.state?.pdfURL;

  if (!pdfURL) {
    return <div>No PDF available to display</div>;
  }

  return (
    <div className="container my-4">
      <h2>Payment Receipt</h2>
      <div className="d-flex justify-content-end mb-3">
        <Button variant="primary" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </div>
      <iframe
        src={pdfURL}
        width="100%"
        height="600px"
        title="PDF Viewer"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default PDFViewerPage;
