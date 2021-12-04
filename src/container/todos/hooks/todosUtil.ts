import {TODO_API} from '../../../apis/todoApi'
import ITodoInterface from '../../../interfaces/ITodoInterface'


export async function getTodos() {
    let responseServer: ITodoInterface[] = [];
    await TODO_API.get("/api/todo")
            .then((response) => responseServer = response.data)
            .catch(() => {});
    return responseServer;
}

export async function postTodo(todo: ITodoInterface, allTodos: ITodoInterface[]) {
    let responseServer: ITodoInterface[] = [];
    if(!todo.title) {
        window.alert("Opa meu patrão, tentando salvar nada? Ai tu me quebra");
        responseServer = allTodos;
        return responseServer;
    }
    await TODO_API.post("/api/todo", todo)
            .then((response) => {
                    responseServer = allTodos.concat(response.data);
                    }
                )
                .catch(() => {
                    return responseServer = allTodos
                })
    return responseServer
}

export async function changeTodo(todo:ITodoInterface, allTodos:ITodoInterface[]) {
    let responseServer: ITodoInterface[] = [];
    todo.status = todo.status === "Completed" ? "Uncompleted" : "Completed"
    await TODO_API.put(`/api/todo/${todo.id}`, todo)
                .then((response) => {
                    responseServer = allTodos.map((todo) => todo.id === response.data.id ? response.data : todo)
                })
                .catch(() => {
                    return responseServer = allTodos
                })
    return responseServer;
}

export async function removeTodo(id:number | undefined, allTodos:ITodoInterface[]) {
    let responseServer: ITodoInterface[] = [];
    if(typeof id === 'undefined') return allTodos;
    await TODO_API.delete(`/api/todo/${id}`)
                .then((response) => {
                    responseServer = allTodos.filter((todo) => todo.id !== response.data.id);
                })
                .catch(() => {
                    return responseServer = allTodos
                })
    return responseServer;
}

