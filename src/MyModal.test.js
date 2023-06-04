import React from 'react';
import {shallow} from 'enzyme';
import MyModal from './components/MyModal';
import Enzyme from 'enzyme';
import axios from 'axios'; // Import axios
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({adapter: new Adapter()});


describe('MyModal', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<MyModal visible={true} setVisible={() => {
        }}/>);
        expect(wrapper.exists()).toBe(true);
    });

    it('sets the visible state correctly', () => {
        const setVisibleMock = jest.fn();
        const wrapper = shallow(<MyModal visible={true} setVisible={setVisibleMock}/>);


        wrapper.find('.myModal').simulate('click');
        expect(setVisibleMock).toHaveBeenCalledWith(false);
    });

    it('sets the state values correctly', () => {
        const setVisibleMock = jest.fn();
        const wrapper = shallow(<MyModal visible={true} setVisible={setVisibleMock}/>);

        // Find input elements
        const idInput = wrapper.find('#id');
        const emailInput = wrapper.find('#email');

        // Simulate change events
        idInput.simulate('change', {target: {value: '1'}});
        emailInput.simulate('change', {target: {value: 'test@example.com'}});

        // Re-render the component with updated props
        wrapper.setProps({
            visible: true,
            setVisible: setVisibleMock,
        });

        // Assert the updated state values
        const updatedId = wrapper.find('#id').props().value;
        const updatedEmail = wrapper.find('#email').props().value;

        expect(updatedId).toBe('1');
        expect(updatedEmail).toBe('test@example.com');
    });


    it('submits the form data correctly', async () => {
        const setVisibleMock = jest.fn();
        const axiosPostMock = jest.spyOn(axios, 'post');
        const wrapper = shallow(<MyModal visible={true} setVisible={setVisibleMock}/>);

        // Set input values
        wrapper.setProps({
            id: 1,
            email: 'test@example.com',
            room_id: 2,
            num_of_seats: 3,
            date_from: '2023-06-01T10:00',
            date_to: '2023-06-01T12:00',
        });

        // Mock the axios.post function
        axiosPostMock.mockResolvedValueOnce({data: {}});

        // Simulate form submission
        await wrapper.find('form').simulate('submit', {preventDefault: jest.fn()});
    });

});
