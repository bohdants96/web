import React from 'react';
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import User from './components/User';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('axios');

describe('User', () => {
  it('renders user information when user is logged in', async () => {
    const user = {
      id: 1,
      username: 'testuser',
      email: 'test@example.com',
      first_name: 'John',
      last_name: 'Doe',
    };

    sessionStorage.setItem('username', 'testuser');
    sessionStorage.setItem('password', 'testpassword');
    axios.get.mockResolvedValue({ data: user });

    const { getByText } = render(<User />);

    await waitFor(() => {
      expect(getByText(/ID:/i)).toBeInTheDocument();
      expect(getByText(/Username:/i)).toBeInTheDocument();
      expect(getByText(/Email:/i)).toBeInTheDocument();
      expect(getByText(/First Name:/i)).toBeInTheDocument();
      expect(getByText(/Last Name:/i)).toBeInTheDocument();
    });
  });

  it('renders login message when user is not logged in', async () => {
    sessionStorage.clear();
    const { getByText } = render(<User />);

    await waitFor(() => {
      expect(getByText(/Login, please!/i)).toBeInTheDocument();
    });
  });
});
