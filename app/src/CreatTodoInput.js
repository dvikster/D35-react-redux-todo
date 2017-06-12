import React from 'react';


var CreatTodoInput= React.createClass({

    getInitialState: function() {
        return {
            newTodo: ''
        };
    },
    onChangeHandler: function(e) {
        this.setState({newTodo: e.target.value});
        console.log({newTodo: e.target.value});
    },
    render: function() {

        return (
            <input
                className="task-input"
                type="text"
                value={this.state.newTodo}
                onChange={this.onChangeHandler}
                placeholder='What should be done?'
            />
        );
    }

});

export default CreatTodoInput;