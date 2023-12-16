import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {DashboardWrapper} from './DashboardWrapper'; 

describe('DashboardPage', () => {
  test('renders MainPage component', () => {
    render(<DashboardWrapper />);
    const linkElement = screen.getByText(/POS System/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Home link', () => {
    render(<DashboardWrapper />);
    const linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('does not render an element that should not be there', () => {
    render(<DashboardWrapper />);
    const absentElement = screen.queryByText(/absent element/i);
    expect(absentElement).not.toBeInTheDocument();
  });

  test('Home link has correct href', () => {
    render(<DashboardWrapper />);
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toHaveAttribute('href', 'index.html');
  });
});
