import {ADD_NEW_TODO, TODO_DONE, TODO_DELETE, TODO_EDIT, REMOVE_TODO, RESTORE_TODO} from '../../constants';

const initialState = {
    activeToDo: [],
    doneToDo: [],
    deletedToDo: []
};

function reducerStateToDo(state = initialState, action) {
    //console.log(action);

    switch (action.type) {
        case ADD_NEW_TODO:
            return {
                ...state,
                activeToDo: [...state.activeToDo, action.payload]
            };
        case TODO_DONE:
            let todosActive = state.activeToDo.filter(todo => {
                return todo.id !== action.payload;
            });

            let newDoneTodo = state.activeToDo.filter(todo => {
                return todo.id === action.payload;
            });

            return {
                ...state,
                activeToDo: todosActive,
                doneToDo: [...state.doneToDo, newDoneTodo[0]]
            };
        case TODO_EDIT:
            console.log('editToDo!!!!', action.payload);
            return state;
        case TODO_DELETE:
            let todosActiveAfterDeleteTodo = state.activeToDo.filter(todo => {
                return todo.id !== action.payload;
            });

            let newDeleteTodo = state.activeToDo.filter(todo => {
                return todo.id === action.payload;
            });

            return {
                ...state,
                activeToDo: todosActiveAfterDeleteTodo,
                deletedToDo: [...state.deletedToDo, newDeleteTodo[0]]
            };
        case REMOVE_TODO:
            let doneToDosAfterRemove = state.doneToDo.filter(todo => {
                return todo.id !== action.payload;
            });

            let deleteTodosAfterRemove = state.deletedToDo.filter(todo => {
                return todo.id !== action.payload;
            });

            return {
                ...state,
                doneToDo: doneToDosAfterRemove,
                deletedToDo: deleteTodosAfterRemove
            };
        case RESTORE_TODO:
            const todoRestore = state.deletedToDo.filter(todo => {
                return todo.id === action.payload;
            });

            const delateTodosAfterRestore = state.deletedToDo.filter(todo => {
                return todo.id !== action.payload;
            });

            return {
                ...state,
                activeToDo: [...state.activeToDo, todoRestore[0]],
                deletedToDo: delateTodosAfterRestore
            };

        default: return state
    }
}

export default reducerStateToDo;
