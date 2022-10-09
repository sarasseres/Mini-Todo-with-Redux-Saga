import { initialState } from './initialState';
import * as CONST from './constans';

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CONST.TODO_BEGIN:
      return {
        ...state,
        todoLoading: true,
      };
    case CONST.TODO_SUCCESS:
      return {
        ...state,
        todoData: payload,
        todoLoading: false,
      };
    case CONST.TODO_FAIL:
      return {
        ...state,
        error: 'message',
        todoData: false,
      };

    default:
      return state;
  }
};

export default reducer;
