import ACTION_TYPES from '../../constants/actionTypes';

const defaultState = {
  news: [],
  isLoading: false,
  error: '',
};

function newsReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case ACTION_TYPES.GET_NEWS_REQUESTED:
      return { ...state, isLoading: true };
    case ACTION_TYPES.GET_NEWS_SUCCESS:
      return {
        ...state, isLoading: false, news: action.payload,
      };
    case ACTION_TYPES.GET_NEWS_REJECTED:
      return {
        ...state, isLoading: false, news: [], error: action.payload,
      };
    default:
      return state;
  }
}

export default newsReducer;
