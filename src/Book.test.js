import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import Books from './components/Books';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });
jest.mock('axios');

describe('Books', () => {
  it('calls the cancel API and refreshes the page on "Cancel" button click', async () => {
    const mockBookId = 123;

    axios.delete.mockResolvedValue({});

    const { getByText } = render(<Books book={{ id: mockBookId }} />);

    const cancelButton = getByText('Cancel');

    fireEvent.click(cancelButton);

    await waitFor(() => {
      expect(axios.delete).toHaveBeenCalledTimes(1);
      expect(axios.delete).toHaveBeenCalledWith(
        `http://127.0.0.1:5000/user/book/${mockBookId}`,
        {
          auth: {
            username: sessionStorage.getItem('username'),
            password: sessionStorage.getItem('password'),
          },
        }
      );
    });
  });

  it('redirects to the bookings page on image click', () => {
    const { getByAltText } = render(<Books book={{ id: 123 }} />);

    const roomImage = getByAltText('Room Image');

    fireEvent.click(roomImage);

    expect(window.location.href).toBe('http://localhost/');
  });
});
