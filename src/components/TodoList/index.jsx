import Todo from '../Todo'
import React from 'react'
import {getTodo} from '../../api';
import { Row, Col } from 'antd';

class TodoList extends React.Component{

    componentWillMount(){
        getTodo().then((response) => {
            let todoList = response.data;
            this.props.addAll(todoList);
        })
    }

    render() {
        return (
            <Row gutter={10}>
                {this.props.todoList.map((item,index)=>{
                    return <Col span={4}><Todo key={index} todo={item} deleteTodo={this.props.deleteTodo} isTodoDone={this.props.isTodoDone}/></Col>
                })}
            </Row>
        )
    }

}

export default TodoList