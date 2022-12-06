import ACTION_TYPES from '../../constants/actionTypes';

const defaultState = {
  open: false,
  modalType: null,
};

function authReducer(state = defaultState, action = {}) {
  switch (action.type) {
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
