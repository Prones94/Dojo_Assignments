import React, { useCallback, useEffect, useState } from 'react'
import './TodoForm.css'

function TodoForm() {
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([])

    const handleChange = e => {
        setNewTodo(e.target.value)
    }

    const markCompleted = useCallback((todo, i) => e => {
        const updatedTodos = [...todos];
        updatedTodos.splice(i, 1, {
            ...todo,
            completed: !todo.completed
        });
        setTodos(updatedTodos)
    }, [todos])

    const deleteTodo = useCallback(todo => e => {
        setTodos(todos.filter(otherTodos => otherTodos !== todo))
    }, [todos])

    const markAllDone = useCallback(() => {
        //create  copy of the array
        //create a copyu of each of the items
        //update the done property to be true on each of the new items
        const finishedTodos = todos.map(todo => {
            return {
                ...todo,
                completed: true,
            }
        })
        setTodos(finishedTodos)
    }, [todos])

    const handleSubmit = useCallback((e) =>{
        e.preventDefault();
        setTodos([
            {
                id: todos.length+1,
                content : newTodo,
                completed : false
            },
            ...todos
        ])
        setNewTodo("")
    }, [newTodo, todos])

    useEffect(() => {
        console.log('todos',todos);
    }, [todos])



    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="newTodo">Enter new Todo:</label>
                <input 
                    type="text" 
                    name="newTodo" 
                    value={newTodo}
                    onChange={ handleChange }
                    />
                    <button onChange={handleSubmit}>Add Todo Task</button>
                    <button onClick={markAllDone}>Mark All Completed</button>
            </form>
            <ul>
                {todos.map((todo, i) => (
                    <>
                    
                    <li key={i} className="todo__list">
                        <span className={todo.completed ? 'completed' : ''}>{todo.content}</span>
                        <span><input type="checkbox" checked={todo.completed} onChange={markCompleted(todo, i)}/></span>
                        &nbsp;
                        <span><button onClick={deleteTodo(todo)}>DeleteTodo</button></span>
                    </li>
                    
                    </>
                ))}
            </ul>     
        </div>
    )
}

export default TodoForm
