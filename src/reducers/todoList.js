export const todoList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { text: action.text, isTodoDone: false }];
        case 'DELETE_TODO':
            return [...state].filter((item, index) => (index !== action.index));
        case 'IS_TODO_DONE':
            {
                [...state].map((item, index) => { if (index === action.index) item.isTodoDone = !item.isTodoDone})
                return state;
            }

        default:
            return state
    }
}