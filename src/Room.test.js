import React, { useEffect } from 'react';
import { render, fireEvent } from '@testing-library/react';
import Room from './components/Room';
import MyModal from './components/MyModal';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('./components/MyModal', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Room', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the correct content', () => {
    const room = { id: 1, name: 'Room #1', num_of_seats: '11' };
    const { getByAltText, getByText, getByRole } = render(<Room room={room} />);

    expect(getByAltText('Room Image')).toBeInTheDocument();
    expect(getByText('Room #1(Id:1)')).toBeInTheDocument();
    expect(getByText('Capacity: 11')).toBeInTheDocument();
    expect(getByText('Location: Lviv, Ukraine')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Book Now' })).toBeInTheDocument();
  });

  it('opens the modal when "Book Now" button is clicked', () => {
    const room = { id: 1, name: 'Room #1', num_of_seats: '11' };
    const setVisible = jest.fn();
    MyModal.mockImplementation(({ visible, setVisible }) => {
      useEffect(() => {
        setVisible(visible);
      }, [visible]);
      return null;
    });

    const { getByRole } = render(<Room room={room} />);
    const bookNowButton = getByRole('button', { name: 'Book Now' });

    fireEvent.click(bookNowButton);

  });
});
