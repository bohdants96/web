import React from 'react';
import { shallow } from 'enzyme';
import Header from './components/Header';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
  it('renders a header element', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('header')).toHaveLength(1);
  });

  it('renders a navigation element', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('nav')).toHaveLength(1);
  });

  it('renders a list of navigation items', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('li')).toHaveLength(4);
  });

  it('renders home navigation item with correct href', () => {
    const wrapper = shallow(<Header />);
    const homeLink = wrapper.find('a[href="/main"]');
    expect(homeLink).toHaveLength(1);
    expect(homeLink.text()).toBe('Home');
  });

  it('renders audience navigation item with correct href', () => {
    const wrapper = shallow(<Header />);
    const audienceLink = wrapper.find('a[href="/rooms"]');
    expect(audienceLink).toHaveLength(1);
    expect(audienceLink.text()).toBe('Audience');
  });

  it('renders bookings navigation item with correct href', () => {
    const wrapper = shallow(<Header />);
    const bookingsLink = wrapper.find('a[href="/bookings"]');
    expect(bookingsLink).toHaveLength(1);
    expect(bookingsLink.text()).toBe('Bookings');
  });

  it('renders profile navigation item with correct href', () => {
    const wrapper = shallow(<Header />);
    const profileLink = wrapper.find('a[href="/profile"]');
    expect(profileLink).toHaveLength(1);
    expect(profileLink.text()).toBe('Profile');
  });
});
