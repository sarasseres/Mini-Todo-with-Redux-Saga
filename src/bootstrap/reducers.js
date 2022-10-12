import { initialState } from './initialState';
import * as CONST from './constans';

const reducers = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case CONST.TODO_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case CONST.TODO_SUCCESS:
      return {
        ...state,
        todoData: payload,
        loading: false,
      };
    case CONST.TODO_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducers;
