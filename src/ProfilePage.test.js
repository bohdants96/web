import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import ProfilePage from './components/ProfilePage';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({adapter: new Adapter()});
jest.mock('axios');

describe('ProfilePage', () => {
  afterEach(() => {
    sessionStorage.clear();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<ProfilePage />);
    expect(wrapper.exists()).toBe(true);
  });

  it('redirects to /login when "Login" button is clicked', () => {
    const wrapper = shallow(<ProfilePage />);
    const getLogButton = wrapper.find('button').first();
    getLogButton.simulate('click');
    expect(global.window.location.href).toBe('http://localhost/');
  });

  it('redirects to /edit_me when "Edit" button is clicked', () => {
    sessionStorage.setItem('username', 'test');
    sessionStorage.setItem('password', 'password');

    const wrapper = shallow(<ProfilePage />);
    const editButton = wrapper.find('button').at(1);
    editButton.simulate('click');
    expect(global.window.location.href).toBe('http://localhost/');
  });

  it('logs out the user and redirects to /profile when "Logout" button is clicked', async () => {
    sessionStorage.setItem('username', 'test');
    sessionStorage.setItem('password', 'password');

    axios.get.mockResolvedValueOnce({});

    const wrapper = shallow(<ProfilePage />);
    const logoutButton = wrapper.find('button').at(2);
    await logoutButton.simulate('click');

    expect(sessionStorage.getItem('username')).toBe(null);
    expect(sessionStorage.getItem('password')).toBe(null);
    expect(global.window.location.href).toBe('http://localhost/');
  });

  it('deletes the user and redirects to /profile when "Delete" button is clicked', async () => {
    sessionStorage.setItem('username', 'test');
    sessionStorage.setItem('password', 'password');

    axios.delete.mockResolvedValueOnce({});

    const wrapper = shallow(<ProfilePage />);
    const deleteButton = wrapper.find('button').at(2);
    await deleteButton.simulate('click');

    expect(sessionStorage.getItem('username')).toBe('test');
    expect(sessionStorage.getItem('password')).toBe('password');
    expect(global.window.location.href).toBe('http://localhost/');
  });
});
