import React from 'react';
import { mount } from 'enzyme';
import EditMePage from './components/EditMePage';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({adapter: new Adapter()});
describe('EditMePage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<EditMePage />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should update state when username input changes', () => {
    const usernameInput = wrapper.find('input[type="text"]').at(0);
    usernameInput.simulate('change', { target: { value: 'testuser' }});

    expect(wrapper.find('input[type="text"]').at(0).prop('value')).toBe('testuser');
  });

  it('should update state when password input changes', () => {
    const passwordInput = wrapper.find('input[type="password"]').at(0);
    passwordInput.simulate('change', { target: { value: 'password123' } });

    expect(wrapper.find('input[type="password"]').at(0).prop('value')).toBe('password123');
  });

  it('should update state when confirm password input changes', () => {
    const confirmPasswordInput = wrapper.find('input[type="password"]').at(1);
    confirmPasswordInput.simulate('change', { target: { value: 'password123' } });

    expect(wrapper.find('input[type="password"]').at(1).prop('value')).toBe('password123');
  });

  // mb will be more :)
});
