import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from '../client/reducers/rootReducer.js';
import { setCurrentUser } from './actions/LoginAction';
import setAuth from './utils/setAuthorizationToken';
import App from './component/App.jsx';

const token = localStorage.getItem('jwtToken');

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

if (token) {
  store.dispatch(setCurrentUser(token));
  setAuth(token);
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')

)