import { put, takeLatest, call } from 'redux-saga/effects';

import getNews from '../../api/getNews';
import { newsGot } from '../actions/news';
import { NEWS_REQUESTED } from '../constants';

function* worker() {
  try {
    const newsFromDB = yield call(getNews);
    console.log(new);
    yield put(newsGot(newsFromDB));
  } catch (err) {
    yield put(err.message);
  }
}

function* watcher() {
  yield takeLatest(NEWS_REQUESTED, worker);
}

export default watcher;
