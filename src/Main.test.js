import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './components/MainPage';
import Hero from './components/Hero';
import Room from './components/Room';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

describe('MainPage', () => {
  it('renders without error', () => {
    const wrapper = shallow(<MainPage />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders Hero component', () => {
    const wrapper = shallow(<MainPage />);
    expect(wrapper.find(Hero)).toHaveLength(1);
  });

  it('renders recommended rooms', () => {
    const wrapper = shallow(<MainPage />);
    expect(wrapper.find('.recommended-events')).toHaveLength(1);
    expect(wrapper.find('.event-list')).toHaveLength(1);
  });

  it('renders three Room components with correct props', () => {
    const wrapper = shallow(<MainPage />);
    const roomComponents = wrapper.find(Room);
    expect(roomComponents).toHaveLength(3);

    // Check props of each Room component
    const expectedRooms = [
      { id: 1, name: 'Room #1', num_of_seats: '11' },
      { id: 2, name: 'Room #2', num_of_seats: '21' },
      { id: 3, name: 'Room #3', num_of_seats: '6' },
    ];

    roomComponents.forEach((roomComponent, index) => {
      expect(roomComponent.prop('room')).toEqual(expectedRooms[index]);
    });
  });
});
