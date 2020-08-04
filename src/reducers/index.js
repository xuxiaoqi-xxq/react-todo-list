import {combineReducers} from 'redux';
import {todoList} from './todoList';

export const reducers = combineReducers({
    todoList: todoList
});