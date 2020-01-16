import {createStore} from "redux";
import reducerAddToDoName from './reducers/reducerAddToDoName';

const store = createStore(reducerAddToDoName);

store.subscribe(() => console.log('subscribe', store.getState()));

export default store;