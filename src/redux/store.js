import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/rootSaga';
import reducer from './reducers/rootReducer';

const composeEncahanters = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  reducer,
  composeEncahanters(applyMiddleware(sagaMiddleWare)),
);
sagaMiddleWare.run(rootSaga);

export default store;
