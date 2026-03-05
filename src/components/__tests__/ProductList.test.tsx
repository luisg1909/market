import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest'; // Import vi from vitest

import ProductList from '../../components/ProductList'; 
import { Product } from '../../models/Product'; 

// --- 1. Use vi instead of jest for mocking ---
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

const MOCK_BASE64_IMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0EQVRYw3NgYAAAAA0AAACf3yYAAAAASUVORK5CYII=";

class MockProduct extends Product {
    constructor(id: number, name: string, description: string, price: number, base64Image: string) {
        super(id, name, description, price, base64Image);
    }
    getCategory() {
        return 'Coffee';
    }
}

describe('ProductList Component Finish Payment Test', () => {

    const testProducts = [
        new MockProduct(1, 'Latte', 'A creamy latte', 3.00, MOCK_BASE64_IMAGE),
        new MockProduct(2, 'Espresso', 'Strong espresso shot', 1.00, MOCK_BASE64_IMAGE),
    ];
    
    const baseProps = {
        products: testProducts,
        role: "regular",
        onAddToBasket: vi.fn(), // Use vi.fn()
        onEditProduct: vi.fn(), // Use vi.fn()
    };

    it('should navigate to checkout when Finish Payment is clicked and basket is not empty', () => {
        const { rerender } = render(
            <ProductList 
                {...baseProps} 
                basket={[]} 
            />
        );

        expect(screen.queryByRole('button', { name: /Finish Payment/i })).not.toBeInTheDocument();
        
        const productInBasket = testProducts[0];
        rerender(
            <ProductList 
                {...baseProps} 
                basket={[productInBasket]} 
            />
        );
        
        const finishPaymentButton = screen.getByRole('button', { name: /Finish Payment/i });
        expect(finishPaymentButton).toBeInTheDocument();
        
        fireEvent.click(finishPaymentButton);
        
        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith("/checkout", { state: { products: testProducts } });

        const productImage = screen.getByRole('img', { name: /Latte/i });
        expect(productImage).toBeInTheDocument();
        expect(productImage).toHaveAttribute('src', MOCK_BASE64_IMAGE);
    });
    
    it('should call onAddToBasket when the Add to Basket button is clicked', () => {
         render(
            <ProductList 
                {...baseProps} 
                basket={[]} 
            />
        );

        const addToBasketButton = screen.getAllByRole('button', { name: /Add to Basket/i })[0];
        fireEvent.click(addToBasketButton);

        expect(baseProps.onAddToBasket).toHaveBeenCalledTimes(1);
        expect(baseProps.onAddToBasket).toHaveBeenCalledWith(testProducts[0]); 
    });
});