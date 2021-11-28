import {TODO_API} from '../../../apis/todoApi'
import ITodoInterface from '../../../interfaces/ITodoInterface'

export function todosUtil() {
    async function getTodos() {
        let todos: ITodoInterface[] = [];
        await TODO_API.get("api/v1/todos")
                .then((response) => todos = response.data);
        return todos;
    }

    return {getTodos}
}

