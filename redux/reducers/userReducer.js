import ACTION_TYPES from '../../constants/actionTypes';

const defaultState = {
  user: {},
  isLoading: true,
  error: '',
};

function userReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case ACTION_TYPES.GET_USER_REQUESTED:
      return { ...state };
    case ACTION_TYPES.GET_USER_SUCCESS:
      return {
        ...state, isLoading: false, user: action.payload,
      };
    case ACTION_TYPES.GET_USER_REJECTED:
      return {
        ...state, isLoading: false, error: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
