import {connect} from 'react-redux';
import TodoList from '../components/TodoList';

const mapStateToProps = (state) => ({
    todoList: state.todoList
});

const mapDispatchToProps = (dispatch) => ({
    deleteTodo: (id) => {dispatch({type:'DELETE_TODO', id:id})},
    isTodoDone: (id) => {dispatch({type:'IS_TODO_DONE', id: id})},
    addAll: (todoList) => {dispatch({type:"ADD_ALL",todoList: todoList})}
})

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;