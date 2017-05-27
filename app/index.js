
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { middleware as reduxPackMiddleware } from 'redux-pack'
import App from './components/App'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import NotFound from './containers/NotFound';
import Terminal from './containers/Terminal/Terminal';
import './styles/main.scss';
import terminalReducer from './reducers/terminal'
import fileSystemReducer from './reducers/fileSystem'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

const reducers = combineReducers({
  terminal: terminalReducer,
  fileSystem: fileSystemReducer
})

export const store = createStore(reducers, applyMiddleware(thunk, reduxPackMiddleware))

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App>
        <Switch>
          <Route exact path="/"  component={Terminal} />
          <Route component={NotFound} />
        </Switch>
      </App>
    </Provider>
  </Router>
, document.getElementById('app'))



