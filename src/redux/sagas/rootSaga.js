import { all } from 'redux-saga/effects';

import newsSaga from './newsSaga';
import authSaga from './authSaga';
import userSaga from './userSaga';

function* rootSaga() {
  yield all([
    newsSaga(),
    authSaga(),
    userSaga(),
  ]);
}

export default rootSaga;
