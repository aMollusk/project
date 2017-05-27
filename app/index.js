
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { middleware as reduxPackMiddleware } from 'redux-pack'
import App from './components/App'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Home from './containers/Home';

require('./styles/main.scss');

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const myReducer = (state = {things: 'hello!'}, action = {}) => {
    switch(action.type){
        default:
            return state
    }
} 

const store = createStore(myReducer, applyMiddleware(thunk, reduxPackMiddleware))

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <div>
            <Route exact path="/"  component={Home} />
            <Route path="/another" component={App} />
            </div>
        </Provider>
    </Router>
, document.getElementById('app'))



