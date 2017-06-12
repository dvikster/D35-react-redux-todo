import React, { Component, PropTypes} from 'react';

export default class TodoListItem extends Component {
    static propTypes = {
        todoListItem:React.PropTypes.shape({
            task: React.PropTypes.string.isRequired
        })
    }
    state =  {
            visible: false
    }
    clickCloseButton = (e) => {
        e.preventDefault();
        this.setState({visible:true})
    }

    render(){
        let task = this.props.todoListItem.task;
        let visible = this.state.visible;

        return (
            <div className={'todolist-task '+(visible ? 'none': '')} >
                <input className="checkbox" type="checkbox"/>
                <span className="task" >{task}</span>
                <span>Total time is 00:00:00 <button>Start</button> </span>
                <a onClick={this.clickCloseButton} href="#" className={'close-task'+(visible ? 'none': '')}>X</a>
            </div>
        )
    }
}
