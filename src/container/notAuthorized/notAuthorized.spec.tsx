import NotAuthorized from '../notAuthorized'
import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from 'contexts';

afterEach(() => {
    cleanup();
})


describe("Application should render 'Logar!' button if user is not logged ", () => {
    test("Check if 'Logar!' exists", () => {
        render(
        <MemoryRouter>
            <NotAuthorized></NotAuthorized>
        </MemoryRouter>
        );
        const loggin = screen.getByRole("button");
        expect(loggin).toBeInTheDocument();
    })
})

describe("Application should render 'Menu principal!' button if user is logged", () => {
    test("Check if 'Menu principal!' exists", () => {
        render(
        <AuthContext.Provider value={{token: true, failLogin: '', login: () => {}, logout: () => {}}}>
            <MemoryRouter>
                <NotAuthorized></NotAuthorized>
            </MemoryRouter>
        </AuthContext.Provider>
        );
        const menu = screen.getByText("Menu principal");
        expect(menu).toBeInTheDocument();
    })
})