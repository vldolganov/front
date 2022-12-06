import { combineReducers } from 'redux';

import newsReducer from './newsReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  auth: authReducer,
  user: userReducer,
  modal: modalReducer,
});

export default rootReducer;
