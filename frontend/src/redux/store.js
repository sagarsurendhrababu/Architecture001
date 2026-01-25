import {configureStore} from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();

import rootSaga from './sagas/rootSaga.js';

import userReducer from './features/userSlice.js';

const store = configureStore({
    reducer: {
        users: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export default store;