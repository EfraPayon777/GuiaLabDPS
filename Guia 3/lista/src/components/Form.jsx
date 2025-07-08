"use client"
import React, { useState } from "react";
import Todo from './Todo'
import styles from "../app/page.module.css";

const Form = () => {
    const [todo, setTodo] = useState({});
    const [todos, setTodos] = useState([
        { todo: 'todo 1' },
        { todo: 'todo 2' },
        { todo: 'todo 3' },
    ]);

    const handleChange = (e) => setTodo({ [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(todo).length === 0 || todo.todo.trim() === '') {
            alert('El campo no puede estar vacío');
            return;
        }
        setTodos([...todos, todo]);
        setTodo({}); 
    };

    const deleteTodo = indice => {
        const newTodos = [...todos];
        newTodos.splice(indice, 1);
        setTodos(newTodos);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Agregar Tarea</label><br />
                <input
                    className={styles.form_input}
                    type="text"
                    name="todo"
                    value={todo.todo || ""}
                    onChange={handleChange}
                />
                <button className={styles.form_button} type="submit">Agregar</button>
            </form>
            {
                todos.map((value, index) => (
                    <Todo
                        todo={value.todo}
                        key={index}
                        index={index}
                        deleteTodo={deleteTodo}
                    />
                ))
            }
        </>
    );
}

export default Form