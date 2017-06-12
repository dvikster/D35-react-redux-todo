import React, { Component, PropTypes } from 'react'
import TodoListItem from './TodoListItem'

export default class MainSection extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
    }



    render() {
        const { todos, actions } = this.props


        return (
            <div className="todolist">

                <div className="todolist-wrapper">
                    {todos.map(todo =>
                        <TodoListItem  key={todo.id} todo={todo} {...actions} />
                        )}
                </div>

            </div>
        )
    }
}

