import React from 'react'

class Todo extends React.Component{

    render(){
        return (
            <div className="todo-border">{this.props.text}<img src='/delete.png'/></div>
        )
    }

}

export default Todo