import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm';

const mapDispatchToProps = (dispatch) => ({
	addTodo(content){dispatch({type:"ADD_TODO",content:content})}
});

const TodoFormContainer = connect(null, mapDispatchToProps)(TodoForm);

export default TodoFormContainer;
