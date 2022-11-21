import { NEWS_REJECTED, NEWS_SUCCESS, NEWS_REQUESTED } from '../../constants/constants';

const defaultState = {
  news: [],
  isLoading: false,
  error: '',
};

function newsReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case NEWS_REQUESTED:
      return { ...state, isLoading: true };
    case NEWS_SUCCESS:
      return {
        ...state, isLoading: false, news: action.payload,
      };
    case NEWS_REJECTED:
      return {
        ...state, isLoading: false, news: [], error: action.error,
      };
    default:
      return state;
  }
}

export default newsReducer;
