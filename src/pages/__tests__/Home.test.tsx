import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from '../Home';

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <HelmetProvider>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </HelmetProvider>
  );
};

describe('Home Page', () => {
  test('renders hero section with title', () => {
    renderWithProviders(<Home />);
    
    expect(screen.getByText('Your Trusted Partner in')).toBeInTheDocument();
    expect(screen.getByText('Technology Solutions')).toBeInTheDocument();
  });

  test('renders value propositions', () => {
    renderWithProviders(<Home />);
    
    expect(screen.getByText('IT Staffing')).toBeInTheDocument();
    expect(screen.getByText('IT Development')).toBeInTheDocument();
    expect(screen.getByText('Digital Marketing')).toBeInTheDocument();
  });

  test('renders call-to-action buttons', () => {
    renderWithProviders(<Home />);
    
    expect(screen.getByText('Get Started Today')).toBeInTheDocument();
    expect(screen.getByText('Explore Our Services')).toBeInTheDocument();
  });

  test('renders industries section', () => {
    renderWithProviders(<Home />);
    
    expect(screen.getByText('Industries We Serve')).toBeInTheDocument();
    expect(screen.getByText('IT & Technology')).toBeInTheDocument();
  });
});
