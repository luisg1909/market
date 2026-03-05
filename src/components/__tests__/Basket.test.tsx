import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Basket from '../Basket';

const mockBasket = [
  { id: 1, name: 'Coffee', description: 'Dark roast', price: 10 },
  { id: 2, name: 'Milk', description: 'Whole milk', price: 5 }
];

describe('Basket Component', () => {
  it('should calculate the total price correctly', () => {
    render(<Basket basket={mockBasket} onClearBasket={() => {}} />);
    
    // Check if total is $15
    expect(screen.getByText(/Total: \$15/i)).toBeInTheDocument();
  });

  it('should call onClearBasket when the button is clicked', () => {
    const clearMock = vi.fn();
    render(<Basket basket={mockBasket} onClearBasket={clearMock} />);
    
    const clearButton = screen.getByText(/Clear Basket/i);
    fireEvent.click(clearButton);
    
    expect(clearMock).toHaveBeenCalledTimes(1);
  });
});