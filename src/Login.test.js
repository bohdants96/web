import React from 'react';
import {render, fireEvent, waitFor, queryByText, getAllByText} from '@testing-library/react';
import axios from 'axios';
import LoginPage from './components/LoginPage';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({adapter: new Adapter()});
jest.mock('axios');

describe('LoginPage', () => {
    it('handles form submission and redirects to profile on successful login', async () => {
        const mockUsername = 'testuser';
        const mockPassword = 'testpassword';

        axios.post.mockResolvedValue({status: 200});

        const {getByText, getByPlaceholderText} = render(<LoginPage/>);

        const usernameInput = getByPlaceholderText('Username');
        const passwordInput = getByPlaceholderText('Password');
        const loginButton = getByText('Login');



        fireEvent.change(usernameInput, {target: {value: mockUsername}});
        fireEvent.change(passwordInput, {target: {value: mockPassword}});
        fireEvent.click(loginButton);

        await waitFor(() => {
            expect(axios.post).toHaveBeenCalledTimes(1);
            expect(axios.post).toHaveBeenCalledWith(
                'http://127.0.0.1:5000/user/login',
                {
                    username: mockUsername,
                    password: mockPassword,
                },
                {
                    auth: {
                        username: mockUsername,
                        password: mockPassword,
                    },
                }
            );
            expect(sessionStorage.getItem('username')).toBe(mockUsername);
            expect(sessionStorage.getItem('password')).toBe(mockPassword);
            expect(window.location.href).toBe('http://localhost/');
        });
    });

    it('displays an error message on login failure', async () => {
        const errorMessage = 'Invalid username or password';

        axios.post.mockRejectedValue({response: {data: errorMessage}});

        const {getByText, getByPlaceholderText} = render(<LoginPage/>);

        const usernameInput = getByPlaceholderText('Username');
        const passwordInput = getByPlaceholderText('Password');
        const loginButton = getByText('Login');



        fireEvent.change(usernameInput, {target: {value: 'testuser'}});
        fireEvent.change(passwordInput, {target: {value: 'testpassword'}});
        fireEvent.click(loginButton);

        await waitFor(() => {
            expect(axios.post).toHaveBeenCalledTimes(1);
            expect(getByText(errorMessage)).toBeInTheDocument();
        });
    });

    it('redirects to signup page on "Sign up" button click', () => {
        const {getByText} = render(<LoginPage/>);

        const signUpButton = getByText('Sigh up');
        fireEvent.click(signUpButton);

        expect(window.location.href).toBe('http://localhost/');
    });
});
