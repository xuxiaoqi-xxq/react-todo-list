import React from 'react'

class Todo extends React.Component{

    deleteTodo = () =>{
        console.log(this.props.index);
        this.props.deleteTodo(this.props.index);
    }

    done = (e)=>{
        console.log(e.target.getAttribute("data-id"));
    }

    render(){
        return (
            <div className="todo-border"><span data-id={this.props.index} onClick={this.done}>{this.props.text}</span><img onClick={this.deleteTodo} src='/delete.png'/></div>
        )
    }

}

export default Todo