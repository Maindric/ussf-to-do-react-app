import React, { useContext } from 'react';
import ToDo from './ToDo.js'
import ApplicationContext from './ApplicationContext'

function ToDoList() {
    const {currentItem, addToDos, todos, updateItem} = useContext(ApplicationContext);
    return (
        <div>
            My To Do List:
            <ul>
                { todos.map(toDoItem => <li><ToDo todo={toDoItem}/></li>) }
            </ul>
        </div>
    );
}

export default ToDoList;
