import { put, takeLatest, call } from 'redux-saga/effects';

import getUser from '../../api/getUser';
import { userSuccess } from '../actions/user';
import ACTION_TYPES from '../../constants/actionTypes';

function* worker({ payload }) {
  try {
    const { data } = yield call(getUser, payload);
    yield put(userSuccess(data));
  } catch (err) {
    yield put(err.message);
  }
}

function* watcher() {
  yield takeLatest(ACTION_TYPES.GET_USER_REQUESTED, worker);
}

export default watcher;
