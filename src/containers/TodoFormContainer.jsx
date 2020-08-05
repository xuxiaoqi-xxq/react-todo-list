import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm';

const mapDispatchToProps = (dispatch) => ({
	addTodo: (todo) => {dispatch({type:"ADD_TODO",todo:todo})}
});

const TodoFormContainer = connect(null, mapDispatchToProps)(TodoForm);

export default TodoFormContainer;
