import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Async from './middlewares/async';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, applyMiddleware(Async));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
