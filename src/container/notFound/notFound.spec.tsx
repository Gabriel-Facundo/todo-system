import NotFound from '../notFound'
import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from 'contexts';

afterEach(() => {
    cleanup();
})

describe("Application should render 'IR PARA LOGIN' if user is not logged", () => {
    test("Check if 'IR PARA LOGIN' exists", () => {
        render(
        <MemoryRouter>
            <NotFound></NotFound>
        </MemoryRouter>
        );
        const loggin = screen.getByRole("button");
        expect(loggin).toBeInTheDocument();
    })
})

describe("Application should render 'MUNDO MARAVILHOSO' if user is logged", () => {
    test("Check if 'MUNDO MARAVILHOSO' exists", () => {
        render(
        <AuthContext.Provider value={{token: true, failLogin: '', login: () => {}, logout: () => {}}}>
            <MemoryRouter>
                <NotFound></NotFound>
            </MemoryRouter>
        </AuthContext.Provider>
        );
        const beautifulWorld = screen.getByText("MUNDO MARAVILHOSO");
        expect(beautifulWorld).toBeInTheDocument();
    })
})