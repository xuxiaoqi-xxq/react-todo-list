import Todo from '../Todo'
import React from 'react'
import {getTodo} from '../../api'

class TodoList extends React.Component{

    componentWillMount(){
        getTodo().then((response) => {
            let todoList = response.data;
            this.props.addAll(todoList);
        })
    }

    render() {
        return (
            <div>
                {this.props.todoList.map((item,index)=>{
                    return <Todo key={index} todo={item} deleteTodo={this.props.deleteTodo} isTodoDone={this.props.isTodoDone}/>
                })}
            </div>
        )
    }

}

export default TodoList