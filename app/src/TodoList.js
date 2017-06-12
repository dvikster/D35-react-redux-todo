import React from 'react';
import TodoListItem from './TodoListItem';



var TodoList = React.createClass({
    propTypes: {
        todoListArray: React.PropTypes.array.isRequired
    },
    render: function() {
        var dataArray = this.props.todoListArray;
        var todoListTemplate;

        if (dataArray.length > 0) {
            todoListTemplate = dataArray.map(function (item, index) {
                return (
                    <div key={index} className="">
                         <TodoListItem todoListItem={item}/>
                       </div>
                )
            })
        }
        else {
            todoListTemplate = <p>Create task</p>
        }
        return (
            <div className="">
                {todoListTemplate}
                <div className={dataArray.length > 0 ? '' : 'none'} style={{padding:'20px'}}>{dataArray.length} items left</div>
            </div>
        );
    }
});

export default TodoList;
