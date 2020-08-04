import React from 'react'

class Todo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isTodoDone: false
        }
    }

    deleteTodo = () =>{
        this.props.deleteTodo(this.props.index);
    }

    done = (e)=>{
        let isTodoDone = !this.state.isTodoDone;
        this.setState({
            isTodoDone: isTodoDone
        })
        this.props.isTodoDone(this.state.isTodoDone, this.props.index);
    }

    render(){
        if(this.state.isTodoDone){
            return (
                <div className="todo-border"><span className="todo-delete" onClick={this.done}>{this.props.todo.text}</span><img onClick={this.deleteTodo} src='/delete.png' alt="delete"/></div>
            )
        } else {
            return (
                <div className="todo-border"><span onClick={this.done}>{this.props.todo.text}</span><img onClick={this.deleteTodo} src='/delete.png' alt="delete"/></div>
            )
        }
    }

}

export default Todo