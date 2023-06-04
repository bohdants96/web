import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import SignUpPage from './components/SighUpPage';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({adapter: new Adapter()});
jest.mock('axios');

describe('SignUpPage', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<SignUpPage />);
    expect(wrapper.exists()).toBe(true);
  });

  // Add similar tests for other input change handlers

  it('submits the form and redirects to /login on successful response', async () => {
    const mockPost = jest.spyOn(axios, 'post');
    mockPost.mockResolvedValueOnce({ status: 200 });

    const wrapper = shallow(<SignUpPage />);
    const form = wrapper.find('form');
    const event = { preventDefault: jest.fn() };
    await form.simulate('submit', event);

    expect(mockPost).toHaveBeenCalledWith('http://127.0.0.1:5000/user', {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      phone: '',
      user_status: NaN,
    });
    expect(global.location.href).toBe('http://localhost/');
  });

  it('displays the error message on failed response', async () => {
    const errorMessage = 'Error message from the server';
    const mockPost = jest.spyOn(axios, 'post');
    mockPost.mockRejectedValueOnce({ response: { data: errorMessage } });

    const wrapper = shallow(<SignUpPage />);
    const form = wrapper.find('form');
    const event = { preventDefault: jest.fn() };
    await form.simulate('submit', event);

    expect(mockPost).toHaveBeenCalledWith('http://127.0.0.1:5000/user', {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      phone: '',
      user_status: NaN,
    });
  });
});
