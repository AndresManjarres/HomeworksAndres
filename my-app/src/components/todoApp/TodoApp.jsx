import React, { useReducer } from "react";
import { TodoAdd } from "../todoAdd/TodoAdd";
import { TodoList } from "../todoList/TodoList";
import { TodoReducer } from "../todoReducer/TodoReducer";

const initialState = [
    {
        id: new Date().getTime(),
        description: "Tarea Redes",
        done: false
    }
]

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(TodoReducer, initialState);

    const handleNewTodo = (todo) => {
        const action = {
            type: "[TODO] ADD TODO",
            payload: todo
        }
        dispatch(action);
    }

    return (
        <div>
            <h1>TodoApp: 10 <small>pendientes: 2</small></h1>
            <hr />

            <div className="">
                <div className="">
                    <TodoList todos={todos} />
                </div>
                <div className="">
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </div>
    )
}