import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm';

const mapDispatchToProps = (dispatch) => ({
	addTodo(text){dispatch({type:"ADD_TODO",text:text})}
});

const TodoFormContainer = connect(null, mapDispatchToProps)(TodoForm);

export default TodoFormContainer;
