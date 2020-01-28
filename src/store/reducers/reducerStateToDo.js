import {ADD_NEW_TODO, TODO_DONE, TODO_DELETE, PREPARATION_FOR_EDIT_TODO, REMOVE_TODO, RESTORE_TODO, SET_EDIT_TODO} from '../../constants';

const initialState = {
    activeToDo: [],
    doneToDo: [],
    deletedToDo: []
};

function reducerStateToDo(state = initialState, action) {
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
        case PREPARATION_FOR_EDIT_TODO:
            const todosActiveAfterPreparation = state.activeToDo.filter(todo => {
                return todo.id !== action.payload;
            });

            return {
                ...state,
                activeToDo: todosActiveAfterPreparation
            };
        case SET_EDIT_TODO:
            const idTodoBeforeEdit = action.payload.id;
            const modifiedToDo = action.payload;
            const actTodos = state.activeToDo.filter(todo => {
                return todo.id !== idTodoBeforeEdit;
            });

            actTodos.push(modifiedToDo);

            return {
                ...state,
                activeToDo: actTodos
            };
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
