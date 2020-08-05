import React from 'react';
import Todo from '../Todo';
import {Row, Col} from 'antd';

class DoneTodoList extends React.Component{
    render() {
        return (
            <Row gutter={10}>
                {this.props.todoList.filter(item => item.status === true).map((item,index)=>{
                    return <Col span={4} className="gutter-row"><Todo key={index} todo={item} deleteTodo={this.props.deleteTodo} isTodoDone={this.props.isTodoDone}/></Col>
                })}
            </Row>
            
        )
    }
}

export default DoneTodoList;