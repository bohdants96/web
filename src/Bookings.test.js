import React from 'react';
import {render, waitFor} from '@testing-library/react';
import axios from 'axios';
import Bookings from './components/Bookings';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({adapter: new Adapter()});
jest.mock('axios');

describe('Bookings', () => {
    it('fetches and renders the bookings successfully', async () => {
        const mockBooks = [
            {id: 1, title: 'Book 1'},
            {id: 2, title: 'Book 2'},
        ];

        axios.get.mockResolvedValue({data: mockBooks});

        const {getByText, queryByText} = render(<Bookings/>);

        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(axios.get).toHaveBeenCalledWith('http://127.0.0.1:5000/user/null/books', {
                auth: {
                    username: null,
                    password: null,
                },
            });
            expect(getByText('Your bookings')).toBeInTheDocument();
            expect(queryByText('Please, login!')).not.toBeInTheDocument();
        });
    });

    it('displays a message when there are no bookings', async () => {
        const mockBooks = [];

        axios.get.mockResolvedValue({data: mockBooks});

        const {getByText, queryByText} = render(<Bookings/>);

        await waitFor(() => {
            expect(getByText('Your bookings')).toBeInTheDocument();
            expect(getByText("You don't have books")).toBeInTheDocument();
            expect(queryByText('Please, login!')).not.toBeInTheDocument();
        });
    });

    it('displays a message when fetching bookings fails', async () => {
        axios.get.mockRejectedValue(new Error('Error fetching bookings'));

        const {getByText, queryByText} = render(<Bookings/>);

        await waitFor(() => {
            expect(getByText('Please, login!')).toBeInTheDocument();
            expect(queryByText('Your bookings')).not.toBeInTheDocument();
        });
    });
});
