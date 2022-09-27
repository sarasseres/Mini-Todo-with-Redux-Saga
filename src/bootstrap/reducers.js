import inisialState from './initialState';
import * as CONST from './constans';

function reducer(state = inisialState, action) {
  switch (action.type) {
    case 'SET_AUTH':
      return {
        ...state,
        access_token: action.payload.access_token,
      };
    case CONST.PUT_UPDATE_MODAL_BEGIN:
      return {
        ...state,
      };
    case CONST.PUT_UPDATE_MODAL_SUCCESS:
      return {
        ...state,
      };
    case CONST.PUT_UPDATE_MODAL_FAIL:
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default reducer;
