import { createAction } from 'redux-actions';

import ACTION_TYPE from '../../constants/actionTypes';

export const authSuccess = createAction(ACTION_TYPE.AUTH_SUCCESS);
export const authLogOut = createAction(ACTION_TYPE.AUTH_LOG_OUT);
export const authError = createAction(ACTION_TYPE.AUTH_ERROR);

export const authCheckRequest = createAction(ACTION_TYPE.AUTH_CHECK_REQUEST);
export const authSignInRequest = createAction(ACTION_TYPE.AUTH_SIGNIN_REQUEST);
export const authSignUpRequest = createAction(ACTION_TYPE.AUTH_SIGNUP_REQUEST);
