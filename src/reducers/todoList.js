export const todoList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.todo];
        case 'DELETE_TODO':
            return [...state].filter((item, index) => (index !== action.index));
        case 'IS_TODO_DONE':
            {
                [...state].map((item, index) => { return index === action.index ? item.status = !item.status : item});
                return state;
            }
        case 'ADD_ALL':
            return action.todoList

        default:
            return state
    }
}