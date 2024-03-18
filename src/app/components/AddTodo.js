import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";


function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('');
    }
    return (
        <form onSubmit={addTodoHandler}>
            <div className="mb-4">
                <h1 className="text-grey-darkest">Todo List</h1>
                <div className="flex mt-4 h-10">
                    <input
                        className="bg-gray-50 border border-gray-300 mr-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={"Enter Todo"}>
                    </input>
                </div>
            </div>
            <button type="submit" className="h-10 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add todo</button>
        </form>
    )
}

export default AddTodo;