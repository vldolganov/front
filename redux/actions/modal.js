import { createAction } from 'redux-actions';

import ACTION_TYPE from '../../constants/actionTypes';

export const modalOpen = createAction(ACTION_TYPE.MODAL_OPEN);
export const modalClose = createAction(ACTION_TYPE.MODAL_CLOSE);
