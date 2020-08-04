import React from 'react'

class Todo extends React.Component{

    deleteTodo = () =>{
        console.log(this.props.index);
        this.props.deleteTodo(this.props.index);
    }

    render(){
        return (
            <div className="todo-border">{this.props.text}<img onClick={this.deleteTodo} src='/delete.png'/></div>
        )
    }

}

export default Todo