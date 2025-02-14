import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducers from './reducers'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {logger} from 'redux-logger'

const store=createStore(reducers,applyMiddleware(thunk,logger))

ReactDOM.render(
    <Provider store={store}>
            <App/>
    </Provider>
, document.getElementById('root'));
