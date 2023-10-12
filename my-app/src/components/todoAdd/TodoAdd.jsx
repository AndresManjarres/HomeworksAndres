import React, { useState } from "react";

export const TodoAdd = ({ onNewTodo }) => {
    const [taskDescription, setTaskDescription] = useState(''); 

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (taskDescription.trim() === '') {
        
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            description: taskDescription, 
            done: false
        };

        onNewTodo(newTodo);

        setTaskDescription('');
    }

    return (
        <form onSubmit={(event) => onFormSubmit(event)}>
            <input
                type="text"
                className="input"
                placeholder="Tarea"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
            />
            <button
                type="submit"
                className="botones"
            >
                Agregar
            </button>
        </form>
    )
}