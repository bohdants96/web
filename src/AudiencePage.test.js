import React from 'react';
import {render, waitFor} from '@testing-library/react';
import axios from 'axios';
import AudiencePage from './components/AudiencePage';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({adapter: new Adapter()});
jest.mock('axios');

describe('AudiencePage', () => {
    it('fetches and renders the rooms successfully', async () => {
        const mockRooms = [
            {id: 1, name: 'Room 1'},
            {id: 2, name: 'Room 2'},
        ];

        axios.get.mockResolvedValue({data: mockRooms});

        const {getByText} = render(<AudiencePage/>);

        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(axios.get).toHaveBeenCalledWith('http://127.0.0.1:5000/room');
            expect(getByText('Recommended Rooms')).toBeInTheDocument();
            expect(getByText((content, element) => {
                // Perform partial matching or use regular expressions
                return content.includes('Room 1');
            })).toBeInTheDocument();
            expect(getByText((content, element) => {
                return content.includes('Room 2');
            })).toBeInTheDocument();
        });
    });

    it('fetches and renders the rooms successfully', async () => {
        const mockRooms = [
            {id: 1, name: 'Room 1'},
            {id: 2, name: 'Room 2'},
        ];

        axios.get.mockResolvedValue({data: mockRooms});

        const {queryByText} = render(<AudiencePage/>);

        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(axios.get).toHaveBeenCalledWith('http://127.0.0.1:5000/room');
            expect(queryByText((content, element) => {
                return element.tagName.toLowerCase() === 'h3' && content.includes('Room 1');
            })).toBeInTheDocument();
            expect(queryByText((content, element) => {
                return element.tagName.toLowerCase() === 'h3' && content.includes('Room 2');
            })).toBeInTheDocument();
        });
    });

});
