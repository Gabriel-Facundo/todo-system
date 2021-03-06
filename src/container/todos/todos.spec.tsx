import { render, screen, cleanup, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { AuthContext } from "contexts";
import { MemoryRouter, Route } from "react-router-dom";
import {getTodos, postTodo, changeTodo, removeTodo} from './hooks/todosUtil';
import {mocked} from 'ts-jest/utils'
import Todo from '.'
import ITodoInterface from "interfaces/ITodoInterface";
import { NOT_AUTHORIZED } from "routes";
import NotAuthorized from "container/notAuthorized";

const testt: ITodoInterface[] = [];

jest.mock('./hooks/todosUtil')
const getTodosMocked = mocked(getTodos);
const postTopdosMocked = mocked(postTodo);
const changeTodosMocked = mocked(changeTodo);
const removeTodosMocked = mocked(removeTodo);



afterEach(() => {
    cleanup();
})

describe("Todo input value should change when the user press any key on the keyboard", () => {
    beforeEach(() => {
        getTodosMocked.mockResolvedValue([]);
    })
    
    test("Check if input value changes", async () => {
        render(
        <MemoryRouter>
            <Todo></Todo>
        </MemoryRouter>
        );
        await waitFor(() => expect(getTodosMocked).toHaveBeenCalledTimes(1))
        const todoText = screen.getByTestId('input-text');
        let error;
        try{
            userEvent.type(todoText, "Ember Falls - The World Is Burning")
        } catch (e: any) {
            error = e.message;
        }
        expect(error).toBeUndefined();
    })
})

describe("Checking if action buttons is working as expected", () => {
    beforeEach(() => {
        getTodosMocked.mockResolvedValue([]);
        postTopdosMocked.mockResolvedValue([{id: 1, title: "Audioslave - Like a Stone", createdAt: new Date(), status: "Completed"}]);
        removeTodosMocked.mockResolvedValue([]);
        changeTodosMocked.mockResolvedValue([{id: 1, title: "Architects - Animals", createdAt: new Date(), status: "Completed"}])
    })

    test("Expect 'add' to include a new todo", async () => {
        render(
        <MemoryRouter>
            <Todo></Todo>
        </MemoryRouter>
        );
        await waitFor(() => expect(getTodosMocked).toHaveBeenCalledTimes(1))
        const todoText = screen.getByPlaceholderText("Sauda????es viajante, insira seu novo objetivo de vida aqui ????");
        userEvent.type(todoText, "Audioslave - Like a Stone")
        const input = screen.getByRole('button', {name: /Adicionar!/i})
        userEvent.click(input);
        await waitFor(() => expect(postTopdosMocked).toHaveBeenCalledTimes(1))
        expect(screen.getByText("Audioslave - Like a Stone")).toBeInTheDocument();
    })

    test("Expect 'logout' button to be clickable", async () => {
        render(
        <AuthContext.Provider value={{token: true, failLogin: '', login: () => {}, logout: () => {}}}>
            <MemoryRouter>
                <Todo></Todo>
            </MemoryRouter>
        </AuthContext.Provider>
        );
        await waitFor(() => expect(getTodosMocked).toHaveBeenCalledTimes(1))
        const logout = screen.getByRole('button', {name: /Sair/i})
        userEvent.click(logout);
        expect(logout).toBeInTheDocument();
    })

    test("Expect 'remove' button to remove one todo", async () => {
        getTodosMocked.mockResolvedValue([{id: 1, title: "Architects - Doomsday", createdAt: new Date(), status: "Completed"}]);
        render(
            <MemoryRouter>
                <Todo></Todo>
            </MemoryRouter>
            );
        await waitFor(() => expect(getTodosMocked).toHaveBeenCalledTimes(1))
        const input = screen.getByRole('button', {name: /REMOVER TAREFA/i})
        userEvent.click(input);
        await waitFor(() => expect(removeTodosMocked).toHaveBeenCalledTimes(1));
        let removedTodo = null;
        try{
            removedTodo = screen.getByText("Architects - Doomsday");
        } catch(e: any){
            removedTodo = e.message;
        }
        expect(removeTodo).toBeTruthy();        
    })

    test("Expect 'Completar' button to change todo status", async () => {
        getTodosMocked.mockResolvedValue([{id: 1, title: "Architects - Animals", createdAt: new Date(), status: "Uncompleted"}]);
        render(
            <MemoryRouter>
                <Todo></Todo>
            </MemoryRouter>
            );
        await waitFor(() => expect(getTodosMocked).toHaveBeenCalledTimes(1))
        const input = screen.getByRole('button', {name: /Completar?/i})
        userEvent.click(input);
        await waitFor(() => expect(changeTodosMocked).toHaveBeenCalledTimes(1));
        expect(screen.getByText(/Architects - Animals/)).toHaveStyle("text-decoration: line-through");
             
    })
})

describe("Case if has no todos",() => {
    beforeEach(() => {
        getTodosMocked.mockResolvedValue([]);
    })
    test("Application should render a text informing that is no todos available", async () => {
        
        render(
            <MemoryRouter>
                <Todo></Todo>
            </MemoryRouter>
        );
        await waitFor(() => expect(getTodosMocked).toHaveBeenCalledTimes(1))
        const result = screen.getByTestId('no-todos')
        expect(result).toBeInTheDocument()
    })
})