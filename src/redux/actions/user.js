import { createAction } from 'redux-actions';

import ACTION_TYPE from '../../constants/actionTypes';

export const getUserRequest = createAction(ACTION_TYPE.GET_USER_REQUESTED);
export const userSuccess = createAction(ACTION_TYPE.GET_USER_SUCCESS);
export const getUserError = createAction(ACTION_TYPE.GET_USER_REJECTED);
