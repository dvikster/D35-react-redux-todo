import React, { Component, PropTypes} from 'react';
import TodoList from '../components/TodoList';
import CreatTodoInput from '../components/CreatTodoInput';

let todoList = [
    {
        "task":"task1",
    },
    {
        "task":"task2",
    },
    {
        "task":"task3",
    },
    {
        "task":"task4",
    },
    {
        "task":"task5",
    }
];



export default class App extends Component {
    render () {
        return (
            <div className="todolist">
                <h1>Create your plans</h1>

                <CreatTodoInput />

                <div className="todolist-wrapper">
                    <TodoList todoListArray={todoList} />
                </div>
            </div>
        );
    }
}

