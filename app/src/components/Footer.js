import React, { Component, PropTypes } from 'react'

export default class Footer extends Component {
    static propTypes = {
        clearCompleted: PropTypes.func.isRequired
    }
    clearCompletedButton = () =>{
        this.props.clearCompleted();
    }

    render() {
        return (
            <footer className="todolist footer">
                <button onClick={this.clearCompletedButton} >Clear Completed</button>
            </footer>
        )
    }
}