import { createAction } from 'redux-actions';

import * as actionType from '../constants';

export const getNewsRequest = createAction(actionType.NEWS_REQUESTED);
export const newsSuccess = createAction(actionType.NEWS_SUCCESS);
export const getNewsError = createAction(actionType.NEWS_REJECTED);
