import { put, takeLatest, call } from 'redux-saga/effects';

import getNews from '../../api/getNews';
import addNews from '../../api/addNews';

import { newsSuccess } from '../actions/news';
import ACTION_TYPES from '../../constants/actionTypes';
import { userSuccess } from '../actions/user';
import getUser from '../../api/getUser';

function* gettingNews() {
  try {
    const { data } = yield call(getNews);
    yield put(newsSuccess(data));
  } catch (err) {
    yield put(err.message);
  }
}

function* addedNews({ payload }) {
  try {
    const response = yield call(addNews, payload);
    if (response.status === 201) {
      const { data } = yield call(getUser, response.data.userId);
      yield put(userSuccess(data));
    }
  } catch (err) {
    yield put(err.message);
  }
}

function* watcher() {
  yield takeLatest(ACTION_TYPES.GET_NEWS_REQUESTED, gettingNews);
  yield takeLatest(ACTION_TYPES.ADD_NEWS_REQUESTED, addedNews);
}

export default watcher;
