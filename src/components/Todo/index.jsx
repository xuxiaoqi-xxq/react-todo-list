import React from 'react'

class Todo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            status: false
        }
    }

    deleteTodo = () =>{
        this.props.deleteTodo(this.props.index);
    }

    done = (e)=>{
        let status = !this.state.status;
        this.setState({
            status: status
        })
        this.props.isTodoDone(this.state.status, this.props.index);
    }

    render(){
        if(this.state.status){
            return (
                <div className="todo-border"><span className="todo-delete" onClick={this.done}>{this.props.todo.content}</span><img onClick={this.deleteTodo} src='/delete.png' alt="delete"/></div>
            )
        } else {
            return (
                <div className="todo-border"><span onClick={this.done}>{this.props.todo.content}</span><img onClick={this.deleteTodo} src='/delete.png' alt="delete"/></div>
            )
        }
    }

}

export default Todo