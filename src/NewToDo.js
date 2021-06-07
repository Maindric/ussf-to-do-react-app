import React, { useContext } from 'react';
import ApplicationContext from './ApplicationContext'

function NewToDo(props) {
    const {currentItem, addTodos, todos, updateItem} = useContext(ApplicationContext);

    return (
        <div>
            <form onSubmit={ (e) => {
                e.preventDefault();
                addTodos(todos.concat(currentItem));
                updateItem({name: ""});
            }}>
                <label>
                    New Item:
                    <input type="text" name="name" onChange={(e) => {
                        e.preventDefault();
                        updateItem({name: e.target.value});
                    }}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default NewToDo;
