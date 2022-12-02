import { combineReducers } from 'redux';

import newsReducer from './newsReducer';
import authReducer from './authReducer';
import modalReducer from './modalReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  auth: authReducer,
  modal: modalReducer,
  user: userReducer,
});

export default rootReducer;
