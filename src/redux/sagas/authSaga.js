import { put, takeLatest, call } from 'redux-saga/effects';

import { AuthSignIn, AuthSignUp, AuthCheckToken } from '../../api/authApi';
import { authSuccess } from '../actions/auth';
import ACTION_TYPES from '../../constants/actionTypes';

function* signIn(action) {
  try {
    const { data } = yield call(AuthSignIn, action.payload);
    localStorage.setItem('jwt', data.token);
    yield put(authSuccess(data));
  } catch (err) {
    yield put(err.message);
  }
}

function* signUp(action) {
  try {
    const { data } = yield call(AuthSignUp, action.payload);
    localStorage.setItem('jwt', data.token);
    yield put(authSuccess(data));
  } catch (err) {
    yield put(err.message);
  }
}

function* checkToken() {
  try {
    const { data } = yield call(AuthCheckToken);
    localStorage.getItem('jwt');
    yield put(authSuccess(data));
  } catch (err) {
    yield put(err.message);
  }
}

function* AuthWatcher() {
  yield takeLatest(ACTION_TYPES.AUTH_CHECK_REQUEST, checkToken);
  yield takeLatest(ACTION_TYPES.AUTH_SIGNIN_REQUEST, signIn);
  yield takeLatest(ACTION_TYPES.AUTH_SIGNUP_REQUEST, signUp);
}

export default AuthWatcher;
