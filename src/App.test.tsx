import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App1';

describe('App Component', () => {
  it('renders the welcome message on the login page', () => {
    render(<App />);
    
    // Check for the heading you actually have in LoginPage.tsx
    const welcomeElement = screen.getByText(/Welcome to the Market App/i);
    expect(welcomeElement).toBeInTheDocument();
  });

  it('renders the login buttons', () => {
    render(<App />);
    
    // Check if the role selection buttons are present
    const customerButton = screen.getByRole('button', { name: /Enter as Customer/i });
    const adminButton = screen.getByRole('button', { name: /Enter as Admin/i });
    
    expect(customerButton).toBeInTheDocument();
    expect(adminButton).toBeInTheDocument();
  });
});