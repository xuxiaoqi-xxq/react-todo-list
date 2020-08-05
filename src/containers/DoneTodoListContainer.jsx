import {connect} from 'react-redux';
import DoneTodoList from '../components/DoneTodoList';

const mapStateToProps = (state) => ({
    todoList: state.todoList
});

const DoneTodoListContainer = connect(mapStateToProps)(DoneTodoList);

export default DoneTodoListContainer;