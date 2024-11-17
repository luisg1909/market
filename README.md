
# Market App

## Purpose

The **Market App** is a simple React-based e-commerce application designed to demonstrate key features like:
- Product listing and categorization.
- Role-based access for **Admin** and **Regular User**.
- Basket functionality to add, view, and clear products.
- PDF export of purchase receipts.
- Dynamic routing for seamless navigation.

This app is intended for demo purposes to showcase functionalities such as **React Router**, **jsPDF integration**, and role-based behavior.

---

## Features

### Roles
1. **Admin**
   - Can view all products.
   - Can edit product details (name, description, price).
   - Can export a PDF receipt of the purchase.

2. **Regular User**
   - Can view all products.
   - Can add products to the basket.
   - Can checkout and view a dynamically generated PDF receipt of the purchase.


#### Product Listing
- Displays all products grouped into categories (e.g., Coffee, Cheese, Milk, Fruits, etc.).


#### Role-Based Actions
- **Admins** have permissions to edit product details.
- **Regular Users** can only add products to the basket.
- Both users can add products to the basket from the list. can empty car or keep purchasing

#### Basket Management
- Users can add items to the basket and see the total cost in real-time on the Navbar.
- The "Finish Payment" button becomes available when there is at least one product in the basket.

#### PDF Export
- After clicking "Finish Payment," the app generates a receipt in PDF format.
- The receipt includes:
  - A logo at the top-right corner.
  - A list of purchased products with their descriptions and prices.
  - The total amount.
- The PDF is rendered in a PDF viewer page instead of being directly downloaded.

#### Navigation
- The app uses **React Router** for dynamic navigation:
  - `/` - Product List Page.
  - `/checkout` - Checkout Page to finalize the purchase.
  - `/pdf-viewer` - PDF Viewer Page to display the purchase receipt.

---

## How to Run

### Prerequisites
- **Node.js** installed on your machine.
- A package manager like **npm** or **yarn**.

### Steps to Start the App
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the app in your browser at [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── assets/               # Contains static files like images (e.g., logo.png)
├── components/           # React components (Navbar, ProductList, CheckoutPage, etc.)
├── data/                 # Static product data
├── models/               # TypeScript models for products and props
├── App.tsx               # Main App component
├── index.tsx             # Entry point of the app
```

---

## Technologies Used

- **React**: For building the UI.
- **React Router**: For routing between pages.
- **React-Bootstrap**: For styling and UI components.
- **jsPDF**: For generating PDF receipts.
- **TypeScript**: For type safety and code scalability.

---

## Author

Developed by Luis Godoy @luisg1909. for demo purposes of all my knowledge about react,typescript,use of interfaces,css,components. part of my portfolio. Feel free to contribute or reach out for questions or improvements.
