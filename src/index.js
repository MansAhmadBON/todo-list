import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import store from "./store/store";
import App from "./containers";
import './index.css';

const history = createBrowserHistory();

ReactDOM.render(<Provider store={store}><BrowserRouter history={history}><Route path="/" component={App}/></BrowserRouter></Provider>, document.getElementById('root'));

