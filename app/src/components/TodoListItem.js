import React, { Component, PropTypes} from 'react';
import classnames from 'classnames'

export default class TodoListItem extends Component {
    static propTypes = {
        todo: PropTypes.object.isRequired,
        completeTodo: PropTypes.func.isRequired
    }
    taskCompleteClick = () =>  {
        this.props.completeTodo(this.props.todo.id);
    }
    render(){
        const { todo } = this.props
        return (
            <div className={ 'todolist-task ' + classnames ({
                    completed: todo.completed
                })}>
                <input className="checkbox"
                       type="checkbox"
                       checked={todo.completed}
                       onChange={this.taskCompleteClick}
                />
                <span className="task" > {todo.text}</span>
                <span>Total time is 00:00:00 <button>Start</button> </span>
              </div>
        )
    }
}
