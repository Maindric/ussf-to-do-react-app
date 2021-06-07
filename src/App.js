import React from 'react';
import ToDoList from './ToDoList'
import NewToDo from './NewToDo'
import ApplicationContext from './ApplicationContext'
import { useState } from 'react';

function App() {
    // const handleChange(event){
    //     ({
    //         currentItem: {
    //             name: event.target.value 
    //         }
    //     })
    // }

    // const handleSubmit(event) {
    //     this.setState({
    //         todos: this.state.todos.concat(this.state.currentItem),
    //         currentItem: {
    //         name: ''
    //         }
    //     })
    //     event.preventDefault()
    // }

    const[ todos, addTodos ] = useState([
            { name: 'laundry' },
            { name: 'buy groceries' },
            { name: 'mow lawn' }
        ] );
    const [ currentItem, updateItem ] = useState({name: ""});

    return (
        <ApplicationContext.Provider value={{
            todos,
            addTodos,
            currentItem,
            updateItem
        }}>
            <div className="App">
                <ToDoList />
                <NewToDo />
            </div>
        </ApplicationContext.Provider>
    );
}

export default App;
