// src/store/index.js

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import watchUsersSaga from '../sagas/users';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(thunk, sagaMiddleware)
);

sagaMiddleware.run(watchUsersSaga);

export default store;
