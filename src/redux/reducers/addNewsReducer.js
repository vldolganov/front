import ACTION_TYPES from '../../constants/actionTypes';

const defaultState = {
  news: {},
  error: null,
};

function addNewsReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case ACTION_TYPES.ADD_NEWS_SUCCESS:
      return {
        ...state, news: action.payload, open: false, modalType: null,
      };
    case ACTION_TYPES.ADD_NEWS_REQUESTED:
      return { ...state };
    case ACTION_TYPES.ADD_NEWS_REJECTED:
      return {
        ...state, error: action.payload,
      };
    default:
      return state;
  }
}

export default addNewsReducer;
