import Todo from '../Todo'
import React from 'react'

class TodoList extends React.Component{

    render() {
        return (
            <div>
                {this.props.todoList.map((item,index)=>{
                    return <Todo key={index} todo={item} index={index} deleteTodo={this.props.deleteTodo} isTodoDone={this.props.isTodoDone}/>
                })}
            </div>
        )
    }

}

export default TodoList