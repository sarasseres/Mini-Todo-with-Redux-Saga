import { initialState } from './initialState';
import * as ACTION from './action';

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
