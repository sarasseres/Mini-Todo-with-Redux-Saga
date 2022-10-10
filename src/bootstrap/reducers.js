import * as ACTION from './action';
import { initialState } from './initialState';

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.TODO_SUCCESS:
      return {
        ...state,
        todoData: action.todoData,
      };
    default:
      return state;
  }
};

export default reducers;
