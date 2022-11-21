import { combineReducers } from 'redux';
import { memo } from 'react';

import newsReducer from './newsReducer';

const rootReducer = combineReducers({
  news: newsReducer,
});

export default memo(rootReducer);
