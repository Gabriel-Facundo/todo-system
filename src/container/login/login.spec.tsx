import userEvent from '@testing-library/user-event';
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import Login from '../login'
import { AuthContext } from 'contexts';
import { MemoryRouter, Route } from 'react-router-dom';
import { TODO } from 'routes';
import Todos from 'pages/todos';

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
        expect(loginButton).toBeInTheDocument();
    })
})

describe("Application should redirect to 'TODO' page if logged", () => {
    test("Check if the user is redirected", async () => {
        render(
        <AuthContext.Provider value={{token: true, failLogin: '', login: () => {}, logout: () => {}}}>
            <MemoryRouter>
                <Login></Login>
                <Route path={TODO} exact component={Todos}/>
            </MemoryRouter>
        </AuthContext.Provider>
        );
        await waitFor(() => expect(screen.getByPlaceholderText("Saudações viajante, insira seu novo objetivo de vida aqui 🧙")).toBeInTheDocument())
        const result = screen.getByPlaceholderText("Saudações viajante, insira seu novo objetivo de vida aqui 🧙");
        expect(result).toBeInTheDocument();
    })
})

describe("Application should change field login and password when the user press the keyboard", () => {
    test("Should change login field when user interacts", () => {
        render(<Login></Login>);
        const email = screen.getByPlaceholderText("Email");
        userEvent.type(email, "teste@teste.com");
        expect(screen.getByDisplayValue('teste@teste.com')).toBeInTheDocument();
    })

    test("Should change password field when user interacts", () => {
        render(<Login></Login>);
        const password = screen.getByPlaceholderText("Senha");
        userEvent.type(password, "12345678");
        expect(screen.getByDisplayValue('12345678')).toBeInTheDocument();
    })
})

