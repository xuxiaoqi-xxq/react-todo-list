import React from 'react';
import Todo from '../Todo';

class DoneTodoList extends React.Component{
    render() {
        return (
            <div>
                {this.props.todoList.filter(item => item.status === true).map((item,index)=>{
                    return <Todo key={index} todo={item} index={index} deleteTodo={this.props.deleteTodo} isTodoDone={this.props.isTodoDone}/>
                })}
            </div>
        )
    }
}

export default DoneTodoList;