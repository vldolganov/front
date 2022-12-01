import { combineReducers } from 'redux';

import newsReducer from './newsReducer';
import authReducer from './authReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  auth: authReducer,
  modal: modalReducer,
});

export default rootReducer;
