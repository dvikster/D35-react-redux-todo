import React, { Component, PropTypes} from 'react';
import TodoListItem from './TodoListItem';


export default class TodoList extends Component {
// var TodoList = React.createClass({
    static propTypes = {
        todoListArray: React.PropTypes.array.isRequired
    }
    render() {
        let dataArray = this.props.todoListArray;
        let todoListTemplate;

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
        )
    }
}