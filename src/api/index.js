import axios from 'axios';

const baseUrl = 'https://5e9ec500fb467500166c4658.mockapi.io/todos/';

export const addTodo = (todo) => {
    return axios.post(baseUrl, todo);
}

export const getTodo = () => {
    return axios.get(baseUrl);
}

export const updateTodo = (todo) => {
    return axios.put(baseUrl + todo.id, todo);
}

export const deleteTodo = (id) => {
    return axios.delete(baseUrl + id);
}