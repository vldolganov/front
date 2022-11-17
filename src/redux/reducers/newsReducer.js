import { NEWS_FAILED, NEWS_GOT, NEWS_REQUESTED } from '../constants';

const defaultState = {
  news: [],
  isLoading: false,
  error: '',
};

function newsReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case NEWS_REQUESTED:
      return { ...state, isLoading: true };
    case NEWS_GOT:
      return {
        ...state, isLoading: false, news: action.payload,
      };
    case NEWS_FAILED:
      return {
        ...state, isLoading: false, news: [], error: action.error,
      };
    default:
      return state;
  }
}

export default newsReducer;
