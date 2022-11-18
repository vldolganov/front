import { put, takeLatest, call } from 'redux-saga/effects';

import getNews from '../../api/getNews';
import { newsSuccess } from '../actions/news';
import { NEWS_REQUESTED } from '../constants';

function* worker() {
  try {
    const { data } = yield call(getNews);
    yield put(newsSuccess(data));
  } catch (err) {
    yield put(err.message);
  }
}

function* watcher() {
  yield takeLatest(NEWS_REQUESTED, worker);
}

export default watcher;
