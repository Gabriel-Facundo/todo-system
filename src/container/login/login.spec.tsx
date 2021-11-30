import userEvent from '@testing-library/user-event';
import { render, screen, cleanup } from "@testing-library/react";
import Login from '../login'
import { AuthContext } from 'contexts';
import { MemoryRouter } from 'react-router-dom';

afterEach(() => {
    cleanup();
})

describe("Application should do nothing with enter button without login and password", () => {
    test("Click on login button", () => {
        render(
        <AuthContext.Provider value={{token: false, failLogin: '', login: () => {}, logout: () => {}}}>
            <Login></Login>
        </AuthContext.Provider>
        );
        const loginButton = screen.getByText("Entrar 🚀");
        userEvent.click(loginButton);
        expect(loginButton).toBeInTheDocument;
    })
})

describe("Application should redirect to 'TODO' page if logged", () => {
    test("Check if the user is redirected", () => {
        render(
        <AuthContext.Provider value={{token: true, failLogin: '', login: () => {}, logout: () => {}}}>
            <MemoryRouter>
                <Login></Login>
            </MemoryRouter>
        </AuthContext.Provider>
        );
        const loginButton = screen.getByText("Entrar 🚀");
        userEvent.click(loginButton);
        expect(loginButton).not.toBeInTheDocument;
    })
})

describe("Application should change field login and password when the user press the keyboard", () => {
    test("Change login and password field", () => {
        render(<Login></Login>);
        const email = screen.getByPlaceholderText("Email");
        const password = screen.getByPlaceholderText("Senha");
        
        userEvent.type(email, "teste@teste.com");
        userEvent.type(password, "12345678");

        expect(screen.getByDisplayValue('teste@teste.com')).toBeInTheDocument();
        expect(screen.getByDisplayValue('12345678')).toBeInTheDocument();
    })
})

