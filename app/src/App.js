import React from 'react';
import TodoList from './TodoList';
import CreatTodoInput from './CreatTodoInput';

var todoList = [
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


var App = React.createClass({
    render: function() {
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
});

export default App;
