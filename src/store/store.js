import {createStore} from "redux";
import rootReducers from './reducers';

const store = createStore(rootReducers);

//store.subscribe(() => console.log('subscribe', store.getState()));

export default store;