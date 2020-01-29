import {createStore} from "redux";
import rootReducers from './reducers';

const store = createStore(rootReducers);

store.subscribe(() => {
    const todoStore = store.getState().stateToDos;
    localStorage.clear();
    localStorage.setItem('todosStore', JSON.stringify(todoStore));
});

export default store;