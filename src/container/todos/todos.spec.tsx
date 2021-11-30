import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Todo from '.'

afterEach(() => {
    cleanup();
})

describe("Todo input value should change when the user press any key on the keyboard", () => {
    test("Check if input value changes", () => {
        render(
        <MemoryRouter>
            <Todo></Todo>
        </MemoryRouter>
        );
        const inputTodo = screen.getByPlaceholderText("Saudações viajante, insira seu novo objetivo de vida aqui 🧙");
        expect(inputTodo).toBeInTheDocument;
    })
})