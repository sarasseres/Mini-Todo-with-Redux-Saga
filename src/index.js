import React from 'react';
import Reducer from './bootstrap/reducers';
import ReactDOM from 'react-dom/client';
import App from './App';
import createSagaMiddleWare from 'redux-saga';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { bootstrapSaga } from './bootstrap/sagas';
import * as CONST from './bootstrap/constans';

const sagaMiddleware = createSagaMiddleWare();
const store = createStore(Reducer, applyMiddleware(sagaMiddleware));

const root = ReactDOM.createRoot(document.getElementById('root'));
sagaMiddleware.run(bootstrapSaga);
// store.dispatch({ type: CONST.TODO_BEGIN });
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
