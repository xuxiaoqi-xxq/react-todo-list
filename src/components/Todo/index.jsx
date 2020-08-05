import React from 'react'
import { updateTodo as updateTodoApi, deleteTodo } from '../../api';
import { Card, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

const { Paragraph } = Typography;

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: this.props.todo.status
        }
    }

    deleteTodo = () => {
        deleteTodo(this.props.todo.id)
            .then(() => {
                this.props.deleteTodo(this.props.todo.id);
            });
    }

    done = (e) => {
        // let updateTodo = this.props.todo;
        let updateTodo = Object.assign({}, this.props.todo);
        updateTodo.status = !updateTodo.status;
        updateTodoApi(updateTodo).then((response) => {
            this.props.isTodoDone(response.data.id);
            this.setState({
                status: updateTodo.status
            })
        })



    }

    render() {

        return (
            <Card onClick={this.done} size="small" hoverable extra={<DeleteOutlined onClick={this.deleteTodo} />}>
                <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }} editable delete={this.state.status}>
                    {this.props.todo.content}
                </Paragraph>
            </Card>
        )

    }

}

export default Todo