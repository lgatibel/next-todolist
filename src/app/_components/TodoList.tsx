"use client"
import React from 'react'
import { useState } from 'react'

type Todo = {
    id: number
    text: string,
    completed: boolean
}

export const TodoList = () => {

    const [todoList, setTodoList] = useState<Todo[]>([])
    const [input, setInput] = useState('')

    const addTodo = () => {
        console.log(input)
        const newTodoList = [...todoList, { text: input, completed: false, id: todoList.length + 1 }]
        setTodoList(newTodoList);
        setInput('')
    }

    const toogleCompleted = (id: number) => {
        const newTodoList = todoList.map((todo) => {
            return { ...todo, completed: todo.id === id ? !todo.completed : todo.completed }
        })
        setTodoList(newTodoList);
    }

    const deleteTodo = (id: number) => {
        const newTodoList = todoList.filter((todo) => todo.id != id)
        setTodoList(newTodoList);
    }
    return (
        <>
            <div className='flex flex-col gap-2 py-8'>
                {input}
                {todoList.map((todo, index) => {
                    return (
                        <div key={index} className='flex gap-4 border boder-white rounded-xl p-2'>
                            <p onClick={() => toogleCompleted(todo.id)} className={
                                todo.completed ? 'line-through opacity-50 ' : '' +
                                    `cursor-pointer`
                            }>{todo.text}</p>
                            <button className='p-2 rounded-xl bg-red-600' onClick={() => deleteTodo(todo.id)}>Delete Todo</button>
                        </div>
                    )
                })
                }
            </div>

            <input value={input} onChange={(e) => setInput(e.target.value)} className='rounded-lg text-black' />
            <button disabled={input.length === 0} className='disabled:cursor-not-allowed disabled:opacity-50 p-2 rounded-xl bg-blue-600' onClick={addTodo}>Add Todo</button>
        </>
    )
}
