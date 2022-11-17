import { createAction } from 'redux-actions';

import * as actionType from '../constants';

export const getNewsRequest = createAction(actionType.NEWS_REQUESTED);
export const newsGot = createAction(actionType.NEWS_GOT);
export const getNewsError = createAction(actionType.NEWS_FAILED);
