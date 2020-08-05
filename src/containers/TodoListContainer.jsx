import {connect} from 'react-redux';
import TodoList from '../components/TodoList';

const mapStateToProps = (state) => ({
    todoList: state.todoList
});

const mapDispatchToProps = (dispatch) => ({
    deleteTodo: (index) => {dispatch({type:'DELETE_TODO', index:index})},
    isTodoDone: (status, index) => {dispatch({type:'IS_TODO_DONE', status: status, index: index})},
    addAll: (todoList) => {dispatch({type:"ADD_ALL",todoList: todoList})}
})

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;