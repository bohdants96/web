import React from 'react';
import { render } from '@testing-library/react';
import Footer from './components/Footer';

import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

describe('Footer', () => {
  it('renders the correct content', () => {
    const { getByText } = render(<Footer />);

    const copyrightElement = getByText(/Audience Booking 2023/i);
    expect(copyrightElement).toBeInTheDocument();
  });
});
