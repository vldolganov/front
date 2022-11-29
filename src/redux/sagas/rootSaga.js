import { all } from 'redux-saga/effects';

import newsSaga from './newsSaga';
import authSaga from './authSaga';

function* rootSaga() {
  yield all([
    newsSaga(), authSaga(),
  ]);
}

export default rootSaga;
