import React from 'react';
import { render } from '@testing-library/react';
import Hero from './components/Hero';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

describe('Hero', () => {
  it('renders the correct content', () => {
    const { getByText, getByRole } = render(<Hero />);

    const heading = getByText('Welcome to Audience Booking');
    const paragraph = getByText('Find the best audience for you and your friends!');
    const button = getByRole('link', { name: 'View Rooms' });

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('renders the correct class', () => {
    const { container } = render(<Hero />);

    expect(container.firstChild).toHaveClass('hero');
  });
});
