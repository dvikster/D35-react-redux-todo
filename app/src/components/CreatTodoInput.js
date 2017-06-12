// import React from 'react';
//
//
// var CreatTodoInput= React.createClass({
//
//     getInitialState: function() {
//         return {
//             newTodo: ''
//         };
//     },
//     onChangeHandler: function(e) {
//         this.setState({newTodo: e.target.value});
//         console.log({newTodo: e.target.value});
//     },
//     render: function() {
//
//         return (
//             <input
//                 className="task-input"
//                 type="text"
//                 value={this.state.newTodo}
//                 onChange={this.onChangeHandler}
//                 placeholder='What should be done?'
//             />
//         );
//     }
//
// });
//
// export default CreatTodoInput;
import React, { Component, PropTypes}  from 'react';

export default class CreatTodoInput extends Component {
    // запись для ES5
    // getInitialState: function() {
    //     return {
    //         newTodo: ''
    //     }
    // }


    // getInitialState запись для ES6
        state =  {
        newTodo: ''
    }
    onChangeHandler = (e) => {
        this.setState({newTodo: e.target.value});
        console.log({newTodo: e.target.value});
    }
    render() {

        return (
            <input
                className="task-input"
                type="text"
                value={this.state.newTodo}
                onChange={this.onChangeHandler}
                placeholder='What should be done?'
            />
        )
    }

}

