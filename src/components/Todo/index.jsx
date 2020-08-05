import React from 'react'
import { updateTodo as updateTodoApi} from '../../api'
class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: false
        }
    }

    deleteTodo = () => {
        this.props.deleteTodo(this.props.index);
    }

    done = (e) => {
        let updateTodo = this.props.todo;
        updateTodo.status = !updateTodo.status;
        updateTodoApi(updateTodo).then((response) => {
            this.props.isTodoDone(response.data.status, response.data.id);

            this.setState({
                status: updateTodo.status
            })
        })



    }

    render() {

        return (
            <div className="todo-border"><span className={this.state.status ? "todo-delete" : ""} onClick={this.done}>{this.props.todo.content}</span><img onClick={this.deleteTodo} src='/delete.png' alt="delete" /></div>
        )

    }

}

export default Todo