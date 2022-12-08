import { createAction } from 'redux-actions';

import ACTION_TYPE from '../../constants/actionTypes';

export const getNewsRequest = createAction(ACTION_TYPE.GET_NEWS_REQUESTED);
export const newsSuccess = createAction(ACTION_TYPE.GET_NEWS_SUCCESS);
export const getNewsError = createAction(ACTION_TYPE.GET_NEWS_REJECTED);

export const addNewsRequest = createAction(ACTION_TYPE.ADD_NEWS_REQUESTED);
