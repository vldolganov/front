import { put, takeLatest, call } from 'redux-saga/effects';

import getNews from '../../api/getNews';
import { newsGot } from '../actions/news';
import { NEWS_REQUESTED } from '../constants';

function* worker() {
  try {
    const { data } = yield call(getNews);
    console.log(newsFromDB);
    yield put(newsGot(data));
  } catch (err) {
    yield put(err.message);
  }
}

function* watcher() {
  yield takeLatest(NEWS_REQUESTED, worker);
}

export default watcher;
