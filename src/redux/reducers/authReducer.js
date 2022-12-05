import ACTION_TYPES from '../../constants/actionTypes';

const defaultState = {
  user: {},
  isAuth: false,
  error: null,
  open: false,
  modalType: null,
};

function authReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case ACTION_TYPES.AUTH_SUCCESS:
      return {
        ...state, isAuth: true, user: action.payload, open: false, modalType: null,
      };
    case ACTION_TYPES.AUTH_LOG_OUT:
      localStorage.removeItem('jwt');
      return {
        ...state, isAuth: false, user: {},
      };
    case ACTION_TYPES.AUTH_ERROR:
      return {
        ...state, isAuth: false, error: action.payload,
      };
    case ACTION_TYPES.MODAL_OPEN:
      return { open: true, modalType: action.payload };
    case ACTION_TYPES.MODAL_CLOSE:
      return {
        open: false, modalType: null,
      };
    default:
      return state;
  }
}

export default authReducer;
