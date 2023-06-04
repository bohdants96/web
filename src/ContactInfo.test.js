import React from 'react';
import {render, screen} from '@testing-library/react';
import ContactInfo from './components/ContactInfo';
import axios from 'axios';

jest.mock('axios');

describe('ContactInfo', () => {
    it('renders the correct content', () => {
        const {getByText, getByRole} = render(<ContactInfo/>);

        const linkedInElement = getByRole('link', {name: 'Bohdan Tsisinskyi'});
        expect(linkedInElement).toBeInTheDocument();
        expect(linkedInElement).toHaveTextContent('Bohdan Tsisinskyi');
        expect(linkedInElement.href).toBe('https://www.linkedin.com/in/bohdan-tsisinskyi-539913255/');
    });
});
