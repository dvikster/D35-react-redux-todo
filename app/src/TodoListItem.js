import React from 'react';

var TodoListItem = React.createClass({
    propTypes: {
        todoListItem:React.PropTypes.shape({
            task: React.PropTypes.string.isRequired
        })
    },
    getInitialState: function () {
        return{
            visible: false
        };
    },
    clickCloseButton:function (e) {
        e.preventDefault();
        this.setState({visible:true});
    },

    render: function(){
        var task = this.props.todoListItem.task,
            visible = this.state.visible;

        return (
            <div className={'todolist-task '+(visible ? 'none': '')} >
                <input className="checkbox" type="checkbox"/>
                <span className="task" >{task}</span>
                <span>Total time is 00:00:00 <button>Start</button> </span>
                <a onClick={this.clickCloseButton} href="#" className={'close-task'+(visible ? 'none': '')}>X</a>
            </div>
        )
    }
});

export default TodoListItem;